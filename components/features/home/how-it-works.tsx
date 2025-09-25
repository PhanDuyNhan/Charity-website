import { Search, Heart, CheckCircle, Share2 } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Tìm dự án",
    description: "Khám phá các dự án từ thiện đang cần hỗ trợ",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Heart,
    title: "Quyên góp",
    description: "Chọn số tiền phù hợp và thực hiện quyên góp an toàn",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: CheckCircle,
    title: "Theo dõi",
    description: "Nhận báo cáo minh bạch về việc sử dụng tiền quyên góp",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Share2,
    title: "Chia sẻ",
    description: "Lan tỏa yêu thương bằng cách chia sẻ với bạn bè",
    color: "from-purple-500 to-indigo-500",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Cách thức hoạt động</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quy trình đơn giản để bạn có thể dễ dàng tham gia các hoạt động từ thiện
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} rounded-full shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full">
                  <div className="w-full h-0.5 bg-gradient-to-r from-muted to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
