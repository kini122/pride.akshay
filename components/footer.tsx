import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F9FAFB]">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[70px] mb-8">
          {/* Column 1 - Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#2D1B1B]">
                <span className="flex flex-col gap-1.5">
                  <span className="block h-0.5 w-5 bg-[#F97316]" />
                  <span className="block h-0.5 w-5 bg-[#F97316]" />
                  <span className="block h-0.5 w-5 bg-[#F97316]" />
                </span>
              </span>
              <span className="font-semibold text-lg text-[#1F1F1F]">Pride Eventz</span>
            </div>
            <p className="text-[#6B7280] mt-4 max-w-[280px] text-[14px] leading-[1.6]">
              We specialize in creating customized solutions that align with your vision and budget
            </p>
            <div className="mt-4 space-y-2 text-[14px]">
              <a href="tel:+919846596349" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#F97316] transition-colors">
                <Phone className="w-4 h-4" /> Tel no.: +91 9846596349
              </a>
              <a href="mailto:info@prideeventz.in" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#F97316] transition-colors">
                <Mail className="w-4 h-4" /> Email: info@prideeventz.in
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="font-semibold text-[#1F1F1F] mb-4 text-[16px]">Company</h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link href="/about" className="text-[#6B7280] hover:text-[#F97316] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services/corporate" className="text-[#6B7280] hover:text-[#F97316] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#6B7280] hover:text-[#F97316] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-[#6B7280] hover:text-[#F97316] transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#6B7280] hover:text-[#F97316] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h3 className="font-semibold text-[#1F1F1F] mb-4 text-[16px]">Social Media</h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#FF1493] transition-colors">
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#FF1493] transition-colors">
                  <Youtube className="w-4 h-4" /> Youtube
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#FF1493] transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal & Press */}
          <div>
            <h3 className="font-semibold text-[#1F1F1F] mb-4 text-[16px]">Legal &amp; Press</h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link href="#" className="text-[#6B7280] hover:text-[#F97316] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6B7280] hover:text-[#F97316] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E5E7EB] pt-6">
          <div className="flex items-center justify-between text-[14px] text-[#6B7280]">
            <span>© Pride Eventz 2025</span>
            <span>Kochi, Kerala</span>
            <a
              href="#"
              aria-label="Back to top"
              className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-[#D1D5DB] text-[#6B7280] transition-transform hover:-translate-y-0.5"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
