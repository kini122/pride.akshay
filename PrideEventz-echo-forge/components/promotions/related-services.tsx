"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const relatedServices = [
  {
    title: "Corporate Events",
    description: "Professional corporate gatherings and conferences",
    href: "/services/corporate",
    image: "/promotions/related/corporate-event.png",
  },
  {
    title: "Exhibitions",
    description: "Trade shows and exhibition management",
    href: "/services/exhibitions",
    image: "/promotions/related/exhibition-event.jpg",
  },
  {
    title: "Private Parties",
    description: "Personalized celebration experiences",
    href: "/services/private-parties",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function RelatedServices() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Explore Our Other Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {relatedServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group bg-background rounded-md overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-700 ${
                "animate-fade-in-up"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
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
