"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export function SupportForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    priority: "",
    subject: "",
    message: "",
    attachFile: false,
    agreeTerms: false,
  })

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gửi yêu cầu hỗ trợ</h2>
            <p className="text-lg text-gray-600">
              Điền form dưới đây và chúng tôi sẽ phản hồi trong thời gian sớm nhất
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Thông tin liên hệ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Họ và tên *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Nhập email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Danh mục *</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="donation">Quyên góp</SelectItem>
                      <SelectItem value="volunteer">Tình nguyện viên</SelectItem>
                      <SelectItem value="project">Dự án</SelectItem>
                      <SelectItem value="technical">Kỹ thuật</SelectItem>
                      <SelectItem value="partnership">Hợp tác</SelectItem>
                      <SelectItem value="other">Khác</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="priority">Mức độ ưu tiên</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, priority: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn mức độ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Thấp</SelectItem>
                      <SelectItem value="medium">Trung bình</SelectItem>
                      <SelectItem value="high">Cao</SelectItem>
                      <SelectItem value="urgent">Khẩn cấp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Tiêu đề *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                  placeholder="Nhập tiêu đề ngắn gọn"
                />
              </div>

              <div>
                <Label htmlFor="message">Nội dung chi tiết *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Mô tả chi tiết vấn đề hoặc yêu cầu của bạn"
                  rows={6}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="attachFile"
                    checked={formData.attachFile}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, attachFile: checked as boolean }))}
                  />
                  <Label htmlFor="attachFile" className="text-sm">
                    Tôi muốn đính kèm file (sẽ được hướng dẫn qua email)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))}
                  />
                  <Label htmlFor="agreeTerms" className="text-sm">
                    Tôi đồng ý với{" "}
                    <a href="#" className="text-emerald-600 hover:underline">
                      chính sách bảo mật
                    </a>{" "}
                    và{" "}
                    <a href="#" className="text-emerald-600 hover:underline">
                      điều khoản sử dụng
                    </a>
                  </Label>
                </div>
              </div>

              <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg" disabled={!formData.agreeTerms}>
                Gửi yêu cầu hỗ trợ
              </Button>

              <div className="text-center text-sm text-gray-600">
                <p>Thời gian phản hồi dự kiến:</p>
                <p>• Khẩn cấp: trong 2 giờ</p>
                <p>• Cao: trong 4 giờ</p>
                <p>• Trung bình/Thấp: trong 24 giờ</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
