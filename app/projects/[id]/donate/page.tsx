import { UserLayout } from "@/components/layouts/user-layout"
import { ProjectDonationForm } from "@/components/features/donations/project-donation-form"
import { ProjectInfo } from "@/components/features/projects/project-info"

interface Props {
  params: {
    id: string
  }
}

export default function ProjectDonatePage({ params }: Props) {
  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectInfo projectId={params.id} />
          <ProjectDonationForm projectId={params.id} />
        </div>
      </div>
    </UserLayout>
  )
}
