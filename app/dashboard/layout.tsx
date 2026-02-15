import { DashboardSidebar } from "@/components/DashboardSidebar"
import { DashboardHeader } from "@/components/DashboardHeader"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <SidebarInset>
                <DashboardHeader />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
