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
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">
          Types of Promotional Campaigns We Execute
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {campaignTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <div
                key={index}
                className={`bg-background border border-border p-8 rounded-md text-center hover:border-orange-500 hover:border-primary/50-none border border-border/50 transition-all duration-500 ${
                  "animate-fade-in-up"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-4 hover:scale-105 transition-transform duration-500 ease-out transition-transform" />
                <h3 className="text-lg font-bold text-foreground mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
