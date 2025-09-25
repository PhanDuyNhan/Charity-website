import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, FileText, Users, Newspaper } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Tạo dự án mới",
    description: "Thêm dự án từ thiện mới",
    icon: Plus,
    href: "/admin/projects/new",
    color: "bg-primary text-primary-foreground",
  },
  {
    title: "Xuất báo cáo",
    description: "Tạo báo cáo tài chính",
    icon: FileText,
    href: "/admin/reports",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    title: "Quản lý tình nguyện viên",
    description: "Xem danh sách tình nguyện viên",
    icon: Users,
    href: "/admin/volunteers",
    color: "bg-accent text-accent-foreground",
  },
  {
    title: "Đăng tin tức",
    description: "Thêm bài viết mới",
    icon: Newspaper,
    href: "/admin/news/new",
    color: "bg-muted text-muted-foreground",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Thao tác nhanh</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              asChild
              variant="outline"
              className="w-full justify-start h-auto p-4 hover:bg-muted/50 bg-transparent"
            >
              <Link href={action.href}>
                <div className={`p-2 rounded-lg mr-3 ${action.color}`}>
                  <action.icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
