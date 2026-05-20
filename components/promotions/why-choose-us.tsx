"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Globe, BarChart3, Zap } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Trained Brand Ambassadors",
    description: "Professional team of experienced promoters",
  },
  {
    icon: Globe,
    title: "Nationwide Reach",
    description: "Campaigns across multiple cities and regions",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Comprehensive analytics and ROI measurement",
  },
  {
    icon: Zap,
    title: "End-to-End Management",
    description: "Complete campaign handling from concept to execution",
  },
]

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white text-center mb-16">
          Why Choose Pride Eventz for Promotions?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  "animate-fade-in-up"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-white/90">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
