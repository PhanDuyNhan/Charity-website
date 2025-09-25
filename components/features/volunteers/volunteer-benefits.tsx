import { Card, CardContent } from "@/components/ui/card"
import { Gift, Users, BookOpen, Award, Heart, Globe } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Ý nghĩa sống",
    description: "Cảm nhận được giá trị bản thân qua việc giúp đỡ người khác",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: Users,
    title: "Kết nối cộng đồng",
    description: "Gặp gỡ những người bạn cùng chí hướng và mở rộng mạng lưới",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: BookOpen,
    title: "Học hỏi kinh nghiệm",
    description: "Phát triển kỹ năng mềm và tích lũy kinh nghiệm thực tế",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    icon: Award,
    title: "Chứng nhận tình nguyện",
    description: "Nhận chứng nhận và thư cảm ơn cho các hoạt động tham gia",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    icon: Gift,
    title: "Quà tặng đặc biệt",
    description: "Nhận quà lưu niệm và ưu đãi từ các đối tác của chúng tôi",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Globe,
    title: "Tác động tích cực",
    description: "Góp phần tạo nên những thay đổi tích cực cho xã hội",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
]

export function VolunteerBenefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lợi ích khi tham gia</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tình nguyện không chỉ giúp đỡ người khác mà còn mang lại nhiều giá trị cho chính bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className={`${benefit.bgColor} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
