"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    phase: "01",
    title: "Strategy & Planning",
    description: "Deep-dive analysis into brand objectives, market positioning, and target demographics to establish the core strategic blueprint.",
  },
  {
    phase: "02",
    title: "Creative Conceptualization",
    description: "Developing highly innovative, bespoke promotional concepts engineered to maximize brand visibility and audience engagement.",
  },
  {
    phase: "03",
    title: "Logistics Planning",
    description: "Rigorous coordination of premium venues, marketing materials, technical setups, and specialized operational teams.",
  },
  {
    phase: "04",
    title: "Staff Training",
    description: "Intensive, tailored training programs for brand ambassadors and promoters to guarantee perfect brand representation.",
  },
  {
    phase: "05",
    title: "Campaign Execution",
    description: "Precision on-ground implementation and real-time management to ensure flawless delivery of the promotional experience.",
  },
  {
    phase: "06",
    title: "Analytics & Reporting",
    description: "In-depth post-campaign data analysis, measuring direct impact, audience engagement, and overall Return on Investment (ROI).",
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
              Promotional Framework.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              A systematic, six-phase methodology designed to engineer maximum impact and measurable ROI for premium brand activations.
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
