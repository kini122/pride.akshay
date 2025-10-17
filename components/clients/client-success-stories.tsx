"use client"

import { useEffect, useRef, useState } from "react"

interface CaseStudy {
  id: number
  clientLogo: string
  title: string
  description: string
  results: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    clientLogo: "🌶️",
    title: "Radio Mirchi Launch Event",
    description:
      "Organized a massive launch event for Radio Mirchi's new FM station with live performances and brand activations.",
    results: "Reached 50,000+ attendees with 200% social media engagement increase",
  },
  {
    id: 2,
    clientLogo: "🏦",
    title: "ICICI Bank Corporate Summit",
    description:
      "Executed a large-scale corporate summit for ICICI Bank with keynote speakers and networking sessions.",
    results: "Successfully hosted 2,000+ participants with 95% satisfaction rating",
  },
  {
    id: 3,
    clientLogo: "📺",
    title: "Zee TV Awards Ceremony",
    description: "Produced a glamorous awards ceremony for Zee TV with celebrity performances and live streaming.",
    results: "Garnered 5M+ TV viewership and trending on social media for 3 days",
  },
]

export function ClientSuccessStories() {
  const [visibleStories, setVisibleStories] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const storyId = Number.parseInt(entry.target.getAttribute("data-story-id") || "0")
            setVisibleStories((prev) => [...new Set([...prev, storyId])])
          }
        })
      },
      { threshold: 0.2 },
    )

    const stories = containerRef.current?.querySelectorAll("[data-story-id]")
    stories?.forEach((story) => observer.observe(story))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Client Success Stories</h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              data-story-id={study.id}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:scale-102 transition-all duration-300 ${
                visibleStories.includes(study.id) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{study.clientLogo}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{study.title}</h3>
              <p className="text-muted-foreground mb-4">{study.description}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-primary">{study.results}</p>
              </div>
              <a href="#" className="inline-block mt-4 text-primary font-semibold hover:text-accent transition-colors">
                Read Full Story →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
