"use client"

import { useEffect, useRef, useState } from "react"
import { Crown, Trophy, Medal } from "lucide-react"

interface Tier {
  id: number
  name: string
  icon: React.ElementType
  events: string
  clients: string[]
}

const tiers: Tier[] = [
  {
    id: 1,
    name: "Platinum Partners",
    icon: Crown,
    events: "500+ Events",
    clients: ["Mirchi", "ICICI Bank", "Zee TV", "Fevicol"],
  },
  {
    id: 2,
    name: "Gold Partners",
    icon: Trophy,
    events: "200+ Events",
    clients: ["Zespri", "Fevikwik", "Tech Corp"],
  },
  {
    id: 3,
    name: "Silver Partners",
    icon: Medal,
    events: "50+ Events",
    clients: ["Local Brands", "Startups", "SMEs"],
  },
]

export function PartnershipTiers() {
    const containerRef = useRef<HTMLDivElement>(null)

  

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-center text-foreground mb-16">Our Partnership Tiers</h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              data-tier-id={tier.id}
              className={`group bg-background border-2 border-border p-8 rounded-md text-center hover:border-primary hover:border-primary/50-none transition-all duration-300 ${
                "animate-fade-in-up"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto w-20 h-20 mb-6 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(var(--primary),0.15)] group-hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] group-hover:scale-110 transition-all duration-500">
                <tier.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-primary font-semibold mb-6">{tier.events}</p>
              <div className="space-y-2">
                {tier.clients.map((client, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">
                    {client}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
