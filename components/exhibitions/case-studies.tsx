"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Tech Company Annual Expo",
    image: "/tech-company-annual-expo.jpg",
    challenge: "Create an immersive tech showcase for 5000+ attendees",
    solution: "Designed interactive booths with VR experiences and live demos",
    results: "45% increase in lead generation, 92% attendee satisfaction",
  },
  {
    title: "Art Museum Special Exhibition",
    image: "/art-museum-exhibition.jpg",
    challenge: "Curate a world-class art exhibition with limited space",
    solution: "Optimized layout with perfect lighting and visitor flow",
    results: "Record attendance, 8.5/10 visitor rating",
  },
  {
    title: "Product Launch Showcase",
    image: "/product-launch-showcase.jpg",
    challenge: "Launch new product line to industry professionals",
    solution: "Created premium showcase with interactive product stations",
    results: "200+ qualified leads, $2M in pre-orders",
  },
]

export function CaseStudies() {
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
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Featured Exhibition Projects</h2>

        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <div className="rounded-lg overflow-hidden">
                  <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-64 object-cover" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-pink-600 mb-1">Challenge</p>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-pink-600 mb-1">Solution</p>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-pink-600 mb-1">Results</p>
                      <p className="text-gray-700">{study.results}</p>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
