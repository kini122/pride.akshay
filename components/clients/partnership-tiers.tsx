"use client"

import { useEffect, useRef, useState } from "react"

interface Tier {
  id: number
  name: string
  icon: string
  events: string
  clients: string[]
}

const tiers: Tier[] = [
  {
    id: 1,
    name: "Platinum Partners",
    icon: "👑",
    events: "500+ Events",
    clients: ["Mirchi", "ICICI Bank", "Zee TV", "Fevicol"],
  },
  {
    id: 2,
    name: "Gold Partners",
    icon: "🥇",
    events: "200+ Events",
    clients: ["Zespri", "Fevikwik", "Tech Corp"],
  },
  {
    id: 3,
    name: "Silver Partners",
    icon: "⭐",
    events: "50+ Events",
    clients: ["Local Brands", "Startups", "SMEs"],
  },
]

export function PartnershipTiers() {
  const [visibleTiers, setVisibleTiers] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tierId = Number.parseInt(entry.target.getAttribute("data-tier-id") || "0")
            setVisibleTiers((prev) => [...new Set([...prev, tierId])])
          }
        })
      },
      { threshold: 0.2 },
    )

    const tierCards = containerRef.current?.querySelectorAll("[data-tier-id]")
    tierCards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Our Partnership Tiers</h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              data-tier-id={tier.id}
              className={`bg-white border-2 border-border p-8 rounded-2xl text-center hover:border-primary hover:shadow-lg transition-all duration-300 ${
                visibleTiers.includes(tier.id) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4">{tier.icon}</div>
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
