"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Events Managed (Last 5 Years)", value: 500, suffix: "+" },
  { label: "Successful Projects", value: 200, suffix: "+" },
  { label: "Industry Experience", value: 50, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
]

export function StatsSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url("/placeholder.svg?key=stats-bg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        style={{
          backgroundImage: 'url("https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2Fec6c218f1d534cd2899d6f9dc8afeef3")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Left side text */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-4">Our Legacy in the Making</h2>
          <p className="text-lg text-white/80 max-w-2xl">
            With years of experience and countless successful events, we've built a reputation for excellence and
            innovation in the event management industry.
          </p>
        </div>

        {/* Stats Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-background/10 backdrop-blur-sm p-8 rounded-md border border-border/40">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ color: "oklch(0.6 0.2 30)", marginBottom: "8px", font: "700 60px/60px Inter, sans-serif" }}>
                  <div style={{ fontWeight: "700", marginRight: index === 0 ? "222px" : "-48px" }}>
                    {counts[index]}{stat.suffix}
                  </div>
                </div>
              </div>
              <p className="text-lg text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
