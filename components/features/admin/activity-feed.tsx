import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, UserPlus, FileText, AlertCircle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "donation",
    title: "Quyên góp mới",
    description: "Nguyễn Văn A quyên góp 5M VNĐ",
    time: "5 phút trước",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: 2,
    type: "volunteer",
    title: "Tình nguyện viên mới",
    description: "Trần Thị B đăng ký tham gia",
    time: "15 phút trước",
    icon: UserPlus,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    type: "report",
    title: "Báo cáo dự án",
    description: "Cập nhật tiến độ xây trường học",
    time: "1 giờ trước",
    icon: FileText,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    id: 4,
    type: "alert",
    title: "Cảnh báo",
    description: "Dự án sắp hết hạn quyên góp",
    time: "2 giờ trước",
    icon: AlertCircle,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    id: 5,
    type: "donation",
    title: "Quyên góp mới",
    description: "Lê Văn C quyên góp 2M VNĐ",
    time: "3 giờ trước",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
]

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hoạt động gần đây</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${activity.bgColor} flex-shrink-0`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">{activity.title}</p>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
