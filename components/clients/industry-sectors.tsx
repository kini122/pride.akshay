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
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Industries We Serve</h2>
        <p className="text-neutral-500 max-w-2xl mx-auto mb-12">We are proud to be driving a digital revolution across various industry verticals.</p>

        <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              data-industry-id={industry.id}
              className={`flex flex-col items-center gap-4 transition-transform duration-300 ${
                visibleIndustries.includes(industry.id) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-[#a6d24a] flex items-center justify-center text-white shadow-sm">
                {/* icon */}
                <div className="text-white">{industry.icon}</div>
              </div>
              <p className="text-sm font-semibold text-neutral-800 mt-1">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
