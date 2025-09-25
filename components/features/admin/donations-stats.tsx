import { Card, CardContent } from "@/components/ui/card"
import { FolderOpen, Users, DollarSign, CheckCircle, Clock, AlertTriangle, TrendingUp, Calendar } from "lucide-react"

const stats = [
  {
    icon: FolderOpen,
    label: "Tổng số dự án",
    value: "180",
    change: "+12%",
    changeType: "positive" as const,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Clock,
    label: "Đang thực hiện",
    value: "24",
    change: "+3",
    changeType: "positive" as const,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    icon: CheckCircle,
    label: "Hoàn thành",
    value: "156",
    change: "+8",
    changeType: "positive" as const,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: AlertTriangle,
    label: "Cần chú ý",
    value: "3",
    change: "-2",
    changeType: "negative" as const,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: DollarSign,
    label: "Tổng ngân sách",
    value: "45.8 tỷ",
    change: "+15.2%",
    changeType: "positive" as const,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    icon: Users,
    label: "Người thụ hưởng",
    value: "12,450",
    change: "+1,230",
    changeType: "positive" as const,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: TrendingUp,
    label: "Tỷ lệ thành công",
    value: "94.2%",
    change: "+2.1%",
    changeType: "positive" as const,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    icon: Calendar,
    label: "Dự án tháng này",
    value: "8",
    change: "+3",
    changeType: "positive" as const,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
]

export function DonationsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div
                className={`text-sm font-medium ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}
              >
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
