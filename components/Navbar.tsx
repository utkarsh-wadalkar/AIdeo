"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Play } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { ModeToggle } from "@/components/ModeToggle"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "AI Video Generator",
        href: "#video-gen",
        description: "Turn text into professional videos in minutes with AI avatars and voiceovers.",
    },
    {
        title: "Auto Subtitles",
        href: "#subtitles",
        description: "Automatically add accurate subtitles to your videos in over 100 languages.",
    },
    {
        title: "Video Editor",
        href: "#editor",
        description: "Cut, crop, and edit your videos directly in the browser. No software needed.",
    },
    {
        title: "Screen Recorder",
        href: "#recorder",
        description: "Record your screen and webcam to share your message instantly.",
    },
]

export function Navbar() {
    return (
        <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
            <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-background/50 px-6 py-3 shadow-2xl shadow-black/5 backdrop-blur-xl transition-all hover:bg-background/80 hover:shadow-black/10 dark:border-white/5 dark:bg-[#0B0F19]/50">

                {/* Logo */}
                <Link href="/" className="mr-6 flex items-center gap-2 font-bold text-xl tracking-tight text-foreground">
                    <Image
                        src="/logo.png"
                        alt="AIdeo Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-lg"
                    />
                    <span className="hidden sm:inline-block">AIdeo</span>
                </Link>

                {/* Navigation Menu */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5">Product</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <Play className="h-6 w-6 text-white" />
                                                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                        AIdeo Pro
                                                    </div>
                                                    <p className="text-sm leading-tight text-white/90">
                                                        The all-in-one AI video creation platform for social media growth.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/docs" title="Introduction">
                                            Getting started with AIdeo.
                                        </ListItem>
                                        <ListItem href="/docs/installation" title="Installation">
                                            How to install dependencies and structure your app.
                                        </ListItem>
                                        <ListItem href="/docs/primitives/typography" title="Typography">
                                            Styles for headings, paragraphs, lists...
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5">Use Cases</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="#pricing" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/5 focus:bg-white/5")}>
                                        Pricing
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3">
                    <ModeToggle />

                    <SignedOut>
                        <div className="hidden sm:block">
                            <SignInButton mode="modal">
                                <Button variant="ghost" className="rounded-full text-foreground/80 hover:bg-white/5 hover:text-foreground">
                                    Login
                                </Button>
                            </SignInButton>
                        </div>

                        <SignUpButton mode="modal">
                            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold px-6 shadow-none">
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
