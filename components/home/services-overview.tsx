import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Corporate Events",
    description: "Professional corporate gatherings that impress and inspire your team.",
    href: "/services/corporate-events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Destination Weddings",
    description: "Create magical wedding moments with comprehensive planning and design services.",
    href: "/services/destination-weddings",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Concerts",
    description: "Large-scale live concert production — stage, sound, lighting and crowd management.",
    href: "/services/concerts",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Conferences & MICE",
    description: "End-to-end management of meetings, incentives, conferences, and exhibitions.",
    href: "/services/conferences-mice",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Exhibitions",
    description: "Showcase your brand with stunning exhibition setups and immersive experiences.",
    href: "/services/exhibitions",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Brand Activation",
    description: "Impactful promotional events and ground-level activations for lasting brand impact.",
    href: "/services/brand-activation",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Rural Marketing",
    description: "On-ground campaigns reaching Tier 2, Tier 3 cities and rural markets across India.",
    href: "/services/rural-marketing",
    image: "https://images.unsplash.com/photo-1506869640319-ce1a44e1e0cb?q=80&w=2070&auto=format&fit=crop",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 px-4 relative z-10 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">Services Overview</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              href={service.href} 
              key={index}
              className="group relative flex flex-col h-full bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-primary font-medium text-sm">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
