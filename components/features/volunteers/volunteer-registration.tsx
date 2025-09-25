"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export function VolunteerRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    occupation: "",
    experience: "",
    interests: [] as string[],
    availability: "",
    motivation: "",
    agreeTerms: false,
  })

  const interests = [
    "Giáo dục",
    "Chăm sóc sức khỏe",
    "Môi trường",
    "Cứu trợ thiên tai",
    "Chăm sóc người già",
    "Hỗ trợ trẻ em",
    "Phát triển cộng đồng",
    "Tổ chức sự kiện",
  ]

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, interest],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((i) => i !== interest),
      }))
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Đăng ký tình nguyện viên</h2>
            <p className="text-lg text-gray-600">
              Hãy để lại thông tin để chúng tôi kết nối bạn với các hoạt động phù hợp
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Thông tin cá nhân</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Họ và tên *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Số điện thoại *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div>
                  <Label htmlFor="age">Độ tuổi</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, age: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn độ tuổi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-25">18-25 tuổi</SelectItem>
                      <SelectItem value="26-35">26-35 tuổi</SelectItem>
                      <SelectItem value="36-45">36-45 tuổi</SelectItem>
                      <SelectItem value="46-55">46-55 tuổi</SelectItem>
                      <SelectItem value="55+">Trên 55 tuổi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="occupation">Nghề nghiệp</Label>
                <Input
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => setFormData((prev) => ({ ...prev, occupation: e.target.value }))}
                  placeholder="Nhập nghề nghiệp hiện tại"
                />
              </div>

              <div>
                <Label>Lĩnh vực quan tâm *</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <Label htmlFor={interest} className="text-sm">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="availability">Thời gian có thể tham gia</Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, availability: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn thời gian" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekends">Cuối tuần</SelectItem>
                    <SelectItem value="evenings">Buổi tối</SelectItem>
                    <SelectItem value="flexible">Linh hoạt</SelectItem>
                    <SelectItem value="holidays">Ngày lễ</SelectItem>
                    <SelectItem value="fulltime">Toàn thời gian</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience">Kinh nghiệm tình nguyện (nếu có)</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                  placeholder="Mô tả kinh nghiệm tình nguyện của bạn"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="motivation">Động lực tham gia *</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => setFormData((prev) => ({ ...prev, motivation: e.target.value }))}
                  placeholder="Chia sẻ lý do bạn muốn trở thành tình nguyện viên"
                  rows={4}
                />
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
                    điều khoản và điều kiện
                  </a>{" "}
                  của tổ chức
                </Label>
              </div>

              <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg" disabled={!formData.agreeTerms}>
                Đăng ký tình nguyện viên
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
