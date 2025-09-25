import { UserLayout } from "@/components/layouts/user-layout"
import { DonationHero } from "@/components/features/donations/donation-hero"
import { DonationForm } from "@/components/features/donations/donation-form"
import { FeaturedProjects } from "@/components/features/donations/featured-projects"
import { DonationMethods } from "@/components/features/donations/donation-methods"
import { DonationImpact } from "@/components/features/donations/donation-impact"

export default function DonationsPage() {
  return (
    <UserLayout>
      <DonationHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DonationForm />
          </div>
          <div className="space-y-6">
            <DonationMethods />
            <DonationImpact />
          </div>
        </div>
      </div>
      <FeaturedProjects />
    </UserLayout>
  )
}
