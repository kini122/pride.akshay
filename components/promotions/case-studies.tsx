"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const caseStudies = [
  {
    title: "FMCG Product Launch",
    image: "/promotions/case-studies/fmcg-product-launch-event.jpg",
    metrics: "500K+ Reach, 10K+ Samples Distributed",
    description: "Successful nationwide product launch campaign",
  },
  {
    title: "Tech Brand Activation",
    image: "/promotions/case-studies/tech-brand-activation-event.jpg",
    metrics: "1M+ Impressions, 50K+ Interactions",
    description: "Innovative tech brand experience",
  },
  {
    title: "Retail Mall Promotion",
    image: "/promotions/case-studies/retail-mall-promotion-event.jpg",
    metrics: "200K+ Footfall, 30% Sales Increase",
    description: "High-impact mall activation campaign",
  },
]

export function CaseStudies() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">
          Successful Promotional Campaigns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`bg-background rounded-md overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 ${
                "animate-fade-in-up"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover hover:-translate-y-1 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{study.title}</h3>
                <p className="text-primary font-semibold mb-3">{study.metrics}</p>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <Link href="/portfolio" className="text-primary font-semibold hover:text-primary transition-colors">
                  View Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
