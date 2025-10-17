"use client"

import { useEffect, useRef, useState } from "react"
import { Droplet, Presentation, Users, Store, TrendingUp, Gift } from "lucide-react"

const campaignTypes = [
  {
    icon: Droplet,
    title: "Sampling Campaigns",
    description: "Product trial and distribution",
  },
  {
    icon: Presentation,
    title: "Demo Events",
    description: "Live product demonstrations",
  },
  {
    icon: Users,
    title: "Flash Mobs",
    description: "Surprise brand experiences",
  },
  {
    icon: Store,
    title: "Pop-up Stores",
    description: "Temporary retail activations",
  },
  {
    icon: TrendingUp,
    title: "Trade Promotions",
    description: "B2B marketing campaigns",
  },
  {
    icon: Gift,
    title: "Seasonal Campaigns",
    description: "Festival and holiday activations",
  },
]

export function CampaignTypes() {
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
          Types of Promotional Campaigns We Execute
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaignTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 p-8 rounded-lg text-center hover:border-pink-500 hover:shadow-lg transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-pink-500 mx-auto mb-4 hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
