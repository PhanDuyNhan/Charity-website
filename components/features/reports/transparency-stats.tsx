import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, DollarSign, Users, Target } from "lucide-react"

const stats = [
  {
    title: "Tổng quyên góp 2024",
    value: "15.2 tỷ VNĐ",
    change: "+23%",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Chi phí hoạt động",
    value: "8.5%",
    change: "-2%",
    icon: TrendingUp,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Người thụ hưởng",
    value: "125,000",
    change: "+45%",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Dự án hoàn thành",
    value: "89",
    change: "+12%",
    icon: Target,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
]

const fundAllocation = [
  { category: "Dự án từ thiện", percentage: 85, amount: "12.9 tỷ", color: "bg-emerald-500" },
  { category: "Chi phí vận hành", percentage: 8.5, amount: "1.3 tỷ", color: "bg-blue-500" },
  { category: "Dự phòng khẩn cấp", percentage: 6.5, amount: "1.0 tỷ", color: "bg-amber-500" },
]

export function TransparencyStats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thống kê minh bạch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tổng quan về việc sử dụng và phân bổ các khoản quyên góp trong năm 2024
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.bgColor} p-3 rounded-full`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <span className={`text-sm font-medium ${stat.color}`}>{stat.change}</span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.title}</h3>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Fund Allocation */}
        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Phân bổ quỹ quyên góp 2024</h3>
            <div className="space-y-6">
              {fundAllocation.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{item.category}</span>
                    <div className="text-right">
                      <span className="font-bold text-gray-900">{item.percentage}%</span>
                      <span className="text-sm text-gray-600 ml-2">({item.amount})</span>
                    </div>
                  </div>
                  <Progress value={item.percentage} className="h-3" />
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Cam kết:</strong> Tối thiểu 85% các khoản quyên góp được sử dụng trực tiếp cho các dự án từ
                thiện. Chi phí vận hành được giữ ở mức thấp nhất có thể.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
