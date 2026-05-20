"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    phase: "01",
    title: "Discovery & Planning",
    description: "In-depth consultation to understand your goals, target audience, spatial requirements, and brand narrative.",
  },
  {
    phase: "02",
    title: "Concept Design",
    description: "Creating highly innovative exhibition concepts complete with architectural flow and 3D spatial visualizations.",
  },
  {
    phase: "03",
    title: "Content Development",
    description: "Developing engaging visual content, structural graphics, and high-end interactive elements for maximum impact.",
  },
  {
    phase: "04",
    title: "Fabrication & Production",
    description: "Precision engineering and building of custom displays, premium structures, and specialized exhibition elements.",
  },
  {
    phase: "05",
    title: "Installation & Setup",
    description: "Professional, white-glove on-site installation and rigorous structural quality checks by our technical team.",
  },
  {
    phase: "06",
    title: "Event Management",
    description: "End-to-end on-site support during the exhibition, followed by comprehensive post-event evaluation.",
  },
]

export function ProcessSection() {
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
              Exhibition Process.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              A highly systematic, architectural approach engineered to deliver uncompromising exhibition excellence from blueprint to reality.
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
