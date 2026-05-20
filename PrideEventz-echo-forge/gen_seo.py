import os

metadata_map = {
    "app": {
        "title": "Pride Eventz – Event Management Kerala, India",
        "description": "Expert corporate events, weddings, concerts, conferences, exhibitions & brand activations across India. 200+ projects delivered."
    },
    "app/about": {
        "title": "About Us | Pride Eventz Kerala",
        "description": "Meet the team behind Pride Eventz — delivering world-class event management since 2010. Learn our story, mission and values."
    },
    "app/services": {
        "title": "Our Services | Pride Eventz",
        "description": "Comprehensive event services — corporate events, weddings, concerts, MICE, exhibitions, brand activation and rural marketing."
    },
    "app/services/corporate-events": {
        "title": "Corporate Event Management | Pride Eventz",
        "description": "Professional corporate event management in India — product launches, team events, conferences. Get a free quote today."
    },
    "app/services/destination-weddings": {
        "title": "Destination Wedding Planning | Pride Eventz",
        "description": "Dream wedding planning from concept to execution. Elegant décor, seamless coordination, unforgettable memories."
    },
    "app/services/concerts": {
        "title": "Concert Management Services | Pride Eventz",
        "description": "End-to-end live concert production — stage, sound, lighting, artist management and crowd safety."
    },
    "app/services/conferences-mice": {
        "title": "Conferences & MICE Services | Pride Eventz",
        "description": "Expert MICE event management — delegate coordination, venue sourcing, AV production and more."
    },
    "app/services/exhibitions": {
        "title": "Exhibition Management Services | Pride Eventz",
        "description": "Stunning exhibition booth design and trade show management to showcase your brand effectively."
    },
    "app/services/brand-activation": {
        "title": "Brand Activation Services | Pride Eventz",
        "description": "Ground-level brand activation campaigns — in-mall, in-store, sampling and experiential marketing."
    },
    "app/services/rural-marketing": {
        "title": "Rural Marketing Events | Pride Eventz",
        "description": "On-ground rural marketing campaigns across Tier 2/3 cities and rural India. Van campaigns, haats and mela activations."
    },
    "app/portfolio": {
        "title": "Portfolio | Pride Eventz – Our Event Work",
        "description": "Browse our portfolio of corporate events, weddings, concerts, exhibitions and brand activations delivered across India."
    },
    "app/clients": {
        "title": "Our Clients | Pride Eventz",
        "description": "Trusted by Fevicol, ICICI Bank, Zee TV, Radio Mirchi, Zespri and 16+ leading brands across India."
    },
    "app/contact": {
        "title": "Contact Pride Eventz | Event Management Kerala",
        "description": "Get in touch for event management enquiries. Call, email or WhatsApp us. Based in Kochi, Kerala."
    }
}

template = """import type {{ Metadata }} from "next"

export const metadata: Metadata = {{
  title: "{title}",
  description: "{description}",
}}

export default function Layout({{ children }}: {{ children: React.ReactNode }}) {{
  return children
}}
"""

for path, data in metadata_map.items():
    if path == "app":
        # app/layout.tsx already exists, we should update the metadata there via regex or manual rewrite,
        # but the script would just overwrite it if we aren't careful. Let's skip "app" and do it via multi_replace.
        pass
    else:
        file_path = f"{path}/layout.tsx"
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(template.format(title=data["title"], description=data["description"]))

print("Generated metadata layouts successfully.")
