"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Briefcase, Megaphone, Grid3x3, Users, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Conferences, product launches, and team building experiences",
    href: "/services/corporate",
  },
  {
    icon: Megaphone,
    title: "Promotions",
    description: "Brand activations and marketing events that create buzz",
    href: "/services/promotions",
  },
  {
    icon: Grid3x3,
    title: "Exhibitions",
    description: "Trade shows and expos with maximum impact",
    href: "/services/exhibitions",
  },
  {
    icon: Users,
    title: "Private Parties",
    description: "Birthdays, anniversaries, and intimate celebrations",
    href: "/services/private-parties",
  },
]

export function ServicesGrid() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto tracking-wide">
            Comprehensive event management solutions tailored to your unique vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={service.href}
                href={service.href}
                data-service-card
                className={`group p-6 rounded-md border border-border bg-background hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 transition-transform duration-300 ${
                  "animate-fade-in-up"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 p-3 bg-secondary rounded-md w-fit group-hover:bg-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center text-primary group-hover:text-accent transition-colors">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
