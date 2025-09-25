import { DonationsTable } from "@/components/features/admin/donations-table"
import { DonationsStats } from "@/components/features/admin/donations-stats"
import { DonationsFilters } from "@/components/features/admin/donations-filters"

export default function AdminDonationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Quản lý quyên góp</h1>
        <p className="text-muted-foreground">Theo dõi và quản lý các khoản quyên góp</p>
      </div>

      <DonationsStats />
      <DonationsFilters />
      <DonationsTable />
    </div>
  )
}
