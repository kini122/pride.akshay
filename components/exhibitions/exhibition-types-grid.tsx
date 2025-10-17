"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Palette, Package, BookOpen, Cpu, Building2 } from "lucide-react"

const exhibitionTypes = [
  {
    icon: Zap,
    title: "Trade Shows",
    description: "Professional trade show booth design, setup, and management for maximum brand impact",
  },
  {
    icon: Palette,
    title: "Art Exhibitions",
    description: "Curated art gallery experiences with perfect lighting, layout, and visitor flow",
  },
  {
    icon: Package,
    title: "Product Showcases",
    description: "Interactive product displays that highlight features and drive customer engagement",
  },
  {
    icon: BookOpen,
    title: "Educational Exhibits",
    description: "Informative, engaging exhibits for museums, schools, and learning centers",
  },
  {
    icon: Cpu,
    title: "Technology Expos",
    description: "Cutting-edge tech exhibitions with innovative displays and interactive demos",
  },
  {
    icon: Building2,
    title: "Corporate Exhibitions",
    description: "Professional corporate exhibitions showcasing company achievements and capabilities",
  },
]

export function ExhibitionTypesGrid() {
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
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Exhibition Solutions We Offer</h2>
          <p className="text-lg text-gray-600">From concept to completion, we handle every aspect</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitionTypes.map((type, idx) => {
            const Icon = type.icon
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4 inline-block p-3 bg-pink-100 rounded-lg group-hover:bg-pink-200 transition-colors">
                  <Icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
