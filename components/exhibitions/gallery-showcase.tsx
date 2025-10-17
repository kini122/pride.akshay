"use client"

import { useEffect, useRef, useState } from "react"
import { Eye } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Tech Expo 2024",
    category: "Technology",
    image: "/tech-exhibition-booth.jpg",
  },
  {
    id: 2,
    title: "Art Gallery",
    category: "Art",
    image: "/art-exhibition-gallery.jpg",
  },
  {
    id: 3,
    title: "Product Launch",
    category: "Product",
    image: "/product-showcase-exhibition.jpg",
  },
  {
    id: 4,
    title: "Trade Show",
    category: "Trade",
    image: "/trade-show-booth.jpg",
  },
  {
    id: 5,
    title: "Corporate Event",
    category: "Corporate",
    image: "/corporate-exhibition.jpg",
  },
  {
    id: 6,
    title: "Museum Exhibit",
    category: "Education",
    image: "/museum-exhibition.jpg",
  },
]

export function GalleryShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Exhibition Portfolio</h2>
          <p className="text-lg text-gray-600">See how we bring exhibition spaces to life</p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Eye className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Portfolio Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
