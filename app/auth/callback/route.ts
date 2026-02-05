import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    // if "next" is in param, use it as the redirect URL
    const next = searchParams.get('next') ?? '/'

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
            const isLocalEnv = process.env.NODE_ENV === 'development'

            // Validate 'next' param: Allow only relative paths starting with / and not // (to prevent protocol relative URLs)
            const safeNext = (next.startsWith('/') && !next.startsWith('//')) ? next : '/'

            if (isLocalEnv) {
                // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
                return NextResponse.redirect(`${origin}${safeNext}`)
            } else if (forwardedHost) {
                // Validate forwardedHost (simple check to ensure it doesn't contain path/scheme chars)
                // Ideally, match against an allowed list of domains in production
                const safeHost = /^[a-zA-Z0-9.-]+(:[0-9]+)?$/.test(forwardedHost) ? forwardedHost : null

                if (safeHost) {
                    return NextResponse.redirect(`https://${safeHost}${safeNext}`)
                }
            }

            // Fallback to origin if host invalid or not present
            return NextResponse.redirect(`${origin}${safeNext}`)
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
