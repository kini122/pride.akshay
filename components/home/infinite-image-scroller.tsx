"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface InfiniteImageScrollerProps {
  images?: string[]
  height?: string
}

export function InfiniteImageScroller({
  images = [],
  height = "160px",
}: InfiniteImageScrollerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  // If no images provided, use a set of random images (Unsplash)
  const defaultImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5",
    "https://images.unsplash.com/photo-1526178616146-7a8a6c6f1f6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6",
  ]

  const imgs = images.length ? images : defaultImages

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Duplicate content so we can loop by resetting scroll
    // We'll use manual RAF to create smooth continuous scroll
    let speed = 0.6 // pixels per frame, adjust for desired speed

    function step() {
      if (!container) return
      if (!isPaused) {
        container.scrollLeft += speed
        // When we've scrolled through the first set, reset to start to create infinite effect
        const half = container.scrollWidth / 2
        if (container.scrollLeft >= half) {
          container.scrollLeft -= half
        }
      }
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isPaused, imgs])

  function handlePrev() {
    const container = containerRef.current
    if (!container) return
    const amount = Math.round(container.clientWidth / 2)
    container.scrollBy({ left: -amount, behavior: "smooth" })
  }

  function handleNext() {
    const container = containerRef.current
    if (!container) return
    const amount = Math.round(container.clientWidth / 2)
    container.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center z-10">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="p-2 bg-white/90 rounded-full shadow-md ml-2 hover:bg-white"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center z-10">
        <button
          aria-label="Next"
          onClick={handleNext}
          className="p-2 bg-white/90 rounded-full shadow-md mr-2 hover:bg-white"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap w-full rounded-lg"
        style={{ height }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="inline-flex" style={{ willChange: "transform" }}>
          {imgs.concat(imgs).map((src, i) => (
            <div key={i} className="flex-shrink-0 w-48 h-full mr-4 rounded-lg overflow-hidden shadow-md bg-gray-100">
              <img src={src} alt={`scroller-${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
