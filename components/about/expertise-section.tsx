"use client"

import { useEffect, useRef, useState } from "react"

const expertiseAreas = [
  { label: "WEDDINGS", percentage: 95 },
  { label: "PROJECT MANAGEMENT", percentage: 90 },
  { label: "DIGITAL MARKETING", percentage: 85 },
  { label: "STAGE COORDINATION", percentage: 92 },
  { label: "FIREWORKS & VFX", percentage: 88 },
]

export function ExpertiseSection() {
  const [visibleBars, setVisibleBars] = useState<boolean[]>(new Array(expertiseAreas.length).fill(false))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            expertiseAreas.forEach((_, index) => {
              setTimeout(() => {
                setVisibleBars((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 150)
            })
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
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Our Expertise in Event Management
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience, we've developed comprehensive expertise across all aspects of event
              management. From intimate corporate gatherings to grand celebrations, our team brings meticulous planning
              and creative excellence to every project.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expert team combines technical knowledge with artistic vision, ensuring every event is executed with
              precision and leaves a lasting impression on your guests.
            </p>
          </div>

          {/* Right Column - Progress Bars */}
          <div className="space-y-8">
            {expertiseAreas.map((area, index) => (
              <div key={area.label}>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-foreground">{area.label}</label>
                  <span className="text-sm font-bold text-primary">{area.percentage}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-primary rounded-full transition-all duration-1000 ease-out ${
                      visibleBars[index] ? "w-full" : "w-0"
                    }`}
                    style={{
                      width: visibleBars[index] ? `${area.percentage}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
