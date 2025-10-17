"use client"

import { useEffect, useRef, useState } from "react"

export function TechExhibition() {
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
    <section ref={ref} className="py-20 md:py-32 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Text */}
          <div
            className={`transition-all duration-700 order-2 md:order-1 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tech Exhibition</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We design cutting-edge tech exhibitions with innovative displays, seamless execution and immersive
              experiences. From concept to showcase, we bring technology to life.
            </p>
            <ul className="space-y-3">
              {["Interactive tech displays", "AV integration", "Immersive experiences"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-pink-500 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-700 order-1 md:order-2 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/tech-trade-show-expo-video-screens-displays.jpg" alt="Tech Exhibition" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
