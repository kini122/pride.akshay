"use client"

import { useEffect, useRef, useState } from "react"

export function BrandPromotions() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              "animate-fade-in-up"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-6">Brand Promotions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Boost your brand's visibility with Pride Eventz! We specialize in creative brand promotions, including
              corporate branding, marketing activations, and experiential events. From strategic campaigns to engaging
              on-ground promotions, we make your brand stand out!
            </p>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-700 ${
              "animate-fade-in-up"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative rounded-md overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 transition-transform duration-300">
              <img src="/promotions/brand-promotions/mall-activation-aerial-view-shopping-mall-crowd-co.jpg" alt="Brand Promotion" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
