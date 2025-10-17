"use client"

import { useEffect, useRef, useState } from "react"

export function EducationalExhibition() {
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
          {/* Left Image */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/modern-tech-exhibition-booth-blue-branding.jpg"
                alt="Educational Exhibition"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Text */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Educational Exhibition</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We create impactful educational exhibitions with engaging displays, seamless planning, and interactive
              experiences. From concept to execution, we bring learning to life.
            </p>
            <ul className="space-y-3">
              {["Interactive learning displays", "Visitor engagement strategies", "Professional installation"].map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-pink-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
