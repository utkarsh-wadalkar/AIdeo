import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Play, Upload, Calendar, Sparkles, Video } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground selection:bg-primary/30">
      {/* Navigation */}
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 md:pt-40">
          {/* Animated Mesh Gradient Background */}
          <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] opacity-50 animate-pulse dark:bg-primary/10"></div>
          <div className="absolute bottom-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-accent/20 blur-[100px] opacity-30 dark:bg-accent/10"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                <span className="animate-pulse">AI-Powered Video Creation 2.0</span>
              </div>

              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.1]">
                Create Viral Shorts <br />
                <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                  10x Faster
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
                Turn your ideas into engaging short-form videos for YouTube, Instagram, and TikTok using advanced AI. Schedule, publish, and grow on autopilot.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
                <Button asChild size="lg" className="h-14 px-8 text-base font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/40 rounded-full transition-all hover:scale-105">
                  <Link href="/dashboard">
                    Start Creating for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base rounded-full border-primary/20 hover:bg-primary/5 transition-all">
                  <Link href="#pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </div>

            {/* Video Demo Placeholder */}
            {/* Dashboard Interface Preview */}
            <div className="mt-20 relative mx-auto max-w-5xl text-left">
              <div className="relative rounded-2xl border border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl shadow-2xl overflow-hidden glass-card">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                  <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  <div className="ml-4 h-6 w-96 rounded-full bg-white/5 text-[10px] text-white/20 flex items-center px-3 font-mono">
                    aideo.app/dashboard/new
                  </div>
                </div>

                {/* UI Content */}
                <div className="flex h-[400px] md:h-[500px]">
                  {/* Sidebar */}
                  <div className="w-16 md:w-64 border-r border-white/5 bg-white/2 p-4 flex flex-col gap-4 hidden md:flex">
                    <div className="h-8 w-8 rounded-lg bg-primary/20 mb-4 animate-pulse"></div>
                    <div className="h-2 w-12 rounded-full bg-white/10"></div>
                    <div className="h-2 w-20 rounded-full bg-white/5"></div>
                    <div className="h-2 w-16 rounded-full bg-white/5"></div>
                    <div className="h-2 w-24 rounded-full bg-white/5 mt-auto"></div>
                  </div>

                  {/* Main Canvas */}
                  <div className="flex-1 p-6 md:p-10 flex flex-col items-center justify-center relative overflow-hidden bg-black/20">
                    {/* Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

                    {/* Prompt Box */}
                    <div className="w-full max-w-2xl bg-[#0F131F] border border-white/10 rounded-2xl p-2 md:p-3 shadow-2xl z-10">
                      <div className="flex flex-col gap-6 p-6">
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                          <Sparkles className="h-4 w-4" />
                          <span>AI Scripter</span>
                        </div>
                        <div className="text-2xl md:text-4xl font-medium text-white/90 leading-tight">
                          Create a 30s video about <span className="text-white/20 animate-pulse">|</span>
                        </div>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-2"></div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            <div className="h-8 w-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"></div>
                            <div className="h-8 w-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"></div>
                          </div>
                          <div className="h-10 px-6 rounded-full bg-primary text-white font-medium flex items-center shadow-lg shadow-primary/20 hover:scale-105 transition-transform cursor-pointer">
                            Generate
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Checkmarks / Trust indicators underneath */}
                    <div className="flex gap-6 mt-8 text-sm text-white/40 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <span>AI Powered</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <span>Copyright Free Music</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements (Decorations) */}
              <div className="absolute -right-8 top-24 p-4 bg-[#1A1F2C]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl transform rotate-6 hidden lg:block animate-float-delayed">
                <div className="flex gap-3 items-center">
                  <div className="h-10 w-10 rounded-md bg-gradient-to-br from-purple-500 to-pink-500"></div>
                  <div>
                    <div className="h-2 w-20 bg-white/20 rounded-full mb-1.5"></div>
                    <div className="h-2 w-12 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-8 bottom-32 p-4 bg-[#1A1F2C]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl transform -rotate-3 hidden lg:block animate-float">
                <div className="flex items-center gap-3 text-sm text-white/90">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium">Video Exported</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Bento Grid */}
        <section id="features" className="container mx-auto px-4 py-32 bg-secondary/30 dark:bg-transparent">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Built for Modern Creators</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to dominate social media algorithms.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[600px]">
            {/* Feature 1 - Large Left */}
            <div id="video-gen" className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 md:col-span-2 shadow-sm hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Video className="h-64 w-64 text-primary" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">AI Video Generation</h3>
                  <p className="text-muted-foreground max-w-md">
                    Transform simple text prompts into professionally edited videos with captions, music, and b-roll.
                  </p>
                </div>
                <div className="mt-8 rounded-xl bg-background/50 border border-primary/10 p-4 w-fit backdrop-blur-md">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    Generating Script...
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Top Right */}
            <div id="scheduler" className="group relative rounded-3xl border border-border/50 bg-card p-8 shadow-sm hover:shadow-md transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Scheduler</h3>
              <p className="text-muted-foreground text-sm">
                Auto-post at peak times for maximum engagement.
              </p>
            </div>

            {/* Feature 3 - Bottom Right */}
            <div id="multi-platform" className="group relative rounded-3xl border border-border/50 bg-card p-8 shadow-sm hover:shadow-md transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Platform</h3>
              <p className="text-muted-foreground text-sm">
                One-click distribute to Shorts, Reels, and TikTok.
              </p>
            </div>

            {/* Feature 4 - Large Bottom Middle/Left (Custom Layout Adjustment) -> Actually fits best as just 3 columns in row 2 on mobile, or span appropriately. Let's make Bento more interesting. */}
            {/* Let's stick to the 3 grid items defined above for simplicity in React code, but visually tweaked. */}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent -z-10"></div>
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start for free, upgrade when you go viral.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
              {/* Free Plan */}
              <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-sm p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold">Creator</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight">$0</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-muted-foreground font-medium">Perfect for testing the waters.</p>
                </div>
                <ul className="mb-8 space-y-4 text-sm">
                  <li className="flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>3 AI Videos per week</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>Auto-upload to Instagram</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>720p HD Exports</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full rounded-xl border-primary text-primary hover:bg-primary/5">
                  <Link href="/sign-up">
                    Get Started Free
                  </Link>
                </Button>
              </div>

              {/* Pro Plan */}
              <div className="relative rounded-3xl border border-primary/30 bg-card p-8 shadow-2xl shadow-primary/10 ring-1 ring-primary/20 transition-all hover:scale-[1.02]">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 rotate-12 rounded-xl bg-gradient-to-r from-primary to-purple-600 px-4 py-2 text-xs font-bold text-white shadow-lg">
                  POPULAR
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary">Pro</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight">$19</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-muted-foreground font-medium">For serious content creators.</p>
                </div>
                <ul className="mb-8 space-y-4 text-sm">
                  <li className="flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Unlimited Video Generation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="font-medium">All Platforms (YT, Insta, TikTok)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="font-medium">1080p (Full HD) Support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Priority 24/7 Support</span>
                  </li>
                </ul>
                <Button asChild className="w-full rounded-xl text-md py-6 font-bold shadow-lg shadow-primary/25">
                  <Link href="/sign-up?plan=pro">
                    Upgrade to Pro
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
