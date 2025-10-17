"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function CorporateHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Pink Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/corporate-event-presentation-stage-audience-pink-l.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-300/60 via-pink-200/50 to-pink-400/70" />
      </div>

      {/* Crowd Silhouettes at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-block mb-6 px-4 py-2 border border-white rounded-full text-white uppercase text-sm font-semibold tracking-wider transition-all duration-700 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Corporate Events
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
          {isLoaded && (
            <>
              {Array.from("Innovative solutions that elevate your corporate events.").map((char, i) => (
                <span
                  key={i}
                  className="inline-block animate-letter-reveal"
                  style={{
                    animationDelay: `${i * 0.03}s`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </>
          )}
        </h1>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  )
}
