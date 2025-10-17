"use client"

import { useEffect, useRef, useState } from "react"

export function TailoredExperience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src="/balloon-decoration-setup-black-gold.jpg"
              alt="Balloon decoration setup"
              className="w-full h-full object-cover"
              style={{
                transform: isVisible ? "scale(1)" : "scale(1.1)",
              }}
            />
          </div>

          {/* Right side - Black background with text */}
          <div className="bg-black rounded-2xl p-12 lg:p-16 flex flex-col justify-center">
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Tailored, seamless event experiences.
              </h2>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                We understand that every event is unique. That's why we create personalized solutions that reflect your
                vision, values, and objectives. Our meticulous attention to detail ensures nothing is overlooked.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                From intimate gatherings to large-scale productions, we bring the same level of dedication and
                creativity to every project. Your success is our success, and we're committed to exceeding your
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
