import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    role: "Tình nguyện viên giáo dục",
    avatar: "/vietnamese-woman-teacher.jpg",
    content:
      "Tham gia dạy học cho trẻ em vùng cao đã mang lại cho tôi những trải nghiệm vô cùng ý nghĩa. Được nhìn thấy nụ cười hồn nhiên của các em là động lực lớn nhất.",
    rating: 5,
    duration: "2 năm",
  },
  {
    id: 2,
    name: "Trần Văn Hùng",
    role: "Tình nguyện viên cứu trợ",
    avatar: "/vietnamese-man-volunteer.jpg",
    content:
      "Mỗi lần tham gia cứu trợ thiên tai, tôi lại cảm nhận được sức mạnh của tình đoàn kết. Chúng ta có thể làm được những điều tuyệt vời khi cùng nhau.",
    rating: 5,
    duration: "3 năm",
  },
  {
    id: 3,
    name: "Lê Thị Hoa",
    role: "Tình nguyện viên chăm sóc",
    avatar: "/vietnamese-woman-caregiver.jpg",
    content:
      "Chăm sóc người già đã dạy tôi về lòng kiên nhẫn và tình yêu thương. Những câu chuyện của các cụ là kho tàng kinh nghiệm quý báu.",
    rating: 5,
    duration: "1.5 năm",
  },
]

export function VolunteerTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Chia sẻ từ tình nguyện viên</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nghe những câu chuyện truyền cảm hứng từ các tình nguyện viên của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-emerald-200" />
                </div>

                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">Tham gia {testimonial.duration}</span>
                </div>

                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
