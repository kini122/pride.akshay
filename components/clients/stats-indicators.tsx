"use client"

import { useEffect, useRef, useState } from "react"

interface Stat {
  id: number
  number: number
  label: string
  icon: string
}

const stats: Stat[] = [
  { id: 1, number: 500, label: "Happy Clients", icon: "😊" },
  { id: 2, number: 1000, label: "Events Delivered", icon: "📅" },
  { id: 3, number: 50, label: "Brand Partners", icon: "🤝" },
  { id: 4, number: 99, label: "Client Retention %", icon: "🏆" },
]

export function StatsIndicators() {
  const [counts, setCounts] = useState<Record<number, number>>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            stats.forEach((stat) => {
              let current = 0
              const increment = stat.number / 50
              const timer = setInterval(() => {
                current += increment
                if (current >= stat.number) {
                  setCounts((prev) => ({ ...prev, [stat.id]: stat.number }))
                  clearInterval(timer)
                } else {
                  setCounts((prev) => ({ ...prev, [stat.id]: Math.floor(current) }))
                }
              }, 30)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-orange-50">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counts[stat.id] || 0}
                {stat.label.includes("%") ? "%" : "+"}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
