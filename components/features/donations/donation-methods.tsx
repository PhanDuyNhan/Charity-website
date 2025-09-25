import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, Award, CreditCard } from "lucide-react"

const methods = [
  {
    icon: CreditCard,
    title: "VNPay",
    description: "Thẻ ATM, Visa, MasterCard",
    features: ["Bảo mật cao", "Xử lý nhanh"],
  },
  {
    icon: CreditCard,
    title: "MoMo",
    description: "Ví điện tử MoMo",
    features: ["Tiện lợi", "Không phí"],
  },
  {
    icon: CreditCard,
    title: "Chuyển khoản",
    description: "Ngân hàng trực tiếp",
    features: ["Truyền thống", "Đáng tin cậy"],
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Bảo mật tuyệt đối",
    description: "Mã hóa SSL 256-bit",
  },
  {
    icon: Clock,
    title: "Xử lý tức thì",
    description: "Giao dịch trong 30 giây",
  },
  {
    icon: Award,
    title: "Minh bạch 100%",
    description: "Báo cáo chi tiết",
  },
]

export function DonationMethods() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Phương thức thanh toán</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {methods.map((method, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
              <method.icon className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="font-medium text-foreground">{method.title}</div>
                <div className="text-sm text-muted-foreground">{method.description}</div>
                <div className="flex space-x-2 mt-1">
                  {method.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cam kết của chúng tôi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <benefit.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">{benefit.title}</div>
                <div className="text-sm text-muted-foreground">{benefit.description}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
