import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, Home, Heart } from "lucide-react"

const impacts = [
  {
    amount: "100,000 VNĐ",
    icon: GraduationCap,
    title: "Sách vở cho 1 em học sinh",
    description: "Hỗ trợ học phí và dụng cụ học tập",
  },
  {
    amount: "500,000 VNĐ",
    icon: Heart,
    title: "Bữa ăn cho 50 người",
    description: "Cung cấp bữa ăn dinh dưỡng",
  },
  {
    amount: "1,000,000 VNĐ",
    icon: Home,
    title: "Sửa chữa nhà cho 1 gia đình",
    description: "Cải thiện điều kiện sống",
  },
  {
    amount: "5,000,000 VNĐ",
    icon: Users,
    title: "Hỗ trợ 1 gia đình cả năm",
    description: "Chi phí sinh hoạt và y tế",
  },
]

export function DonationImpact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tác động của khoản quyên góp</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {impacts.map((impact, index) => (
          <div key={index} className="border-l-4 border-primary pl-4 py-2">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <impact.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-primary">{impact.amount}</div>
                <div className="font-medium text-foreground">{impact.title}</div>
                <div className="text-sm text-muted-foreground">{impact.description}</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
