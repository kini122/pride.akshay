"use client"

import { useEffect, useRef, useState } from "react"
import { Palette, Zap, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Tailored to Your Brand",
    description: "Every exhibition is custom-designed to reflect your unique brand identity and message",
    bullets: ["Custom booth design", "Brand-consistent graphics", "Unique layouts"],
  },
  {
    icon: Zap,
    title: "Engage Your Audience",
    description: "Interactive elements that captivate visitors and create memorable experiences",
    bullets: ["Touch screens & kiosks", "VR/AR experiences", "Product demonstrations"],
  },
  {
    icon: CheckCircle,
    title: "Complete Management",
    description: "From initial concept to final takedown, we handle every detail",
    bullets: ["Design & fabrication", "Logistics & installation", "On-site management"],
  },
]

export function FeaturesCapabilities() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">
          What Makes Our Exhibitions Stand Out
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className={`bg-background rounded-md p-8 border border-border/50 hover:border-primary/50 hover:-translate-y-1 transition-transform duration-300 transition-all duration-300 ${
                  "animate-fade-in-up"
                }`}
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                <div className="mb-4 inline-block p-3 bg-orange-100 rounded-md">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
