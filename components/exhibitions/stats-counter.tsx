"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { number: 500, label: "Exhibitions Delivered", suffix: "+" },
  { number: 50000, label: "Sq.Ft. Space Managed", suffix: "+" },
  { number: 100, label: "Satisfied Clients", suffix: "+" },
  { number: 98, label: "Client Retention", suffix: "%" },
]

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-6xl font-bold text-white mb-2">
        {count.toLocaleString()}
        {suffix}
      </p>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/busy-exhibition-hall.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <CountUpNumber target={stat.number} suffix={stat.suffix} />
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
