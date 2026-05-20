"use client"

import { useEffect, useRef, useState } from "react"
import { ShoppingCart, Cpu, Car, Shirt, UtensilsCrossed, Heart, Building2, Phone } from "lucide-react"

const industries = [
  { icon: ShoppingCart, label: "FMCG" },
  { icon: Cpu, label: "Technology" },
  { icon: Car, label: "Automotive" },
  { icon: Shirt, label: "Fashion & Retail" },
  { icon: UtensilsCrossed, label: "Food & Beverage" },
  { icon: Heart, label: "Health & Wellness" },
  { icon: Building2, label: "Banking & Finance" },
  { icon: Phone, label: "Telecommunications" },
]

export function IndustriesServed() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Industries We Promote</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 p-4 rounded-md hover:bg-background hover:border-primary/50-none border border-border/50 transition-all duration-500 cursor-pointer ${
                  "animate-fade-in-up"
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <Icon className="w-8 h-8 text-muted-foreground hover:text-primary hover:scale-105 transition-transform duration-500 ease-out transition-all" />
                <span className="text-xs md:text-sm font-semibold text-muted-foreground text-center">{industry.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
