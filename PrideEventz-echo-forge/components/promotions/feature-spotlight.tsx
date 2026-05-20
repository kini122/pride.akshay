"use client"

import { useEffect, useRef, useState } from "react"

export function FeatureSpotlight() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-muted/50 relative overflow-hidden"
      style={{
        backgroundImage: "url('/promotions/feature/promotional-event-product-launch.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800/40" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-16 transition-all duration-700 ${
            "animate-fade-in-up"
          }`}
        >
          "Launching Iconic Products with Impact and Innovation"
        </h2>

        {/* Center Image Card */}
        <div
          className={`inline-block transition-all duration-700 ${
            "animate-fade-in-up"
          }`}
        >
          <div className="relative w-full max-w-2xl mx-auto rounded-md overflow-hidden shadow-none border border-border/50-2xl hover:border-primary/50-3xl transition-all duration-300 hover:-translate-y-1 transition-transform duration-300">
            <img src="/promotions/feature/tech-product-launch-event-with-blue-lighting-ipxa-.jpg" alt="Product Launch Event" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
