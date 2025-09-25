import { UserLayout } from "@/components/layouts/user-layout"
import { SupportHero } from "@/components/features/support/support-hero"
import { ContactMethods } from "@/components/features/support/contact-methods"
import { FAQ } from "@/components/features/support/faq"
import { SupportForm } from "@/components/features/support/support-form"

export default function SupportPage() {
  return (
    <UserLayout>
      <div className="min-h-screen">
        <SupportHero />
        <ContactMethods />
        <FAQ />
        <SupportForm />
      </div>
    </UserLayout>
  )
}
