import os

services = [
    {
        "id": "corporate-events",
        "title": "Corporate Events",
        "heroSubheadline": "Elevating corporate gatherings with flawless execution, premium production, and impactful brand experiences.",
        "heroImage": "/corporate-presentation-pidilite-brands-showcase.jpg",
        "detailedOverview": {
            "intro": "At Pride Eventz, we understand that corporate events are a direct reflection of your brand's prestige and values. From high-stakes product launches to engaging annual meetings, we provide end-to-end event management that ensures every detail is professionally handled.",
            "whoFor": "For enterprise businesses, regional corporate offices, and fast-growing companies looking to make a lasting impression on employees, stakeholders, and clients.",
            "problemSolved": "We eliminate the stress of logistics, AV coordination, and vendor management, allowing your team to focus on business objectives while we handle the execution.",
            "whyUs": "With over a decade of experience across India, our dedicated corporate team guarantees business-class execution with absolute precision."
        },
        "whatWeOffer": [
            {"title": "Product Launches", "description": "High-impact unveilings that generate buzz and media coverage for your new products."},
            {"title": "Annual Meetings & Townhalls", "description": "Seamlessly produced internal gatherings with flawless audio-visual setups."},
            {"title": "Employee Engagement", "description": "Team building and celebration events designed to boost morale and company culture."},
            {"title": "Award Ceremonies", "description": "Elegant gala dinners and recognition events honoring your top performers."},
            {"title": "AV & Stage Production", "description": "State-of-the-art lighting, sound, LED screens, and custom stage fabrication."},
            {"title": "Guest & VIP Handling", "description": "Professional hospitality services including transport, accommodation, and concierge."}
        ],
        "ourApproach": [
            {"title": "Discovery & Briefing", "description": "Understanding your corporate objectives, brand guidelines, and audience expectations."},
            {"title": "Planning & Creative", "description": "Developing thematic concepts, 3D stage renders, and comprehensive event schedules."},
            {"title": "Production & Sourcing", "description": "Coordinating with premium vendors, fabricating stages, and testing all technical setups."},
            {"title": "Event Execution", "description": "On-ground management by experienced show callers and floor managers."},
            {"title": "Review & Reporting", "description": "Post-event debriefs, media collation, and feedback analysis."}
        ],
        "keyHighlights": [
            {"title": "End-to-End Execution", "description": "From concept creation to tear-down, we handle every single aspect."},
            {"title": "Technical Precision", "description": "Fail-safe AV setups ensuring your presentations run without a hitch."},
            {"title": "Brand Alignment", "description": "Strict adherence to corporate identity guidelines in all visual elements."},
            {"title": "Scalability", "description": "Capable of managing intimate board meetings or massive 5000+ attendee summits."}
        ],
        "portfolioItems": [
            {"title": "Pidilite Brands Showcase", "category": "Corporate", "description": "A comprehensive brand showcase featuring multiple product lines and interactive displays.", "image": "/corporate-presentation-pidilite-brands-showcase.jpg", "result": "1,200+ attendees with seamless execution."},
            {"title": "Idea Telecom Launch", "category": "Corporate", "description": "High-energy stage branding and corporate event for regional team members.", "image": "/idea-telecom-corporate-event-stage-branding.jpg", "result": "Record-breaking employee engagement scores."}
        ],
        "testimonial": {
            "client": "VP of Marketing, Leading FMCG Brand",
            "quote": "Pride Eventz delivered our annual meet with absolute perfection. Their attention to technical details and flow was outstanding."
        },
        "ctaHeadline": "Ready to Plan Your Next Corporate Event?",
        "ctaSubheadline": "Connect with our corporate events team to discuss your objectives and receive a tailored proposal."
    },
    {
        "id": "destination-weddings",
        "title": "Destination Weddings",
        "heroSubheadline": "Transforming your dream wedding into a breathtaking reality with bespoke design and seamless coordination.",
        "heroImage": "/elegant-wedding-stage-decoration.jpg",
        "detailedOverview": {
            "intro": "Your wedding day should be nothing short of magical. Pride Eventz specializes in crafting luxury destination weddings across India's most stunning locales. From royal palace ceremonies to serene beachside vows, we bring your vision to life.",
            "whoFor": "Couples and families seeking a stress-free, luxurious wedding experience with personalized themes and flawless hospitality.",
            "problemSolved": "Planning a wedding from afar can be overwhelming. We act as your local experts, handling every vendor, venue detail, and logistic so you can simply enjoy the celebration.",
            "whyUs": "Our dedicated wedding planners combine creative styling with rigorous logistical planning to ensure your special days are perfectly orchestrated."
        },
        "whatWeOffer": [
            {"title": "Venue Sourcing", "description": "Finding and securing the perfect luxury resorts, heritage properties, or beach venues."},
            {"title": "Thematic Décor", "description": "Bespoke floral arrangements, stage setups, and ambient lighting designed to your taste."},
            {"title": "Guest Hospitality", "description": "Complete logistics including airport transfers, welcome kits, and room allocations."},
            {"title": "Entertainment", "description": "Booking premium artists, live bands, DJs, and traditional performers."},
            {"title": "Ritual Coordination", "description": "Ensuring all cultural and religious requirements are respectfully met and scheduled."},
            {"title": "Catering & F&B", "description": "Curating exquisite multi-cuisine menus and premium bar setups with top caterers."}
        ],
        "ourApproach": [
            {"title": "Initial Consultation", "description": "Understanding your love story, preferred locations, and vision for the wedding."},
            {"title": "Budgeting & Venues", "description": "Providing transparent cost estimates and conducting venue recce visits."},
            {"title": "Design & Styling", "description": "Creating mood boards, 3D décor renders, and finalizing the aesthetic."},
            {"title": "Logistics Planning", "description": "Structuring the timeline, travel itineraries, and vendor load-ins."},
            {"title": "Flawless Execution", "description": "A dedicated team on the ground to manage the flow of events from Haldi to Reception."}
        ],
        "keyHighlights": [
            {"title": "Personalized Styling", "description": "No two weddings are alike. We design unique setups tailored to your personality."},
            {"title": "Stress-Free Hospitality", "description": "A dedicated shadow team for the couple and VIP guests."},
            {"title": "Trusted Vendor Network", "description": "Access to the finest decorators, makeup artists, and photographers in the industry."},
            {"title": "Crisis Management", "description": "Always prepared with backup plans for weather changes or unexpected delays."}
        ],
        "portfolioItems": [
            {"title": "Elegant Royal Wedding", "category": "Wedding", "description": "A luxurious multi-day celebration featuring elaborate floral mandaps and vintage themes.", "image": "/elegant-wedding-stage-decoration.jpg", "result": "Flawless execution of 5 distinct events over 3 days."},
            {"title": "Traditional Kerala Ceremony", "category": "Wedding", "description": "A culturally rich celebration featuring traditional dancers and authentic rituals.", "image": "/traditional-kerala-dancers-in-costumes-inauguratio.jpg", "result": "Seamless integration of tradition and modern luxury."}
        ],
        "testimonial": {
            "client": "Happy Couple, Kochi",
            "quote": "They didn't just plan a wedding; they created a fairy tale for us. Every single guest was treated like royalty."
        },
        "ctaHeadline": "Let's Start Planning Your Dream Wedding",
        "ctaSubheadline": "Schedule a free consultation with our luxury wedding planners today."
    },
    {
        "id": "concerts",
        "title": "Live Concerts",
        "heroSubheadline": "Producing high-energy live music events with massive stage production and flawless crowd management.",
        "heroImage": "/live-performance-with-professional-lighting.jpg",
        "detailedOverview": {
            "intro": "Live concerts demand an entirely different level of expertise. From massive technical riders to complex crowd flow dynamics, Pride Eventz has the experience to execute stadium-scale concerts and intimate live gigs safely and spectacularly.",
            "whoFor": "Music promoters, artists, corporate sponsors, and festival organizers looking to host large-scale public or private entertainment events.",
            "problemSolved": "We mitigate the massive risks associated with large crowds and live technical production by implementing rigorous safety protocols and employing top-tier audio-visual engineers.",
            "whyUs": "Our production team understands the technical language of international artist riders and has a proven track record of securing necessary local permissions swiftly."
        },
        "whatWeOffer": [
            {"title": "Stage Production", "description": "Massive trussing, custom stage fabrication, and dynamic LED backdrops."},
            {"title": "Sound & Lighting", "description": "Line-array audio systems and intelligent lighting rigs programmed for impact."},
            {"title": "Artist Management", "description": "Handling hospitality riders, green rooms, transport, and scheduling for performers."},
            {"title": "Permissions & Licensing", "description": "Securing all necessary local, police, and entertainment tax clearances."},
            {"title": "Crowd Management", "description": "Strategic barricading, security deployment, and safe entry/exit flow planning."},
            {"title": "Ticketing Integration", "description": "Setting up box offices and integrating with online ticketing platforms."}
        ],
        "ourApproach": [
            {"title": "Feasibility Study", "description": "Analyzing venue capacities, acoustics, and infrastructural requirements."},
            {"title": "Technical Planning", "description": "Mapping out sound plots, lighting grids, and stage engineering."},
            {"title": "Safety & Security", "description": "Developing comprehensive evacuation and crowd control protocols."},
            {"title": "Production Build", "description": "Rigging, testing, and sound checks leading up to the main event."},
            {"title": "Show Calling", "description": "Live coordination of lights, sound, visuals, and artist cues during the performance."}
        ],
        "keyHighlights": [
            {"title": "Safety First", "description": "Rigorous structural integrity checks for all staging and trussing."},
            {"title": "Technical Excellence", "description": "Partnering with the country's top sound engineers and lighting designers."},
            {"title": "VIP Experiences", "description": "Creating premium VVIP lounges and viewing decks with dedicated F&B."},
            {"title": "Sponsor Integration", "description": "Ensuring maximum visibility and engagement for event sponsors."}
        ],
        "portfolioItems": [
            {"title": "Arena Rock Concert", "category": "Concert", "description": "Massive stadium production with extensive pyrotechnics and intelligent lighting.", "image": "/live-performance-with-professional-lighting.jpg", "result": "Sold out crowd of 15,000+ safely managed."},
            {"title": "Corporate Music Festival", "category": "Concert", "description": "A high-energy private concert featuring top-tier playback singers.", "image": "/corporate-event-with-crowd-stage-lighting.jpg", "result": "Electrifying atmosphere with zero technical faults."}
        ],
        "testimonial": {
            "client": "Event Promoter, Live Nation India",
            "quote": "Pride Eventz handles the technical backend so flawlessly that the artists and promoters can just focus on the show. Highly recommended."
        },
        "ctaHeadline": "Planning a Massive Live Event?",
        "ctaSubheadline": "Connect with our concert production specialists to review your technical riders and venue requirements."
    },
    {
        "id": "conferences-mice",
        "title": "Conferences & MICE",
        "heroSubheadline": "Delivering professional, business-class execution for Meetings, Incentives, Conferences, and Exhibitions.",
        "heroImage": "/conference-room-setup-corporate-event.jpg",
        "detailedOverview": {
            "intro": "MICE events are the cornerstone of corporate networking and knowledge sharing. Pride Eventz delivers sophisticated conference management services that prioritize delegate experience, smooth scheduling, and high-quality presentations.",
            "whoFor": "Industry associations, multinational corporations, and medical or technical bodies hosting large-scale knowledge-sharing events.",
            "problemSolved": "Managing hundreds of delegates, multiple breakout sessions, and complex speaker schedules requires extreme organization. We provide the systems and personnel to make it effortless.",
            "whyUs": "We blend corporate professionalism with innovative event tech, ensuring your conference isn't just organized, but truly engaging for all attendees."
        },
        "whatWeOffer": [
            {"title": "Venue Procurement", "description": "Sourcing luxury convention centers and star hotels that meet capacity requirements."},
            {"title": "Delegate Registration", "description": "Digital check-ins, custom lanyards, and seamless registration desk management."},
            {"title": "Speaker Coordination", "description": "Managing travel, presentations, and green rooms for keynote speakers."},
            {"title": "AV & Presentation", "description": "Crisp audio and high-resolution LED screens for clear, impactful presentations."},
            {"title": "Breakout Sessions", "description": "Coordinating simultaneous tracks in multiple halls with distinct AV setups."},
            {"title": "Gala Dinners", "description": "Curating evening entertainment and networking dinners to conclude the event."}
        ],
        "ourApproach": [
            {"title": "Requirement Analysis", "description": "Determining attendee numbers, session formats, and accommodation needs."},
            {"title": "Digital Integration", "description": "Setting up event apps, registration portals, and QR ticketing."},
            {"title": "Logistics & Travel", "description": "Coordinating flights, airport transfers, and hotel room blocks."},
            {"title": "On-Site Management", "description": "Deploying a massive helpdesk and usher team for smooth delegate flow."},
            {"title": "Post-Event Analytics", "description": "Providing attendance reports, feedback scores, and session engagement metrics."}
        ],
        "keyHighlights": [
            {"title": "Flawless Timelines", "description": "Keeping complex multi-speaker schedules running strictly on time."},
            {"title": "Tech-Enabled", "description": "Utilizing the latest in RFID, event apps, and live-streaming technology."},
            {"title": "Premium Hospitality", "description": "Ensuring F&B matches the high standards expected by corporate delegates."},
            {"title": "Sponsor Booths", "description": "Integrating exhibition areas seamlessly into the conference flow."}
        ],
        "portfolioItems": [
            {"title": "International Medical Summit", "category": "MICE", "description": "A 3-day conference featuring 40+ speakers and simultaneous breakout sessions.", "image": "/conference-room-setup-corporate-event.jpg", "result": "Smooth management of 800+ international delegates."},
            {"title": "Tech Leadership Forum", "category": "MICE", "description": "High-end corporate summit with futuristic stage design and live streaming.", "image": "/corporate-presentation-pidilite-brands-showcase.jpg", "result": "Over 5,000 virtual attendees integrated flawlessly."}
        ],
        "testimonial": {
            "client": "Director, National Medical Association",
            "quote": "The registration process was a breeze, and the AV support for our international speakers was world-class. A truly professional team."
        },
        "ctaHeadline": "Host a World-Class Conference",
        "ctaSubheadline": "Let us manage the logistics while you focus on delivering great content."
    },
    {
        "id": "exhibitions",
        "title": "Exhibitions & Trade Shows",
        "heroSubheadline": "Showcase your brand with stunning stall designs, immersive displays, and strategic visitor engagement.",
        "heroImage": "/trade-show-booth-setup-exhibition.jpg",
        "detailedOverview": {
            "intro": "In a crowded trade show, your brand needs to stand out instantly. Pride Eventz offers comprehensive exhibition management—from designing custom fabricated stalls to managing on-ground visitor interactions.",
            "whoFor": "Brands, manufacturers, and service providers participating in major trade shows, expos, and industry exhibitions.",
            "problemSolved": "We bridge the gap between architectural design and marketing impact, providing turnkey stall fabrication that attracts footfall and captures leads.",
            "whyUs": "Our in-house design and fabrication capabilities ensure that what you see in the 3D render is exactly what gets built on the exhibition floor, on time and on budget."
        },
        "whatWeOffer": [
            {"title": "3D Stall Design", "description": "Creating visually striking, functional, and brand-compliant stall architectures."},
            {"title": "Custom Fabrication", "description": "High-quality woodwork, metal structures, and premium finishing."},
            {"title": "AV & Tech Integration", "description": "Embedding touch screens, video walls, and interactive product demos."},
            {"title": "Brand Graphics", "description": "High-resolution backlit branding, 3D lettering, and flex printing."},
            {"title": "On-Site Management", "description": "Providing hostesses, lead generation staff, and technical support."},
            {"title": "Dismantling & Storage", "description": "Safe breakdown and storage of reusable stall components post-event."}
        ],
        "ourApproach": [
            {"title": "Brand Understanding", "description": "Analyzing your products to determine the best display and interaction methods."},
            {"title": "3D Rendering", "description": "Presenting photorealistic mockups of the proposed stall design."},
            {"title": "Workshop Fabrication", "description": "Building components in our controlled workshop to ensure quality."},
            {"title": "On-Site Installation", "description": "Rapid, safe assembly at the venue adhering to strict expo guidelines."},
            {"title": "Handover", "description": "Delivering a fully functional, pristine stall before the doors open."}
        ],
        "keyHighlights": [
            {"title": "Striking Visuals", "description": "Designs scientifically formulated to draw the eye from across the hall."},
            {"title": "Functional Spaces", "description": "Intelligent layouts that allow for product display, private meetings, and storage."},
            {"title": "Turnkey Solutions", "description": "You simply arrive on day one; we handle all the heavy lifting and permissions."},
            {"title": "Interactive Elements", "description": "Integrating VR/AR and gamification to increase visitor dwell time."}
        ],
        "portfolioItems": [
            {"title": "Auto Expo Mega Pavilion", "category": "Exhibition", "description": "A massive 500sqm custom-built pavilion featuring rotating car displays and VIP lounges.", "image": "/trade-show-booth-setup-exhibition.jpg", "result": "Awarded 'Best Stall Design' at the expo."},
            {"title": "Tech Expo Interactive Booth", "category": "Exhibition", "description": "A sleek, modern stall focusing on touch-screen interactions and software demos.", "image": "/corporate-presentation-pidilite-brands-showcase.jpg", "result": "Generated over 400 qualified B2B leads."}
        ],
        "testimonial": {
            "client": "Marketing Head, Industrial Manufacturing",
            "quote": "Our stall was the talk of the exhibition. The finish quality of the fabrication was premium, and the Pride Eventz team was incredibly supportive."
        },
        "ctaHeadline": "Stand Out at Your Next Trade Show",
        "ctaSubheadline": "Contact our 3D design team for a custom stall concept and quotation."
    },
    {
        "id": "brand-activation",
        "title": "Brand Activation",
        "heroSubheadline": "Driving measurable brand engagement through creative, on-ground experiential marketing campaigns.",
        "heroImage": "/under-the-sea-themed-balloon-decoration-with-chara.jpg",
        "detailedOverview": {
            "intro": "Consumers don't just want to see your brand; they want to experience it. Pride Eventz designs and executes dynamic brand activations that create meaningful, memorable interactions between your product and your target audience.",
            "whoFor": "FMCG brands, consumer electronics, automobile launches, and retail businesses looking to boost direct consumer engagement.",
            "problemSolved": "We cut through advertising clutter by putting your product directly in the hands of consumers, creating instant feedback loops and generating tangible leads.",
            "whyUs": "We combine creative hook concepts with aggressive on-ground operational muscle to execute activations across malls, colleges, and high-street locations nationwide."
        },
        "whatWeOffer": [
            {"title": "Mall Activations", "description": "High-footfall setups featuring games, product demos, and striking centerpieces."},
            {"title": "In-Store Promotions", "description": "Retail-level activations to boost point-of-sale conversions."},
            {"title": "Sampling Campaigns", "description": "Strategic distribution of product samples to the right demographic."},
            {"title": "Experiential Tech", "description": "Using AR, VR, and interactive photo booths to create shareable moments."},
            {"title": "Promotional Staffing", "description": "Providing trained, energetic brand ambassadors and emcees."},
            {"title": "Lead Generation", "description": "Digital data capture setups for post-campaign marketing."}
        ],
        "ourApproach": [
            {"title": "Campaign Strategy", "description": "Identifying the target demographic and the most effective locations."},
            {"title": "Creative Hook", "description": "Designing an engaging activity that stops people in their tracks."},
            {"title": "Setup Production", "description": "Fabricating portable, high-quality kiosks and activity zones."},
            {"title": "Deployment", "description": "Managing permissions, logistics, and staff deployment across multiple locations."},
            {"title": "Data & Reporting", "description": "Collating leads, interaction metrics, and consumer feedback."}
        ],
        "keyHighlights": [
            {"title": "High Engagement", "description": "Focusing on activities that require active consumer participation."},
            {"title": "Social Amplification", "description": "Designing aesthetic setups that encourage visitors to take photos and post online."},
            {"title": "Trained Manpower", "description": "Our promoters are thoroughly trained on your brand guidelines and product FAQs."},
            {"title": "Measurable ROI", "description": "Clear tracking of samples distributed, leads captured, and sales driven."}
        ],
        "portfolioItems": [
            {"title": "FMCG Product Launch Setup", "category": "Activation", "description": "A thematic mall activation featuring a massive interactive balloon installation.", "image": "/under-the-sea-themed-balloon-decoration-with-chara.jpg", "result": "Engaged over 5,000 families in one weekend."},
            {"title": "Retail Mall Roadshow", "category": "Activation", "description": "A multi-city mall activation with an engaging central stage and emcee games.", "image": "/mall-event-with-massive-crowd-aerial-view.jpg", "result": "Averaged 800+ product samplings per day."}
        ],
        "testimonial": {
            "client": "Brand Manager, National Beverage Company",
            "quote": "The energy their promoters brought to the mall activation was incredible. We saw an immediate 30% spike in nearby retail sales during the campaign."
        },
        "ctaHeadline": "Ready to Activate Your Brand?",
        "ctaSubheadline": "Let's brainstorm an experiential campaign that your consumers won't forget."
    },
    {
        "id": "rural-marketing",
        "title": "Rural Marketing",
        "heroSubheadline": "Penetrating deep into Tier 2, Tier 3 cities and rural India with impactful, localized on-ground campaigns.",
        "heroImage": "/sunfeast-arrowroot-stage-branding-corporate-event.jpg",
        "detailedOverview": {
            "intro": "The real growth engine of India lies in its rural markets. Pride Eventz specializes in navigating the complex logistics and cultural nuances of rural marketing, delivering your brand message directly to the heartland.",
            "whoFor": "Agri-businesses, telecom companies, FMCG brands, and financial institutions targeting rural and semi-urban demographics.",
            "problemSolved": "Reaching rural audiences requires dealing with difficult terrain, local permissions, and language barriers. Our experienced field teams handle these challenges seamlessly.",
            "whyUs": "With deep-rooted networks across rural India and a fleet of customized campaign vehicles, we ensure your message is delivered in the local dialect with maximum impact."
        },
        "whatWeOffer": [
            {"title": "Van Campaigns", "description": "Custom fabricated mobile units equipped with AV systems for village-to-village reach."},
            {"title": "Haat & Mela Activations", "description": "Strategic stall placements and engaging activities in high-footfall weekly markets."},
            {"title": "Nukkad Natak (Street Plays)", "description": "Using traditional theatre to communicate brand benefits and social messages."},
            {"title": "Retailer Contact Programs", "description": "Engaging with local shopkeepers to boost distribution and visibility."},
            {"title": "Agri-Connect Programs", "description": "Specialized campaigns targeting farmers at mandis and demonstration plots."},
            {"title": "Vernacular Content", "description": "Developing localized audio-visual content and printed collaterals."}
        ],
        "ourApproach": [
            {"title": "Route Planning", "description": "Mapping out optimized travel routes covering maximum target villages."},
            {"title": "Vehicle Fabrication", "description": "Converting standard trucks into eye-catching, functional brand stages."},
            {"title": "Local Casting", "description": "Hiring local emcees and actors who speak the regional dialect fluently."},
            {"title": "Field Execution", "description": "Daily route deployment with live GPS tracking and progress reports."},
            {"title": "Impact Measurement", "description": "Collecting rural consumer data, sales figures, and photographic evidence."}
        ],
        "keyHighlights": [
            {"title": "Deep Penetration", "description": "Reaching remote areas where traditional media and digital advertising fail to impact."},
            {"title": "Cultural Relevance", "description": "Tailoring communication to align with local customs and sensibilities."},
            {"title": "Real-Time Tracking", "description": "Daily MIS reports and live location tracking of all campaign vehicles."},
            {"title": "Scalable Operations", "description": "Capability to run simultaneous 50+ van campaigns across multiple states."}
        ],
        "portfolioItems": [
            {"title": "Sunfeast Rural Connect", "category": "Rural", "description": "A massive multi-state van campaign engaging rural consumers with product sampling and games.", "image": "/sunfeast-arrowroot-stage-branding-corporate-event.jpg", "result": "Reached over 500 villages in 45 days."},
            {"title": "Telecom Network Expansion", "category": "Rural", "description": "On-ground mela activations promoting new network coverage in semi-urban belts.", "image": "/idea-telecom-corporate-event-stage-branding.jpg", "result": "Generated thousands of new SIM activations locally."}
        ],
        "testimonial": {
            "client": "Marketing Director, Agri-Tech Solutions",
            "quote": "Pride Eventz understands the pulse of rural India. Their van campaign execution was flawless, despite the challenging terrain and weather conditions."
        },
        "ctaHeadline": "Expand Your Reach into Rural Markets",
        "ctaSubheadline": "Connect with our rural marketing experts to plan a highly targeted, localized campaign."
    }
]

