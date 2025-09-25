import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, Eye } from "lucide-react"

interface Props {
  projectId: string
}

const recentDonors = [
  {
    name: "Nguyễn Văn A",
    amount: 5000000,
    message: "Chúc dự án thành công, mong các em có trường học tốt!",
    time: "2 giờ trước",
    avatar: "/vietnamese-man-engineer.jpg",
  },
  {
    name: "Trần Thị B",
    amount: 2000000,
    message: "Ủng hộ các em học sinh vùng cao",
    time: "5 giờ trước",
    avatar: "/vietnamese-woman-teacher.jpg",
  },
  {
    name: "Người ẩn danh",
    amount: 1000000,
    message: "",
    time: "1 ngày trước",
    avatar: "",
  },
  {
    name: "Lê Văn C",
    amount: 3000000,
    message: "Giáo dục là tương lai của đất nước",
    time: "1 ngày trước",
    avatar: "/vietnamese-man-engineer.jpg",
  },
  {
    name: "Phạm Thị D",
    amount: 500000,
    message: "Góp một phần nhỏ cho các em",
    time: "2 ngày trước",
    avatar: "/vietnamese-woman-doctor.jpg",
  },
]

const topDonors = [
  { name: "Công ty ABC", amount: 50000000, rank: 1 },
  { name: "Nguyễn Văn X", amount: 20000000, rank: 2 },
  { name: "Trần Thị Y", amount: 15000000, rank: 3 },
]

export function ProjectDonors({ projectId }: Props) {
  return (
    <div className="space-y-6">
      {/* Donation CTA */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">Hãy cùng chúng tôi</h3>
          <p className="text-muted-foreground mb-4">Mỗi đóng góp đều có ý nghĩa</p>
          <Button className="w-full bg-gradient-to-r from-primary to-accent">Quyên góp ngay</Button>
        </CardContent>
      </Card>

      {/* Top Donors */}
      <Card>
        <CardHeader>
          <CardTitle>Nhà hảo tâm hàng đầu</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topDonors.map((donor) => (
              <div key={donor.rank} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      donor.rank === 1 ? "bg-yellow-500" : donor.rank === 2 ? "bg-gray-400" : "bg-orange-500"
                    }`}
                  >
                    {donor.rank}
                  </div>
                  <span className="font-medium text-foreground">{donor.name}</span>
                </div>
                <span className="font-semibold text-primary">{(donor.amount / 1000000).toFixed(0)}M</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Donors */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Quyên góp gần đây</CardTitle>
          <Button variant="ghost" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Xem tất cả
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDonors.map((donor, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 hover:bg-muted/30 rounded-lg transition-colors"
              >
                <Avatar className="w-10 h-10">
                  <AvatarImage src={donor.avatar || "/placeholder.svg"} alt={donor.name} />
                  <AvatarFallback>{donor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground">{donor.name}</span>
                    <span className="text-sm text-muted-foreground">{donor.time}</span>
                  </div>
                  <div className="font-semibold text-primary mb-1">{(donor.amount / 1000).toLocaleString()}K VNĐ</div>
                  {donor.message && <p className="text-sm text-muted-foreground italic">"{donor.message}"</p>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Thống kê dự án</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Lượt xem</span>
              <span className="font-medium">12,450</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Lượt chia sẻ</span>
              <span className="font-medium">856</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Cập nhật</span>
              <span className="font-medium">12 lần</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Hình ảnh</span>
              <span className="font-medium">25 ảnh</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
