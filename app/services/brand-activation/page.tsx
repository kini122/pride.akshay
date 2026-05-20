import { ServicePageLayout } from "@/components/services/service-page-layout"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function BrandActivationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicePageLayout
        title="Brand Activation"
        heroSubheadline="Driving measurable brand engagement through creative, on-ground experiential marketing campaigns."
        heroImage="/under-the-sea-themed-balloon-decoration-with-chara.jpg"
        detailedOverview={{"intro": "Consumers don't just want to see your brand; they want to experience it. Pride Eventz designs and executes dynamic brand activations that create meaningful, memorable interactions between your product and your target audience.", "whoFor": "FMCG brands, consumer electronics, automobile launches, and retail businesses looking to boost direct consumer engagement.", "problemSolved": "We cut through advertising clutter by putting your product directly in the hands of consumers, creating instant feedback loops and generating tangible leads.", "whyUs": "We combine creative hook concepts with aggressive on-ground operational muscle to execute activations across malls, colleges, and high-street locations nationwide."}}
        whatWeOffer={[{"title": "Mall Activations", "description": "High-footfall setups featuring games, product demos, and striking centerpieces."}, {"title": "In-Store Promotions", "description": "Retail-level activations to boost point-of-sale conversions."}, {"title": "Sampling Campaigns", "description": "Strategic distribution of product samples to the right demographic."}, {"title": "Experiential Tech", "description": "Using AR, VR, and interactive photo booths to create shareable moments."}, {"title": "Promotional Staffing", "description": "Providing trained, energetic brand ambassadors and emcees."}, {"title": "Lead Generation", "description": "Digital data capture setups for post-campaign marketing."}]}
        ourApproach={[{"title": "Campaign Strategy", "description": "Identifying the target demographic and the most effective locations."}, {"title": "Creative Hook", "description": "Designing an engaging activity that stops people in their tracks."}, {"title": "Setup Production", "description": "Fabricating portable, high-quality kiosks and activity zones."}, {"title": "Deployment", "description": "Managing permissions, logistics, and staff deployment across multiple locations."}, {"title": "Data & Reporting", "description": "Collating leads, interaction metrics, and consumer feedback."}]}
        keyHighlights={[{"title": "High Engagement", "description": "Focusing on activities that require active consumer participation."}, {"title": "Social Amplification", "description": "Designing aesthetic setups that encourage visitors to take photos and post online."}, {"title": "Trained Manpower", "description": "Our promoters are thoroughly trained on your brand guidelines and product FAQs."}, {"title": "Measurable ROI", "description": "Clear tracking of samples distributed, leads captured, and sales driven."}]}
        portfolioItems={[{"title": "FMCG Product Launch Setup", "category": "Activation", "description": "A thematic mall activation featuring a massive interactive balloon installation.", "image": "/under-the-sea-themed-balloon-decoration-with-chara.jpg", "result": "Engaged over 5,000 families in one weekend."}, {"title": "Retail Mall Roadshow", "category": "Activation", "description": "A multi-city mall activation with an engaging central stage and emcee games.", "image": "/mall-event-with-massive-crowd-aerial-view.jpg", "result": "Averaged 800+ product samplings per day."}]}
        testimonial={{"client": "Brand Manager, National Beverage Company", "quote": "The energy their promoters brought to the mall activation was incredible. We saw an immediate 30% spike in nearby retail sales during the campaign."}}
        ctaHeadline="Ready to Activate Your Brand?"
        ctaSubheadline="Let's brainstorm an experiential campaign that your consumers won't forget."
      />
      <Footer />
    </main>
  )
}
