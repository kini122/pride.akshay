import { ServicePageLayout } from "@/components/services/service-page-layout"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function DestinationWeddingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicePageLayout
        title="Destination Weddings"
        heroSubheadline="Transforming your dream wedding into a breathtaking reality with bespoke design and seamless coordination."
        heroImage="/elegant-wedding-stage-decoration.jpg"
        detailedOverview={{"intro": "Your wedding day should be nothing short of magical. Pride Eventz specializes in crafting luxury destination weddings across India's most stunning locales. From royal palace ceremonies to serene beachside vows, we bring your vision to life.", "whoFor": "Couples and families seeking a stress-free, luxurious wedding experience with personalized themes and flawless hospitality.", "problemSolved": "Planning a wedding from afar can be overwhelming. We act as your local experts, handling every vendor, venue detail, and logistic so you can simply enjoy the celebration.", "whyUs": "Our dedicated wedding planners combine creative styling with rigorous logistical planning to ensure your special days are perfectly orchestrated."}}
        whatWeOffer={[{"title": "Venue Sourcing", "description": "Finding and securing the perfect luxury resorts, heritage properties, or beach venues."}, {"title": "Thematic D\u00e9cor", "description": "Bespoke floral arrangements, stage setups, and ambient lighting designed to your taste."}, {"title": "Guest Hospitality", "description": "Complete logistics including airport transfers, welcome kits, and room allocations."}, {"title": "Entertainment", "description": "Booking premium artists, live bands, DJs, and traditional performers."}, {"title": "Ritual Coordination", "description": "Ensuring all cultural and religious requirements are respectfully met and scheduled."}, {"title": "Catering & F&B", "description": "Curating exquisite multi-cuisine menus and premium bar setups with top caterers."}]}
        ourApproach={[{"title": "Initial Consultation", "description": "Understanding your love story, preferred locations, and vision for the wedding."}, {"title": "Budgeting & Venues", "description": "Providing transparent cost estimates and conducting venue recce visits."}, {"title": "Design & Styling", "description": "Creating mood boards, 3D d\u00e9cor renders, and finalizing the aesthetic."}, {"title": "Logistics Planning", "description": "Structuring the timeline, travel itineraries, and vendor load-ins."}, {"title": "Flawless Execution", "description": "A dedicated team on the ground to manage the flow of events from Haldi to Reception."}]}
        keyHighlights={[{"title": "Personalized Styling", "description": "No two weddings are alike. We design unique setups tailored to your personality."}, {"title": "Stress-Free Hospitality", "description": "A dedicated shadow team for the couple and VIP guests."}, {"title": "Trusted Vendor Network", "description": "Access to the finest decorators, makeup artists, and photographers in the industry."}, {"title": "Crisis Management", "description": "Always prepared with backup plans for weather changes or unexpected delays."}]}
        portfolioItems={[{"title": "Elegant Royal Wedding", "category": "Wedding", "description": "A luxurious multi-day celebration featuring elaborate floral mandaps and vintage themes.", "image": "/elegant-wedding-stage-decoration.jpg", "result": "Flawless execution of 5 distinct events over 3 days."}, {"title": "Traditional Kerala Ceremony", "category": "Wedding", "description": "A culturally rich celebration featuring traditional dancers and authentic rituals.", "image": "/traditional-kerala-dancers-in-costumes-inauguratio.jpg", "result": "Seamless integration of tradition and modern luxury."}]}
        testimonial={{"client": "Happy Couple, Kochi", "quote": "They didn't just plan a wedding; they created a fairy tale for us. Every single guest was treated like royalty."}}
        ctaHeadline="Let's Start Planning Your Dream Wedding"
        ctaSubheadline="Schedule a free consultation with our luxury wedding planners today."
      />
      <Footer />
    </main>
  )
}
