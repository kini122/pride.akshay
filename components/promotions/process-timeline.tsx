"use client"

import { useEffect, useRef, useState } from "react"
import { Clipboard, Lightbulb, Truck, Users, Play, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Clipboard,
    title: "Strategy & Planning",
    description: "Understanding brand objectives and target audience",
  },
  {
    icon: Lightbulb,
    title: "Creative Conceptualization",
    description: "Developing innovative promotional concepts",
  },
  {
    icon: Truck,
    title: "Logistics Planning",
    description: "Coordinating venues, materials, and teams",
  },
  {
    icon: Users,
    title: "Staff Training",
    description: "Preparing brand ambassadors and promoters",
  },
  {
    icon: Play,
    title: "Campaign Execution",
    description: "On-ground implementation and management",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Measuring impact and ROI",
  },
]

export function ProcessTimeline() {
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
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          Our Promotional Campaign Process
        </h2>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400" />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={index}
                    className={`text-center transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative mb-8">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg">
                        <Icon className="w-10 h-10" />
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-bold text-pink-600 bg-white px-2 py-1 rounded">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`flex gap-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
