"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function PricingPackages() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  

  const packages = [
    {
      name: "Essential Package",
      price: "Starting from ₹2,00,000",
      ideal: "Small corporate meetings (50-100 people)",
      features: [
        "Venue coordination",
        "Basic AV setup",
        "Catering service",
        "Event day coordination",
        "Basic photography",
      ],
      highlighted: false,
    },
    {
      name: "Professional Package",
      price: "Starting from ₹5,00,000",
      ideal: "Medium conferences (100-300 people)",
      features: [
        "Premium venue selection",
        "Advanced AV & lighting",
        "Gourmet catering",
        "Professional photography",
        "Event management team",
        "Post-event report",
      ],
      highlighted: true,
      badge: "MOST POPULAR",
    },
    {
      name: "Premium Package",
      price: "Custom Pricing",
      ideal: "Large conventions (300+ people)",
      features: [
        "Exclusive venue partnerships",
        "Full technical production",
        "Customized catering",
        "Video production",
        "Dedicated project manager",
        "Comprehensive analytics",
        "VIP guest management",
      ],
      highlighted: false,
    },
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-4">Corporate Event Packages</h2>
        <p className="text-center text-muted-foreground mb-16">All packages customizable to your needs</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-md border-2 p-8 transition-all duration-700 ${
                "animate-fade-in-up"
              } ${
                pkg.highlighted
                  ? "border-primary bg-background shadow-none border border-border/50-2xl scale-105"
                  : "border-border bg-background hover:border-primary/50-none border border-border/50"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {pkg.badge && (
                <div className="inline-block mb-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">
                  {pkg.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-primary mb-2">{pkg.price}</p>
              <p className="text-sm text-muted-foreground mb-6">Ideal for: {pkg.ideal}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full py-3 rounded-md text-center font-semibold transition-all ${
                  pkg.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                Get Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
