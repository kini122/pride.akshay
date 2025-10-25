"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Heart, Grid3x3, BellIcon as Balloon } from "lucide-react"

const services = [
  {
    icon: Building2,
    name: "Corporate Events",
    description: "Professional conferences, product launches, and business gatherings",
  },
  {
    icon: Heart,
    name: "Wedding Planning",
    description: "Elegant ceremonies and receptions tailored to your dreams",
  },
  {
    icon: Grid3x3,
    name: "Exhibitions",
    description: "Trade shows and brand showcases with creative booth designs",
  },
  {
    icon: Balloon,
    name: "Private Parties",
    description: "Celebrations and gatherings for memorable moments",
  },
]

export function RelatedServices() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(services.length).fill(false))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Explore Our Services</h2>

        {/* Four Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                data-index={index}
                className={`related-service-card group p-8 border border-gray-200 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                  visibleItems[index] ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ ['--service-delay']: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 related-service-icon-bg rounded-lg group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Learn More Link */}
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
