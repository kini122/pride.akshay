"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, ArrowUp } from "lucide-react"
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer"
import { useEffect, useState } from "react"

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-card border-t border-border/50 relative h-fit rounded-md overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10 lg:gap-16 pb-12">
          {/* Column 1 - Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F6241002a28724d6b8f1149d981f5257e%2F4220e3e82a1f46b3b96e9daf8656a8a6?format=webp&width=800"
                alt="Pride Eventz Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-semibold text-lg text-foreground">Pride Eventz</span>
            </div>
            <p className="text-muted-foreground mt-4 max-w-[280px] text-[14px] leading-[1.6]">
              We specialize in creating customized solutions that align with your vision and budget
            </p>
            <div className="mt-4 space-y-2 text-[14px]">
              <a href="tel:+919846596349" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" /> Tel no.: +91 9846596349
              </a>
              <a href="mailto:info@prideeventz.in" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" /> Email: info@prideeventz.in
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-[16px]">Company</h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-[16px]">Social Media</h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href="https://facebook.com/prideeventz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://youtube.com/prideeventz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Youtube className="w-4 h-4" /> Youtube
                </a>
              </li>
              <li>
                <a href="https://instagram.com/prideeventz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal & Press */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-[16px]">Legal &amp; Press</h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-border/50 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-muted-foreground">
            <a href="https://facebook.com/prideeventz" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-foreground transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://youtube.com/prideeventz" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="hover:text-foreground transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://instagram.com/prideeventz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-muted-foreground">
            &copy; {year} Pride Eventz. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36 pointer-events-none relative" style={{ zIndex: 10 }}>
        <TextHoverEffect text="PRIDE" className="pointer-events-auto" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  )
}
