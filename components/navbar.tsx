"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"
import { HoverButton } from "@/components/ui/hover-button"

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
    { name: "All Services", href: "/services" },
    { name: "Corporate Events", href: "/services/corporate" },
    { name: "Promotions", href: "/services/promotions" },
    { name: "Exhibitions", href: "/services/exhibitions" },
    { name: "Private Parties", href: "/services/private-parties" },
  ]

  const isActive = (href: string) => pathname === href
  const isServicesActive = pathname?.startsWith("/services")

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b ${
        isScrolled
          ? "bg-[rgba(44,62,80,0.70)] border-white/10 shadow-lg"
          : "bg-[rgba(44,62,80,0.60)] border-white/10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F6241002a28724d6b8f1149d981f5257e%2F4220e3e82a1f46b3b96e9daf8656a8a6?format=webp&width=800"
              alt="Pride Eventz Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="hidden sm:inline text-[17px] font-semibold tracking-tight text-white">Pride Eventz</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center" aria-label="Primary">
            <ul className="flex items-center gap-8 text-[15px] font-medium text-white/80">
              <li>
                <Link
                  href="/"
                  prefetch={false}
                  className={`transition-all duration-300 relative pb-1 ${
                    isActive("/")
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                      : "hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  prefetch={false}
                  className={`transition-all duration-300 relative pb-1 ${
                    isActive("/about")
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                      : "text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  About
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative group">
                <div
                  className={`flex items-center gap-1.5 transition-all duration-300 relative pb-1 ${
                    isServicesActive
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                      : "text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <div className="absolute left-0 mt-4 w-56 rounded-xl backdrop-blur-md bg-[rgba(44,62,80,0.9)] border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 shadow-2xl">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      prefetch={false}
                      className="block px-5 py-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <Link
                  href="/gallery"
                  prefetch={false}
                  className={`transition-all duration-300 relative pb-1 ${
                    isActive("/gallery")
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                      : "hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  prefetch={false}
                  className={`transition-all duration-300 relative pb-1 ${
                    isActive("/clients")
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                      : "hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  prefetch={false}
                  className={`transition-all duration-300 relative pb-1 ${
                    isActive("/contact")
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                      : "text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:inline-block navbar-cta-wrapper">
            <HoverButton className="px-2 py-1 bg-transparent border-none text-white" onClick={() => window.location.href = '/contact'}>
              Let&apos;s work together
            </HoverButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transition-opacity duration-300 hover:opacity-70"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 bg-white">
            <Link href="/" prefetch={false} className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/about" prefetch={false} className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium">
              About
            </Link>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex items-center justify-between font-medium text-sm transition-colors"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {isServicesOpen && (
              <div className="pl-4 bg-gray-50">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors font-medium"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/gallery" prefetch={false} className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium">
              Portfolio
            </Link>
            <Link href="/clients" prefetch={false} className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium">
              Our Clients
            </Link>
            <Link href="/contact" prefetch={false} className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
