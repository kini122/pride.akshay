"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/home/hero-carousel"
import { MissionStatement } from "@/components/home/mission-statement"
import { TeamStatement } from "@/components/home/team-statement"
import { StatsSection } from "@/components/home/stats-section"
import { ClientLogos } from "@/components/home/client-logos"
import { ProcessSection } from "@/components/home/process-section"
import { CTASection } from "@/components/home/cta-section"
import { ExpertPlanning } from "@/components/home/expert-planning"

export default function Home() {
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
      <HeroCarousel />
      <MissionStatement />
      <TeamStatement />
      <StatsSection />
      <ClientLogos />
      <ProcessSection />
      <CTASection />
      <ExpertPlanning />
      <Footer />
    </main>
  )
}
