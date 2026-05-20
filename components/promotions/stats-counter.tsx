"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { number: 1000, label: "Promotional Campaigns", suffix: "+" },
  { number: 5000000, label: "Consumer Interactions", suffix: "+" },
  { number: 100, label: "Cities Covered", suffix: "+" },
  { number: 95, label: "Campaign Success Rate", suffix: "%" },
]

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])

  return count.toLocaleString()
}

export function StatsCounter() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section
      ref={ref}
      className="py-24 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('/promotions/statistics/promotional-event-crowd.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                "animate-fade-in-up"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-2">
                {isVisible && <CountUp target={stat.number} />}
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
