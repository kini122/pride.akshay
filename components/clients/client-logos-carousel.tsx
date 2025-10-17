"use client"

import { useEffect, useRef, useState } from "react"

const logos = [
  { id: 1, name: "Boroline", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fb160f523d42641059874d0844c8a91bd?format=webp&width=800" },
  { id: 2, name: "Cars24", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fd75876a5beef467090a1645e7835f2c3?format=webp&width=800" },
  { id: 3, name: "Fevicol", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F30a3d55d5d4d4fd5895e6dfb5ac91a02?format=webp&width=800" },
  { id: 4, name: "Fevikwik", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F61beb9b3b3f846bc975c1c762a2ebf06?format=webp&width=800" },
  { id: 5, name: "Dr. Fixit", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F7ba0997b38144d7ab0449117f2525af2?format=webp&width=800" },
  { id: 6, name: "groupm", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F96b1229fc87d466ea9187d32097d9b99?format=webp&width=800" },
  { id: 7, name: "ICICI Bank", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F2936accc7c4d41a083e1950642673b3e?format=webp&width=800" },
  { id: 8, name: "Kansai Nerolac", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F6d1faf572d0f48b49e2bfab17f7bc62e?format=webp&width=800" },
  { id: 9, name: "Licious", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F6aae71a2006240eb962c6dfba4c96a47?format=webp&width=800" },
  { id: 10, name: "Mirchi", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa1e413765bf74b17b771fb122f61e2b7?format=webp&width=800" },
  { id: 11, name: "Niva", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fc771d105105c4bd89e74926efde734d9?format=webp&width=800" },
  { id: 12, name: "Pidilite", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fe18ba0161d6546bcae45983c64ea5360?format=webp&width=800" },
  { id: 13, name: "Roff", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fe454f18200734dae94a766cd0ab08ea4?format=webp&width=800" },
  { id: 14, name: "Thomas Cook", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fe66816c550cd47418548f76d77c28f91?format=webp&width=800" },
  { id: 15, name: "Zee TV", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F852b8c964b4f4e69a00408252bbcea49?format=webp&width=800" },
  { id: 16, name: "Zespri", logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F87b43136093046cbb3df1a0115b26775?format=webp&width=800" },
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
