"use client"

import { useEffect, useRef, useState } from "react"

export function IntroductionSection() {
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
    <section ref={ref} className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">"From Concept to Celebration"</h2>
          </div>

          {/* Right Column */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              At Pride Eventz, we streamline exhibition planning to deliver unforgettable experiences. Whether it's a
              corporate gathering or a personal celebration, we guide you through each step for a flawless execution
              that meets your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
