"use client"

import { useEffect, useRef, useState } from "react"
import { Cpu, Car, Heart, BookOpen, Factory, ShoppingCart, Hotel, HeartIcon } from "lucide-react"

const industries = [
  { icon: Cpu, label: "Technology" },
  { icon: Car, label: "Automotive" },
  { icon: Heart, label: "Healthcare" },
  { icon: BookOpen, label: "Education" },
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingCart, label: "Retail" },
  { icon: Hotel, label: "Hospitality" },
  { icon: HeartIcon, label: "Non-Profit" },
]

export function IndustriesServed() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Industries We Serve</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {industries.map((industry, idx) => {
            const Icon = industry.icon
            return (
              <div
                key={idx}
                className={`flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer group ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <Icon className="w-8 h-8 text-pink-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-gray-700 text-center">{industry.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
