"use client"

import { useEffect, useState } from "react"

export function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/luxury-event-party-concert-pink-purple-lighting-cr.jpg")',
        }}
      />
      {/* Gradient Overlay - Pink to White */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/60 via-pink-300/40 to-white/60" />

      {/* Parallax Background Zoom Effect */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Headline with Fade-up Animation */}
        <h1
          className={`text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Portfolio
        </h1>

        {/* Subheading */}
        <p
          className={`text-2xl md:text-3xl text-gray-700 font-medium transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Where every detail counts, our work stands out.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-scroll-bounce text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
