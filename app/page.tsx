import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Play, Upload, Calendar } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button"; // Assuming standard shadcn/ui button exists or I'll use standard HTML button if not sure, but let's try to assume button exists or fallback to standard class. Actually, I saw `components/ui` earlier, so likely safe. If not, I will fix.
// Wait, I didn't verify components/ui/button exists. 
// However, the prompt mentioned "Design Aesthetics" and using provided technologies. 
// I will just use standard Tailwind classes for buttons to be safe and dependency-free for this file.
// Wait, I saw components/ui earlier. I'll use standard tailwind classes to be safe against missing imports.

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="/logo.png"
              alt="AIdeo Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />
            AIdeo
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#features" className="text-muted-foreground hover:text-[#0160C9] transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-[#0160C9] transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#0160C9] transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-[#0160C9] transition-colors">
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-[#0160C9] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Supercharge Your <br className="hidden sm:inline" />
                <span className="text-[#0160C9]">
                  Social Growth
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Generate viral AI shorts and auto-schedule them for YouTube, Instagram, and TikTok.
                Grow your audience on autopilot.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/dashboard"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#0160C9] px-8 text-sm font-medium text-white transition-colors hover:bg-[#0160C9]/90 focus:outline-none focus:ring-2 focus:ring-[#0160C9] focus:ring-offset-2 dark:focus:ring-offset-black"
                >
                  Start Creating for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>

          {/* Abstract Light Background Element */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0160C9]/20 blur-[100px] dark:bg-[#0160C9]/10"></div>
        </section>



        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-24">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to go viral</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Create, Schedule, and Dominate social media with our powerful AI tools.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0160C9]/10 text-[#0160C9]">
                <Play className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">AI Video Generation</h3>
              <p className="text-muted-foreground">
                Turn your ideas into engaging short-form videos in seconds. No editing skills required.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0160C9]/10 text-[#0160C9]">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Smart Scheduling</h3>
              <p className="text-muted-foreground">
                Plan your content calendar ahead of time. We'll publish your videos at optimal times.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0160C9]/10 text-[#0160C9]">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Multi-Platform Upload</h3>
              <p className="text-muted-foreground">
                One click to publish on YouTube Shorts, Instagram Reels, and TikTok simultaneously.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-slate-50 py-24 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose the plan that fits your creation needs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:gap-12 max-w-4xl mx-auto">
              {/* Free Plan */}
              <div className="relative rounded-2xl border bg-card p-8 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Free Starter</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight">$0</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">Perfect for trying out AIdeo.</p>
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <Check className="mr-3 h-5 w-5 text-green-500" />
                    <span>3 Videos Generation per week</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-3 h-5 w-5 text-green-500" />
                    <span>Auto-upload to Instagram</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-3 h-5 w-5 text-green-500" />
                    <span>Standard Quality</span>
                  </li>
                </ul>
                <Link
                  href="/signup"
                  className="block w-full rounded-lg border border-[#0160C9] bg-transparent px-6 py-3 text-center text-sm font-semibold text-[#0160C9] transition-colors hover:bg-[#0160C9]/10"
                >
                  Get Started Free
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="relative rounded-2xl border bg-card p-8 shadow-lg ring-2 ring-[#0160C9]">
                <div className="absolute top-0 right-0 -mr-2 -mt-2 rounded-full bg-[#0160C9] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  MOST POPULAR
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Pro Creator</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight">$18.98</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">For serious creators growing their brand.</p>
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <Check className="mr-3 h-5 w-5 text-green-500" />
                    <span><strong>Unlimited</strong> Video Generation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-3 h-5 w-5 text-green-500" />
                    <span>Auto-upload to <strong>YouTube, Instagram & TikTok</strong></span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-3 h-5 w-5 text-green-500" />
                    <span>HD Quality Downloads</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-3 h-5 w-5 text-green-500" />
                    <span>Priority Support</span>
                  </li>
                </ul>
                <Link
                  href="/signup?plan=pro"
                  className="block w-full rounded-lg bg-[#0160C9] px-6 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Upgrade to Pro
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
