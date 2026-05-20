"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Building2, Heart, Grid3x3 } from "lucide-react"

const services = [
  {
    icon: Building2,
    name: "Corporate Events",
    description: "Professional conferences, product launches, and business gatherings",
    href: "/services/corporate-events",
  },
  {
    icon: Grid3x3,
    name: "Exhibitions",
    description: "Trade shows and brand showcases with creative booth designs",
    href: "/services/exhibitions",
  },
  {
    icon: Heart,
    name: "Destination Weddings",
    description: "Celebrations and gatherings for memorable moments",
    href: "/services/destination-weddings",
  },
]

export function RelatedServices() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-center text-foreground mb-16">Explore Our Services</h2>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                data-index={index}
                className={`group p-8 bg-background border border-border rounded-md hover:border-primary/50 hover:-translate-y-1 transition-transform duration-300 transition-all duration-300 ${
                  "animate-fade-in-up"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-md group-hover:bg-primary group-hover:scale-105 transition-all duration-500 ease-out">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.name}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{service.description}</p>

                {/* Learn More Link */}
                <Link href={service.href} className="text-primary font-semibold hover:text-accent transition-colors">
                  Learn More →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
