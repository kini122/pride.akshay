"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    phase: "01",
    title: "Corporate Events",
    description: "Professional corporate gatherings — product launches, team events, annual functions — executed with precision and creativity.",
    href: "/services/corporate-events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
  },
  {
    phase: "02",
    title: "Destination Weddings",
    description: "Create magical wedding moments with comprehensive luxury planning, bespoke design, and flawless execution.",
    href: "/services/destination-weddings",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    phase: "03",
    title: "Concerts",
    description: "Large-scale live concert production — encompassing stage design, sound, lighting, and comprehensive crowd management.",
    href: "/services/concerts",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop",
  },
  {
    phase: "04",
    title: "Conferences & MICE",
    description: "End-to-end management of meetings, incentives, conferences, and exhibitions with business-class execution.",
    href: "/services/conferences-mice",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    phase: "05",
    title: "Exhibitions",
    description: "Showcase your brand with stunning custom exhibition setups, functional spaces, and immersive experiences.",
    href: "/services/exhibitions",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    phase: "06",
    title: "Brand Activation",
    description: "Impactful promotional events and ground-level experiential activations that create real consumer connections.",
    href: "/services/brand-activation",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  },
  {
    phase: "07",
    title: "Rural Marketing",
    description: "Specialised on-ground campaigns reaching Tier 2, Tier 3 cities and rural markets across India with cultural relevance.",
    href: "/services/rural-marketing",
    image: "https://images.unsplash.com/photo-1506869640319-ce1a44e1e0cb?q=80&w=2070&auto=format&fit=crop",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Services Introduction (Hero) */}
      <section className="pt-32 pb-16 px-4 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-primary font-medium tracking-wider uppercase mb-6 animate-fade-in-up">Our Expertise</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Comprehensive <br className="hidden md:block" />
              <span className="text-primary">Event Services.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              We specialize in creating customized solutions that align with your vision and budget. From intimate corporate gatherings to grand destination weddings, we deliver excellence at every scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services List (Architectural Layout) */}
      <section className="py-16 md:py-32 px-4 relative z-10 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col">
            {services.map((service, index) => (
              <Link
                href={service.href}
                key={service.phase}
                className={`group relative border-t border-border/50 py-12 md:py-20 transition-all duration-700 ease-out animate-fade-in-up hover:bg-muted/30 block`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center px-4 md:px-8">
                  {/* Phase Number */}
                  <div className="md:col-span-2">
                    <span className="text-5xl md:text-6xl font-bold text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
                      {service.phase}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-medium text-lg mt-auto">
                      <span>Explore Service</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Image Reveal */}
                  <div className="md:col-span-5 h-64 md:h-80 w-full overflow-hidden rounded-xl relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Link>
            ))}
            <div className="border-t border-border/50 w-full" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 tracking-tight">Ready to plan your next event?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-primary rounded-md font-semibold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Let's Work Together
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
