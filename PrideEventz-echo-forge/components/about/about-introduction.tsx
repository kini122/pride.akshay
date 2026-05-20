"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function AboutIntroduction() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <div className="relative h-[480px]">
              <img
                src="/about/introduction/luxury-event-party-celebration.jpg"
                alt="Luxury party setup"
                className={`absolute top-0 left-0 w-64 h-64 rounded-md object-cover border border-border/50 transition-all duration-700 ${
                  "animate-fade-in-up"
                }`}
                style={{ transform: isVisible ? "rotate(-5deg)" : "rotate(-5deg) translateX(-32px)" }}
              />
              <img
                src="/about/team/corporate-event-exhibition.jpg"
                alt="Corporate event"
                className={`absolute bottom-0 right-0 w-64 h-64 rounded-md object-cover border border-border/50 transition-all duration-700 delay-200 ${
                  "animate-fade-in-up"
                }`}
                style={{ transform: isVisible ? "rotate(5deg)" : "rotate(5deg) translateX(32px)" }}
              />
              <img
                src="/about/introduction/luxury-event-party-celebration.jpg"
                alt="Event celebration setup"
                className={`absolute bottom-0 left-8 w-56 h-56 rounded-md object-cover border border-border/50 transition-all duration-700 delay-300 ${
                  "animate-fade-in-up"
                }`}
                style={{ transform: isVisible ? "rotate(-3deg)" : "rotate(-3deg) translateY(32px)" }}
              />
              <img
                src="/about/introduction/elegant-event-venue-decoration.jpg"
                alt="Elegant event venue"
                className={`absolute w-52 rounded-md object-cover border border-border/50 transition-all duration-700 delay-400 ${
                  "animate-fade-in-up"
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
            <div className={`transition-all duration-700 ${"animate-fade-in-up"}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-8 leading-tight">
                Our event group is innovative and dynamic, dedicated to crafting exceptional event experiences.
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Pride Eventz, we specialize in creating unforgettable moments across all event categories. From
                intimate corporate gatherings to grand social celebrations, our comprehensive services include event
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
                className="inline-block px-8 py-3 bg-foreground text-background rounded-md hover:bg-primary transition-colors font-semibold"
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
