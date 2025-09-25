"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface RelatedProject {
  id: string
  title: string
  description: string
  image: string
  location: string
  raised: number
  goal: number
  donors: number
  category: string
}

interface RelatedProjectsProps {
  currentProjectId: string
}

export function RelatedProjects({ currentProjectId }: RelatedProjectsProps) {
  // Mock data - in real app, fetch related projects excluding current one
  const relatedProjects: RelatedProject[] = [
    {
      id: "2",
      title: "Xây dựng trường học vùng cao",
      description: "Xây dựng trường tiểu học cho trẻ em vùng cao Sapa, tạo điều kiện học tập tốt hơn cho các em.",
      image: "/mountain-school-construction.jpg",
      location: "Sapa, Lào Cai",
      raised: 450000000,
      goal: 800000000,
      donors: 234,
      category: "Giáo dục",
    },
    {
      id: "4",
      title: "Cung cấp nước sạch cho nông thôn",
      description: "Khoan giếng và lắp đặt hệ thống lọc nước sạch cho 5 xã vùng khó khăn.",
      image: "/clean-water-well-drilling-project.jpg",
      location: "Đắk Lắk",
      raised: 320000000,
      goal: 600000000,
      donors: 189,
      category: "Môi trường",
    },
    {
      id: "5",
      title: "Hỗ trợ người già neo đơn",
      description: "Chăm sóc và hỗ trợ sinh hoạt hàng ngày cho người cao tuổi không có người thân.",
      image: "/elderly-care-support-program.jpg",
      location: "TP. Hồ Chí Minh",
      raised: 180000000,
      goal: 300000000,
      donors: 156,
      category: "Xã hội",
    },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount)
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dự án liên quan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá thêm các dự án từ thiện khác đang cần sự hỗ trợ của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project) => {
            const progressPercentage = (project.raised / project.goal) * 100

            return (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Đã quyên góp</span>
                      <span className="font-semibold text-emerald-600">{Math.round(progressPercentage)}%</span>
                    </div>

                    <Progress value={progressPercentage} className="h-2" />

                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-900">{formatCurrency(project.raised)}</span>
                      <span className="text-gray-500">/ {formatCurrency(project.goal)}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {project.donors} người ủng hộ
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link href={`/projects/${project.id}`}>Xem chi tiết</Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href={`/projects/${project.id}/donate`}>
                        <Heart className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">Xem tất cả dự án</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
