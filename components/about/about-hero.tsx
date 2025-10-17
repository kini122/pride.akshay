"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export function AboutHero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

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

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/luxury-event-venue-with-elegant-decorations.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "glass-morphism"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-lg text-foreground hidden sm:inline">Pride Eventz</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-primary transition-colors">
                About
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-1 text-white hover:text-primary transition-colors">
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

              <Link href="/gallery" className="text-white hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-white hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            <Link
              href="/contact"
              className="hidden sm:inline-block px-6 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Let's work together
            </Link>

            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-white/20">
              <Link href="/" className="block px-4 py-2 text-white hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="block px-4 py-2 text-white hover:text-primary">
                About
              </Link>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left px-4 py-2 text-white hover:text-primary flex items-center justify-between"
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
                      className="block px-4 py-2 text-sm text-white hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link href="/gallery" className="block px-4 py-2 text-white hover:text-primary">
                Portfolio
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-white hover:text-primary">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-32">
        <div className="mb-8 inline-block">
          <div className="border-2 border-white/50 rounded-full px-6 py-2 text-white text-sm font-semibold uppercase tracking-wider">
            We are event management group
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Crafting unforgettable events with creativity and style.
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <div className="text-white text-center">
            <div className="text-2xl font-bold">📍</div>
            <p className="text-sm font-semibold">Based in Kerala</p>
          </div>
          <div className="text-white text-center">
            <div className="text-2xl font-bold">🎯</div>
            <p className="text-sm font-semibold">Established in 2010</p>
          </div>
          <div className="text-white text-center">
            <div className="text-2xl font-bold">🎉</div>
            <p className="text-sm font-semibold">200+ Projects Done</p>
          </div>
        </div>
      </div>
    </section>
  )
}
