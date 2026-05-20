"use client"

import { useEffect, useRef, useState } from "react"

const pricingFactors = [
  {
    title: "Space & Design",
    items: ["Exhibition size (sq.ft.)", "Design complexity", "Custom fabrication needs", "Number of display elements"],
  },
  {
    title: "Technology & Interactivity",
    items: ["AV equipment requirements", "Interactive tech integration", "Lighting specifications", "Special effects"],
  },
  {
    title: "Duration & Services",
    items: ["Exhibition duration", "Installation/breakdown time", "On-site staff needed", "Storage requirements"],
  },
]

export function PricingInformation() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-4">Exhibition Investment</h2>
        <p className="text-center text-muted-foreground mb-16">
          Every exhibition is unique. We provide custom quotes based on:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {pricingFactors.map((factor, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-pink-50 to-white rounded-md p-8 border border-orange-100 transition-all duration-700 ${
                "animate-fade-in-up"
              }`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">{factor.title}</h3>
              <ul className="space-y-3">
                {factor.items.map((item, iidx) => (
                  <li key={iidx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA and Info */}
        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-md hover:border-primary/50-none border border-border/50 hover:-translate-y-1 transition-transform duration-300 transition-all duration-300 mb-6">
            Request a Custom Quote
          </button>
          <p className="text-muted-foreground">Average exhibitions range from ₹2L to ₹50L+ depending on scope</p>
        </div>
      </div>
    </section>
  )
}
