import { DashboardStats } from "@/components/features/admin/dashboard-stats"
import { RecentDonations } from "@/components/features/admin/recent-donations"
import { ProjectsOverview } from "@/components/features/admin/projects-overview"
import { QuickActions } from "@/components/features/admin/quick-actions"
import { ActivityFeed } from "@/components/features/admin/activity-feed"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Tổng quan hoạt động từ thiện</p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RecentDonations />
          <ProjectsOverview />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}
