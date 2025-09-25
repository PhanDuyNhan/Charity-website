import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download, Filter } from "lucide-react"

const donations = [
  {
    id: "DN001",
    donor: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    amount: 5000000,
    project: "Xây trường học vùng cao",
    status: "completed",
    date: "2025-01-15 14:30",
    method: "VNPay",
    transactionId: "VNP123456789",
  },
  {
    id: "DN002",
    donor: "Trần Thị B",
    email: "tranthib@email.com",
    amount: 2000000,
    project: "Hỗ trợ người già",
    status: "completed",
    date: "2025-01-15 10:15",
    method: "MoMo",
    transactionId: "MM987654321",
  },
  {
    id: "DN003",
    donor: "Lê Văn C",
    email: "levanc@email.com",
    amount: 1000000,
    project: "Cứu trợ thiên tai",
    status: "pending",
    date: "2025-01-14 16:45",
    method: "Banking",
    transactionId: "BK456789123",
  },
  {
    id: "DN004",
    donor: "Phạm Thị D",
    email: "phamthid@email.com",
    amount: 3000000,
    project: "Xây trường học vùng cao",
    status: "completed",
    date: "2025-01-14 09:20",
    method: "VNPay",
    transactionId: "VNP789123456",
  },
  {
    id: "DN005",
    donor: "Hoàng Văn E",
    email: "hoangvane@email.com",
    amount: 500000,
    project: "Hỗ trợ người già",
    status: "failed",
    date: "2025-01-13 11:30",
    method: "MoMo",
    transactionId: "MM123789456",
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

export function DonationsTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Danh sách quyên góp</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Lọc
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Xuất Excel
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Mã GD</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Người quyên góp</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Số tiền</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Dự án</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Trạng thái</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Thời gian</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Phương thức</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation.id} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-foreground">{donation.id}</div>
                    <div className="text-xs text-muted-foreground">{donation.transactionId}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-foreground">{donation.donor}</div>
                    <div className="text-sm text-muted-foreground">{donation.email}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-primary">{(donation.amount / 1000000).toFixed(1)}M VNĐ</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-foreground">{donation.project}</div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge className={statusColors[donation.status as keyof typeof statusColors]}>
                      {statusLabels[donation.status as keyof typeof statusLabels]}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-muted-foreground">{donation.date}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-foreground">{donation.method}</div>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
