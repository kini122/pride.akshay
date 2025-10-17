"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { name: "Corporate Events", href: "/services/corporate" },
    { name: "Promotions", href: "/services/promotions" },
    { name: "Exhibitions", href: "/services/exhibitions" },
    { name: "Private Parties", href: "/services/private-parties" },
    { name: "Weddings", href: "/services/weddings" },
  ]

  const isActive = (href: string) => pathname === href
  const isServicesActive = pathname?.startsWith("/services")

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "glass-morphism"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-[#2D1B1B] hover:opacity-90">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#2D1B1B]">
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-[#F97316]" />
                <span className="block h-0.5 w-5 bg-[#F97316]" />
                <span className="block h-0.5 w-5 bg-[#F97316]" />
              </span>
            </span>
            <span className="hidden sm:inline text-[16px] font-medium tracking-tight">Pride Eventz</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center" aria-label="Primary">
            <ul className="flex items-center gap-[44px] text-[15px] md:text-[16px] font-medium text-[#2D1B1B]/90">
              <li>
                <Link
                  href="/"
                  className={`${
                    isActive("/")
                      ? "text-[#2D1B1B] border-b-2 border-[#2D1B1B]"
                      : "hover:text-[#2D1B1B]"
                  } transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${
                    isActive("/about")
                      ? "text-[#2D1B1B] border-b-2 border-[#2D1B1B]"
                      : "hover:text-[#2D1B1B]"
                  } transition-colors`}
                >
                  About
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative group">
                <div
                  className={`flex items-center gap-1 transition-colors ${
                    isServicesActive
                      ? "text-[#2D1B1B] border-b-2 border-[#2D1B1B]"
                      : "text-[#2D1B1B]/90 hover:text-[#2D1B1B]"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="absolute left-0 mt-2 w-52 rounded-lg border border-[#2D1B1B]/10 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 shadow-xl">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-[#2D1B1B] hover:bg-[#FFF5F7] hover:text-[#F97316] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className={`${
                    isActive("/gallery")
                      ? "text-[#2D1B1B] border-b-2 border-[#2D1B1B]"
                      : "hover:text-[#2D1B1B]"
                  } transition-colors`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className={`${
                    isActive("/clients")
                      ? "text-[#2D1B1B] border-b-2 border-[#2D1B1B]"
                      : "hover:text-[#2D1B1B]"
                  } transition-colors`}
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${
                    isActive("/contact")
                      ? "text-[#2D1B1B] border-b-2 border-[#2D1B1B]"
                      : "hover:text-[#2D1B1B]"
                  } transition-colors`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-block rounded-lg border-2 border-[#2D1B1B] px-8 py-3 text-[15px] font-medium text-[#2D1B1B] transition-colors hover:bg-[#FFF5F7]"
          >
            Let&apos;s work together
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block px-4 py-2 text-[#2D1B1B]/90 hover:text-[#2D1B1B]">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-[#2D1B1B]/90 hover:text-[#2D1B1B]">
              About
            </Link>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-4 py-2 text-[#2D1B1B]/90 hover:text-[#2D1B1B] flex items-center justify-between"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {isServicesOpen && (
              <div className="pl-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-[#2D1B1B]/90 hover:text-[#2D1B1B]"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/gallery" className="block px-4 py-2 text-[#2D1B1B]/90 hover:text-[#2D1B1B]">
              Portfolio
            </Link>
            <Link href="/clients" className="block px-4 py-2 text-[#2D1B1B]/90 hover:text-[#2D1B1B]">
              Our Clients
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-[#2D1B1B]/90 hover:text-[#2D1B1B]">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
