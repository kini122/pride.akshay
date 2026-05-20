"use client"

import { useEffect, useRef, useState } from "react"

export function StorySection() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder.svg?key=team1"
              alt="Team working"
              className={`rounded-md h-64 object-cover transition-all duration-700 ${
                "animate-fade-in-up"
              }`}
            />
            <img
              src="/placeholder.svg?key=team2"
              alt="Event setup"
              className={`rounded-md h-64 object-cover transition-all duration-700 delay-100 ${
                "animate-fade-in-up"
              }`}
            />
            <img
              src="/placeholder.svg?key=team3"
              alt="Celebration"
              className={`rounded-md h-64 object-cover transition-all duration-700 delay-200 ${
                "animate-fade-in-up"
              }`}
            />
            <img
              src="/placeholder.svg?key=team4"
              alt="Planning"
              className={`rounded-md h-64 object-cover transition-all duration-700 delay-300 ${
                "animate-fade-in-up"
              }`}
            />
          </div>

          {/* Text Content */}
          <div className={`transition-all duration-700 ${"animate-fade-in-up"}`}>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Founded in <span className="text-primary font-semibold">2010</span>, Pride Eventz emerged from a passion
              for creating unforgettable moments. What started as a small team with big dreams has grown into Kerala's
              most trusted luxury event management company.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Over 14 years, we've orchestrated more than 200 events, from intimate celebrations to grand corporate
              gatherings. Each event is a testament to our commitment to excellence and innovation.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is simple: to transform visions into reality and create moments that resonate forever. We
              believe every event tells a story, and we're honored to be part of yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
