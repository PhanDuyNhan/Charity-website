import { Card, CardContent } from "@/components/ui/card"
import { FolderOpen, Users, DollarSign, CheckCircle } from "lucide-react"

const stats = [
  {
    icon: FolderOpen,
    label: "Dự án đang chạy",
    value: "24",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: CheckCircle,
    label: "Dự án hoàn thành",
    value: "156",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Users,
    label: "Người thụ hưởng",
    value: "12,450",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: DollarSign,
    label: "Tổng quyên góp",
    value: "15.2 tỷ VNĐ",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function ProjectsStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 ${stat.bgColor}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
