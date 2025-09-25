import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Newspaper } from "lucide-react"

export function NewsHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Newspaper className="w-12 h-12 text-blue-600" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Tin tức & <span className="text-blue-600">Câu chuyện</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            Cập nhật những tin tức mới nhất về các hoạt động từ thiện và những câu chuyện cảm động từ cộng đồng
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Tìm kiếm tin tức..." className="pl-10" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Tìm kiếm</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
