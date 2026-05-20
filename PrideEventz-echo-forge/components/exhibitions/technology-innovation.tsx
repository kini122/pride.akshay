"use client"

import { useEffect, useRef, useState } from "react"
import { Smartphone, Glasses, Zap, Video } from "lucide-react"

const technologies = [
  {
    title: "Interactive Tech",
    items: ["Touch screen displays", "Interactive kiosks", "QR code integration", "Mobile apps"],
    icon: Smartphone,
  },
  {
    title: "Immersive Experiences",
    items: ["Virtual Reality (VR)", "Augmented Reality (AR)", "Projection mapping", "360° video"],
    icon: Glasses,
  },
  {
    title: "Analytics & Tracking",
    items: ["Visitor flow tracking", "Heat mapping", "Engagement analytics", "Lead capture systems"],
    icon: Zap,
  },
  {
    title: "Audio-Visual",
    items: ["LED walls", "Sound systems", "Lighting control", "Video conferencing"],
    icon: Video,
  },
]

export function TechnologyInnovation() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Exhibition Technology We Use</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br from-pink-50 to-white rounded-md p-8 border border-orange-100 transition-all duration-700 ${
                  "animate-fade-in-up"
                }`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4 inline-block p-3 bg-orange-100 rounded-md">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{tech.title}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, iidx) => (
                    <li key={iidx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      {item}
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
