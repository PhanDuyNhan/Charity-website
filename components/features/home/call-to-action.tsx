import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-pattern-overlay.jpg')] opacity-10"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Heart className="w-8 h-8" />
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
          Hãy cùng chúng tôi tạo nên những thay đổi tích cực
        </h2>

        <p className="text-xl text-white/90 mb-8 text-pretty max-w-2xl mx-auto">
          Mỗi đóng góp của bạn, dù nhỏ hay lớn, đều có thể mang lại hy vọng và thay đổi cuộc sống của nhiều người.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/donations">
              Quyên góp ngay
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            <Link href="/volunteers">Trở thành tình nguyện viên</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold mb-2">24/7</div>
            <div className="text-white/80">Hỗ trợ trực tuyến</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">100%</div>
            <div className="text-white/80">Minh bạch</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">An toàn</div>
            <div className="text-white/80">Bảo mật thông tin</div>
          </div>
        </div>
      </div>
    </section>
  )
}
