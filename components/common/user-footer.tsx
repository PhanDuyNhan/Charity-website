import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Facebook, Youtube, Instagram } from "lucide-react"

export function UserFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-poppins">Tấm Lòng Vàng</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Kết nối những tấm lòng nhân ái, xây dựng cộng đồng từ thiện minh bạch và hiệu quả.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-slate-300 hover:text-primary transition-colors">
                  Dự án từ thiện
                </Link>
              </li>
              <li>
                <Link href="/volunteers" className="text-slate-300 hover:text-primary transition-colors">
                  Tình nguyện viên
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-300 hover:text-primary transition-colors">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="text-slate-300 hover:text-primary transition-colors">
                  Báo cáo minh bạch
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-primary transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-300 hover:text-primary transition-colors">
                  Trung tâm hỗ trợ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-primary transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-primary transition-colors">
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Thông tin liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-300 text-sm">0123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-300 text-sm">info@tamlongvang.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">© 2025 Tấm Lòng Vàng. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
