"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface InfiniteImageScrollerProps {
  images?: string[]
  height?: string
}

export function InfiniteImageScroller({
  images = [],
  height = "360px",
}: InfiniteImageScrollerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Default event-related images (use attachments provided)
  const defaultImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2Fcd443962bb69492792ab94b10321652c?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F4a62f28d02fb46af8dccaaae6befa4a3?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2Fc44ee380588a4d50af68d7e6bdb8176e?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F13995c1f8ea343e681b717c5aaafc212?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2Fa1e808a469904c399f626f2e547350df?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F084381e89ac04933a43b5de3b6e70121?format=webp&width=800",
  ]

  const imgs = images.length ? images : defaultImages
  // Ensure consistent size for each slide based on the provided height

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
        <div className="inline-flex" style={{ willChange: "transform", justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '104px' }}>
          {imgs.concat(imgs).map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 mr-4 rounded-lg overflow-hidden shadow-md bg-gray-100"
              style={{ width: '360px', height: '100%' }}
            >
              <img src={src} alt={`scroller-${i}`} className="w-full h-full object-cover transform-gpu will-change-transform" style={{ transform: 'scale(1.06)', transition: 'transform 600ms ease' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
