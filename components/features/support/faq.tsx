"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const faqCategories = [
  {
    category: "Quyên góp",
    questions: [
      {
        question: "Làm thế nào để quyên góp trực tuyến?",
        answer:
          "Bạn có thể quyên góp trực tuyến bằng cách truy cập trang 'Quyên góp', chọn dự án muốn hỗ trợ, nhập số tiền và thông tin cá nhân, sau đó chọn phương thức thanh toán phù hợp (VNPay, MoMo, chuyển khoản ngân hàng).",
      },
      {
        question: "Các phương thức thanh toán nào được hỗ trợ?",
        answer:
          "Chúng tôi hỗ trợ nhiều phương thức thanh toán: VNPay, MoMo, chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ. Tất cả đều được bảo mật và an toàn.",
      },
      {
        question: "Tôi có thể quyên góp ẩn danh không?",
        answer:
          "Có, bạn hoàn toàn có thể chọn quyên góp ẩn danh. Khi đó tên của bạn sẽ không được hiển thị công khai trên website.",
      },
      {
        question: "Làm sao để nhận biên lai quyên góp?",
        answer:
          "Sau khi quyên góp thành công, bạn sẽ nhận được email xác nhận và biên lai điện tử. Nếu cần biên lai giấy, vui lòng liên hệ với chúng tôi.",
      },
    ],
  },
  {
    category: "Tình nguyện viên",
    questions: [
      {
        question: "Làm thế nào để trở thành tình nguyện viên?",
        answer:
          "Bạn có thể đăng ký trở thành tình nguyện viên bằng cách điền form đăng ký trên trang 'Tình nguyện viên'. Chúng tôi sẽ liên hệ với bạn trong vòng 3-5 ngày làm việc.",
      },
      {
        question: "Có cần kinh nghiệm để tham gia tình nguyện không?",
        answer:
          "Không cần thiết. Chúng tôi chào đón tất cả mọi người có tấm lòng thiện nguyện. Chúng tôi sẽ cung cấp đào tạo cần thiết cho từng hoạt động cụ thể.",
      },
      {
        question: "Tình nguyện viên có được cấp chứng nhận không?",
        answer:
          "Có, tất cả tình nguyện viên sẽ nhận được chứng nhận tham gia và thư cảm ơn sau khi hoàn thành các hoạt động tình nguyện.",
      },
    ],
  },
  {
    category: "Minh bạch",
    questions: [
      {
        question: "Làm sao để biết tiền quyên góp được sử dụng như thế nào?",
        answer:
          "Chúng tôi công khai tất cả báo cáo tài chính trên website. Bạn có thể xem báo cáo chi tiết tại trang 'Báo cáo minh bạch' hoặc tải về các báo cáo được kiểm toán độc lập.",
      },
      {
        question: "Tỷ lệ chi phí vận hành là bao nhiêu?",
        answer:
          "Chi phí vận hành của chúng tôi luôn được giữ dưới 10%. Năm 2024, tỷ lệ này là 8.5%, nghĩa là hơn 91% số tiền quyên góp được sử dụng trực tiếp cho các hoạt động từ thiện.",
      },
      {
        question: "Có thể xem tiến độ dự án cụ thể không?",
        answer:
          "Có, mỗi dự án đều có trang riêng với thông tin chi tiết về tiến độ, ngân sách sử dụng và hình ảnh cập nhật thường xuyên.",
      },
    ],
  },
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tìm câu trả lời nhanh chóng cho những thắc mắc phổ biến
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <Card key={faqIndex} className="overflow-hidden">
                      <CardContent className="p-0">
                        <Button
                          variant="ghost"
                          className="w-full p-6 text-left justify-between hover:bg-gray-50"
                          onClick={() => toggleItem(itemId)}
                        >
                          <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </Button>

                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Không tìm thấy câu trả lời bạn cần?</p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Liên hệ với chúng tôi
          </Button>
        </div>
      </div>
    </section>
  )
}
