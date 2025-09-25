import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Eye, Edit, Trash2, Play, Pause, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const projects = [
  {
    id: 1,
    title: "Xây trường học vùng cao Sapa",
    category: "Giáo dục",
    status: "active",
    raised: 850000000,
    goal: 1200000000,
    donors: 1250,
    daysLeft: 15,
    createdAt: "2025-01-01",
    views: 12450,
  },
  {
    id: 2,
    title: "Chăm sóc người già neo đơn",
    category: "Xã hội",
    status: "active",
    raised: 320000000,
    goal: 500000000,
    donors: 890,
    daysLeft: 22,
    createdAt: "2024-12-15",
    views: 8920,
  },
  {
    id: 3,
    title: "Cứu trợ thiên tai miền Trung",
    category: "Cứu trợ",
    status: "completed",
    raised: 2100000000,
    goal: 2000000000,
    donors: 3200,
    daysLeft: 0,
    createdAt: "2024-11-01",
    views: 25600,
  },
  {
    id: 4,
    title: "Học bổng cho trẻ em nghèo",
    category: "Giáo dục",
    status: "paused",
    raised: 180000000,
    goal: 300000000,
    donors: 650,
    daysLeft: 30,
    createdAt: "2024-12-01",
    views: 5430,
  },
]

const statusColors = {
  active: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  paused: "bg-yellow-100 text-yellow-800",
  draft: "bg-gray-100 text-gray-800",
}

const statusLabels = {
  active: "Đang chạy",
  completed: "Hoàn thành",
  paused: "Tạm dừng",
  draft: "Nháp",
}

export function ProjectsManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách dự án</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => {
            const progress = Math.min((project.raised / project.goal) * 100, 100)

            return (
              <div key={project.id} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                      <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                        {statusLabels[project.status as keyof typeof statusLabels]}
                      </Badge>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tạo ngày: {new Date(project.createdAt).toLocaleDateString("vi-VN")} •{" "}
                      {project.views.toLocaleString()} lượt xem
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        Xem chi tiết
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" />
                        Chỉnh sửa
                      </DropdownMenuItem>
                      {project.status === "active" ? (
                        <DropdownMenuItem>
                          <Pause className="w-4 h-4 mr-2" />
                          Tạm dừng
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem>
                          <Play className="w-4 h-4 mr-2" />
                          Kích hoạt
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Xóa
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-lg font-bold text-primary">{(project.raised / 1000000).toFixed(0)}M</div>
                    <div className="text-xs text-muted-foreground">Đã quyên góp</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{(project.goal / 1000000).toFixed(0)}M</div>
                    <div className="text-xs text-muted-foreground">Mục tiêu</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-lg font-bold text-accent">{project.donors}</div>
                    <div className="text-xs text-muted-foreground">Người quyên góp</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-lg font-bold text-secondary">
                      {project.status === "completed" ? "Hoàn thành" : `${project.daysLeft} ngày`}
                    </div>
                    <div className="text-xs text-muted-foreground">Thời gian</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tiến độ</span>
                    <span className="font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
