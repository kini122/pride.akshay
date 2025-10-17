"use client"

import { useEffect, useRef, useState } from "react"
import { Presentation, Rocket, Users, Trophy } from "lucide-react"

export function ServicesBreakdown() {
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

  const services = [
    {
      icon: Presentation,
      title: "Conference Management",
      description: "End-to-end conference planning and execution",
    },
    {
      icon: Rocket,
      title: "Product Launches",
      description: "Impactful product launch events",
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Engaging team building experiences",
    },
    {
      icon: Trophy,
      title: "Award Ceremonies",
      description: "Prestigious award ceremony events",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          What We Offer for Corporate Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-primary font-semibold hover:text-accent transition-colors">
                  Learn More →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
