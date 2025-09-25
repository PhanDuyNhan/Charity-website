import { UserLayout } from "@/components/layouts/user-layout"
import { LoginForm } from "@/components/features/auth/login-form"

export default function LoginPage() {
  return (
    <UserLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Đăng nhập</h2>
            <p className="mt-2 text-muted-foreground">Đăng nhập để tiếp tục hành trình từ thiện của bạn</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </UserLayout>
  )
}
