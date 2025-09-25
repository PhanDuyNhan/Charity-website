import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Users, FolderOpen, Heart } from "lucide-react"

const stats = [
  {
    title: "Tổng quyên góp",
    value: "15.2 tỷ VNĐ",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Người quyên góp",
    value: "52,341",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Dự án đang chạy",
    value: "24",
    change: "+3",
    trend: "up",
    icon: FolderOpen,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Tình nguyện viên",
    value: "1,847",
    change: "-2.1%",
    trend: "down",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center space-x-1 text-sm">
              {stat.trend === "up" ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
              <span className="text-muted-foreground">so với tháng trước</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
