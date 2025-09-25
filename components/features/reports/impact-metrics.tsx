import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, GraduationCap, Heart, Home, Stethoscope, Leaf } from "lucide-react"

const impactMetrics = [
  {
    category: "Giáo dục",
    icon: GraduationCap,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    metrics: [
      { label: "Trường học xây dựng", value: 15, target: 20, unit: "trường" },
      { label: "Học sinh thụ hưởng", value: 3200, target: 4000, unit: "em" },
      { label: "Học bổng trao tặng", value: 850, target: 1000, unit: "suất" },
    ],
  },
  {
    category: "Y tế",
    icon: Stethoscope,
    color: "text-red-600",
    bgColor: "bg-red-100",
    metrics: [
      { label: "Người được khám chữa", value: 12500, target: 15000, unit: "người" },
      { label: "Thiết bị y tế trao tặng", value: 45, target: 50, unit: "bộ" },
      { label: "Trạm y tế xây dựng", value: 8, target: 10, unit: "trạm" },
    ],
  },
  {
    category: "Xã hội",
    icon: Heart,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    metrics: [
      { label: "Người cao tuổi được chăm sóc", value: 2800, target: 3000, unit: "người" },
      { label: "Trẻ em mồ côi hỗ trợ", value: 450, target: 500, unit: "em" },
      { label: "Gia đình khó khăn hỗ trợ", value: 1200, target: 1500, unit: "hộ" },
    ],
  },
  {
    category: "Nhà ở",
    icon: Home,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    metrics: [
      { label: "Nhà tình thương xây dựng", value: 120, target: 150, unit: "căn" },
      { label: "Nhà cửa sửa chữa", value: 280, target: 300, unit: "căn" },
      { label: "Hộ gia đình có nhà mới", value: 400, target: 450, unit: "hộ" },
    ],
  },
  {
    category: "Môi trường",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-100",
    metrics: [
      { label: "Cây xanh trồng mới", value: 25000, target: 30000, unit: "cây" },
      { label: "Khu vực làm sạch", value: 180, target: 200, unit: "ha" },
      { label: "Tình nguyện viên tham gia", value: 1500, target: 2000, unit: "người" },
    ],
  },
  {
    category: "Cứu trợ",
    icon: Users,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    metrics: [
      { label: "Người được cứu trợ", value: 15000, target: 18000, unit: "người" },
      { label: "Phần quà phát tặng", value: 8500, target: 10000, unit: "phần" },
      { label: "Đợt cứu trợ khẩn cấp", value: 12, target: 15, unit: "đợt" },
    ],
  },
]

export function ImpactMetrics() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tác động xã hội</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những con số cụ thể về tác động tích cực mà chúng ta đã tạo ra trong cộng đồng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactMetrics.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`${category.bgColor} p-3 rounded-full`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{category.category}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {category.metrics.map((metric, metricIndex) => {
                    const progress = (metric.value / metric.target) * 100
                    return (
                      <div key={metricIndex} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{metric.label}</span>
                          <span className="font-medium">
                            {metric.value.toLocaleString()} / {metric.target.toLocaleString()} {metric.unit}
                          </span>
                        </div>
                        <Progress value={progress} className="h-2" />
                        <div className="text-xs text-gray-500 text-right">{Math.round(progress)}% hoàn thành</div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tổng quan tác động 2024</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">125,000+</div>
                  <div className="text-sm text-gray-600">Người thụ hưởng</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">89</div>
                  <div className="text-sm text-gray-600">Dự án hoàn thành</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">2,500+</div>
                  <div className="text-sm text-gray-600">Tình nguyện viên</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">15.2 tỷ</div>
                  <div className="text-sm text-gray-600">VNĐ quyên góp</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
