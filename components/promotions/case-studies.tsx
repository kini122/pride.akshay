"use client"

import { useEffect, useRef, useState } from "react"

const caseStudies = [
  {
    title: "FMCG Product Launch",
    image: "/fmcg-product-launch-event.jpg",
    metrics: "500K+ Reach, 10K+ Samples Distributed",
    description: "Successful nationwide product launch campaign",
  },
  {
    title: "Tech Brand Activation",
    image: "/tech-brand-activation-event.jpg",
    metrics: "1M+ Impressions, 50K+ Interactions",
    description: "Innovative tech brand experience",
  },
  {
    title: "Retail Mall Promotion",
    image: "/retail-mall-promotion-event.jpg",
    metrics: "200K+ Footfall, 30% Sales Increase",
    description: "High-impact mall activation campaign",
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
    <section ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          Successful Promotional Campaigns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-pink-500 font-semibold mb-3">{study.metrics}</p>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <a href="#" className="text-pink-500 font-semibold hover:text-pink-600 transition-colors">
                  View Full Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
