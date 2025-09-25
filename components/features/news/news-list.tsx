import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Eye, ArrowRight } from "lucide-react"

const newsList = [
  {
    id: 3,
    title: "Khám sức khỏe miễn phí cho 1000 người cao tuổi",
    excerpt:
      "Chương trình khám sức khỏe định kỳ dành cho người cao tuổi tại 5 tỉnh thành, với sự tham gia của 50 bác sĩ tình nguyện.",
    image: "/elderly-health-checkup-vietnam.jpg",
    category: "Y tế",
    author: "Bác sĩ Lê Thị Hoa",
    date: "2025-01-15",
    views: 1250,
  },
  {
    id: 4,
    title: "Trồng 10,000 cây xanh tại khu vực ven đô Hà Nội",
    excerpt:
      "Dự án xanh hóa môi trường với sự tham gia của 500 tình nguyện viên, góp phần cải thiện chất lượng không khí.",
    image: "/tree-planting-hanoi-vietnam.jpg",
    category: "Môi trường",
    author: "Nguyễn Văn Nam",
    date: "2025-01-12",
    views: 980,
  },
  {
    id: 5,
    title: "Trao 200 suất học bổng cho học sinh nghèo vượt khó",
    excerpt:
      "Lễ trao học bổng 'Ước mơ xanh' năm 2025 dành cho các em học sinh có hoàn cảnh khó khăn nhưng học tập xuất sắc.",
    image: "/scholarship-ceremony-vietnam-students.jpg",
    category: "Giáo dục",
    author: "Phạm Thị Lan",
    date: "2025-01-10",
    views: 1680,
  },
  {
    id: 6,
    title: "Xây dựng nhà tình thương cho gia đình có hoàn cảnh khó khăn",
    excerpt: "Chương trình 'Mái ấm tình thương' đã hoàn thành 15 căn nhà mới tại các tỉnh miền Trung.",
    image: "/charity-house-construction-vietnam.jpg",
    category: "Xã hội",
    author: "Trần Minh Đức",
    date: "2025-01-08",
    views: 1420,
  },
  {
    id: 7,
    title: "Cứu trợ khẩn cấp cho vùng lũ lụt miền Bắc",
    excerpt: "Đoàn cứu trợ đã kịp thời hỗ trợ 500 gia đình bị ảnh hưởng bởi lũ lụt với nhu yếu phẩm và thuốc men.",
    image: "/flood-relief-vietnam-north.jpg",
    category: "Cứu trợ",
    author: "Hoàng Văn Tùng",
    date: "2025-01-05",
    views: 2100,
  },
  {
    id: 8,
    title: "Chương trình dinh dưỡng cho trẻ em vùng cao",
    excerpt: "Cung cấp sữa và thực phẩm bổ sung cho 800 trẻ em dưới 5 tuổi tại các xã vùng cao khó khăn.",
    image: "/child-nutrition-program-vietnam-mountains.jpg",
    category: "Y tế",
    author: "Đinh Thị Mai",
    date: "2025-01-03",
    views: 1350,
  },
]

const categoryColors = {
  "Giáo dục": "bg-blue-100 text-blue-800",
  "Cứu trợ": "bg-red-100 text-red-800",
  "Môi trường": "bg-green-100 text-green-800",
  "Y tế": "bg-purple-100 text-purple-800",
  "Xã hội": "bg-emerald-100 text-emerald-800",
}

export function NewsList() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tin tức mới nhất</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cập nhật thường xuyên về các hoạt động và dự án từ thiện
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative overflow-hidden">
                <img
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={categoryColors[news.category as keyof typeof categoryColors]}>
                    {news.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{news.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {news.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(news.date).toLocaleDateString("vi-VN")}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {news.views.toLocaleString()}
                  </div>
                </div>

                <Button variant="ghost" className="w-full justify-between p-0 h-auto text-blue-600 hover:text-blue-700">
                  Đọc thêm
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Xem thêm tin tức
          </Button>
        </div>
      </div>
    </section>
  )
}
