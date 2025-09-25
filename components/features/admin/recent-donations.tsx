import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"

const recentDonations = [
  {
    id: "DN001",
    donor: "Nguyễn Văn A",
    amount: 5000000,
    project: "Xây trường học vùng cao",
    status: "completed",
    date: "2025-01-15",
    method: "VNPay",
  },
  {
    id: "DN002",
    donor: "Trần Thị B",
    amount: 2000000,
    project: "Hỗ trợ người già",
    status: "completed",
    date: "2025-01-15",
    method: "MoMo",
  },
  {
    id: "DN003",
    donor: "Lê Văn C",
    amount: 1000000,
    project: "Cứu trợ thiên tai",
    status: "pending",
    date: "2025-01-14",
    method: "Banking",
  },
  {
    id: "DN004",
    donor: "Phạm Thị D",
    amount: 3000000,
    project: "Xây trường học vùng cao",
    status: "completed",
    date: "2025-01-14",
    method: "VNPay",
  },
  {
    id: "DN005",
    donor: "Hoàng Văn E",
    amount: 500000,
    project: "Hỗ trợ người già",
    status: "failed",
    date: "2025-01-13",
    method: "MoMo",
  },
]

const statusColors = {
  completed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  failed: "bg-red-100 text-red-800",
}

const statusLabels = {
  completed: "Thành công",
  pending: "Đang xử lý",
  failed: "Thất bại",
}

export function RecentDonations() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Quyên góp gần đây</CardTitle>
        <Button variant="outline" size="sm">
          Xem tất cả
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentDonations.map((donation) => (
            <div
              key={donation.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-medium text-foreground">{donation.donor}</span>
                  <Badge className={statusColors[donation.status as keyof typeof statusColors]}>
                    {statusLabels[donation.status as keyof typeof statusLabels]}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {donation.project} • {donation.method} • {new Date(donation.date).toLocaleDateString("vi-VN")}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="font-semibold text-primary">{(donation.amount / 1000000).toFixed(1)}M VNĐ</div>
                  <div className="text-xs text-muted-foreground">{donation.id}</div>
                </div>
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
