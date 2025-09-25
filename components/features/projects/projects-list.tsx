import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Heart, Eye, Share2 } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Xây trường học vùng cao Sapa",
    description: "Xây dựng trường tiểu học cho 200 em học sinh vùng cao, trang bị đầy đủ thiết bị học tập hiện đại.",
    image: "/school-construction-mountain-children.jpg",
    category: "Giáo dục",
    location: "Sapa, Lào Cai",
    raised: 850000000,
    goal: 1200000000,
    donors: 1250,
    daysLeft: 15,
    status: "active",
    urgent: true,
    organizer: "Quỹ Tấm Lòng Vàng",
    startDate: "2025-01-01",
  },
  {
    id: 2,
    title: "Chăm sóc người già neo đơn",
    description: "Hỗ trợ sinh hoạt phí, thuốc men và chăm sóc sức khỏe cho 100 cụ già không có người thân.",
    image: "/elderly-care-support-vietnam.jpg",
    category: "Xã hội",
    location: "TP.HCM",
    raised: 320000000,
    goal: 500000000,
    donors: 890,
    daysLeft: 22,
    status: "active",
    urgent: false,
    organizer: "Hội Chăm sóc Người cao tuổi",
    startDate: "2024-12-15",
  },
  {
    id: 3,
    title: "Cứu trợ thiên tai miền Trung",
    description: "Hỗ trợ khẩn cấp cho các gia đình bị ảnh hưởng bởi lũ lụt tại miền Trung.",
    image: "/flood-relief-central-vietnam.jpg",
    category: "Cứu trợ",
    location: "Quảng Nam",
    raised: 2100000000,
    goal: 2000000000,
    donors: 3200,
    daysLeft: 0,
    status: "completed",
    urgent: false,
    organizer: "Hội Chữ thập đỏ",
    startDate: "2024-11-01",
  },
  {
    id: 4,
    title: "Học bổng cho trẻ em nghèo",
    description: "Trao tặng học bổng và hỗ trợ học phí cho 500 em học sinh có hoàn cảnh khó khăn.",
    image: "/scholarship-children-mountain-vietnam.jpg",
    category: "Giáo dục",
    location: "Đắk Lắk",
    raised: 180000000,
    goal: 300000000,
    donors: 650,
    daysLeft: 30,
    status: "active",
    urgent: false,
    organizer: "Quỹ Học bổng Việt Nam",
    startDate: "2024-12-01",
  },
  {
    id: 5,
    title: "Xây cầu dân sinh",
    description: "Xây dựng cây cầu bê tông giúp người dân qua lại thuận tiện, an toàn trong mùa mưa lũ.",
    image: "/bridge-construction-rural-vietnam.jpg",
    category: "Cơ sở hạ tầng",
    location: "Đồng Tháp",
    raised: 450000000,
    goal: 800000000,
    donors: 920,
    daysLeft: 45,
    status: "active",
    urgent: false,
    organizer: "Quỹ Xây dựng Nông thôn",
    startDate: "2024-11-15",
  },
  {
    id: 6,
    title: "Phẫu thuật tim cho trẻ em",
    description: "Hỗ trợ chi phí phẫu thuật tim bẩm sinh cho các em nhỏ có hoàn cảnh khó khăn.",
    image: "/heart-surgery-children-vietnam.jpg",
    category: "Y tế",
    location: "Hà Nội",
    raised: 680000000,
    goal: 1000000000,
    donors: 1580,
    daysLeft: 20,
    status: "active",
    urgent: true,
    organizer: "Bệnh viện Tim Hà Nội",
    startDate: "2024-12-20",
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

export function ProjectsList() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const progress = Math.min((project.raised / project.goal) * 100, 100)

          return (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                  {project.urgent && <Badge className="bg-red-500 text-white animate-pulse">Khẩn cấp</Badge>}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                    {statusLabels[project.status as keyof typeof statusLabels]}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-foreground">
                    {project.status === "completed" ? "Hoàn thành" : `${project.daysLeft} ngày`}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href={`/projects/${project.id}`}>{project.title}</Link>
                </CardTitle>
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

              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">{project.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tiến độ</span>
                    <span className="font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-primary">{(project.raised / 1000000).toFixed(0)}M VNĐ</span>
                    <span className="text-muted-foreground">/ {(project.goal / 1000000).toFixed(0)}M VNĐ</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.donors} người</span>
                  </div>
                  <span className="text-xs">{project.organizer}</span>
                </div>

                <div className="flex space-x-2">
                  {project.status === "active" ? (
                    <Button asChild className="flex-1">
                      <Link href={`/projects/${project.id}/donate`}>
                        <Heart className="w-4 h-4 mr-2" />
                        Quyên góp
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="flex-1 bg-transparent">
                      <Link href={`/projects/${project.id}`}>
                        <Eye className="w-4 h-4 mr-2" />
                        Xem chi tiết
                      </Link>
                    </Button>
                  )}
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Xem thêm dự án
        </Button>
      </div>
    </div>
  )
}
