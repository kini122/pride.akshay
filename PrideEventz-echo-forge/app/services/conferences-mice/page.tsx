import { ServicePageLayout } from "@/components/services/service-page-layout"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ConferencesMicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicePageLayout
        title="Conferences & MICE"
        heroSubheadline="Delivering professional, business-class execution for Meetings, Incentives, Conferences, and Exhibitions."
        heroImage="/conference-room-setup-corporate-event.jpg"
        detailedOverview={{"intro": "MICE events are the cornerstone of corporate networking and knowledge sharing. Pride Eventz delivers sophisticated conference management services that prioritize delegate experience, smooth scheduling, and high-quality presentations.", "whoFor": "Industry associations, multinational corporations, and medical or technical bodies hosting large-scale knowledge-sharing events.", "problemSolved": "Managing hundreds of delegates, multiple breakout sessions, and complex speaker schedules requires extreme organization. We provide the systems and personnel to make it effortless.", "whyUs": "We blend corporate professionalism with innovative event tech, ensuring your conference isn't just organized, but truly engaging for all attendees."}}
        whatWeOffer={[{"title": "Venue Procurement", "description": "Sourcing luxury convention centers and star hotels that meet capacity requirements."}, {"title": "Delegate Registration", "description": "Digital check-ins, custom lanyards, and seamless registration desk management."}, {"title": "Speaker Coordination", "description": "Managing travel, presentations, and green rooms for keynote speakers."}, {"title": "AV & Presentation", "description": "Crisp audio and high-resolution LED screens for clear, impactful presentations."}, {"title": "Breakout Sessions", "description": "Coordinating simultaneous tracks in multiple halls with distinct AV setups."}, {"title": "Gala Dinners", "description": "Curating evening entertainment and networking dinners to conclude the event."}]}
        ourApproach={[{"title": "Requirement Analysis", "description": "Determining attendee numbers, session formats, and accommodation needs."}, {"title": "Digital Integration", "description": "Setting up event apps, registration portals, and QR ticketing."}, {"title": "Logistics & Travel", "description": "Coordinating flights, airport transfers, and hotel room blocks."}, {"title": "On-Site Management", "description": "Deploying a massive helpdesk and usher team for smooth delegate flow."}, {"title": "Post-Event Analytics", "description": "Providing attendance reports, feedback scores, and session engagement metrics."}]}
        keyHighlights={[{"title": "Flawless Timelines", "description": "Keeping complex multi-speaker schedules running strictly on time."}, {"title": "Tech-Enabled", "description": "Utilizing the latest in RFID, event apps, and live-streaming technology."}, {"title": "Premium Hospitality", "description": "Ensuring F&B matches the high standards expected by corporate delegates."}, {"title": "Sponsor Booths", "description": "Integrating exhibition areas seamlessly into the conference flow."}]}
        portfolioItems={[{"title": "International Medical Summit", "category": "MICE", "description": "A 3-day conference featuring 40+ speakers and simultaneous breakout sessions.", "image": "/conference-room-setup-corporate-event.jpg", "result": "Smooth management of 800+ international delegates."}, {"title": "Tech Leadership Forum", "category": "MICE", "description": "High-end corporate summit with futuristic stage design and live streaming.", "image": "/corporate-presentation-pidilite-brands-showcase.jpg", "result": "Over 5,000 virtual attendees integrated flawlessly."}]}
        testimonial={{"client": "Director, National Medical Association", "quote": "The registration process was a breeze, and the AV support for our international speakers was world-class. A truly professional team."}}
        ctaHeadline="Host a World-Class Conference"
        ctaSubheadline="Let us manage the logistics while you focus on delivering great content."
      />
      <Footer />
    </main>
  )
}
