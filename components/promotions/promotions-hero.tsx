"use client"

import { useEffect, useState } from "react"

export function PromotionsHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const headline = "Innovative Promotions That Elevate Your Brand"
  const words = headline.split(" ")

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-out"
        style={{
          backgroundImage: "url('/concert-event-stage-with-crowd-pink-lighting.jpg')",
          transform: isLoaded ? "scale(1)" : "scale(1.1)",
        }}
      />

      {/* Pink Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-300/50 via-pink-200/40 to-white/20" />

      {/* Silhouetted Crowd Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-block mb-6 px-4 py-2 border border-white/80 rounded-full text-white text-sm font-semibold uppercase tracking-wider transition-all duration-500 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          Promotions
        </div>

        {/* Headline with Letter Reveal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-3">
              {word.split("").map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={`inline-block transition-all duration-500 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  style={{
                    transitionDelay: `${0.3 + (wordIndex * 5 + letterIndex) * 0.05}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
