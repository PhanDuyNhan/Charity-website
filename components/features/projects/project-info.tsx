import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Target } from "lucide-react"

interface Props {
  projectId: string
}

// Mock project data - in real app, fetch from API
const projectData = {
  "1": {
    title: "Xây trường học vùng cao Sapa",
    description:
      "Dự án xây dựng trường tiểu học cho 200 em học sinh vùng cao tại Sapa, Lào Cai. Trường học sẽ được trang bị đầy đủ thiết bị học tập hiện đại, phòng học ấm áp và an toàn cho các em.",
    image: "/school-construction-mountain-children.jpg",
    category: "Giáo dục",
    location: "Sapa, Lào Cai",
    raised: 850000000,
    goal: 1200000000,
    donors: 1250,
    daysLeft: 15,
    startDate: "2025-01-01",
    endDate: "2025-02-15",
    organizer: "Quỹ Tấm Lòng Vàng",
    status: "active",
    details: [
      "Xây dựng 8 phòng học với diện tích 60m² mỗi phòng",
      "Trang bị bàn ghế, bảng viết cho 200 học sinh",
      "Xây dựng nhà vệ sinh và khu vui chơi",
      "Lắp đặt hệ thống điện và nước sạch",
      "Trang bị thư viện với 1000 cuốn sách",
    ],
  },
}

export function ProjectInfo({ projectId }: Props) {
  const project = projectData[projectId as keyof typeof projectData]

  if (!project) {
    return <div>Không tìm thấy dự án</div>
  }

  const progress = (project.raised / project.goal) * 100

  return (
    <div className="space-y-6">
      {/* Project Header */}
      <Card>
        <div className="relative">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary">{project.daysLeft} ngày còn lại</Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-2xl">{project.title}</CardTitle>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(project.startDate).toLocaleDateString("vi-VN")}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </CardContent>
      </Card>

      {/* Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Tiến độ quyên góp</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Đã quyên góp</span>
              <span className="text-sm font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{(project.raised / 1000000).toFixed(0)}M</div>
              <div className="text-sm text-muted-foreground">Đã quyên góp</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{(project.goal / 1000000).toFixed(0)}M</div>
              <div className="text-sm text-muted-foreground">Mục tiêu</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">{project.donors.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Người quyên góp</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Details */}
      <Card>
        <CardHeader>
          <CardTitle>Chi tiết dự án</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {project.details.map((detail, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">{detail}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Organizer Info */}
      <Card>
        <CardHeader>
          <CardTitle>Thông tin tổ chức</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-medium text-foreground">{project.organizer}</div>
              <div className="text-sm text-muted-foreground">Tổ chức từ thiện uy tín</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
