"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Palette, Users, UtensilsCrossed, Music, Camera } from "lucide-react"

export function CapabilitiesGrid() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  

  const capabilities = [
    {
      icon: Zap,
      title: "Audio Visual Production",
      description: "State-of-the-art AV equipment",
    },
    {
      icon: Palette,
      title: "Stage Design & Setup",
      description: "Custom stage configurations",
    },
    {
      icon: Users,
      title: "Registration Management",
      description: "Seamless attendee check-in",
    },
    {
      icon: UtensilsCrossed,
      title: "Catering Coordination",
      description: "Premium food & beverage service",
    },
    {
      icon: Music,
      title: "Entertainment & Performances",
      description: "Engaging corporate entertainment",
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional event coverage",
    },
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">
          Our Corporate Event Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <div
                key={index}
                className={`text-center p-8 rounded-md hover:bg-muted/30 transition-all duration-300 ${
                  "animate-fade-in-up"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-primary hover:" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
