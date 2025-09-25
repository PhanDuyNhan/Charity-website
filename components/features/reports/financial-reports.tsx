import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar, Eye } from "lucide-react"

const reports = [
  {
    id: 1,
    title: "Báo cáo tài chính năm 2024",
    type: "Báo cáo thường niên",
    period: "01/01/2024 - 31/12/2024",
    status: "Đã kiểm toán",
    size: "2.4 MB",
    downloadCount: 1250,
    publishDate: "2025-01-15",
    description: "Báo cáo tài chính chi tiết về tất cả các hoạt động quyên góp và chi tiêu trong năm 2024.",
  },
  {
    id: 2,
    title: "Báo cáo quý IV/2024",
    type: "Báo cáo quý",
    period: "01/10/2024 - 31/12/2024",
    status: "Đã phê duyệt",
    size: "1.8 MB",
    downloadCount: 890,
    publishDate: "2025-01-10",
    description: "Tổng kết hoạt động và tài chính quý cuối năm 2024.",
  },
  {
    id: 3,
    title: "Báo cáo dự án trường học Sapa",
    type: "Báo cáo dự án",
    period: "06/2024 - 12/2024",
    status: "Hoàn thành",
    size: "3.2 MB",
    downloadCount: 2100,
    publishDate: "2024-12-20",
    description: "Báo cáo chi tiết về dự án xây dựng trường học tại Sapa với tổng kinh phí 1.2 tỷ đồng.",
  },
  {
    id: 4,
    title: "Báo cáo kiểm toán độc lập 2024",
    type: "Kiểm toán",
    period: "Năm 2024",
    status: "Đã kiểm toán",
    size: "1.5 MB",
    downloadCount: 650,
    publishDate: "2025-01-20",
    description: "Báo cáo kiểm toán độc lập bởi công ty kiểm toán Ernst & Young Việt Nam.",
  },
]

const statusColors = {
  "Đã kiểm toán": "bg-green-100 text-green-800",
  "Đã phê duyệt": "bg-blue-100 text-blue-800",
  "Hoàn thành": "bg-emerald-100 text-emerald-800",
  "Đang xử lý": "bg-yellow-100 text-yellow-800",
}

export function FinancialReports() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Báo cáo tài chính</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tải xuống các báo cáo tài chính chi tiết và được kiểm toán độc lập
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reports.map((report) => (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 mb-2">{report.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">{report.type}</Badge>
                      <Badge className={statusColors[report.status as keyof typeof statusColors]}>
                        {report.status}
                      </Badge>
                    </div>
                  </div>
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{report.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {report.period}
                  </div>
                  <div className="text-gray-600">
                    Kích thước: <span className="font-medium">{report.size}</span>
                  </div>
                  <div className="text-gray-600">
                    Xuất bản:{" "}
                    <span className="font-medium">{new Date(report.publishDate).toLocaleDateString("vi-VN")}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Download className="w-4 h-4 mr-1" />
                    {report.downloadCount.toLocaleString()} lượt tải
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Download className="w-4 h-4 mr-2" />
                    Tải xuống
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Eye className="w-4 h-4 mr-2" />
                    Xem trước
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Xem tất cả báo cáo
          </Button>
        </div>
      </div>
    </section>
  )
}
