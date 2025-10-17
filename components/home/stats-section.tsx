"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Events Managed (Last 5 Years)", value: 500, suffix: "+" },
  { label: "Successful Projects", value: 200, suffix: "+" },
  { label: "Industry Experience", value: 50, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
]

export function StatsSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            stats.forEach((stat, index) => {
              let current = 0
              const increment = stat.value / 50
              const timer = setInterval(() => {
                current += increment
                if (current >= stat.value) {
                  setCounts((prev) => {
                    const newCounts = [...prev]
                    newCounts[index] = stat.value
                    return newCounts
                  })
                  clearInterval(timer)
                } else {
                  setCounts((prev) => {
                    const newCounts = [...prev]
                    newCounts[index] = Math.floor(current)
                    return newCounts
                  })
                }
              }, 30)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url("/placeholder.svg?key=stats-bg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Left side text */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Legacy in the Making</h2>
          <p className="text-lg text-white/80 max-w-2xl">
            With years of experience and countless successful events, we've built a reputation for excellence and
            innovation in the event management industry.
          </p>
        </div>

        {/* Stats Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <p className="text-lg text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
