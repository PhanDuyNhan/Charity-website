"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Download, Eye } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface GalleryImage {
  id: string
  url: string
  title: string
  description: string
  date: string
}

interface ProjectGalleryProps {
  projectId: string
}

export function ProjectGallery({ projectId }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Mock data - in real app, fetch based on projectId
  const images: GalleryImage[] = [
    {
      id: "1",
      url: "/construction-site-with-workers-building-houses.jpg",
      title: "Khởi công xây dựng",
      description: "Lễ khởi công dự án với sự tham gia của cộng đồng",
      date: "2023-12-01",
    },
    {
      id: "2",
      url: "/foundation-construction-progress.jpg",
      title: "Tiến độ xây dựng nền móng",
      description: "Công tác đổ beton nền móng cho 20 căn nhà đầu tiên",
      date: "2024-01-15",
    },
    {
      id: "3",
      url: "/placeholder-sefu1.png",
      title: "Bàn giao nhà cho gia đình",
      description: "Khoảnh khắc hạnh phúc khi các gia đình nhận chìa khóa ngôi nhà mới",
      date: "2024-02-20",
    },
    {
      id: "4",
      url: "/placeholder-1bfza.png",
      title: "Lễ hội cộng đồng",
      description: "Tổ chức lễ hội để kết nối cộng đồng và chia sẻ niềm vui",
      date: "2024-03-10",
    },
  ]

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const currentImage = images[currentIndex]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Thư viện ảnh</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Main Image Display */}
          <div className="relative">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={currentImage.url || "/placeholder.svg"}
                alt={currentImage.title}
                fill
                className="object-cover"
              />

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Image Info */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentImage.title}</h3>
              <p className="text-gray-600 mb-2">{currentImage.description}</p>
              <p className="text-sm text-gray-500">{new Date(currentImage.date).toLocaleDateString("vi-VN")}</p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-video rounded-md overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-emerald-500 ring-2 ring-emerald-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Image src={image.url || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Eye className="w-4 h-4" />
              Xem toàn màn hình
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              Tải xuống
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
