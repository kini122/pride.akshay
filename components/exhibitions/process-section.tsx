"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Pencil, FileText, Wrench, Cake as Crane, Clipboard } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "Understanding your goals, audience, and space requirements",
    icon: Search,
  },
  {
    number: "02",
    title: "Concept Design",
    description: "Creating innovative exhibition concepts and 3D visualizations",
    icon: Pencil,
  },
  {
    number: "03",
    title: "Content Development",
    description: "Developing engaging content, graphics, and interactive elements",
    icon: FileText,
  },
  {
    number: "04",
    title: "Fabrication & Production",
    description: "Building displays, structures, and custom exhibition elements",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Installation & Setup",
    description: "Professional on-site installation and quality checks",
    icon: Crane,
  },
  {
    number: "06",
    title: "Event Management",
    description: "Full event support and post-exhibition evaluation",
    icon: Clipboard,
  },
]

export function ProcessSection() {
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
    <section ref={ref} className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Exhibition Process</h2>
          <p className="text-lg text-gray-600">A systematic approach to exhibition excellence</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={idx}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  {/* Circle Node */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <Icon className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
