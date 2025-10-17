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
    <section ref={ref} className="py-20 md:py-32 px-4 bg-gray-50 relative overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/exhibition-visitors-gallery.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Small Text */}
        <div className={`text-center mb-6 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Exhibition Excellence</p>
        </div>

        {/* Heading */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          "Engage your audience with flawless exhibition design and execution"
        </h2>

        {/* Image Card */}
        <div
          className={`flex justify-center transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 hover:scale-105 transform">
            <img
              src="/museum-gallery-visitors-viewing-exhibits.jpg"
              alt="Exhibition visitors"
              className="w-full h-auto object-cover animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
