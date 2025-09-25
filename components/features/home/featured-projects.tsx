import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Xây dựng trường học vùng cao",
    description: "Hỗ trợ xây dựng trường học cho trẻ em vùng cao Sapa, mang giáo dục đến với các em nhỏ.",
    image: "/school-construction-mountain-children.jpg",
    raised: 850000000,
    goal: 1200000000,
    donors: 1250,
    daysLeft: 15,
    location: "Sapa, Lào Cai",
    category: "Giáo dục",
  },
  {
    id: 2,
    title: "Hỗ trợ người già neo đơn",
    description: "Chương trình chăm sóc và hỗ trợ sinh hoạt phí cho người cao tuổi không có người thân.",
    image: "/elderly-care-support-vietnam.jpg",
    raised: 320000000,
    goal: 500000000,
    donors: 890,
    daysLeft: 22,
    location: "TP.HCM",
    category: "Xã hội",
  },
  {
    id: 3,
    title: "Cứu trợ thiên tai miền Trung",
    description: "Hỗ trợ khẩn cấp cho các gia đình bị ảnh hưởng bởi lũ lụt tại miền Trung.",
    image: "/flood-relief-central-vietnam.jpg",
    raised: 2100000000,
    goal: 2000000000,
    donors: 3200,
    daysLeft: 0,
    location: "Quảng Nam",
    category: "Cứu trợ",
    completed: true,
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Dự án nổi bật</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những dự án từ thiện đang cần sự hỗ trợ của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const progress = (project.raised / project.goal) * 100

            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  {project.completed && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Hoàn thành
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Tiến độ</span>
                        <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>

                    <div className="flex justify-between text-sm">
                      <div>
                        <div className="font-semibold text-primary">{(project.raised / 1000000).toFixed(0)}M VNĐ</div>
                        <div className="text-muted-foreground">đã quyên góp</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-foreground">{(project.goal / 1000000).toFixed(0)}M VNĐ</div>
                        <div className="text-muted-foreground">mục tiêu</div>
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
                      {!project.completed && (
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.daysLeft} ngày</span>
                        </div>
                      )}
                    </div>

                    <Button asChild className="w-full">
                      <Link href={`/projects/${project.id}`}>
                        {project.completed ? "Xem chi tiết" : "Quyên góp ngay"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">Xem tất cả dự án</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
