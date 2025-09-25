import { TrendingUp, Users, Heart, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Người quyên góp",
    description: "Cộng đồng nhân ái đang lớn mạnh",
  },
  {
    icon: Heart,
    value: "15 tỷ",
    label: "VNĐ đã quyên góp",
    description: "Tổng số tiền đã được quyên góp",
  },
  {
    icon: Award,
    value: "200+",
    label: "Dự án thành công",
    description: "Các dự án đã hoàn thành xuất sắc",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Tỷ lệ minh bạch",
    description: "Báo cáo chi tiết mọi khoản quyên góp",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Những con số ấn tượng</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cùng nhau chúng ta đã tạo nên những thay đổi tích cực cho cộng đồng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
