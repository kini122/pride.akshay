"use client"

import { useEffect, useRef, useState } from "react"
import { Megaphone, Gift, ShoppingBag, MapPin, Truck, Target } from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Brand Activations",
    description:
      "Experiential marketing campaigns that create memorable brand interactions and drive customer engagement",
  },
  {
    icon: Gift,
    title: "Product Sampling",
    description: "Strategic product distribution campaigns at high-footfall locations to generate buzz and trial",
  },
  {
    icon: ShoppingBag,
    title: "Mall Promotions",
    description: "Eye-catching promotional setups in shopping malls to maximize brand visibility and foot traffic",
  },
  {
    icon: MapPin,
    title: "Street Marketing",
    description: "Guerrilla marketing tactics and on-ground promotions to reach audiences in unexpected ways",
  },
  {
    icon: Truck,
    title: "Roadshows",
    description: "Mobile brand experiences traveling across cities to expand your reach",
  },
  {
    icon: Target,
    title: "BTL Campaigns",
    description: "Below-the-line marketing initiatives for targeted audience engagement",
  },
]

export function ServicesBreakdown() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-4">Our Promotional Services</h2>
          <p className="text-lg text-muted-foreground">Comprehensive solutions to amplify your brand presence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`bg-background p-8 rounded-md border border-border/50 hover:border-primary/50-none border border-border/50 hover:-translate-y-1 transition-transform duration-300 transition-all duration-500 ${
                  "animate-fade-in-up"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
