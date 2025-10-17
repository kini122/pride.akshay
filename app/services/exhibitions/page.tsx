"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExhibitionsHero } from "@/components/exhibitions/exhibitions-hero"
import { IntroductionSection } from "@/components/exhibitions/introduction-section"
import { FeatureSpotlight } from "@/components/exhibitions/feature-spotlight"
import { EducationalExhibition } from "@/components/exhibitions/educational-exhibition"
import { TechExhibition } from "@/components/exhibitions/tech-exhibition"
import { ExhibitionTypesGrid } from "@/components/exhibitions/exhibition-types-grid"
import { ProcessSection } from "@/components/exhibitions/process-section"
import { FeaturesCapabilities } from "@/components/exhibitions/features-capabilities"
import { GalleryShowcase } from "@/components/exhibitions/gallery-showcase"
import { TechnicalSpecifications } from "@/components/exhibitions/technical-specifications"
import { IndustriesServed } from "@/components/exhibitions/industries-served"
import { CaseStudies } from "@/components/exhibitions/case-studies"
import { TestimonialsSection } from "@/components/exhibitions/testimonials-section"
import { StatsCounter } from "@/components/exhibitions/stats-counter"
import { TechnologyInnovation } from "@/components/exhibitions/technology-innovation"
import { FAQSection } from "@/components/exhibitions/faq-section"
import { PricingInformation } from "@/components/exhibitions/pricing-information"
import { CTASection } from "@/components/exhibitions/cta-section"
import { RelatedServices } from "@/components/exhibitions/related-services"

export default function ExhibitionsPage() {
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
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <ExhibitionsHero />
      <IntroductionSection />
      <FeatureSpotlight />
      <EducationalExhibition />
      <TechExhibition />
      <ExhibitionTypesGrid />
      <ProcessSection />
      <FeaturesCapabilities />
      <GalleryShowcase />
      <TechnicalSpecifications />
      <IndustriesServed />
      <CaseStudies />
      <TestimonialsSection />
      <StatsCounter />
      <TechnologyInnovation />
      <FAQSection />
      <PricingInformation />
      <CTASection />
      <RelatedServices />
      <Footer />
    </main>
  )
}
