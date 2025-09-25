import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Xây trường học vùng cao",
    category: "Giáo dục",
    location: "Sapa, Lào Cai",
    raised: 850000000,
    goal: 1200000000,
    donors: 1250,
    daysLeft: 15,
    status: "active",
  },
  {
    id: 2,
    name: "Hỗ trợ người già neo đơn",
    category: "Xã hội",
    location: "TP.HCM",
    raised: 320000000,
    goal: 500000000,
    donors: 890,
    daysLeft: 22,
    status: "active",
  },
  {
    id: 3,
    name: "Cứu trợ thiên tai miền Trung",
    category: "Cứu trợ",
    location: "Quảng Nam",
    raised: 2100000000,
    goal: 2000000000,
    donors: 3200,
    daysLeft: 0,
    status: "completed",
  },
]

const statusColors = {
  active: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  paused: "bg-yellow-100 text-yellow-800",
}

const statusLabels = {
  active: "Đang chạy",
  completed: "Hoàn thành",
  paused: "Tạm dừng",
}

export function ProjectsOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tổng quan dự án</CardTitle>
        <Button variant="outline" size="sm">
          Quản lý dự án
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project) => {
            const progress = (project.raised / project.goal) * 100

            return (
              <div key={project.id} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                        {statusLabels[project.status as keyof typeof statusLabels]}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">{project.category}</span>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                      {project.status === "active" && (
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.daysLeft} ngày còn lại</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tiến độ</span>
                    <span className="font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {(project.raised / 1000000).toFixed(0)}M / {(project.goal / 1000000).toFixed(0)}M VNĐ
                    </span>
                    <span className="text-muted-foreground">{project.donors} người quyên góp</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
