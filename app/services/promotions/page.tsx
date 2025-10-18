"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PromotionsHero } from "@/components/promotions/promotions-hero"
import { IntroductionSection } from "@/components/promotions/introduction-section"
import { FeatureSpotlight } from "@/components/promotions/feature-spotlight"
import { ProductLaunches } from "@/components/promotions/product-launches"
import { BrandPromotions } from "@/components/promotions/brand-promotions"
import { ServicesBreakdown } from "@/components/promotions/services-breakdown"
import { CaseStudies } from "@/components/promotions/case-studies"
import { ProcessTimeline } from "@/components/promotions/process-timeline"
import { CampaignTypes } from "@/components/promotions/campaign-types"
import { WhyChooseUs } from "@/components/promotions/why-choose-us"
import { TestimonialsSlider } from "@/components/promotions/testimonials-slider"
import { IndustriesServed } from "@/components/promotions/industries-served"
import { StatsCounter } from "@/components/promotions/stats-counter"
import { GallerySection } from "@/components/promotions/gallery-section"
import { FAQAccordion } from "@/components/promotions/faq-accordion"
import { CTASection } from "@/components/promotions/cta-section"
import { RelatedServices } from "@/components/promotions/related-services"

export default function PromotionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PromotionsHero />
      <IntroductionSection />
      <FeatureSpotlight />
      <ProductLaunches />
      <BrandPromotions />
      <ServicesBreakdown />
      <CaseStudies />
      <ProcessTimeline />
      <CampaignTypes />
      <WhyChooseUs />
      <TestimonialsSlider />
      <IndustriesServed />
      <StatsCounter />
      <GallerySection />
      <FAQAccordion />
      <PricingSection />
      <CTASection />
      <RelatedServices />
      <Footer />
    </main>
  )
}
