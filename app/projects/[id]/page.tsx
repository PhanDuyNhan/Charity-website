import { UserLayout } from "@/components/layouts/user-layout"
import { ProjectDetail } from "@/components/features/projects/project-detail"
import { ProjectDonors } from "@/components/features/projects/project-donors"
import { ProjectUpdates } from "@/components/features/projects/project-updates"
import { ProjectGallery } from "@/components/features/projects/project-gallery"
import { RelatedProjects } from "@/components/features/projects/related-projects"

interface Props {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: Props) {
  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProjectDetail projectId={params.id} />
            <ProjectGallery projectId={params.id} />
            <ProjectUpdates projectId={params.id} />
          </div>
          <div className="space-y-6">
            <ProjectDonors projectId={params.id} />
          </div>
        </div>
      </div>
      <RelatedProjects currentProjectId={params.id} />
    </UserLayout>
  )
}
