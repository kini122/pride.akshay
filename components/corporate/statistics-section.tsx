"use client"

import { useEffect, useRef, useState } from "react"

export function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState([0, 0, 0, 0])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targets = [300, 50, 95, 10000]
    const intervals = targets.map((target) => {
      let current = 0
      return setInterval(() => {
        current += Math.ceil(target / 50)
        if (current >= target) {
          current = target
          clearInterval(intervals[targets.indexOf(target)])
        }
        setStats((prev) => {
          const newStats = [...prev]
          newStats[targets.indexOf(target)] = current
          return newStats
        })
      }, 30)
    })

    return () => intervals.forEach(clearInterval)
  }, [isVisible])

  const statistics = [
    { value: "300+", label: "Corporate Events" },
    { value: "50+", label: "Fortune 500 Clients" },
    { value: "95%", label: "Client Retention" },
    { value: "10,000+", label: "Attendees Managed" },
  ]

  return (
    <section
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url('/corporate-event-statistics-background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-pink-500/80 to-primary/80" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">{stats[index]}</div>
              <p className="text-lg text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
