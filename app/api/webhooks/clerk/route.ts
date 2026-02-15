import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: Request) {
    const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET

    if (!SIGNING_SECRET) {
        throw new Error('Error: Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Create new Svix instance with secret
    const wh = new Webhook(SIGNING_SECRET)

    // Get headers
    const headerPayload = await headers()
    const svix_id = headerPayload.get('svix-id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error: Missing Svix headers', {
            status: 400,
        })
    }

    // Get body
    const payload = await req.json()
    const body = JSON.stringify(payload)

    let evt: WebhookEvent

    // Verify payload with headers
    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error: Could not verify webhook:', err)
        return new Response('Error: Verification error', {
            status: 400,
        })
    }

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
    console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    // console.log('Webhook body:', body)


    if (eventType === 'user.created') {
        const { id, email_addresses, username, first_name, last_name, image_url } = evt.data

        if (!email_addresses || email_addresses.length === 0) {
            console.warn('No email addresses found for user, skipping Supabase insert.')
            return new Response('No email addresses found', { status: 200 })
        }

        const userEmail = email_addresses[0].email_address

        let userName = evt.data.username
        if (!userName) {
            const fullName = `${first_name || ''} ${last_name || ''}`.trim()
            userName = fullName || id // Fallback to ID if name is empty
        }

        const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
        const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE

        if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE) {
            throw new Error('Missing Supabase credentials')
        }

        const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        })

        const { data, error } = await supabaseAdmin
            .from('users')
            .insert([
                { userId: id, name: userName, email: userEmail },
            ])
            .select()

        if (error) {
            console.error('Error inserting user into Supabase:', error)
            return new Response('Error inserting user', { status: 500 })
        }

        console.log('User inserted into Supabase:', data)

    }

    return new Response('Webhook received', { status: 200 })
}
