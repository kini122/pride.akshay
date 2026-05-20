"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { FilterTabs } from "@/components/portfolio/filter-tabs"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { LoadMoreSection } from "@/components/portfolio/load-more-section"
import { CTABanner } from "@/components/portfolio/cta-banner"
import { RelatedServices } from "@/components/portfolio/related-services"
import { TestimonialSlider } from "@/components/portfolio/testimonial-slider"
import { StatsCounter } from "@/components/portfolio/stats-counter"

export default function PortfolioPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")

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
    <main className="min-h-screen bg-background">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <PortfolioHero />
      <FilterTabs onFilterChange={setActiveFilter} />
      <PortfolioGrid filter={activeFilter} />
      <LoadMoreSection />
      <CTABanner />
      <RelatedServices />
      <TestimonialSlider />
      <StatsCounter />
      <Footer />
    </main>
  )
}
