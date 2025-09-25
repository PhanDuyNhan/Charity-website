"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"

const categories = [
  { value: "education", label: "Giáo dục" },
  { value: "healthcare", label: "Y tế" },
  { value: "social", label: "Xã hội" },
  { value: "disaster", label: "Cứu trợ" },
  { value: "environment", label: "Môi trường" },
]

const locations = [
  { value: "hanoi", label: "Hà Nội" },
  { value: "hcm", label: "TP.HCM" },
  { value: "danang", label: "Đà Nẵng" },
  { value: "sapa", label: "Sapa" },
  { value: "dalat", label: "Đà Lạt" },
]

const statuses = [
  { value: "active", label: "Đang chạy" },
  { value: "completed", label: "Hoàn thành" },
  { value: "urgent", label: "Khẩn cấp" },
]

export function ProjectsFilter() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const activeFilters = [
    selectedCategory !== "all" && {
      type: "category",
      value: selectedCategory,
      label: categories.find((c) => c.value === selectedCategory)?.label,
    },
    selectedLocation !== "all" && {
      type: "location",
      value: selectedLocation,
      label: locations.find((l) => l.value === selectedLocation)?.label,
    },
    selectedStatus !== "all" && {
      type: "status",
      value: selectedStatus,
      label: statuses.find((s) => s.value === selectedStatus)?.label,
    },
  ].filter(Boolean)

  const clearFilter = (type: string) => {
    switch (type) {
      case "category":
        setSelectedCategory("all")
        break
      case "location":
        setSelectedLocation("all")
        break
      case "status":
        setSelectedStatus("all")
        break
    }
  }

  const clearAllFilters = () => {
    setSelectedCategory("all")
    setSelectedLocation("all")
    setSelectedStatus("all")
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Danh sách dự án</h2>
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
          <Filter className="w-4 h-4 mr-2" />
          Bộ lọc
        </Button>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Đang lọc:</span>
          {activeFilters.map((filter) => (
            <Badge key={filter.type} variant="secondary" className="flex items-center gap-1">
              {filter.label}
              <Button variant="ghost" size="sm" className="h-auto p-0 w-4 h-4" onClick={() => clearFilter(filter.type)}>
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          ))}
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Xóa tất cả
          </Button>
        </div>
      )}

      {/* Filter Controls */}
      <Card className={`${showFilters ? "block" : "hidden lg:block"}`}>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Danh mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả danh mục</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Địa điểm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả địa điểm</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                {statuses.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button className="w-full">
              <Filter className="w-4 h-4 mr-2" />
              Áp dụng
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
