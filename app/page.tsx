import { UserLayout } from "@/components/layouts/user-layout"
import { HeroSection } from "@/components/features/home/hero-section"
import { StatsSection } from "@/components/features/home/stats-section"
import { FeaturedProjects } from "@/components/features/home/featured-projects"
import { HowItWorks } from "@/components/features/home/how-it-works"
import { TestimonialsSection } from "@/components/features/home/testimonials-section"
import { NewsSection } from "@/components/features/home/news-section"
import { CallToAction } from "@/components/features/home/call-to-action"

export default function HomePage() {
  return (
    <UserLayout>
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <HowItWorks />
      <TestimonialsSection />
      <NewsSection />
      <CallToAction />
    </UserLayout>
  )
}
