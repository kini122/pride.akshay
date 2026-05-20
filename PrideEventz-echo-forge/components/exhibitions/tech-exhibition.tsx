"use client"

import { useEffect, useRef, useState } from "react"

export function TechExhibition() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Text */}
          <div
            className={`transition-all duration-700 order-2 md:order-1 ${
              "animate-fade-in-up"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Tech Exhibition</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We design cutting-edge tech exhibitions with innovative displays, seamless execution and immersive
              experiences. From concept to showcase, we bring technology to life.
            </p>
            <ul className="space-y-3">
              {["Interactive tech displays", "AV integration", "Immersive experiences"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-700 order-1 md:order-2 ${
              "animate-fade-in-up"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="rounded-md overflow-hidden border border-border/50 hover:border-primary/50-2xl transition-shadow-none border border-border/50">
              <img src="/exhibitions/tech/tech-trade-show-expo-video-screens-displays.jpg" alt="Tech Exhibition" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
