import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Nguyễn Thị Mai",
    role: "Nhà giáo",
    avatar: "/vietnamese-woman-teacher.jpg",
    content:
      "Tôi rất ấn tượng với sự minh bạch của nền tảng. Mọi khoản quyên góp đều được báo cáo chi tiết, giúp tôi yên tâm khi đóng góp.",
    rating: 5,
  },
  {
    name: "Trần Văn Hùng",
    role: "Kỹ sư",
    avatar: "/vietnamese-man-engineer.jpg",
    content:
      "Giao diện dễ sử dụng, quy trình quyên góp nhanh chóng. Tôi đã tham gia nhiều dự án và thấy hiệu quả rất tốt.",
    rating: 5,
  },
  {
    name: "Lê Thị Hoa",
    role: "Bác sĩ",
    avatar: "/vietnamese-woman-doctor.jpg",
    content:
      "Cảm ơn nền tảng đã giúp tôi kết nối với những hoàn cảnh khó khăn. Việc theo dõi tiến độ dự án rất thuận tiện.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Cảm nhận từ cộng đồng</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những chia sẻ chân thành từ các nhà hảo tâm đã tham gia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary/20 mr-2" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
