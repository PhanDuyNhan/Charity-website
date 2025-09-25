import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Target, Users, Heart, Share2, Flag } from "lucide-react"
import Link from "next/link"

interface Props {
  projectId: string
}

// Mock project data
const projectData = {
  "1": {
    title: "Xây trường học vùng cao Sapa",
    description:
      "Dự án xây dựng trường tiểu học cho 200 em học sinh vùng cao tại Sapa, Lào Cai. Trường học sẽ được trang bị đầy đủ thiết bị học tập hiện đại, phòng học ấm áp và an toàn cho các em.",
    longDescription: `
      Tại vùng cao Sapa, nhiều em học sinh phải đi bộ hàng km để đến trường, đặc biệt trong mùa đông lạnh giá. 
      Trường học hiện tại đã xuống cấp nghiêm trọng, không đảm bảo an toàn cho các em.
      
      Dự án này sẽ xây dựng một ngôi trường mới với:
      - 8 phòng học rộng rãi, ấm áp
      - Thư viện với 1000 cuốn sách
      - Khu vui chơi an toàn cho trẻ em
      - Hệ thống điện và nước sạch
      - Nhà ăn và bếp ăn tập thể
      
      Chúng tôi tin rằng giáo dục là chìa khóa để thay đổi tương lai của các em nhỏ vùng cao.
    `,
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
    organizerInfo: {
      name: "Quỹ Tấm Lòng Vàng",
      description: "Tổ chức từ thiện uy tín với 10 năm kinh nghiệm",
      projectsCompleted: 156,
      totalRaised: "50 tỷ VNĐ",
    },
    status: "active",
    beneficiaries: 200,
    updates: 12,
    gallery: 25,
  },
}

export function ProjectDetail({ projectId }: Props) {
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
            className="w-full h-80 object-cover rounded-t-lg"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="secondary" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Chia sẻ
            </Button>
            <Button variant="secondary" size="sm">
              <Flag className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-3xl">{project.title}</CardTitle>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Bắt đầu: {new Date(project.startDate).toLocaleDateString("vi-VN")}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Target className="w-4 h-4" />
              <span>{project.beneficiaries} người thụ hưởng</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{project.organizer}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

          {/* Progress Section */}
          <div className="bg-muted/30 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{(project.raised / 1000000).toFixed(0)}M</div>
                <div className="text-sm text-muted-foreground">Đã quyên góp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">{(project.goal / 1000000).toFixed(0)}M</div>
                <div className="text-sm text-muted-foreground">Mục tiêu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{project.donors.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Người quyên góp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">{project.daysLeft}</div>
                <div className="text-sm text-muted-foreground">Ngày còn lại</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Tiến độ quyên góp</span>
                <span className="text-sm font-medium">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="flex-1 bg-gradient-to-r from-primary to-accent">
              <Link href={`/projects/${projectId}/donate`}>
                <Heart className="w-5 h-5 mr-2" />
                Quyên góp ngay
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="w-5 h-5 mr-2" />
              Chia sẻ dự án
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Project Description */}
      <Card>
        <CardHeader>
          <CardTitle>Mô tả chi tiết dự án</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-gray max-w-none">
            {project.longDescription.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Organizer Info */}
      <Card>
        <CardHeader>
          <CardTitle>Thông tin tổ chức</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-lg">{project.organizerInfo.name}</h3>
              <p className="text-muted-foreground mb-3">{project.organizerInfo.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium text-foreground">{project.organizerInfo.projectsCompleted}</div>
                  <div className="text-muted-foreground">Dự án hoàn thành</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">{project.organizerInfo.totalRaised}</div>
                  <div className="text-muted-foreground">Tổng quyên góp</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
