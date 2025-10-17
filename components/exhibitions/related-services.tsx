"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const relatedServices = [
  {
    title: "Trade Show Management",
    description: "Professional trade show booth design, setup, and management",
    href: "/services/corporate",
    image: "/trade-show-booth.jpg",
  },
  {
    title: "Corporate Events",
    description: "Comprehensive corporate event planning and execution",
    href: "/services/corporate",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Product Launches",
    description: "Impactful product launch events with maximum engagement",
    href: "/services/promotions",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Brand Activations",
    description: "Creative brand activation campaigns and experiences",
    href: "/services/promotions",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function RelatedServices() {
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
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Explore Related Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedServices.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-pink-600 font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
