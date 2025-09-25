import { UserLayout } from "@/components/layouts/user-layout"
import { NewsHero } from "@/components/features/news/news-hero"
import { FeaturedNews } from "@/components/features/news/featured-news"
import { NewsCategories } from "@/components/features/news/news-categories"
import { NewsList } from "@/components/features/news/news-list"

export default function NewsPage() {
  return (
    <UserLayout>
      <div className="min-h-screen">
        <NewsHero />
        <FeaturedNews />
        <NewsCategories />
        <NewsList />
      </div>
    </UserLayout>
  )
}
