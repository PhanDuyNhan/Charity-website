import { UserLayout } from "@/components/layouts/user-layout"
import { RegisterForm } from "@/components/features/auth/register-form"

export default function RegisterPage() {
  return (
    <UserLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Đăng ký</h2>
            <p className="mt-2 text-muted-foreground">Tạo tài khoản để tham gia cộng đồng từ thiện</p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </UserLayout>
  )
}
