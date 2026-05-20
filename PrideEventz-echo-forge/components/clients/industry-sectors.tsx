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
  { id: 1, name: "Corporate Events", icon: <Users className="w-6 h-6" /> },
  { id: 2, name: "Social Events", icon: <Heart className="w-6 h-6" /> },
  { id: 3, name: "Exhibitions & Trade Shows", icon: <ShoppingCart className="w-6 h-6" /> },
  { id: 4, name: "Private Parties", icon: <Globe className="w-6 h-6" /> },
  { id: 5, name: "Promotions & Activations", icon: <Activity className="w-6 h-6" /> },
  { id: 6, name: "Product Launches", icon: <Truck className="w-6 h-6" /> },
  { id: 7, name: "Conferences & Seminars", icon: <GraduationCap className="w-6 h-6" /> },
  { id: 8, name: "Award Ceremonies", icon: <Trophy className="w-6 h-6" /> },
  { id: 9, name: "Festivals & Cultural Events", icon: <Globe className="w-6 h-6" /> },
  { id: 10, name: "Experiential Marketing", icon: <Home className="w-6 h-6" /> },
]

export function IndustrySectors() {
    const containerRef = useRef<HTMLDivElement>(null)

  

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-4">Event Sectors We Serve</h2>
        <p className="text-neutral-500 max-w-2xl mx-auto mb-12">We design and execute memorable events across a wide range of sectors.</p>

        <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              data-industry-id={industry.id}
              className={`flex flex-col items-center gap-4 transition-transform duration-300 ${
                "animate-fade-in-up"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-[#a6d24a] flex items-center justify-center text-white border border-border/50">
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
