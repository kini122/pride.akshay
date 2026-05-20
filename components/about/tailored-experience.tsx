"use client"

import { useEffect, useRef, useState } from "react"

export function TailoredExperience() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative h-96 lg:h-full min-h-96 rounded-md overflow-hidden transition-all duration-700 ${
              "animate-fade-in-up"
            }`}
          >
            <img
              src="/about/tailored/balloon-decoration-setup-black-gold.jpg"
              alt="Balloon decoration setup"
              className="w-full h-full object-cover"
              style={{
                transform: isVisible ? "scale(1)" : "scale(1.1)",
              }}
            />
          </div>

          {/* Right side - Black background with text */}
          <div className="bg-black rounded-md p-12 lg:p-16 flex flex-col justify-center">
            <div
              className={`transition-all duration-700 delay-300 ${
                "animate-fade-in-up"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-8 leading-tight">
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
