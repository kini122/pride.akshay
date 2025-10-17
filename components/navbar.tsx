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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "glass-morphism"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">Pride Eventz</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`transition-colors ${isActive("/") ? "text-primary border-b-2 border-primary" : "text-foreground hover:text-primary"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${isActive("/about") ? "text-primary border-b-2 border-primary" : "text-foreground hover:text-primary"}`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/gallery"
              className={`transition-colors ${isActive("/gallery") ? "text-primary border-b-2 border-primary" : "text-foreground hover:text-primary"}`}
            >
              Portfolio
            </Link>
            <Link
              href="/clients"
              className={`transition-colors ${isActive("/clients") ? "text-primary border-b-2 border-primary" : "text-foreground hover:text-primary"}`}
            >
              Our Clients
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${isActive("/contact") ? "text-primary border-b-2 border-primary" : "text-foreground hover:text-primary"}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
          >
            Plan Event
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block px-4 py-2 text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-foreground hover:text-primary">
              About
            </Link>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-4 py-2 text-foreground hover:text-primary flex items-center justify-between"
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
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/gallery" className="block px-4 py-2 text-foreground hover:text-primary">
              Portfolio
            </Link>
            <Link href="/clients" className="block px-4 py-2 text-foreground hover:text-primary">
              Our Clients
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
