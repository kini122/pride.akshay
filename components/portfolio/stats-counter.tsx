"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Events Completed", value: 200 },
  { label: "Years Experience", value: 15 },
  { label: "Happy Clients", value: 500 },
  { label: "Satisfaction Rate", value: 98 },
]

export function StatsCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts(
        stats.map((stat) => {
          const easeOutQuad = 1 - Math.pow(1 - progress, 2)
          return Math.floor(stat.value * easeOutQuad)
        }),
      )

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounts(stats.map((stat) => stat.value))
      }
    }, stepDuration)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/portfolio/statistics/collage-event-photos-celebration.jpg")',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Large Number */}
              <div className="text-3xl md:text-4xl lg:text-5xl tracking-tight lg:text-6xl tracking-tight font-bold text-white mb-2">
                {counts[index]}
                {stat.label.includes("Rate") ? "%" : "+"}
              </div>

              {/* Label */}
              <p className="text-white/80 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
