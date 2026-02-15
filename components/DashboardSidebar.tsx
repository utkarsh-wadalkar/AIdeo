"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    Video,
    PlaySquare,
    BookOpen,
    CreditCard,
    Settings,
    Sparkles,
    User,
    Plus,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function DashboardSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar>
            <SidebarHeader className="h-16 border-b border-sidebar-border/50 px-6 py-4">
                <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground">
                    <Image
                        src="/logo.png"
                        alt="AIdeo Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-lg"
                    />
                    <span>AIdeo</span>
                </Link>
            </SidebarHeader>

            <SidebarContent className="px-4 py-4">
                <div className="px-2 mb-6">
                    <Button className="w-full justify-start gap-2 h-12 text-base font-semibold shadow-md active:scale-95 transition-all" size="lg">
                        <Plus className="h-5 w-5" />
                        Create New Series
                    </Button>
                </div>

                <SidebarGroup>
                    <SidebarGroupLabel className="px-2 text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-2">
                        Menu
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-2">
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname === "/dashboard/series"}
                                    className="h-12 text-base px-4 py-3 font-medium transition-all hover:translate-x-1"
                                >
                                    <Link href="/dashboard/series">
                                        <Video className="h-5 w-5 mr-3" />
                                        <span>Series</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname === "/dashboard/videos"}
                                    className="h-12 text-base px-4 py-3 font-medium transition-all hover:translate-x-1"
                                >
                                    <Link href="/dashboard/videos">
                                        <PlaySquare className="h-5 w-5 mr-3" />
                                        <span>Videos</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname === "/dashboard/guides"}
                                    className="h-12 text-base px-4 py-3 font-medium transition-all hover:translate-x-1"
                                >
                                    <Link href="/dashboard/guides">
                                        <BookOpen className="h-5 w-5 mr-3" />
                                        <span>Guides</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname === "/dashboard/billing"}
                                    className="h-12 text-base px-4 py-3 font-medium transition-all hover:translate-x-1"
                                >
                                    <Link href="/dashboard/billing">
                                        <CreditCard className="h-5 w-5 mr-3" />
                                        <span>Billing</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname === "/dashboard/settings"}
                                    className="h-12 text-base px-4 py-3 font-medium transition-all hover:translate-x-1"
                                >
                                    <Link href="/dashboard/settings">
                                        <Settings className="h-5 w-5 mr-3" />
                                        <span>Settings</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-sidebar-border/50">
                <SidebarMenu className="gap-2">
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="h-12 text-base px-4 font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                            <Link href="/dashboard/upgrade">
                                <Sparkles className="h-5 w-5 mr-3 text-yellow-500" />
                                <span>Upgrade Plan</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="h-12 text-base px-4 font-medium transition-colors"
                        >
                            <Link href="/dashboard/profile">
                                <User className="h-5 w-5 mr-3" />
                                <span>Profile Settings</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
