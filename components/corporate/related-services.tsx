"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function RelatedServices() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  

  const services = [
    {
      title: "Exhibitions & Trade Shows",
      href: "/services/exhibitions",
      image: "/corporate/related/exhibition-trade-show-event.jpg",
    },
    {
      title: "Product Launches",
      href: "/services/promotions",
      image: "/corporate/related/product-launch-event.png",
    },
    {
      title: "Award Ceremonies",
      href: "/services/corporate",
      image: "/corporate/related/award-ceremony.png",
    },
    {
      title: "Team Building Events",
      href: "/services/private-parties",
      image: "/corporate/related/team-building-outdoor-challenge.png",
    },
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Explore Our Other Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group rounded-md overflow-hidden border border-border/50 hover:border-primary/50-2xl transition-all duration-300 ${
                "animate-fade-in-up"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
              </div>

              <div className="p-6 bg-background">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
