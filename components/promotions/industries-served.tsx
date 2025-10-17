"use client"

import { useEffect, useRef, useState } from "react"
import { ShoppingCart, Cpu, Car, Shirt, UtensilsCrossed, Heart, Building2, Phone } from "lucide-react"

const industries = [
  { icon: ShoppingCart, label: "FMCG" },
  { icon: Cpu, label: "Technology" },
  { icon: Car, label: "Automotive" },
  { icon: Shirt, label: "Fashion & Retail" },
  { icon: UtensilsCrossed, label: "Food & Beverage" },
  { icon: Heart, label: "Health & Wellness" },
  { icon: Building2, label: "Banking & Finance" },
  { icon: Phone, label: "Telecommunications" },
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
    <section ref={ref} className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Industries We Promote</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-500 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <Icon className="w-8 h-8 text-gray-600 hover:text-pink-500 hover:scale-110 transition-all" />
                <span className="text-xs md:text-sm font-semibold text-gray-700 text-center">{industry.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
