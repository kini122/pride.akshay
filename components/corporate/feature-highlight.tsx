"use client"

import { useEffect, useRef, useState } from "react"

export function FeatureHighlight() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-muted/30 relative overflow-hidden"
      style={{
        backgroundImage: `url('/corporate/feature/corporate-event-hall-professional-lighting.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/80" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-4">Smart Solutions for Corporate Events</h2>
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">READ MORE</p>
        </div>

        {/* Featured Image Card */}
        <div
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            "animate-fade-in-up"
          }`}
        >
          <div className="relative rounded-md overflow-hidden shadow-none border border-border/50-2xl group">
            <img
              src="/corporate/events/hero-motocorp-corporate-event-stage-pink-branding-.jpg"
              alt="Corporate Event"
              className="w-full h-auto object-cover group-hover:-translate-y-1 transition-transform duration-300 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
