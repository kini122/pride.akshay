"use client"

import { useEffect, useRef, useState } from "react"
import { Truck, Globe, Users, Heart, Coffee, Activity, ShoppingCart, Home, GraduationCap, MapPin, Trophy } from "lucide-react"
import React from "react"

interface Industry {
  id: number
  name: string
  icon: React.ReactNode
}

const industries: Industry[] = [
  { id: 1, name: "Logistics", icon: <Truck className="w-6 h-6" /> },
  { id: 2, name: "Social Networking", icon: <Users className="w-6 h-6" /> },
  { id: 3, name: "Healthcare", icon: <Heart className="w-6 h-6" /> },
  { id: 4, name: "Restaurant", icon: <Coffee className="w-6 h-6" /> },
  { id: 5, name: "Wellness & Fitness", icon: <Activity className="w-6 h-6" /> },
  { id: 6, name: "Sports", icon: <Trophy className="w-6 h-6" /> },
  { id: 7, name: "Ecommerce", icon: <ShoppingCart className="w-6 h-6" /> },
  { id: 8, name: "Real Estate", icon: <Home className="w-6 h-6" /> },
  { id: 9, name: "Education", icon: <GraduationCap className="w-6 h-6" /> },
  { id: 10, name: "Travel", icon: <MapPin className="w-6 h-6" /> },
]

export function IndustrySectors() {
  const [visibleIndustries, setVisibleIndustries] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const industryId = Number.parseInt(entry.target.getAttribute("data-industry-id") || "0")
            setVisibleIndustries((prev) => [...new Set([...prev, industryId])])
          }
        })
      },
      { threshold: 0.2 },
    )

    const industryCards = containerRef.current?.querySelectorAll("[data-industry-id]")
    industryCards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Industries We Serve</h2>

        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              data-industry-id={industry.id}
              className={`p-6 bg-white border border-border rounded-xl text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${
                visibleIndustries.includes(industry.id) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-4xl mb-3">{industry.icon}</div>
              <p className="font-semibold text-foreground text-sm">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
