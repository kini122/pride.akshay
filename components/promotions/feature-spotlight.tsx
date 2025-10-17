"use client"

import { useEffect, useRef, useState } from "react"

export function FeatureSpotlight() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-gray-100 relative overflow-hidden"
      style={{
        backgroundImage: "url('/promotional-event-product-launch.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800/40" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          "Launching Iconic Products with Impact and Innovation"
        </h2>

        {/* Center Image Card */}
        <div
          className={`inline-block transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <img src="/tech-product-launch-event-with-blue-lighting-ipxa-.jpg" alt="Product Launch Event" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
