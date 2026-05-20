"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Tech Company Annual Expo",
    image: "/exhibitions/case-studies/tech-company-annual-expo.jpg",
    challenge: "Create an immersive tech showcase for 5000+ attendees",
    solution: "Designed interactive booths with VR experiences and live demos",
    results: "45% increase in lead generation, 92% attendee satisfaction",
  },
  {
    title: "Art Museum Special Exhibition",
    image: "/exhibitions/case-studies/art-museum-exhibition.jpg",
    challenge: "Curate a world-class art exhibition with limited space",
    solution: "Optimized layout with perfect lighting and visitor flow",
    results: "Record attendance, 8.5/10 visitor rating",
  },
  {
    title: "Product Launch Showcase",
    image: "/exhibitions/case-studies/product-launch-showcase.jpg",
    challenge: "Launch new product line to industry professionals",
    solution: "Created premium showcase with interactive product stations",
    results: "200+ qualified leads, $2M in pre-orders",
  },
]

export function CaseStudies() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Featured Exhibition Projects</h2>

        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className={`bg-background border border-border rounded-md overflow-hidden hover:border-primary/50-none border border-border/50 transition-all duration-300 ${
                "animate-fade-in-up"
              }`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
                {/* Image */}
                <div className="rounded-md overflow-hidden">
                  <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-64 object-cover" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{study.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Challenge</p>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Solution</p>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Results</p>
                      <p className="text-muted-foreground">{study.results}</p>
                    </div>
                  </div>

                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
