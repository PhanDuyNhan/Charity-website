import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, MapPin, Clock, Facebook, Zap } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Điện thoại",
    description: "Gọi trực tiếp để được hỗ trợ nhanh nhất",
    contact: "1900 1234",
    availability: "24/7",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    action: "Gọi ngay",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Gửi email chi tiết về vấn đề của bạn",
    contact: "support@charity.vn",
    availability: "Phản hồi trong 24h",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    action: "Gửi email",
  },
  {
    icon: MessageCircle,
    title: "Chat trực tuyến",
    description: "Trò chuyện trực tiếp với nhân viên hỗ trợ",
    contact: "Chat ngay",
    availability: "8:00 - 22:00",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    action: "Bắt đầu chat",
  },
  {
    icon: Facebook,
    title: "Facebook",
    description: "Liên hệ qua trang Facebook chính thức",
    contact: "fb.com/charity.vietnam",
    availability: "Phản hồi nhanh",
    color: "text-blue-700",
    bgColor: "bg-blue-100",
    action: "Nhắn tin",
  },
  {
    icon: Zap,
    title: "Zalo",
    description: "Liên hệ qua Zalo OA để được hỗ trợ",
    contact: "Zalo OA: Từ thiện Việt Nam",
    availability: "8:00 - 18:00",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    action: "Mở Zalo",
  },
  {
    icon: MapPin,
    title: "Văn phòng",
    description: "Đến trực tiếp văn phòng để được tư vấn",
    contact: "123 Đường ABC, Quận 1, TP.HCM",
    availability: "T2-T6: 8:00-17:00",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    action: "Xem bản đồ",
  },
]

export function ContactMethods() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cách thức liên hệ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Chọn phương thức liên hệ phù hợp nhất với bạn</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className={`${method.bgColor} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 ${method.color}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="font-medium text-gray-900">{method.contact}</div>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {method.availability}
                    </div>
                  </div>

                  <Button
                    className={`w-full ${method.color.replace("text-", "bg-").replace("-600", "-600")} hover:${method.color.replace("text-", "bg-").replace("-600", "-700")}`}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
