import { Button } from "@/components/ui/button"
import { FileText, Download, Eye, Shield } from "lucide-react"

export function ReportsHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Báo cáo <span className="text-blue-600">Minh bạch</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            Chúng tôi cam kết minh bạch hoàn toàn về việc sử dụng các khoản quyên góp. Mọi thông tin tài chính và hoạt
            động đều được công khai rõ ràng.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-5 h-5 mr-2" />
              Tải báo cáo năm 2024
            </Button>
            <Button size="lg" variant="outline">
              <Eye className="w-5 h-5 mr-2" />
              Xem báo cáo trực tuyến
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <FileText className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Minh bạch tài chính</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Kiểm toán</div>
              <div className="text-gray-600">Độc lập hàng năm</div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <Download className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Công khai</div>
              <div className="text-gray-600">Tất cả báo cáo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
