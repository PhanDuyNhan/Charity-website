"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Download, TrendingUp, DollarSign, Users, FolderOpen } from "lucide-react"

const financialData = [
  { month: "Tháng 1", income: 450000000, expense: 380000000, projects: 12 },
  { month: "Tháng 2", income: 520000000, expense: 420000000, projects: 15 },
  { month: "Tháng 3", income: 480000000, expense: 390000000, projects: 13 },
  { month: "Tháng 4", income: 600000000, expense: 480000000, projects: 18 },
  { month: "Tháng 5", income: 550000000, expense: 450000000, projects: 16 },
  { month: "Tháng 6", income: 620000000, expense: 500000000, projects: 20 },
]

const projectReports = [
  {
    id: 1,
    name: "Hỗ trợ trẻ em vùng cao",
    target: 500000000,
    raised: 450000000,
    spent: 380000000,
    beneficiaries: 1200,
    status: "active",
  },
  {
    id: 2,
    name: "Xây dựng trường học",
    target: 800000000,
    raised: 800000000,
    spent: 750000000,
    beneficiaries: 500,
    status: "completed",
  },
  {
    id: 3,
    name: "Cứu trợ lũ lụt",
    target: 300000000,
    raised: 280000000,
    spent: 280000000,
    beneficiaries: 800,
    status: "completed",
  },
]

export default function AdminReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("2024")
  const [selectedQuarter, setSelectedQuarter] = useState("all")

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-blue-100 text-blue-800">Đang thực hiện</Badge>
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Hoàn thành</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Báo cáo & Thống kê</h1>
          <p className="text-muted-foreground">Báo cáo tài chính và hiệu quả hoạt động</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-primary hover:bg-primary/90">
            <Download className="w-4 h-4 mr-2" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <DollarSign className="w-4 h-4 mr-2" />
              Tổng thu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">3.22 tỷ</div>
            <p className="text-xs text-muted-foreground">+15% từ năm trước</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Tổng chi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">2.62 tỷ</div>
            <p className="text-xs text-muted-foreground">81% tổng thu</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <FolderOpen className="w-4 h-4 mr-2" />
              Dự án hoàn thành
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">94</div>
            <p className="text-xs text-muted-foreground">+8 từ tháng trước</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Người thụ hưởng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">25.4K</div>
            <p className="text-xs text-muted-foreground">+2.1K từ tháng trước</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="financial" className="space-y-6">
        <TabsList>
          <TabsTrigger value="financial">Báo cáo tài chính</TabsTrigger>
          <TabsTrigger value="projects">Báo cáo dự án</TabsTrigger>
          <TabsTrigger value="impact">Báo cáo tác động</TabsTrigger>
        </TabsList>

        <TabsContent value="financial" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Báo cáo tài chính theo tháng</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tháng</TableHead>
                    <TableHead>Thu nhập</TableHead>
                    <TableHead>Chi phí</TableHead>
                    <TableHead>Lợi nhuận</TableHead>
                    <TableHead>Số dự án</TableHead>
                    <TableHead>Hiệu quả</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {financialData.map((data, index) => {
                    const profit = data.income - data.expense
                    const efficiency = ((profit / data.income) * 100).toFixed(1)
                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{data.month}</TableCell>
                        <TableCell className="text-green-600">{formatCurrency(data.income)}</TableCell>
                        <TableCell className="text-red-600">{formatCurrency(data.expense)}</TableCell>
                        <TableCell className="text-blue-600">{formatCurrency(profit)}</TableCell>
                        <TableCell>{data.projects}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={Number.parseFloat(efficiency)} className="w-16" />
                            <span className="text-sm">{efficiency}%</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Báo cáo hiệu quả dự án</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên dự án</TableHead>
                    <TableHead>Mục tiêu</TableHead>
                    <TableHead>Đã quyên góp</TableHead>
                    <TableHead>Đã sử dụng</TableHead>
                    <TableHead>Người thụ hưởng</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Tiến độ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projectReports.map((project) => {
                    const progress = (project.raised / project.target) * 100
                    return (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>{formatCurrency(project.target)}</TableCell>
                        <TableCell className="text-green-600">{formatCurrency(project.raised)}</TableCell>
                        <TableCell className="text-blue-600">{formatCurrency(project.spent)}</TableCell>
                        <TableCell>{project.beneficiaries.toLocaleString()}</TableCell>
                        <TableCell>{getStatusBadge(project.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={progress} className="w-16" />
                            <span className="text-sm">{progress.toFixed(0)}%</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impact" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tác động xã hội</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Trẻ em được hỗ trợ giáo dục</span>
                  <span className="font-bold text-primary">12,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gia đình được hỗ trợ</span>
                  <span className="font-bold text-primary">3,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Trường học được xây dựng</span>
                  <span className="font-bold text-primary">25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Giếng nước sạch</span>
                  <span className="font-bold text-primary">180</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Phân bố theo khu vực</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Miền Bắc</span>
                    <span>35%</span>
                  </div>
                  <Progress value={35} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Miền Trung</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Miền Nam</span>
                    <span>25%</span>
                  </div>
                  <Progress value={25} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
