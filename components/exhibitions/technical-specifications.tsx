"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const specs = {
  left: [
    "3D Visualization & Rendering",
    "Floor Plan Layout",
    "Traffic Flow Analysis",
    "Lighting Design",
    "Color & Material Selection",
    "Accessibility Planning",
  ],
  right: [
    "Custom Fabrication",
    "Audio-Visual Integration",
    "Logistics & Transportation",
    "On-site Installation",
    "Event Staffing",
    "Post-Event Breakdown",
  ],
}

export function TechnicalSpecifications() {
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
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          Exhibition Services & Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Design & Planning</h3>
            <ul className="space-y-4">
              {specs.left.map((spec, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-pink-600 flex-shrink-0" />
                  <span className="text-gray-700">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Execution & Management</h3>
            <ul className="space-y-4">
              {specs.right.map((spec, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-pink-600 flex-shrink-0" />
                  <span className="text-gray-700">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
