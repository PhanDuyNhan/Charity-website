import { VolunteersManagement } from "@/components/features/admin/volunteers-management"

export default function AdminVolunteersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Quản lý tình nguyện viên</h1>
        <p className="text-muted-foreground">Quản lý danh sách tình nguyện viên và phân công công việc</p>
      </div>

      <VolunteersManagement />
    </div>
  )
}
