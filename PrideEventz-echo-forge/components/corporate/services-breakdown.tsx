"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Presentation, Rocket, Users, Trophy } from "lucide-react"

export function ServicesBreakdown() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  

  const services = [
    {
      icon: Presentation,
      title: "Conference Management",
      description: "End-to-end conference planning and execution",
      href: "/services/conferences-mice"
    },
    {
      icon: Rocket,
      title: "Product Launches",
      description: "Impactful product launch events",
      href: "/services/corporate-events"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Engaging team building experiences",
      href: "/services/corporate-events"
    },
    {
      icon: Trophy,
      title: "Award Ceremonies",
      description: "Prestigious award ceremony events",
      href: "/services/corporate-events"
    },
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">
          What We Offer for Corporate Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`bg-background p-8 rounded-md border border-border hover:border-primary/50-none border border-border/50 hover:-translate-y-1 transition-transform duration-300 transition-all duration-300 ${
                  "animate-fade-in-up"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
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
