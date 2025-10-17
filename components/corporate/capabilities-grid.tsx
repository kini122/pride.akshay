"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Palette, Users, UtensilsCrossed, Music, Camera } from "lucide-react"

export function CapabilitiesGrid() {
  const [isVisible, setIsVisible] = useState(false)
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

  const capabilities = [
    {
      icon: Zap,
      title: "Audio Visual Production",
      description: "State-of-the-art AV equipment",
    },
    {
      icon: Palette,
      title: "Stage Design & Setup",
      description: "Custom stage configurations",
    },
    {
      icon: Users,
      title: "Registration Management",
      description: "Seamless attendee check-in",
    },
    {
      icon: UtensilsCrossed,
      title: "Catering Coordination",
      description: "Premium food & beverage service",
    },
    {
      icon: Music,
      title: "Entertainment & Performances",
      description: "Engaging corporate entertainment",
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional event coverage",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          Our Corporate Event Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <div
                key={index}
                className={`text-center p-8 rounded-xl hover:bg-gray-50 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-primary hover:animate-bounce" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
