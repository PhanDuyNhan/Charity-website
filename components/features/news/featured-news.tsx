import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Eye } from "lucide-react"

const featuredNews = [
  {
    id: 1,
    title: "Hoàn thành xây dựng trường học tại Sapa với 1.2 tỷ đồng quyên góp",
    excerpt:
      "Sau 6 tháng thi công, ngôi trường học mới tại xã Tả Van, Sapa đã chính thức hoàn thành và đưa vào sử dụng, mang lại niềm vui cho 200 em học sinh dân tộc thiểu số.",
    image: "/school-construction-vietnam-mountains.jpg",
    category: "Giáo dục",
    author: "Nguyễn Thị Mai",
    date: "2025-01-20",
    views: 2450,
    featured: true,
  },
  {
    id: 2,
    title: "Chương trình 'Tết ấm cho người nghèo' phát 5000 phần quà",
    excerpt:
      "Với sự đóng góp của hơn 3000 nhà hảo tâm, chương trình đã mang Tết đến với các gia đình khó khăn trên toàn quốc.",
    image: "/tet-gifts-charity-vietnam.jpg",
    category: "Cứu trợ",
    author: "Trần Văn Hùng",
    date: "2025-01-18",
    views: 1890,
    featured: true,
  },
]

const categoryColors = {
  "Giáo dục": "bg-blue-100 text-blue-800",
  "Cứu trợ": "bg-red-100 text-red-800",
  "Môi trường": "bg-green-100 text-green-800",
  "Y tế": "bg-purple-100 text-purple-800",
}

export function FeaturedNews() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tin tức nổi bật</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những câu chuyện và thành tựu đáng chú ý nhất trong hoạt động từ thiện
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredNews.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className={categoryColors[news.category as keyof typeof categoryColors]}>
                    {news.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{news.title}</h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {news.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(news.date).toLocaleDateString("vi-VN")}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {news.views.toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
