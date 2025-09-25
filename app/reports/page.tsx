import { UserLayout } from "@/components/layouts/user-layout"
import { ReportsHero } from "@/components/features/reports/reports-hero"
import { TransparencyStats } from "@/components/features/reports/transparency-stats"
import { FinancialReports } from "@/components/features/reports/financial-reports"
import { ProjectReports } from "@/components/features/reports/project-reports"
import { ImpactMetrics } from "@/components/features/reports/impact-metrics"

export default function ReportsPage() {
  return (
    <UserLayout>
      <div className="min-h-screen">
        <ReportsHero />
        <TransparencyStats />
        <FinancialReports />
        <ProjectReports />
        <ImpactMetrics />
      </div>
    </UserLayout>
  )
}
