import { UserLayout } from "@/components/layouts/user-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Award, Globe, Shield } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Tình yêu thương",
      description: "Chúng tôi tin rằng tình yêu thương là động lực mạnh mẽ nhất để thay đổi thế giới.",
    },
    {
      icon: Shield,
      title: "Minh bạch",
      description: "Mọi hoạt động và tài chính đều được công khai, minh bạch với cộng đồng.",
    },
    {
      icon: Users,
      title: "Cộng đồng",
      description: "Xây dựng cộng đồng mạnh mẽ, kết nối những trái tim nhân ái.",
    },
    {
      icon: Target,
      title: "Hiệu quả",
      description: "Tối ưu hóa mọi nguồn lực để mang lại tác động tích cực lớn nhất.",
    },
  ]

  const team = [
    {
      name: "Trần Phước Thuận",
      role: "Giám đốc điều hành",
      image: "/ceo-portrait.png",
      description: "Hơn 15 năm kinh nghiệm trong lĩnh vực từ thiện và phát triển cộng đồng.",
    },
    {
      name: "Lê Thị Mai Lan",
      role: "Giám đốc chương trình",
      image: "/program-director-portrait.jpg",
      description: "Chuyên gia về quản lý dự án và phát triển bền vững.",
    },
    {
      name: "Đặng Tiến Đạt",
      role: "Giám đốc tài chính",
      image: "/finance-director-portrait.jpg",
      description: "Đảm bảo tính minh bạch và hiệu quả trong quản lý tài chính.",
    },
    {
      name: "Phan Duy Nhân",
      role: "Giám đốc truyền thông",
      image: "/communications-director-portrait.jpg",
      description: "Kết nối cộng đồng và lan tỏa thông điệp tích cực.",
    },
  ]

  const achievements = [
    { number: "500+", label: "Dự án hoàn thành" },
    { number: "100,000+", label: "Người được hỗ trợ" },
    { number: "50+", label: "Tỉnh thành" },
    { number: "10+", label: "Năm hoạt động" },
  ]

  return (
    <UserLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Về chúng tôi</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Kết nối trái tim,
                <span className="text-emerald-600"> lan tỏa yêu thương</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Chúng tôi là tổ chức từ thiện phi lợi nhuận, hoạt động với sứ mệnh mang lại hy vọng và cơ hội cho những
                hoàn cảnh khó khăn trên khắp Việt Nam.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sứ mệnh của chúng tôi</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Tạo ra những thay đổi tích cực và bền vững trong cộng đồng thông qua các hoạt động từ thiện, giáo dục
                  và phát triển xã hội.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Globe className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Tầm nhìn</h3>
                      <p className="text-gray-600">
                        Trở thành tổ chức từ thiện hàng đầu Việt Nam, góp phần xây dựng một xã hội công bằng và nhân ái.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Cam kết</h3>
                      <p className="text-gray-600">
                        Đảm bảo 100% minh bạch trong mọi hoạt động và sử dụng hiệu quả mọi nguồn lực để tối đa hóa tác
                        động tích cực.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/charity-mission-illustration.jpg" alt="Sứ mệnh từ thiện" className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Những giá trị định hướng mọi hoạt động của chúng tôi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-emerald-600">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Thành tựu của chúng tôi</h2>
              <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
                Những con số ấn tượng trong hành trình lan tỏa yêu thương
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-emerald-100 text-lg">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội ngũ lãnh đạo</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Những người dẫn dắt tổ chức với tâm huyết và chuyên môn cao
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </UserLayout>
  )
}
