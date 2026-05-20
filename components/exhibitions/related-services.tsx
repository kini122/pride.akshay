"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const relatedServices = [
  {
    title: "Trade Show Management",
    description: "Professional trade show booth design, setup, and management",
    href: "/services/corporate",
    image: "/exhibitions/gallery/trade-show-booth.jpg",
  },
  {
    title: "Corporate Events",
    description: "Comprehensive corporate event planning and execution",
    href: "/services/corporate",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Product Launches",
    description: "Impactful product launch events with maximum engagement",
    href: "/services/promotions",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Brand Activations",
    description: "Creative brand activation campaigns and experiences",
    href: "/services/promotions",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function RelatedServices() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Explore Related Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {relatedServices.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className={`group bg-background rounded-md overflow-hidden border border-border/50 hover:border-primary/50 hover:-translate-y-1 transition-transform duration-300 transition-all duration-300 ${
                "animate-fade-in-up"
              }`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
