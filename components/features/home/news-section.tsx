import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const news = [
  {
    id: 1,
    title: "Hoàn thành dự án xây cầu tại Đồng Tháp",
    excerpt: "Sau 6 tháng thi công, cây cầu dân sinh tại xã Tân Hội đã chính thức được khánh thành...",
    image: "/bridge-construction-rural-vietnam.jpg",
    date: "2025-01-15",
    category: "Dự án",
  },
  {
    id: 2,
    title: "Chương trình học bổng cho trẻ em vùng cao",
    excerpt: "Trao tặng 100 suất học bổng cho các em học sinh có hoàn cảnh khó khăn tại Sapa...",
    image: "/scholarship-children-mountain-vietnam.jpg",
    date: "2025-01-12",
    category: "Giáo dục",
  },
  {
    id: 3,
    title: "Tết ấm cho người vô gia cư",
    excerpt: 'Chương trình "Tết ấm" đã mang đến những phần quà ý nghĩa cho hơn 500 người vô gia cư...',
    image: "/tet-gifts-homeless-vietnam.jpg",
    date: "2025-01-10",
    category: "Xã hội",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Tin tức mới nhất</h2>
            <p className="text-lg text-muted-foreground">Cập nhật những hoạt động từ thiện gần đây</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/news">
              Xem tất cả
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.date).toLocaleDateString("vi-VN")}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href={`/news/${article.id}`}>{article.title}</Link>
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>

                <Button asChild variant="ghost" className="p-0 h-auto font-medium text-primary">
                  <Link href={`/news/${article.id}`}>
                    Đọc thêm
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
