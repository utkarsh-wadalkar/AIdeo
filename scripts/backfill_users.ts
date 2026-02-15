
import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
import path from 'node:path';

// 1. Manually read .env file since external packages like dotenv might not be available
function loadEnv() {
    try {
        const envPath = path.resolve(process.cwd(), '.env');
        console.log('Loading .env from:', envPath);
        if (!fs.existsSync(envPath)) {
            console.error('.env file not found');
            return {};
        }
        const envContent = fs.readFileSync(envPath, 'utf8');
        const env: Record<string, string> = {};

        // Handle both CRLF and LF
        const lines = envContent.replace(/\r/g, '').split('\n');

        lines.forEach((line, index) => {
            const trimmedLine = line.trim();
            if (!trimmedLine || trimmedLine.startsWith('#')) return;

            const match = trimmedLine.match(/^([^=]+)=(.*)$/);
            if (match) {
                const key = match[1].trim();
                let value = match[2].trim();
                // Remove quotes if present
                if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                env[key] = value;
                // console.log(`Loaded key: ${key}`); // Debug log (commented out for security, but useful if needed)
            } else {
                console.warn(`Line ${index + 1} did not match expected format: ${trimmedLine}`);
            }
        });

        console.log('Loaded keys:', Object.keys(env));
        return env;
    } catch (error) {
        console.error('Error loading .env file:', error);
        return {};
    }
}

const env = loadEnv();

const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = env.SUPABASE_SERVICE_ROLE;
const CLERK_SECRET_KEY = env.CLERK_SECRET_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE || !CLERK_SECRET_KEY) {
    console.error('Missing required environment variables:');
    if (!SUPABASE_URL) console.error('- NEXT_PUBLIC_SUPABASE_URL');
    if (!SUPABASE_SERVICE_ROLE) console.error('- SUPABASE_SERVICE_ROLE');
    if (!CLERK_SECRET_KEY) console.error('- CLERK_SECRET_KEY');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

async function fetchAllClerkUsers() {
    let users: any[] = [];
    let offset = 0;
    const limit = 100;

    console.log('Fetching users from Clerk...');

    while (true) {
        try {
            const response = await fetch(`https://api.clerk.com/v1/users?limit=${limit}&offset=${offset}`, {
                headers: {
                    Authorization: `Bearer ${CLERK_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                console.error(`Failed to fetch users: ${response.status} ${response.statusText}`);
                const errorText = await response.text();
                console.error(errorText);
                break;
            }

            const data = await response.json();
            if (!Array.isArray(data) || data.length === 0) {
                break;
            }

            users = users.concat(data);
            console.log(`Fetched ${data.length} users (Total: ${users.length})`);

            if (data.length < limit) {
                break;
            }
            offset += limit;
        } catch (error) {
            console.error('Error fetching from Clerk:', error);
            break;
        }
    }

    return users;
}

async function backfillUsers() {
    const clerkUsers = await fetchAllClerkUsers();
    console.log(`Found ${clerkUsers.length} users in Clerk.`);

    for (const user of clerkUsers) {
        const primaryEmailId = user.primary_email_address_id;
        const primaryEmailObj = user.email_addresses.find((email: any) => email.id === primaryEmailId);
        const email = primaryEmailObj ? primaryEmailObj.email_address : user.email_addresses[0]?.email_address;

        let name = user.username;
        if (!name && (user.first_name || user.last_name)) {
            name = `${user.first_name || ''} ${user.last_name || ''}`.trim();
        }
        if (!name) {
            name = email?.split('@')[0] || 'Unknown';
        }

        const userData = {
            userId: user.id,
            email: email,
            name: name,
            created_at: new Date(user.created_at).toISOString(),
            // tokens: 60, // Default is already 60 in DB schema
        };

        console.log(`Processing user: ${email} (${user.id})`);

        const { error } = await supabase
            .from('users')
            .upsert(userData, { onConflict: 'userId' });

        if (error) {
            console.error(`Error backfilling user ${user.id}:`, error);
        } else {
            console.log(`Successfully backfilled user ${user.id}`);
        }
    }

    console.log('Backfill complete.');
}

backfillUsers().catch(console.error);
