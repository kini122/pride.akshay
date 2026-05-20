"use client"

import { useEffect, useRef, useState } from "react"
import { Smile, CalendarDays, Handshake, ShieldCheck } from "lucide-react"

interface Stat {
  id: number
  number: number
  label: string
  icon: React.ElementType
}

const stats: Stat[] = [
  { id: 1, number: 500, label: "Happy Clients", icon: Smile },
  { id: 2, number: 1000, label: "Events Delivered", icon: CalendarDays },
  { id: 3, number: 50, label: "Brand Partners", icon: Handshake },
  { id: 4, number: 99, label: "Client Retention %", icon: ShieldCheck },
]

export function StatsIndicators() {
  const [counts, setCounts] = useState<Record<number, number>>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  

  return (
    <section className="py-24 px-4 bg-background">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
          {stats.map((stat) => (
            <div key={stat.id} className="group flex items-center gap-6 p-6 rounded-md border border-transparent hover:border-primary/30 bg-card hover:bg-card/80 transition-all duration-300">
              {/* Animated Emblem */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:shadow-[0_0_25px_rgba(var(--primary),0.4)] group-hover:scale-110 transition-all duration-500">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              {/* text */}
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-semibold text-foreground">
                  {counts[stat.id] || 0}
                  {stat.label.includes("%") ? "%" : "+"}
                </div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
