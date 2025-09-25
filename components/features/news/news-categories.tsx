import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Leaf, Stethoscope, Users, Globe } from "lucide-react"

const categories = [
  {
    name: "Tất cả",
    count: 156,
    icon: Globe,
    color: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    active: true,
  },
  {
    name: "Giáo dục",
    count: 45,
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    active: false,
  },
  {
    name: "Cứu trợ",
    count: 38,
    icon: Heart,
    color: "bg-red-100 text-red-800 hover:bg-red-200",
    active: false,
  },
  {
    name: "Môi trường",
    count: 29,
    icon: Leaf,
    color: "bg-green-100 text-green-800 hover:bg-green-200",
    active: false,
  },
  {
    name: "Y tế",
    count: 24,
    icon: Stethoscope,
    color: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    active: false,
  },
  {
    name: "Xã hội",
    count: 20,
    icon: Users,
    color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
    active: false,
  },
]

export function NewsCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Danh mục tin tức</h3>
          <p className="text-gray-600">Khám phá tin tức theo từng lĩnh vực hoạt động</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={`${category.active ? "bg-blue-600 hover:bg-blue-700" : category.color} transition-colors`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
                <Badge variant="secondary" className="ml-2 bg-white/20 text-current">
                  {category.count}
                </Badge>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
