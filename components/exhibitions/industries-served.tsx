"use client"

import { useEffect, useRef, useState } from "react"
import { Cpu, Car, Heart, BookOpen, Factory, ShoppingCart, Hotel, HeartIcon } from "lucide-react"

const industries = [
  { icon: Cpu, label: "Technology" },
  { icon: Car, label: "Automotive" },
  { icon: Heart, label: "Healthcare" },
  { icon: BookOpen, label: "Education" },
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingCart, label: "Retail" },
  { icon: Hotel, label: "Hospitality" },
  { icon: HeartIcon, label: "Non-Profit" },
]

export function IndustriesServed() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Industries We Serve</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {industries.map((industry, idx) => {
            const Icon = industry.icon
            return (
              <div
                key={idx}
                className={`flex flex-col items-center gap-3 p-4 rounded-md hover:bg-background hover:border-primary/50-none border border-border/50 transition-all duration-300 cursor-pointer group ${
                  "animate-fade-in-up"
                }`}
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <Icon className="w-8 h-8 text-primary group-hover:scale-105 transition-transform duration-500 ease-out transition-transform" />
                <span className="text-sm font-semibold text-muted-foreground text-center">{industry.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
