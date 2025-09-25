import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, DollarSign, Eye } from "lucide-react"

const projectReports = [
  {
    id: 1,
    title: "Xây trường học vùng cao Sapa",
    location: "Sapa, Lào Cai",
    startDate: "2024-06-01",
    endDate: "2024-12-15",
    status: "completed",
    budget: 1200000000,
    spent: 1180000000,
    beneficiaries: 200,
    progress: 100,
    description: "Xây dựng trường tiểu học 12 phòng học cho trẻ em dân tộc thiểu số",
    image: "/school-project-sapa-completed.jpg",
    milestones: [
      { name: "Khởi công", date: "2024-06-01", completed: true },
      { name: "Hoàn thành móng", date: "2024-07-15", completed: true },
      { name: "Xây tường và mái", date: "2024-09-30", completed: true },
      { name: "Hoàn thiện nội thất", date: "2024-11-30", completed: true },
      { name: "Bàn giao", date: "2024-12-15", completed: true },
    ],
  },
  {
    id: 2,
    title: "Chăm sóc người già neo đơn",
    location: "Hà Nội",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "ongoing",
    budget: 500000000,
    spent: 420000000,
    beneficiaries: 150,
    progress: 84,
    description: "Chương trình chăm sóc sức khỏe và tinh thần cho người cao tuổi",
    image: "/elderly-care-program-hanoi.jpg",
    milestones: [
      { name: "Khảo sát nhu cầu", date: "2024-01-15", completed: true },
      { name: "Tuyển tình nguyện viên", date: "2024-02-01", completed: true },
      { name: "Triển khai chương trình", date: "2024-03-01", completed: true },
      { name: "Đánh giá giữa kỳ", date: "2024-06-30", completed: true },
      { name: "Tổng kết năm", date: "2024-12-31", completed: false },
    ],
  },
  {
    id: 3,
    title: "Cứu trợ thiên tai miền Trung",
    location: "Quảng Nam, Thừa Thiên Huế",
    startDate: "2024-10-01",
    endDate: "2024-11-30",
    status: "completed",
    budget: 2000000000,
    spent: 1950000000,
    beneficiaries: 5000,
    progress: 100,
    description: "Hỗ trợ khẩn cấp cho các gia đình bị ảnh hưởng bởi bão lũ",
    image: "/disaster-relief-central-vietnam.jpg",
    milestones: [
      { name: "Đánh giá thiệt hại", date: "2024-10-05", completed: true },
      { name: "Vận chuyển cứu trợ", date: "2024-10-10", completed: true },
      { name: "Phát cứu trợ đợt 1", date: "2024-10-15", completed: true },
      { name: "Phát cứu trợ đợt 2", date: "2024-11-01", completed: true },
      { name: "Báo cáo tổng kết", date: "2024-11-30", completed: true },
    ],
  },
]

const statusColors = {
  completed: "bg-green-100 text-green-800",
  ongoing: "bg-blue-100 text-blue-800",
  planning: "bg-yellow-100 text-yellow-800",
}

const statusLabels = {
  completed: "Hoàn thành",
  ongoing: "Đang thực hiện",
  planning: "Đang lên kế hoạch",
}

export function ProjectReports() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Báo cáo dự án</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Theo dõi tiến độ và kết quả của các dự án từ thiện đang thực hiện
          </p>
        </div>

        <div className="space-y-8">
          {projectReports.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 mb-2">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                            {statusLabels[project.status as keyof typeof statusLabels]}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{project.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(project.startDate).toLocaleDateString("vi-VN")}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {project.beneficiaries.toLocaleString()} người
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {(project.budget / 1000000).toFixed(0)}M VNĐ
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tiến độ thực hiện</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Ngân sách sử dụng</span>
                        <span className="font-medium">{((project.spent / project.budget) * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={(project.spent / project.budget) * 100} className="h-2" />
                      <div className="text-xs text-gray-500">
                        Đã chi: {(project.spent / 1000000).toFixed(0)}M / {(project.budget / 1000000).toFixed(0)}M VNĐ
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Các mốc quan trọng:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.milestones.map((milestone, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <div
                              className={`w-3 h-3 rounded-full ${milestone.completed ? "bg-green-500" : "bg-gray-300"}`}
                            />
                            <span className={milestone.completed ? "text-gray-900" : "text-gray-500"}>
                              {milestone.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full bg-transparent">
                      <Eye className="w-4 h-4 mr-2" />
                      Xem báo cáo chi tiết
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
