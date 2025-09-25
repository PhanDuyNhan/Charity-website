import { ProjectsManagement } from "@/components/features/admin/projects-management"
import { ProjectsOverview as AdminProjectsStats } from "@/components/features/admin/projects-overview"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function AdminProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quản lý dự án</h1>
          <p className="text-muted-foreground">Tạo và quản lý các dự án từ thiện</p>
        </div>
        <Button asChild>
          <Link href="/admin/projects/new">
            <Plus className="w-4 h-4 mr-2" />
            Tạo dự án mới
          </Link>
        </Button>
      </div>

      <AdminProjectsStats />
      <ProjectsManagement />
    </div>
  )
}
