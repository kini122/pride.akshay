"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Lightbulb, Network, CheckCircle2, BarChart3 } from "lucide-react"

export function ProcessTimeline() {
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

  const steps = [
    {
      icon: MessageCircle,
      title: "Consultation & Planning",
      description: "Understanding your goals and vision",
    },
    {
      icon: Lightbulb,
      title: "Concept Development",
      description: "Creating innovative event concepts",
    },
    {
      icon: Network,
      title: "Vendor Coordination",
      description: "Managing all partnerships and logistics",
    },
    {
      icon: CheckCircle2,
      title: "Execution",
      description: "Flawless on-site event management",
    },
    {
      icon: BarChart3,
      title: "Post-Event Analysis",
      description: "Measuring success and gathering feedback",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Our Corporate Event Process</h2>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-pink-400 to-primary" />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={index}
                    className={`text-center transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    {/* Circle Node */}
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg process-circle">
                        <Icon className="w-10 h-10 text-primary relative z-10" />
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
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
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 process-circle">
                    <Icon className="w-8 h-8 relative z-10" />
                  </div>
                  {index < steps.length - 1 && <div className="w-1 h-12 bg-primary mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