template = """import {{ ServicePageLayout }} from "@/components/services/service-page-layout"
import {{ Navbar }} from "@/components/navbar"
import {{ Footer }} from "@/components/footer"

export default function {component_name}Page() {{
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicePageLayout
        title="{title}"
        heroSubheadline="{heroSubheadline}"
        heroImage="{heroImage}"
        detailedOverview={{{detailedOverview}}}
        whatWeOffer={{{whatWeOffer}}}
        ourApproach={{{ourApproach}}}
        keyHighlights={{{keyHighlights}}}
        portfolioItems={{{portfolioItems}}}
        testimonial={{{testimonial}}}
        ctaHeadline="{ctaHeadline}"
        ctaSubheadline="{ctaSubheadline}"
      />
      <Footer />
    </main>
  )
}}
"""

for service in services:
    # Convert dicts to JS string representations carefully
    import json
    
    detailedOverview = json.dumps(service["detailedOverview"])
    whatWeOffer = json.dumps(service["whatWeOffer"])
    ourApproach = json.dumps(service["ourApproach"])
    keyHighlights = json.dumps(service["keyHighlights"])
    portfolioItems = json.dumps(service["portfolioItems"])
    testimonial = json.dumps(service["testimonial"])
    
    component_name = "".join(word.capitalize() for word in service["id"].split("-"))
    
    content = template.format(
        component_name=component_name,
        title=service["title"].replace('"', '\\"'),
        heroSubheadline=service["heroSubheadline"].replace('"', '\\"'),
        heroImage=service["heroImage"],
        detailedOverview=detailedOverview,
        whatWeOffer=whatWeOffer,
        ourApproach=ourApproach,
        keyHighlights=keyHighlights,
        portfolioItems=portfolioItems,
        testimonial=testimonial,
        ctaHeadline=service["ctaHeadline"].replace('"', '\\"'),
        ctaSubheadline=service["ctaSubheadline"].replace('"', '\\"')
    )
    
    file_path = f"app/services/{service['id']}/page.tsx"
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Generated all 7 premium service pages successfully.")
