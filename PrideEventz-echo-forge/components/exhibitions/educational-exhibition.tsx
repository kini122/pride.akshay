"use client"

import { useEffect, useRef, useState } from "react"

export function EducationalExhibition() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Image */}
          <div
            className={`transition-all duration-700 ${
              "animate-fade-in-up"
            }`}
          >
            <div className="rounded-md overflow-hidden border border-border/50 hover:border-primary/50-2xl transition-shadow-none border border-border/50">
              <img
                src="/exhibitions/educational/modern-tech-exhibition-booth-blue-branding.jpg"
                alt="Educational Exhibition"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Text */}
          <div
            className={`transition-all duration-700 ${
              "animate-fade-in-up"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Educational Exhibition</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We create impactful educational exhibitions with engaging displays, seamless planning, and interactive
              experiences. From concept to execution, we bring learning to life.
            </p>
            <ul className="space-y-3">
              {["Interactive learning displays", "Visitor engagement strategies", "Professional installation"].map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
