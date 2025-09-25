"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, User, Mail, Phone, MapPin, CreditCard } from "lucide-react"

const projects = [
  { id: "1", name: "Xây trường học vùng cao", category: "Giáo dục" },
  { id: "2", name: "Hỗ trợ người già neo đơn", category: "Xã hội" },
  { id: "3", name: "Cứu trợ thiên tai miền Trung", category: "Cứu trợ" },
  { id: "general", name: "Quyên góp chung (Quỹ tự do)", category: "Chung" },
]

const quickAmounts = [100000, 200000, 500000, 1000000, 2000000, 5000000]

export function DonationForm() {
  const [selectedProject, setSelectedProject] = useState("")
  const [amount, setAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  })

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString())
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle donation submission
    console.log("Donation submitted:", {
      selectedProject,
      amount,
      donationType,
      paymentMethod,
      isAnonymous,
      donorInfo,
    })
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardTitle className="flex items-center space-x-2 text-2xl">
          <Heart className="w-6 h-6 text-primary" />
          <span>Form quyên góp</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Selection */}
          <div>
            <Label className="text-base font-semibold">Chọn dự án quyên góp</Label>
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Chọn dự án bạn muốn hỗ trợ" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((project) => (
                  <SelectItem key={project.id} value={project.id}>
                    <div>
                      <div className="font-medium">{project.name}</div>
                      <div className="text-sm text-muted-foreground">{project.category}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Donation Type */}
          <div>
            <Label className="text-base font-semibold">Loại quyên góp</Label>
            <RadioGroup value={donationType} onValueChange={setDonationType} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time">Quyên góp một lần</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Quyên góp hàng tháng</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="quarterly" id="quarterly" />
                <Label htmlFor="quarterly">Quyên góp hàng quý</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Amount Selection */}
          <div>
            <Label className="text-base font-semibold">Số tiền quyên góp</Label>
            <div className="grid grid-cols-3 gap-3 mt-2 mb-4">
              {quickAmounts.map((value) => (
                <Button
                  key={value}
                  type="button"
                  variant={amount === value.toString() ? "default" : "outline"}
                  onClick={() => handleQuickAmount(value)}
                  className="text-sm"
                >
                  {(value / 1000).toLocaleString()}K
                </Button>
              ))}
            </div>
            <div className="relative">
              <Input
                type="number"
                placeholder="Nhập số tiền khác (VNĐ)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-10"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">₫</span>
            </div>
            {amount && (
              <p className="text-sm text-muted-foreground mt-2">
                Số tiền:{" "}
                <span className="font-semibold text-primary">{Number.parseInt(amount).toLocaleString()} VNĐ</span>
              </p>
            )}
          </div>

          {/* Payment Method */}
          <div>
            <Label className="text-base font-semibold">Phương thức thanh toán</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2">
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="vnpay" id="vnpay" />
                <Label htmlFor="vnpay" className="flex items-center space-x-2 cursor-pointer">
                  <CreditCard className="w-4 h-4" />
                  <span>VNPay (Thẻ ATM/Visa/MasterCard)</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="momo" id="momo" />
                <Label htmlFor="momo" className="flex items-center space-x-2 cursor-pointer">
                  <div className="w-4 h-4 bg-pink-500 rounded"></div>
                  <span>Ví MoMo</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="banking" id="banking" />
                <Label htmlFor="banking" className="flex items-center space-x-2 cursor-pointer">
                  <CreditCard className="w-4 h-4" />
                  <span>Chuyển khoản ngân hàng</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Anonymous Option */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="anonymous"
              checked={isAnonymous}
              onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
            />
            <Label htmlFor="anonymous">Quyên góp ẩn danh</Label>
          </div>

          {/* Donor Information */}
          {!isAnonymous && (
            <div className="space-y-4">
              <Label className="text-base font-semibold">Thông tin người quyên góp</Label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Họ và tên"
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Số điện thoại"
                    value={donorInfo.phone}
                    onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Địa chỉ"
                    value={donorInfo.address}
                    onChange={(e) => setDonorInfo({ ...donorInfo, address: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>

              <Textarea
                placeholder="Lời nhắn (tùy chọn)"
                value={donorInfo.message}
                onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                rows={3}
              />
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent text-lg py-6"
            disabled={!selectedProject || !amount || !paymentMethod}
          >
            <Heart className="w-5 h-5 mr-2" />
            Quyên góp {amount ? `${Number.parseInt(amount).toLocaleString()} VNĐ` : ""}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Bằng việc quyên góp, bạn đồng ý với{" "}
            <a href="/terms" className="text-primary hover:underline">
              Điều khoản sử dụng
            </a>{" "}
            và{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Chính sách bảo mật
            </a>{" "}
            của chúng tôi.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
