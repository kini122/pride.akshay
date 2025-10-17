"use client"

import { useEffect, useRef, useState } from "react"

export function TestimonialQuote() {
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
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
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
