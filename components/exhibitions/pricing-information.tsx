"use client"

import { useEffect, useRef, useState } from "react"

const pricingFactors = [
  {
    title: "Space & Design",
    items: ["Exhibition size (sq.ft.)", "Design complexity", "Custom fabrication needs", "Number of display elements"],
  },
  {
    title: "Technology & Interactivity",
    items: ["AV equipment requirements", "Interactive tech integration", "Lighting specifications", "Special effects"],
  },
  {
    title: "Duration & Services",
    items: ["Exhibition duration", "Installation/breakdown time", "On-site staff needed", "Storage requirements"],
  },
]

export function PricingInformation() {
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
    <section ref={ref} className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">Exhibition Investment</h2>
        <p className="text-center text-gray-600 mb-16">
          Every exhibition is unique. We provide custom quotes based on:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingFactors.map((factor, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-pink-50 to-white rounded-xl p-8 border border-pink-100 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{factor.title}</h3>
              <ul className="space-y-3">
                {factor.items.map((item, iidx) => (
                  <li key={iidx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-pink-500 font-bold mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA and Info */}
        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 mb-6">
            Request a Custom Quote
          </button>
          <p className="text-gray-600">Average exhibitions range from ₹2L to ₹50L+ depending on scope</p>
        </div>
      </div>
    </section>
  )
}
