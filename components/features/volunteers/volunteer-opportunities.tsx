import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Calendar } from "lucide-react"

const opportunities = [
  {
    id: 1,
    title: "Dạy học cho trẻ em vùng cao",
    category: "Giáo dục",
    location: "Sapa, Lào Cai",
    duration: "2 tuần",
    volunteers: "5-10 người",
    date: "15/02/2025",
    description: "Hỗ trợ giảng dạy tiếng Việt và toán học cơ bản cho trẻ em dân tộc thiểu số.",
    skills: ["Giảng dạy", "Kiên nhẫn", "Giao tiếp"],
    urgent: true,
  },
  {
    id: 2,
    title: "Chăm sóc người già",
    category: "Xã hội",
    location: "Hà Nội",
    duration: "Cuối tuần",
    volunteers: "10-15 người",
    date: "Hàng tuần",
    description: "Trò chuyện, đọc sách và hỗ trợ sinh hoạt hàng ngày cho người cao tuổi.",
    skills: ["Chăm sóc", "Lắng nghe", "Đồng cảm"],
    urgent: false,
  },
  {
    id: 3,
    title: "Phát đồ ăn từ thiện",
    category: "Cứu trợ",
    location: "TP.HCM",
    duration: "3-4 giờ",
    volunteers: "20-30 người",
    date: "Chủ nhật hàng tuần",
    description: "Chuẩn bị và phát đồ ăn miễn phí cho người vô gia cư và khó khăn.",
    skills: ["Tổ chức", "Làm việc nhóm", "Nhiệt tình"],
    urgent: false,
  },
  {
    id: 4,
    title: "Dọn dẹp môi trường",
    category: "Môi trường",
    location: "Đà Nẵng",
    duration: "1 ngày",
    volunteers: "50+ người",
    date: "28/02/2025",
    description: "Tham gia dọn dẹp bãi biển và tuyên truyền bảo vệ môi trường.",
    skills: ["Thể lực tốt", "Ý thức môi trường", "Tích cực"],
    urgent: true,
  },
]

const categoryColors = {
  "Giáo dục": "bg-blue-100 text-blue-800",
  "Xã hội": "bg-green-100 text-green-800",
  "Cứu trợ": "bg-red-100 text-red-800",
  "Môi trường": "bg-emerald-100 text-emerald-800",
}

export function VolunteerOpportunities() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cơ hội tình nguyện</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá các hoạt động tình nguyện phù hợp với sở thích và khả năng của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opportunity) => (
            <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl text-gray-900 flex-1">{opportunity.title}</CardTitle>
                  {opportunity.urgent && <Badge className="bg-red-100 text-red-800 ml-2">Cần gấp</Badge>}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className={categoryColors[opportunity.category as keyof typeof categoryColors]}>
                    {opportunity.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600">{opportunity.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {opportunity.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {opportunity.volunteers}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {opportunity.date}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Kỹ năng cần thiết:</h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Đăng ký tham gia</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Xem tất cả cơ hội
          </Button>
        </div>
      </div>
    </section>
  )
}
