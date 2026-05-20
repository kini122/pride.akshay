import os

services = [
    {
        "id": "corporate-events",
        "title": "Corporate Events",
        "overview": "Professional corporate gatherings — product launches, team events, annual functions — executed with precision and creativity.",
        "whatWeOffer": ["Venue selection & setup", "Audio-visual production", "Guest management", "Theme & décor design", "Live streaming", "Post-event reporting"],
        "ourApproach": ["1. Initial Consultation", "2. Planning & Design", "3. Execution", "4. Post-Event Review"],
        "keyHighlights": ["Seamless execution for large-scale events", "End-to-end management", "Focus on brand alignment", "High client satisfaction rate"],
        "testimonial": {"client": "Rajesh Kumar (Corporate Manager)", "quote": "On-time delivery and outstanding execution."},
        "ctaHeadline": "Ready to plan your corporate events?",
        "heroImage": "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
    },
    {
        "id": "destination-weddings",
        "title": "Destination Weddings",
        "overview": "From intimate ceremonies to grand celebrations, we plan and execute dream weddings tailored to every couple's unique vision.",
        "whatWeOffer": ["End-to-end wedding planning", "Venue & vendor coordination", "Floral & décor design", "Catering management", "Photography coordination", "Entertainment & live acts"],
        "ourApproach": ["1. Initial Consultation", "2. Planning & Design", "3. Execution", "4. Post-Event Review"],
        "keyHighlights": ["Bespoke designs tailored to your vision", "Access to exclusive premium venues", "Stress-free planning process", "Dedicated coordination team"],
        "testimonial": {"client": "Happy Couple", "quote": "Our dream wedding came to life beautifully without any stress!"},
        "ctaHeadline": "Ready to plan your destination weddings?",
        "heroImage": "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
    },
    {
        "id": "concerts",
        "title": "Concerts",
        "overview": "Large-scale live concert and entertainment production — from artist coordination to stage design, sound, lighting, and crowd management.",
        "whatWeOffer": ["Stage & production design", "Sound & lighting systems", "Artist management & hospitality", "Ticketing & crowd control", "Safety & security coordination", "Live streaming"],
        "ourApproach": ["1. Initial Consultation", "2. Planning & Design", "3. Execution", "4. Post-Event Review"],
        "keyHighlights": ["State-of-the-art AV equipment", "Robust crowd management", "Seamless artist coordination", "Unforgettable live experiences"],
        "testimonial": {"client": "Event Promoter", "quote": "The production quality was top-notch and the crowd loved it."},
        "ctaHeadline": "Ready to plan your concerts?",
        "heroImage": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop"
    },
    {
        "id": "conferences-mice",
        "title": "Conferences & MICE",
        "overview": "Professional Meetings, Incentives, Conferences, and Exhibitions — venue to technical production, delegate management and beyond.",
        "whatWeOffer": ["Venue sourcing & setup", "AV & technical production", "Delegate management", "Keynote & speaker coordination", "Team-building activities", "Exhibition booth management"],
        "ourApproach": ["1. Initial Consultation", "2. Planning & Design", "3. Execution", "4. Post-Event Review"],
        "keyHighlights": ["Comprehensive MICE solutions", "Flawless technical execution", "Engaging team-building experiences", "Professional delegate management"],
        "testimonial": {"client": "Association President", "quote": "A perfectly executed conference that exceeded all expectations."},
        "ctaHeadline": "Ready to plan your conferences & mice?",
        "heroImage": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
    },
    {
        "id": "exhibitions",
        "title": "Exhibitions",
        "overview": "Stunning exhibition booth designs and immersive trade show experiences that put your brand in the spotlight.",
        "whatWeOffer": ["Booth concept & design", "Fabrication & installation", "Brand collateral display", "Product demo setups", "Visitor engagement planning", "Post-event dismantling"],
        "ourApproach": ["1. Initial Consultation", "2. Planning & Design", "3. Execution", "4. Post-Event Review"],
        "keyHighlights": ["Eye-catching booth designs", "High-quality fabrication", "Strategic visitor engagement", "Hassle-free setup and teardown"],
        "testimonial": {"client": "Brand Manager", "quote": "Our booth was the highlight of the trade show thanks to Pride Eventz."},
        "ctaHeadline": "Ready to plan your exhibitions?",
        "heroImage": "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop"
    },
    {
        "id": "brand-activation",
        "title": "Brand Activation",
        "overview": "Ground-level brand activations and promotional campaigns that create real consumer connections and brand recall.",
        "whatWeOffer": ["Campaign concept & strategy", "In-mall & in-store activations", "Product sampling & demos", "Brand ambassador management", "Social media integration", "Analytics & reporting"],
        "ourApproach": ["1. Initial Consultation", "2. Planning & Design", "3. Execution", "4. Post-Event Review"],
        "keyHighlights": ["High consumer engagement", "Strategic location targeting", "Data-driven reporting", "Memorable brand experiences"],
        "testimonial": {"client": "Marketing Director", "quote": "The activation generated immense buzz and footfall for our brand."},
        "ctaHeadline": "Ready to plan your brand activation?",
        "heroImage": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
    },
    {
        "id": "rural-marketing",
        "title": "Rural Marketing",
        "overview": "Specialised on-ground campaigns reaching Tier 2, Tier 3 cities and rural markets across India.",
        "whatWeOffer": ["Van campaign management", "Haats & mela activations", "Local language communication", "Field team coordination", "BTL collateral production", "Coverage & reporting"],
        "ourApproach": ["1. Initial Consultation", "2. Planning & Design", "3. Execution", "4. Post-Event Review"],
        "keyHighlights": ["Deep rural penetration", "Culturally relevant messaging", "Extensive geographical coverage", "Measurable campaign impact"],
        "testimonial": {"client": "Regional Head", "quote": "Incredible reach and execution in markets we previously struggled to access."},
        "ctaHeadline": "Ready to plan your rural marketing?",
        "heroImage": "https://images.unsplash.com/photo-1506869640319-ce1a44e1e0cb?q=80&w=2070&auto=format&fit=crop"
    }
]

template = """import {{ Navbar }} from "@/components/navbar"
import {{ Footer }} from "@/components/footer"
import {{ ServicePageLayout }} from "@/components/services/service-page-layout"

export default function {component_name}Page() {{
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicePageLayout
        title="{title}"
        overview="{overview}"
        whatWeOffer={{{whatWeOffer}}}
        ourApproach={{{ourApproach}}}
        keyHighlights={{{keyHighlights}}}
        testimonial={{{testimonial}}}
        ctaHeadline="{ctaHeadline}"
        heroImage="{heroImage}"
      />
      <Footer />
    </main>
  )
}}
"""

import json

for service in services:
    component_name = service["id"].replace("-", " ").title().replace(" ", "")
    content = template.format(
        component_name=component_name,
        title=service["title"],
        overview=service["overview"],
        whatWeOffer=json.dumps(service["whatWeOffer"]),
        ourApproach=json.dumps(service["ourApproach"]),
        keyHighlights=json.dumps(service["keyHighlights"]),
        testimonial=json.dumps(service["testimonial"]),
        ctaHeadline=service["ctaHeadline"],
        heroImage=service["heroImage"]
    )
    
    file_path = f"app/services/{service['id']}/page.tsx"
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Generated 7 service pages successfully.")
