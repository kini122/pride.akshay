import { ServicePageLayout } from "@/components/services/service-page-layout"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ExhibitionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicePageLayout
        title="Exhibitions & Trade Shows"
        heroSubheadline="Showcase your brand with stunning stall designs, immersive displays, and strategic visitor engagement."
        heroImage="/trade-show-booth-setup-exhibition.jpg"
        detailedOverview={{"intro": "In a crowded trade show, your brand needs to stand out instantly. Pride Eventz offers comprehensive exhibition management\u2014from designing custom fabricated stalls to managing on-ground visitor interactions.", "whoFor": "Brands, manufacturers, and service providers participating in major trade shows, expos, and industry exhibitions.", "problemSolved": "We bridge the gap between architectural design and marketing impact, providing turnkey stall fabrication that attracts footfall and captures leads.", "whyUs": "Our in-house design and fabrication capabilities ensure that what you see in the 3D render is exactly what gets built on the exhibition floor, on time and on budget."}}
        whatWeOffer={[{"title": "3D Stall Design", "description": "Creating visually striking, functional, and brand-compliant stall architectures."}, {"title": "Custom Fabrication", "description": "High-quality woodwork, metal structures, and premium finishing."}, {"title": "AV & Tech Integration", "description": "Embedding touch screens, video walls, and interactive product demos."}, {"title": "Brand Graphics", "description": "High-resolution backlit branding, 3D lettering, and flex printing."}, {"title": "On-Site Management", "description": "Providing hostesses, lead generation staff, and technical support."}, {"title": "Dismantling & Storage", "description": "Safe breakdown and storage of reusable stall components post-event."}]}
        ourApproach={[{"title": "Brand Understanding", "description": "Analyzing your products to determine the best display and interaction methods."}, {"title": "3D Rendering", "description": "Presenting photorealistic mockups of the proposed stall design."}, {"title": "Workshop Fabrication", "description": "Building components in our controlled workshop to ensure quality."}, {"title": "On-Site Installation", "description": "Rapid, safe assembly at the venue adhering to strict expo guidelines."}, {"title": "Handover", "description": "Delivering a fully functional, pristine stall before the doors open."}]}
        keyHighlights={[{"title": "Striking Visuals", "description": "Designs scientifically formulated to draw the eye from across the hall."}, {"title": "Functional Spaces", "description": "Intelligent layouts that allow for product display, private meetings, and storage."}, {"title": "Turnkey Solutions", "description": "You simply arrive on day one; we handle all the heavy lifting and permissions."}, {"title": "Interactive Elements", "description": "Integrating VR/AR and gamification to increase visitor dwell time."}]}
        portfolioItems={[{"title": "Auto Expo Mega Pavilion", "category": "Exhibition", "description": "A massive 500sqm custom-built pavilion featuring rotating car displays and VIP lounges.", "image": "/trade-show-booth-setup-exhibition.jpg", "result": "Awarded 'Best Stall Design' at the expo."}, {"title": "Tech Expo Interactive Booth", "category": "Exhibition", "description": "A sleek, modern stall focusing on touch-screen interactions and software demos.", "image": "/corporate-presentation-pidilite-brands-showcase.jpg", "result": "Generated over 400 qualified B2B leads."}]}
        testimonial={{"client": "Marketing Head, Industrial Manufacturing", "quote": "Our stall was the talk of the exhibition. The finish quality of the fabrication was premium, and the Pride Eventz team was incredibly supportive."}}
        ctaHeadline="Stand Out at Your Next Trade Show"
        ctaSubheadline="Contact our 3D design team for a custom stall concept and quotation."
      />
      <Footer />
    </main>
  )
}
