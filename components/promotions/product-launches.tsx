"use client"

import { useEffect, useRef, useState } from "react"

export function ProductLaunches() {
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
    <section ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img src="/mall-retail-activation-red-branded-booth-checkered.jpg" alt="Product Launch" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Product Launches</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
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
