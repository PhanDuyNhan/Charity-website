"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Upload, Bell, Shield, Globe, Palette } from "lucide-react"

export default function AdminSettingsPage() {
  const [notifications, setNotifications] = useState({
    emailDonations: true,
    emailProjects: true,
    emailVolunteers: false,
    pushDonations: true,
    pushProjects: false,
    pushVolunteers: true,
  })

  const [security, setSecurity] = useState({
    twoFactor: false,
    loginNotifications: true,
    sessionTimeout: "30",
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Cài đặt hệ thống</h1>
          <p className="text-muted-foreground">Quản lý cấu hình và tùy chọn hệ thống</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Save className="w-4 h-4 mr-2" />
          Lưu thay đổi
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">Chung</TabsTrigger>
          <TabsTrigger value="notifications">Thông báo</TabsTrigger>
          <TabsTrigger value="security">Bảo mật</TabsTrigger>
          <TabsTrigger value="appearance">Giao diện</TabsTrigger>
          <TabsTrigger value="integrations">Tích hợp</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Thông tin tổ chức
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="orgName">Tên tổ chức</Label>
                  <Input id="orgName" defaultValue="Quỹ Từ thiện Tấm Lòng Vàng" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orgEmail">Email liên hệ</Label>
                  <Input id="orgEmail" type="email" defaultValue="contact@charity.org" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orgPhone">Số điện thoại</Label>
                  <Input id="orgPhone" defaultValue="(84) 28 1234 5678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orgWebsite">Website</Label>
                  <Input id="orgWebsite" defaultValue="https://charity.org" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="orgAddress">Địa chỉ</Label>
                <Textarea id="orgAddress" defaultValue="123 Đường ABC, Phường XYZ, Quận 1, TP.HCM" rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="orgDescription">Mô tả tổ chức</Label>
                <Textarea
                  id="orgDescription"
                  defaultValue="Quỹ từ thiện hoạt động vì sự phát triển bền vững của cộng đồng, tập trung vào giáo dục, y tế và hỗ trợ người nghèo."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Logo và hình ảnh</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Logo chính</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Kéo thả hoặc click để tải lên</p>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG tối đa 2MB</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Favicon</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Kéo thả hoặc click để tải lên</p>
                    <p className="text-xs text-muted-foreground mt-1">ICO, PNG 32x32px</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Cài đặt thông báo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Thông báo Email</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Quyên góp mới</Label>
                      <p className="text-sm text-muted-foreground">Nhận thông báo khi có quyên góp mới</p>
                    </div>
                    <Switch
                      checked={notifications.emailDonations}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, emailDonations: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Dự án mới</Label>
                      <p className="text-sm text-muted-foreground">Nhận thông báo khi có dự án mới</p>
                    </div>
                    <Switch
                      checked={notifications.emailProjects}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, emailProjects: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Tình nguyện viên mới</Label>
                      <p className="text-sm text-muted-foreground">Nhận thông báo khi có đăng ký tình nguyện</p>
                    </div>
                    <Switch
                      checked={notifications.emailVolunteers}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, emailVolunteers: checked }))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Thông báo Push</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Quyên góp mới</Label>
                      <p className="text-sm text-muted-foreground">Thông báo push khi có quyên góp</p>
                    </div>
                    <Switch
                      checked={notifications.pushDonations}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, pushDonations: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Dự án mới</Label>
                      <p className="text-sm text-muted-foreground">Thông báo push khi có dự án mới</p>
                    </div>
                    <Switch
                      checked={notifications.pushProjects}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, pushProjects: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Tình nguyện viên mới</Label>
                      <p className="text-sm text-muted-foreground">Thông báo push khi có đăng ký tình nguyện</p>
                    </div>
                    <Switch
                      checked={notifications.pushVolunteers}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, pushVolunteers: checked }))}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Cài đặt bảo mật
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Xác thực hai yếu tố (2FA)</Label>
                    <p className="text-sm text-muted-foreground">Tăng cường bảo mật với 2FA</p>
                  </div>
                  <Switch
                    checked={security.twoFactor}
                    onCheckedChange={(checked) => setSecurity((prev) => ({ ...prev, twoFactor: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Thông báo đăng nhập</Label>
                    <p className="text-sm text-muted-foreground">Nhận thông báo khi có đăng nhập mới</p>
                  </div>
                  <Switch
                    checked={security.loginNotifications}
                    onCheckedChange={(checked) => setSecurity((prev) => ({ ...prev, loginNotifications: checked }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Thời gian hết hạn phiên (phút)</Label>
                  <Select
                    value={security.sessionTimeout}
                    onValueChange={(value) => setSecurity((prev) => ({ ...prev, sessionTimeout: value }))}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 phút</SelectItem>
                      <SelectItem value="30">30 phút</SelectItem>
                      <SelectItem value="60">1 giờ</SelectItem>
                      <SelectItem value="120">2 giờ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Tùy chỉnh giao diện
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Chủ đề màu sắc</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted">
                      <div className="w-full h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded mb-2"></div>
                      <p className="text-sm font-medium">Mặc định</p>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted">
                      <div className="w-full h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-2"></div>
                      <p className="text-sm font-medium">Xanh dương</p>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted">
                      <div className="w-full h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded mb-2"></div>
                      <p className="text-sm font-medium">Xanh lá</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Font chữ</Label>
                  <Select defaultValue="inter">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="roboto">Roboto</SelectItem>
                      <SelectItem value="opensans">Open Sans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tích hợp thanh toán</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">VP</span>
                    </div>
                    <div>
                      <h4 className="font-medium">VNPay</h4>
                      <p className="text-sm text-muted-foreground">Cổng thanh toán VNPay</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">Đã kết nối</Badge>
                    <Button variant="outline" size="sm">
                      Cấu hình
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <span className="text-pink-600 font-bold">M</span>
                    </div>
                    <div>
                      <h4 className="font-medium">MoMo</h4>
                      <p className="text-sm text-muted-foreground">Ví điện tử MoMo</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Chưa kết nối</Badge>
                    <Button variant="outline" size="sm">
                      Kết nối
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tích hợp khác</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-bold">G</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Google Analytics</h4>
                      <p className="text-sm text-muted-foreground">Theo dõi và phân tích website</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">Đã kết nối</Badge>
                    <Button variant="outline" size="sm">
                      Cấu hình
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">F</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Facebook Pixel</h4>
                      <p className="text-sm text-muted-foreground">Theo dõi chuyển đổi Facebook</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Chưa kết nối</Badge>
                    <Button variant="outline" size="sm">
                      Kết nối
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
