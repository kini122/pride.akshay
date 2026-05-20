"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CaseStudies() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  

  const caseStudies = [
    {
      title: "Hero MotoCorp Annual Conference",
      type: "Corporate Conference",
      image: "/corporate/case-studies/hero-motocorp-annual-conference-stage-setup.jpg",
      metrics: "500+ Attendees | 2 Days | Mumbai",
    },
    {
      title: "Tech Product Launch Event",
      type: "Product Launch",
      image: "/corporate/case-studies/tech-product-launch-event-stage-lighting.jpg",
      metrics: "300+ Attendees | 1 Day | Bangalore",
    },
    {
      title: "Company Anniversary Gala",
      type: "Corporate Gala",
      image: "/corporate/case-studies/company-anniversary-gala-elegant-setup.jpg",
      metrics: "200+ Attendees | 1 Evening | Kochi",
    },
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-16">Corporate Events We've Crafted</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`bg-background rounded-md overflow-hidden border border-border/50 hover:border-primary/50-2xl hover:-translate-y-1 transition-transform duration-300 transition-all duration-300 group ${
                "animate-fade-in-up"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {study.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{study.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{study.metrics}</p>
                <Link href="/portfolio" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View Full Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
