"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function ExhibitionsHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const words = ["Creative solutions make you want to stay."]

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Zoom Animation */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ${
          isLoaded ? "scale-100" : "scale-110"
        }`}
        style={{
          backgroundImage: "url('/exhibitions/hero/exhibition-event-crowd-stage-lighting.jpg')",
        }}
      >
        {/* Pink Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-300/50 via-orange-200/40 to-orange-100/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-block mb-6 px-4 py-2 border border-white/80 rounded-full text-white text-sm font-semibold uppercase tracking-wider transition-all duration-500 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          Exhibition
        </div>

        {/* Main Headline with Word-by-Word Animation */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight lg:text-6xl tracking-tight lg:text-7xl font-bold text-foreground leading-tight mb-8">
          {words[0].split(" ").map((word, idx) => (
            <span
              key={idx}
              className="inline-block opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${0.4 + idx * 0.08}s`,
                animationFillMode: "forwards",
              }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
          <ChevronDown className="w-6 h-6 text-foreground" />
        </div>
      </div>
    </section>
  )
}
