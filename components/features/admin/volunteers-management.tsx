import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Mail, Phone, MapPin, Calendar, Award, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const volunteers = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    email: "mai.nguyen@email.com",
    phone: "0901234567",
    location: "Hà Nội",
    joinDate: "2023-06-15",
    status: "active",
    interests: ["Giáo dục", "Chăm sóc trẻ em"],
    hoursContributed: 120,
    projectsJoined: 8,
    avatar: "/vietnamese-woman-volunteer.jpg",
  },
  {
    id: 2,
    name: "Trần Văn Hùng",
    email: "hung.tran@email.com",
    phone: "0912345678",
    location: "TP.HCM",
    joinDate: "2023-03-20",
    status: "active",
    interests: ["Cứu trợ", "Môi trường"],
    hoursContributed: 200,
    projectsJoined: 12,
    avatar: "/vietnamese-man-volunteer.jpg",
  },
  {
    id: 3,
    name: "Lê Thị Hoa",
    email: "hoa.le@email.com",
    phone: "0923456789",
    location: "Đà Nẵng",
    joinDate: "2023-08-10",
    status: "inactive",
    interests: ["Chăm sóc người già", "Y tế"],
    hoursContributed: 80,
    projectsJoined: 5,
    avatar: "/vietnamese-woman-caregiver.jpg",
  },
  {
    id: 4,
    name: "Phạm Minh Đức",
    email: "duc.pham@email.com",
    phone: "0934567890",
    location: "Hải Phòng",
    joinDate: "2024-01-05",
    status: "active",
    interests: ["Xây dựng", "Cộng đồng"],
    hoursContributed: 60,
    projectsJoined: 3,
    avatar: "/vietnamese-man-construction.jpg",
  },
]

const statusColors = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-gray-100 text-gray-800",
  pending: "bg-yellow-100 text-yellow-800",
}

const statusLabels = {
  active: "Hoạt động",
  inactive: "Không hoạt động",
  pending: "Chờ duyệt",
}

export function VolunteersManagement() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tổng tình nguyện viên</p>
                <p className="text-2xl font-bold text-foreground">2,547</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">+12% so với tháng trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Đang hoạt động</p>
                <p className="text-2xl font-bold text-green-600">1,892</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">74% tổng số</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Giờ đóng góp</p>
                <p className="text-2xl font-bold text-amber-600">45,230</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Tháng này</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Chờ duyệt</p>
                <p className="text-2xl font-bold text-orange-600">156</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Cần xử lý</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách tình nguyện viên</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Tìm kiếm theo tên, email..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="active">Hoạt động</SelectItem>
                <SelectItem value="inactive">Không hoạt động</SelectItem>
                <SelectItem value="pending">Chờ duyệt</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Lĩnh vực" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="education">Giáo dục</SelectItem>
                <SelectItem value="healthcare">Y tế</SelectItem>
                <SelectItem value="environment">Môi trường</SelectItem>
                <SelectItem value="relief">Cứu trợ</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Lọc
            </Button>
          </div>

          {/* Volunteers List */}
          <div className="space-y-4">
            {volunteers.map((volunteer) => (
              <div key={volunteer.id} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={volunteer.avatar || "/placeholder.svg"} alt={volunteer.name} />
                      <AvatarFallback>
                        {volunteer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{volunteer.name}</h3>
                        <Badge className={statusColors[volunteer.status as keyof typeof statusColors]}>
                          {statusLabels[volunteer.status as keyof typeof statusLabels]}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {volunteer.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          {volunteer.phone}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {volunteer.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          Tham gia: {new Date(volunteer.joinDate).toLocaleDateString("vi-VN")}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {volunteer.interests.map((interest, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center p-2 bg-muted/30 rounded">
                          <div className="font-bold text-primary">{volunteer.hoursContributed}h</div>
                          <div className="text-xs text-muted-foreground">Giờ đóng góp</div>
                        </div>
                        <div className="text-center p-2 bg-muted/30 rounded">
                          <div className="font-bold text-accent">{volunteer.projectsJoined}</div>
                          <div className="text-xs text-muted-foreground">Dự án tham gia</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                      <DropdownMenuItem>Gửi email</DropdownMenuItem>
                      <DropdownMenuItem>Phân công dự án</DropdownMenuItem>
                      <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                      {volunteer.status === "pending" && (
                        <DropdownMenuItem className="text-green-600">Duyệt tham gia</DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-red-600">Vô hiệu hóa</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
