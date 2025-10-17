"use client"

import { useEffect, useRef, useState } from "react"
import { Palette, Zap, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Tailored to Your Brand",
    description: "Every exhibition is custom-designed to reflect your unique brand identity and message",
    bullets: ["Custom booth design", "Brand-consistent graphics", "Unique layouts"],
  },
  {
    icon: Zap,
    title: "Engage Your Audience",
    description: "Interactive elements that captivate visitors and create memorable experiences",
    bullets: ["Touch screens & kiosks", "VR/AR experiences", "Product demonstrations"],
  },
  {
    icon: CheckCircle,
    title: "Complete Management",
    description: "From initial concept to final takedown, we handle every detail",
    bullets: ["Design & fabrication", "Logistics & installation", "On-site management"],
  },
]

export function FeaturesCapabilities() {
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
    <section ref={ref} className="py-20 md:py-32 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          What Makes Our Exhibitions Stand Out
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                <div className="mb-4 inline-block p-3 bg-pink-100 rounded-lg">
                  <Icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-pink-500 font-bold mt-0.5">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
