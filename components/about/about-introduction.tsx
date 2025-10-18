"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function AboutIntroduction() {
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative h-[480px]">
              <img
                src="/beach-wedding-setup.jpg"
                alt="Beach wedding setup"
                className={`absolute top-0 left-0 w-64 h-64 rounded-2xl object-cover shadow-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transform: isVisible ? "rotate(-5deg)" : "rotate(-5deg) translateX(-32px)" }}
              />
              <img
                src="/corporate-event-exhibition.jpg"
                alt="Corporate event"
                className={`absolute bottom-0 right-0 w-64 h-64 rounded-2xl object-cover shadow-lg transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transform: isVisible ? "rotate(5deg)" : "rotate(5deg) translateX(32px)" }}
              />
              <img
                src="/luxury-event-party-celebration.jpg"
                alt="Event celebration setup"
                className={`absolute bottom-0 left-8 w-56 h-56 rounded-2xl object-cover shadow-lg transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transform: isVisible ? "rotate(-3deg)" : "rotate(-3deg) translateY(32px)" }}
              />
              <img
                src="/elegant-event-venue-decoration.jpg"
                alt="Elegant event venue"
                className={`absolute w-52 rounded-2xl object-cover shadow-lg transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                }`}
                style={{
                  height: "232px",
                  width: "208px",
                  top: "-4px",
                  left: "259px",
                  transform: isVisible ? "rotate(4deg)" : "rotate(4deg) translateY(-32px)"
                }}
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-3">
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Our event group is innovative and dynamic, dedicated to crafting exceptional event experiences.
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Pride Eventz, we specialize in creating unforgettable moments across all event categories. From
                intimate corporate gatherings to grand wedding celebrations, our comprehensive services include event
                planning, creative decorations, thematic design, and seamless execution. We transform your vision into
                reality with meticulous attention to detail.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment goes beyond logistics. We believe every event tells a story, and we're dedicated to
                creating stunning, organized experiences that leave lasting impressions on your guests. With over a
                decade of expertise, we've perfected the art of bringing dreams to life.
              </p>

              <p className="text-base text-muted-foreground mb-8">
                Our team of creative professionals combines artistic vision with practical expertise, ensuring every
                element—from concept to execution—reflects your unique style and objectives.
              </p>

              <Link
                href="/services/corporate"
                className="inline-block px-8 py-3 bg-foreground text-white rounded-lg hover:bg-primary transition-colors font-semibold"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
