"use client"

import { useEffect, useRef, useState } from "react"

export function IntroductionSection() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div
            className={`transition-all duration-700 ${
              "animate-fade-in-up"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-6 leading-tight">
              "From Concept to Celebration"
            </h2>
          </div>

          {/* Right Column */}
          <div
            className={`transition-all duration-700 delay-200 ${
              "animate-fade-in-up"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Pride Eventz, we streamline event planning to deliver unforgettable experiences. Whether it's a
              corporate gathering or a personal celebration, we guide you through each step for a flawless execution
              that meets your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
