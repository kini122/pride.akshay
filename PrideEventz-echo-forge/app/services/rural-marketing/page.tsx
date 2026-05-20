import { ServicePageLayout } from "@/components/services/service-page-layout"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function RuralMarketingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicePageLayout
        title="Rural Marketing"
        heroSubheadline="Penetrating deep into Tier 2, Tier 3 cities and rural India with impactful, localized on-ground campaigns."
        heroImage="/sunfeast-arrowroot-stage-branding-corporate-event.jpg"
        detailedOverview={{"intro": "The real growth engine of India lies in its rural markets. Pride Eventz specializes in navigating the complex logistics and cultural nuances of rural marketing, delivering your brand message directly to the heartland.", "whoFor": "Agri-businesses, telecom companies, FMCG brands, and financial institutions targeting rural and semi-urban demographics.", "problemSolved": "Reaching rural audiences requires dealing with difficult terrain, local permissions, and language barriers. Our experienced field teams handle these challenges seamlessly.", "whyUs": "With deep-rooted networks across rural India and a fleet of customized campaign vehicles, we ensure your message is delivered in the local dialect with maximum impact."}}
        whatWeOffer={[{"title": "Van Campaigns", "description": "Custom fabricated mobile units equipped with AV systems for village-to-village reach."}, {"title": "Haat & Mela Activations", "description": "Strategic stall placements and engaging activities in high-footfall weekly markets."}, {"title": "Nukkad Natak (Street Plays)", "description": "Using traditional theatre to communicate brand benefits and social messages."}, {"title": "Retailer Contact Programs", "description": "Engaging with local shopkeepers to boost distribution and visibility."}, {"title": "Agri-Connect Programs", "description": "Specialized campaigns targeting farmers at mandis and demonstration plots."}, {"title": "Vernacular Content", "description": "Developing localized audio-visual content and printed collaterals."}]}
        ourApproach={[{"title": "Route Planning", "description": "Mapping out optimized travel routes covering maximum target villages."}, {"title": "Vehicle Fabrication", "description": "Converting standard trucks into eye-catching, functional brand stages."}, {"title": "Local Casting", "description": "Hiring local emcees and actors who speak the regional dialect fluently."}, {"title": "Field Execution", "description": "Daily route deployment with live GPS tracking and progress reports."}, {"title": "Impact Measurement", "description": "Collecting rural consumer data, sales figures, and photographic evidence."}]}
        keyHighlights={[{"title": "Deep Penetration", "description": "Reaching remote areas where traditional media and digital advertising fail to impact."}, {"title": "Cultural Relevance", "description": "Tailoring communication to align with local customs and sensibilities."}, {"title": "Real-Time Tracking", "description": "Daily MIS reports and live location tracking of all campaign vehicles."}, {"title": "Scalable Operations", "description": "Capability to run simultaneous 50+ van campaigns across multiple states."}]}
        portfolioItems={[{"title": "Sunfeast Rural Connect", "category": "Rural", "description": "A massive multi-state van campaign engaging rural consumers with product sampling and games.", "image": "/sunfeast-arrowroot-stage-branding-corporate-event.jpg", "result": "Reached over 500 villages in 45 days."}, {"title": "Telecom Network Expansion", "category": "Rural", "description": "On-ground mela activations promoting new network coverage in semi-urban belts.", "image": "/idea-telecom-corporate-event-stage-branding.jpg", "result": "Generated thousands of new SIM activations locally."}]}
        testimonial={{"client": "Marketing Director, Agri-Tech Solutions", "quote": "Pride Eventz understands the pulse of rural India. Their van campaign execution was flawless, despite the challenging terrain and weather conditions."}}
        ctaHeadline="Expand Your Reach into Rural Markets"
        ctaSubheadline="Connect with our rural marketing experts to plan a highly targeted, localized campaign."
      />
      <Footer />
    </main>
  )
}
