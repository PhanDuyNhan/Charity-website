"use client"

import type { ReactNode } from "react"
import { UserHeader } from "@/components/common/user-header"
import { UserFooter } from "@/components/common/user-footer"

interface UserLayoutProps {
  children: ReactNode
}

export function UserLayout({ children }: UserLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <UserHeader />
      <main className="flex-1">{children}</main>
      <UserFooter />
    </div>
  )
}
