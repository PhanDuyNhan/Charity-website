import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="absolute inset-0 bg-[url('/abstract-light-pattern.png')] opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                <span className="text-foreground">Kết nối</span>{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  tấm lòng nhân ái
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Nền tảng quyên góp từ thiện minh bạch, giúp bạn dễ dàng chia sẻ yêu thương và tạo nên những thay đổi
                tích cực cho cộng đồng.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-lg px-8">
                <Link href="/donations">
                  Quyên góp ngay
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Play className="mr-2 w-5 h-5" />
                Xem video giới thiệu
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Người quyên góp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Dự án thành công</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15 tỷ</div>
                <div className="text-sm text-muted-foreground">VNĐ đã quyên góp</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/charity-volunteers-community-help.png"
                alt="Tình nguyện viên đang giúp đỡ cộng đồng"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-bounce">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Đang quyên góp trực tuyến</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">2.5M VNĐ</div>
                <div className="text-xs text-muted-foreground">Vừa quyên góp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
