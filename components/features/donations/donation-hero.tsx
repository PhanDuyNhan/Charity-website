import { Heart, Shield, Award } from "lucide-react"

export function DonationHero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Chia sẻ yêu thương, <span className="text-primary">tạo nên kỳ tích</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Mỗi đóng góp của bạn đều có ý nghĩa. Hãy cùng chúng tôi mang lại hy vọng và thay đổi tích cực cho cộng đồng.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Bảo mật 100%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Minh bạch tuyệt đối</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">50,000+ người tin tưởng</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
