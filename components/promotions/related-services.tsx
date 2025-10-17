"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const relatedServices = [
  {
    title: "Corporate Events",
    description: "Professional corporate gatherings and conferences",
    href: "/services/corporate",
    image: "/corporate-event.png",
  },
  {
    title: "Exhibitions",
    description: "Trade shows and exhibition management",
    href: "/services/exhibitions",
    image: "/exhibition-event.jpg",
  },
  {
    title: "Weddings",
    description: "Luxury wedding planning and execution",
    href: "/services/weddings",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Private Parties",
    description: "Personalized celebration experiences",
    href: "/services/private-parties",
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
    <section ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Explore Our Other Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-pink-500 font-semibold group-hover:gap-3 transition-all">
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
