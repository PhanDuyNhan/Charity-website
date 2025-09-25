"use client"

import type { ReactNode } from "react"
import { AdminSidebar } from "@/components/common/admin-sidebar"
import { AdminHeader } from "@/components/common/admin-header"

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />
      <div className="lg:pl-64">
        <AdminHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
