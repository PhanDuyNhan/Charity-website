import { UserLayout } from "@/components/layouts/user-layout"
import { VolunteerHero } from "@/components/features/volunteers/volunteer-hero"
import { VolunteerOpportunities } from "@/components/features/volunteers/volunteer-opportunities"
import { VolunteerBenefits } from "@/components/features/volunteers/volunteer-benefits"
import { VolunteerTestimonials } from "@/components/features/volunteers/volunteer-testimonials"
import { VolunteerRegistration } from "@/components/features/volunteers/volunteer-registration"

export default function VolunteersPage() {
  return (
    <UserLayout>
      <div className="min-h-screen">
        <VolunteerHero />
        <VolunteerOpportunities />
        <VolunteerBenefits />
        <VolunteerTestimonials />
        <VolunteerRegistration />
      </div>
    </UserLayout>
  )
}
