"use client"

import { useEffect, useRef, useState } from "react"

const expertiseAreas = [
  { label: "PRIVATE PARTIES", percentage: 95 },
  { label: "PROJECT MANAGEMENT", percentage: 90 },
  { label: "DIGITAL MARKETING", percentage: 85 },
  { label: "STAGE COORDINATION", percentage: 92 },
  { label: "FIREWORKS & VFX", percentage: 88 },
]

export function ExpertiseSection() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-8 leading-tight">
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
                      isVisible ? "w-full" : "w-0"
                    }`}
                    style={{
                      width: isVisible ? `${area.percentage}%` : "0%",
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
