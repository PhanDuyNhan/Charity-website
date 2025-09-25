import { Search, Filter, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ProjectsHero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Khám phá các <span className="text-primary">dự án từ thiện</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Tìm hiểu và tham gia các dự án từ thiện đang cần sự hỗ trợ của bạn
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input placeholder="Tìm kiếm dự án theo tên, địa điểm..." className="pl-10 h-12 text-lg bg-white" />
              </div>
              <Button size="lg" className="h-12 px-8">
                <Filter className="w-5 h-5 mr-2" />
                Lọc dự án
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
