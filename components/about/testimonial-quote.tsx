"use client"

import { useEffect, useRef, useState } from "react"

export function TestimonialQuote() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-700 ${"animate-fade-in-up"}`}>
          <div className="text-6xl text-primary mb-8">"</div>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
            The power of creativity helps us craft unforgettable events and deliver seamless experiences.
          </p>
          <p className="text-lg text-muted-foreground">Pride Eventz Team</p>
        </div>
      </div>
    </section>
  )
}
