import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, Phone, Mail } from "lucide-react"

export function SupportHero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-100 p-4 rounded-full">
              <MessageCircle className="w-12 h-12 text-emerald-600" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Trung tâm <span className="text-emerald-600">Hỗ trợ</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn. Tìm câu trả lời nhanh chóng hoặc liên hệ trực tiếp với đội ngũ hỗ trợ
            của chúng tôi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Tìm kiếm câu hỏi..." className="pl-10" />
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Tìm kiếm</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-lg font-bold text-gray-900">Hotline 24/7</div>
              <div className="text-gray-600">1900 1234</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-lg font-bold text-gray-900">Email hỗ trợ</div>
              <div className="text-gray-600">support@charity.vn</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-lg font-bold text-gray-900">Chat trực tuyến</div>
              <div className="text-gray-600">Phản hồi ngay</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
