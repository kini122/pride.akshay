"use client"

import { useEffect, useRef, useState } from "react"

export function FeatureSpotlight() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-muted/30 relative overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/exhibitions/feature/exhibition-visitors-gallery.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Small Text */}
        <div className={`text-center mb-6 transition-all duration-500 ${"animate-fade-in-up"}`}>
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Exhibition Excellence</p>
        </div>

        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16 transition-all duration-700 ${
            "animate-fade-in-up"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          "Engage your audience with flawless exhibition design and execution"
        </h2>

        {/* Image Card */}
        <div
          className={`flex justify-center transition-all duration-700 ${
            "animate-fade-in-up"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="relative w-full max-w-2xl rounded-md overflow-hidden shadow-none border border-border/50-2xl hover:border-primary/50-3xl transition-shadow-none border border-border/50 duration-300 hover:-translate-y-1 transition-transform duration-300 transform">
            <img
              src="/exhibitions/feature/museum-gallery-visitors-viewing-exhibits.jpg"
              alt="Exhibition visitors"
              className="w-full h-auto object-cover animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
