"use client"

import { useEffect, useRef, useState } from "react"

const logos = [
  { id: 1, name: "Mirchi", emoji: "🌶️" },
  { id: 2, name: "Zespri", emoji: "🥝" },
  { id: 3, name: "ICICI Bank", emoji: "🏦" },
  { id: 4, name: "Zee TV", emoji: "📺" },
  { id: 5, name: "Fevicol", emoji: "🔵" },
  { id: 6, name: "Fevikwik", emoji: "🔴" },
]

export function ClientLogosCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollPosition = 0
    const scrollSpeed = 1

    const animate = () => {
      if (!isHovered) {
        scrollPosition += scrollSpeed
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0
        }
        container.scrollLeft = scrollPosition
      }
    }

    const interval = setInterval(animate, 30)
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex gap-12 overflow-x-auto scrollbar-hide"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Duplicate logos for infinite scroll effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-110 cursor-pointer grayscale hover:grayscale-0"
            >
              <div className="text-6xl">{logo.emoji}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
