"use client"

import { useEffect, useRef, useState } from "react"

export function ProductLaunches() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div
            className={`transition-all duration-700 ${
              "animate-fade-in-up"
            }`}
          >
            <div className="relative rounded-md overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 transition-transform duration-300">
              <img src="/promotions/product-launches/mall-retail-activation-red-branded-booth-checkered.jpg" alt="Product Launch" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`transition-all duration-700 ${
              "animate-fade-in-up"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-6">Product Launches</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Make a powerful first impression with Pride Eventz! We specialize in high-impact product launches that
              captivate your audience and elevate your brand. From creative concepts to flawless execution, we craft
              memorable launch experiences that leave a lasting impact. Let's unveil your product in style!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
