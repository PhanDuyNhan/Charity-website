"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, User } from "lucide-react"

interface ProjectUpdate {
  id: string
  title: string
  content: string
  date: string
  author: string
  type: "progress" | "milestone" | "news"
}

interface ProjectUpdatesProps {
  projectId: string
}

export function ProjectUpdates({ projectId }: ProjectUpdatesProps) {
  // Mock data - in real app, fetch based on projectId
  const updates: ProjectUpdate[] = [
    {
      id: "1",
      title: "Hoàn thành giai đoạn 1 - Xây dựng nền móng",
      content:
        "Chúng tôi đã hoàn thành việc xây dựng nền móng cho 20 căn nhà đầu tiên. Công việc diễn ra thuận lợi nhờ sự hỗ trợ tích cực của cộng đồng địa phương.",
      date: "2024-01-15",
      author: "Nguyễn Văn An",
      type: "milestone",
    },
    {
      id: "2",
      title: "Cập nhật tiến độ tháng 12",
      content:
        "Trong tháng 12, chúng tôi đã tiếp nhận thêm 50 gia đình mới vào chương trình. Tổng số beneficiaries hiện tại là 150 gia đình.",
      date: "2024-01-01",
      author: "Trần Thị Bình",
      type: "progress",
    },
    {
      id: "3",
      title: "Lễ khởi công dự án",
      content:
        "Lễ khởi công dự án đã diễn ra thành công với sự tham gia của hơn 200 người dân địa phương và các nhà tài trợ.",
      date: "2023-12-01",
      author: "Lê Văn Cường",
      type: "news",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "milestone":
        return "bg-emerald-100 text-emerald-800"
      case "progress":
        return "bg-blue-100 text-blue-800"
      case "news":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeName = (type: string) => {
    switch (type) {
      case "milestone":
        return "Cột mốc"
      case "progress":
        return "Tiến độ"
      case "news":
        return "Tin tức"
      default:
        return "Cập nhật"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Cập nhật dự án</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {updates.map((update) => (
            <div key={update.id} className="border-l-4 border-emerald-500 pl-6 pb-6 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge className={getTypeColor(update.type)}>{getTypeName(update.type)}</Badge>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  {new Date(update.date).toLocaleDateString("vi-VN")}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{update.title}</h3>

              <p className="text-gray-600 mb-3 leading-relaxed">{update.content}</p>

              <div className="flex items-center text-sm text-gray-500">
                <User className="w-4 h-4 mr-1" />
                <span>Bởi {update.author}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
