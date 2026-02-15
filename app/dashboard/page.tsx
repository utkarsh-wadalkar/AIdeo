
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
            <SignedIn>
                <div className="flex flex-col items-center gap-4">
                    <UserButton />
                    <p className="text-xl">Welcome to your dashboard!</p>
                </div>
            </SignedIn>
        </div>
    )
}
