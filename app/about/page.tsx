import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutIntroduction } from "@/components/about/about-introduction"
import { ServicesCarouselSection } from "@/components/about/services-carousel-section"
import { ProcessSection } from "@/components/about/process-section"
import { TailoredExperience } from "@/components/about/tailored-experience"
import { ExpertiseSection } from "@/components/about/expertise-section"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"
import { TimelineSection } from "@/components/about/timeline-section"
import { TestimonialQuote } from "@/components/about/testimonial-quote"
import { CTASection } from "@/components/about/cta-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <AboutIntroduction />
      <ServicesCarouselSection />
      <ProcessSection />
      <TailoredExperience />
      <ExpertiseSection />
      <TeamSection />
      <ValuesSection />
      <TimelineSection />
      <TestimonialQuote />
      <CTASection />
      <Footer />
    </main>
  )
}
