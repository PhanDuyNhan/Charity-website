import { UserLayout } from "@/components/layouts/user-layout"
import { ProjectsHero } from "@/components/features/projects/projects-hero"
import { ProjectsFilter } from "@/components/features/projects/projects-filter"
import { ProjectsList } from "@/components/features/projects/projects-list"
import { ProjectsStats } from "@/components/features/projects/projects-stats"

export default function ProjectsPage() {
  return (
    <UserLayout>
      <ProjectsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProjectsStats />
        <div className="mt-8">
          <ProjectsFilter />
        </div>
        <div className="mt-8">
          <ProjectsList />
        </div>
      </div>
    </UserLayout>
  )
}
