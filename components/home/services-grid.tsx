"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Briefcase, Megaphone, Grid3x3, Users, Heart, ArrowRight } from "lucide-react"

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
  {
    icon: Heart,
    title: "Weddings",
    description: "Traditional, destination, and modern wedding experiences",
    href: "/services/weddings",
  },
]

export function ServicesGrid() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll("[data-service-card]")
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive event management solutions tailored to your unique vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={service.href}
                href={service.href}
                data-service-card
                className={`group p-6 rounded-xl border border-border bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  visibleCards[index] ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                <div className="mb-4 p-3 bg-secondary rounded-lg w-fit group-hover:bg-primary transition-colors">
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
