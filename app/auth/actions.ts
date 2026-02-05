'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
    const email = formData.get('email')
    const password = formData.get('password')

    if (typeof email !== 'string' || !email.trim()) {
        return { error: 'Email is required.' }
    }
    if (typeof password !== 'string' || !password.trim()) {
        return { error: 'Password is required.' }
    }

    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
    })

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signup(formData: FormData) {
    const email = formData.get('email')
    const password = formData.get('password')

    if (typeof email !== 'string' || !email.trim()) {
        return { error: 'Email is required.' }
    }
    if (typeof password !== 'string' || !password.trim()) {
        return { error: 'Password is required.' }
    }

    const origin = process.env.NEXT_PUBLIC_APP_URL
    if (!origin) {
        return { error: 'System configuration error: NEXT_PUBLIC_APP_URL is missing.' }
    }

    const supabase = await createClient()

    const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
        options: {
            emailRedirectTo: `${origin}/auth/callback`,
        },
    })

    if (error) {
        return { error: error.message }
    }

    return { success: true, message: 'Check your email to verify your account.' }
}

export async function signout() {
    const supabase = await createClient()
    const { error } = await supabase.auth.signOut()

    if (error) {
        // In a server action, typically we might log this or just proceed 
        // if the session is logically destroyed. But per request:
        return { error: error.message }
    }

    revalidatePath('/', 'layout')
    redirect('/login')
}
