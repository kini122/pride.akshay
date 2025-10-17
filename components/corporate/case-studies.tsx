"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

export function CaseStudies() {
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

  const caseStudies = [
    {
      title: "Hero MotoCorp Annual Conference",
      type: "Corporate Conference",
      image: "/hero-motocorp-annual-conference-stage-setup.jpg",
      metrics: "500+ Attendees | 2 Days | Mumbai",
    },
    {
      title: "Tech Product Launch Event",
      type: "Product Launch",
      image: "/tech-product-launch-event-stage-lighting.jpg",
      metrics: "300+ Attendees | 1 Day | Bangalore",
    },
    {
      title: "Company Anniversary Gala",
      type: "Corporate Gala",
      image: "/company-anniversary-gala-elegant-setup.jpg",
      metrics: "200+ Attendees | 1 Evening | Kochi",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">Corporate Events We've Crafted</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {study.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{study.metrics}</p>
                <a href="#" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View Full Case Study <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
