"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CorporateHero } from "@/components/corporate/corporate-hero"
import { IntroductionSection } from "@/components/corporate/introduction-section"
import { FeatureHighlight } from "@/components/corporate/feature-highlight"
import { CorporateShows } from "@/components/corporate/corporate-shows"
import { CorporateEvents } from "@/components/corporate/corporate-events"
import { ServicesBreakdown } from "@/components/corporate/services-breakdown"
import { ProcessTimeline } from "@/components/corporate/process-timeline"
import { CaseStudies } from "@/components/corporate/case-studies"
import { CapabilitiesGrid } from "@/components/corporate/capabilities-grid"
import { ClientTestimonials } from "@/components/corporate/client-testimonials"
import { PricingPackages } from "@/components/corporate/pricing-packages"
import { FAQSection } from "@/components/corporate/faq-section"
import { StatisticsSection } from "@/components/corporate/statistics-section"
import { RelatedServices } from "@/components/corporate/related-services"
import { CTASection } from "@/components/corporate/cta-section"

export default function CorporateEventsPage() {
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
      <CorporateHero />
      <IntroductionSection />
      <FeatureHighlight />
      <CorporateShows />
      <CorporateEvents />
      <ServicesBreakdown />
      <ProcessTimeline />
      <CaseStudies />
      <CapabilitiesGrid />
      <ClientTestimonials />
      <PricingPackages />
      <FAQSection />
      <StatisticsSection />
      <RelatedServices />
      <CTASection />
      <Footer />
    </main>
  )
}
