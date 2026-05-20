"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Palette, Package, BookOpen, Cpu, Building2 } from "lucide-react"

const exhibitionTypes = [
  {
    icon: Zap,
    title: "Trade Shows",
    description: "Professional trade show booth design, setup, and management for maximum brand impact",
  },
  {
    icon: Palette,
    title: "Art Exhibitions",
    description: "Curated art gallery experiences with perfect lighting, layout, and visitor flow",
  },
  {
    icon: Package,
    title: "Product Showcases",
    description: "Interactive product displays that highlight features and drive customer engagement",
  },
  {
    icon: BookOpen,
    title: "Educational Exhibits",
    description: "Informative, engaging exhibits for museums, schools, and learning centers",
  },
  {
    icon: Cpu,
    title: "Technology Expos",
    description: "Cutting-edge tech exhibitions with innovative displays and interactive demos",
  },
  {
    icon: Building2,
    title: "Corporate Exhibitions",
    description: "Professional corporate exhibitions showcasing company achievements and capabilities",
  },
]

export function ExhibitionTypesGrid() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-4">Exhibition Solutions We Offer</h2>
          <p className="text-lg text-muted-foreground">From concept to completion, we handle every aspect</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {exhibitionTypes.map((type, idx) => {
            const Icon = type.icon
            return (
              <div
                key={idx}
                className={`bg-background rounded-md p-8 border border-border/50 hover:border-primary/50-none border border-border/50 hover:-translate-y-1 transition-transform duration-300 transition-all duration-300 ${
                  "animate-fade-in-up"
                }`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4 inline-block p-3 bg-orange-100 rounded-md group-hover:bg-orange-200 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
