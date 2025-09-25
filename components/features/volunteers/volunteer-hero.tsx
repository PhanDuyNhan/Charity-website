import { Button } from "@/components/ui/button"
import { Heart, Users, Clock, Award } from "lucide-react"

export function VolunteerHero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-100 p-4 rounded-full">
              <Heart className="w-12 h-12 text-emerald-600" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Trở thành <span className="text-emerald-600">Tình nguyện viên</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            Hãy cùng chúng tôi tạo nên những thay đổi tích cực trong cộng đồng. Mỗi giờ bạn dành ra đều có ý nghĩa to
            lớn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Đăng ký ngay
            </Button>
            <Button size="lg" variant="outline">
              Tìm hiểu thêm
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">2,500+</div>
              <div className="text-gray-600">Tình nguyện viên</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">50,000+</div>
              <div className="text-gray-600">Giờ tình nguyện</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600">Dự án hoàn thành</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
