"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const specs = {
  left: [
    "3D Visualization & Rendering",
    "Floor Plan Layout",
    "Traffic Flow Analysis",
    "Lighting Design",
    "Color & Material Selection",
    "Accessibility Planning",
  ],
  right: [
    "Custom Fabrication",
    "Audio-Visual Integration",
    "Logistics & Transportation",
    "On-site Installation",
    "Event Staffing",
    "Post-Event Breakdown",
  ],
}

export function TechnicalSpecifications() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">
          Exhibition Services & Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div
            className={`transition-all duration-700 ${"animate-fade-in-up"}`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Design & Planning</h3>
            <ul className="space-y-4">
              {specs.left.map((spec, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div
            className={`transition-all duration-700 ${"animate-fade-in-up"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Execution & Management</h3>
            <ul className="space-y-4">
              {specs.right.map((spec, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
