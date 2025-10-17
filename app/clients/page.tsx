"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ClientsHero } from "@/components/clients/clients-hero"
import { FeaturedClientsGrid } from "@/components/clients/featured-clients-grid"
import { TestimonialsSection } from "@/components/clients/testimonials-section"
import { ClientLogosCarousel } from "@/components/clients/client-logos-carousel"
import { ImpactStatement } from "@/components/clients/impact-statement"
import { StatsIndicators } from "@/components/clients/stats-indicators"
import { IndustrySectors } from "@/components/clients/industry-sectors"
import { ClientSuccessStories } from "@/components/clients/client-success-stories"
import { PartnershipTiers } from "@/components/clients/partnership-tiers"
import { ClientsCTA } from "@/components/clients/clients-cta"

export default function ClientsPage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      setScrollProgress((scrolled / windowHeight) * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <ClientsHero />
      <FeaturedClientsGrid />
      <TestimonialsSection />
      <ClientLogosCarousel />
      <ImpactStatement />
      <StatsIndicators />
      <IndustrySectors />
      <ClientSuccessStories />
      <PartnershipTiers />
      <ClientsCTA />
      <Footer />
    </main>
  )
}
