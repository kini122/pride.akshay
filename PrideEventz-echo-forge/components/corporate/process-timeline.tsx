"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    phase: "01",
    title: "Consultation & Planning",
    description: "Understanding your goals and vision down to the finest detail to establish a bulletproof strategic foundation.",
  },
  {
    phase: "02",
    title: "Concept Development",
    description: "Creating innovative, high-impact event concepts that align perfectly with your corporate identity and objectives.",
  },
  {
    phase: "03",
    title: "Vendor Coordination",
    description: "Managing all high-end partnerships, technical logistics, and venue sourcing with uncompromising standards.",
  },
  {
    phase: "04",
    title: "Execution",
    description: "Flawless on-site event management by our senior coordination team, ensuring absolute operational perfection.",
  },
  {
    phase: "05",
    title: "Post-Event Analysis",
    description: "Comprehensive debriefing, measuring engagement success, and gathering actionable feedback for future growth.",
  },
]

export function ProcessTimeline() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Architecture</p>
            <h2 className="text-4xl md:text-5xl tracking-tight font-bold text-foreground mb-6">
              Corporate Process.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              A systematic, five-phase framework engineered for enterprise clients who demand flawless execution and zero margin for error.
            </p>
          </div>

          {/* Right Column: Architectural Steps */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <div
                  key={step.phase}
                  className={`group relative border-t border-border/50 py-12 md:py-16 transition-all duration-700 ease-out ${
                    "animate-fade-in-up"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    <div className="md:w-24 shrink-0">
                      <span className="text-5xl md:text-6xl font-bold text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
                        {step.phase}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-border/50 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
