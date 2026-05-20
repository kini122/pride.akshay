"use client"

import { useEffect, useRef } from "react"

export function ClientsHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const svg = container.querySelector("svg")
    if (svg) {
      let rotation = 0
      const animate = () => {
        rotation += 0.5
        svg.style.transform = `rotate(${rotation}deg)`
        requestAnimationFrame(animate)
      }
      animate()
    }
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/clients/hero/concert-stage-lighting-event.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Light Rays Effect */}
      <div ref={containerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <defs>
            <radialGradient id="lightRays" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <circle cx="960" cy="540" r="600" fill="url(#lightRays)" />
          <line x1="960" y1="0" x2="960" y2="1080" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          <line x1="0" y1="540" x2="1920" y2="540" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          <line x1="200" y1="100" x2="960" y2="540" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="1720" y1="100" x2="960" y2="540" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="200" y1="980" x2="960" y2="540" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="1720" y1="980" x2="960" y2="540" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        {/* Badge */}
        <div
          className="inline-block mb-6 px-4 py-2 border border-primary rounded-full text-primary text-sm font-semibold uppercase tracking-wider animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Our Clients
        </div>

        {/* Main Headline */}
        <h1
          className="text-3xl md:text-4xl lg:text-5xl tracking-tight lg:text-6xl tracking-tight lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          Trusted by Leading Brands
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          style={{ animationDelay: "0.3s" }}
        >
          Trusted by Leading Brands – A Glimpse of Our Valued Clients
        </p>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center ">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
