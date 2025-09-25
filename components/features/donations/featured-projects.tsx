import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Xây trường học vùng cao Sapa",
    description: "Xây dựng trường tiểu học cho 200 em học sinh vùng cao, trang bị đầy đủ thiết bị học tập hiện đại.",
    image: "/school-construction-mountain-children.jpg",
    raised: 850000000,
    goal: 1200000000,
    donors: 1250,
    daysLeft: 15,
    location: "Sapa, Lào Cai",
    urgent: true,
  },
  {
    id: 2,
    title: "Chăm sóc người già neo đơn",
    description: "Hỗ trợ sinh hoạt phí, thuốc men và chăm sóc sức khỏe cho 100 cụ già không có người thân.",
    image: "/elderly-care-support-vietnam.jpg",
    raised: 320000000,
    goal: 500000000,
    donors: 890,
    daysLeft: 22,
    location: "TP.HCM",
    urgent: false,
  },
  {
    id: 3,
    title: "Học bổng cho trẻ em nghèo",
    description: "Trao tặng học bổng và hỗ trợ học phí cho 500 em học sinh có hoàn cảnh khó khăn.",
    image: "/scholarship-children-mountain-vietnam.jpg",
    raised: 180000000,
    goal: 300000000,
    donors: 650,
    daysLeft: 30,
    location: "Đắk Lắk",
    urgent: false,
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Dự án cần hỗ trợ gấp</h2>
          <p className="text-lg text-muted-foreground">Những dự án đang cần sự giúp đỡ khẩn cấp từ cộng đồng</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const progress = (project.raised / project.goal) * 100

            return (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.urgent && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                        Khẩn cấp
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.daysLeft} ngày
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground line-clamp-3">{project.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Đã quyên góp</span>
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
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.daysLeft} ngày</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button asChild className="flex-1">
                      <Link href={`/projects/${project.id}/donate`}>Quyên góp ngay</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/projects/${project.id}`}>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              Xem tất cả dự án
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
