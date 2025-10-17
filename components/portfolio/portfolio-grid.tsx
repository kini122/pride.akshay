"use client"

import { useState, useEffect } from "react"
import { Eye } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Corporate Event with Stage Lighting",
    category: "shows",
    image: "/corporate-event-with-crowd-stage-lighting.jpg",
    date: "March 2024",
  },
  {
    id: 2,
    title: "Under the Sea Balloon Decoration",
    category: "exhibitions",
    image: "/under-the-sea-themed-balloon-decoration-with-chara.jpg",
    date: "February 2024",
  },
  {
    id: 3,
    title: "Pidilite Brands Showcase",
    category: "branding",
    image: "/corporate-presentation-pidilite-brands-showcase.jpg",
    date: "January 2024",
  },
  {
    id: 4,
    title: "Traditional Kerala Dancers",
    category: "events",
    image: "/traditional-kerala-dancers-in-costumes-inauguratio.jpg",
    date: "December 2023",
  },
  {
    id: 5,
    title: "Sunfeast Arrowroot Stage Branding",
    category: "branding",
    image: "/sunfeast-arrowroot-stage-branding-corporate-event.jpg",
    date: "November 2023",
  },
  {
    id: 6,
    title: "Mall Event Aerial View",
    category: "shows",
    image: "/mall-event-with-massive-crowd-aerial-view.jpg",
    date: "October 2023",
  },
  {
    id: 7,
    title: "Purple Pink Butterfly Entrance",
    category: "events",
    image: "/decorative-entrance-purple-pink-lighting-butterfly.jpg",
    date: "September 2023",
  },
  {
    id: 8,
    title: "Idea Telecom Corporate Event",
    category: "branding",
    image: "/idea-telecom-corporate-event-stage-branding.jpg",
    date: "August 2023",
  },
  {
    id: 9,
    title: "Elegant Wedding Stage",
    category: "weddings",
    image: "/elegant-wedding-stage-decoration.jpg",
    date: "July 2023",
  },
  {
    id: 10,
    title: "Trade Show Booth Setup",
    category: "exhibitions",
    image: "/trade-show-booth-setup-exhibition.jpg",
    date: "June 2023",
  },
  {
    id: 11,
    title: "Conference Room Setup",
    category: "corporate",
    image: "/conference-room-setup-corporate-event.jpg",
    date: "May 2023",
  },
  {
    id: 12,
    title: "Live Performance with Lighting",
    category: "shows",
    image: "/live-performance-with-professional-lighting.jpg",
    date: "April 2023",
  },
]

interface PortfolioGridProps {
  filter?: string
}

export function PortfolioGrid({ filter = "all" }: PortfolioGridProps) {
  const [displayedItems, setDisplayedItems] = useState(9)
  const [filteredItems, setFilteredItems] = useState(portfolioItems)
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)

  useEffect(() => {
    if (filter === "all") {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter((item) => item.category === filter))
    }
    setDisplayedItems(9)
  }, [filter])

  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.slice(0, displayedItems).map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image */}
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300" />

                {/* Content - Slides up on Hover */}
                <div className="absolute inset-0 flex flex-col items-end justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      Lightbox
                    </p>
                  </div>

                  {/* Quick View Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Subtle Shadow */}
                <div className="absolute inset-0 shadow-lg shadow-black/10 rounded-lg pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.title}
              className="w-full h-auto rounded-lg animate-fade-in-up"
            />

            {/* Project Details */}
            <div className="mt-6 text-white">
              <h2 className="text-3xl font-bold mb-2">{selectedItem.title}</h2>
              <p className="text-white/80 mb-4">{selectedItem.date}</p>
              <p className="text-white/70 mb-6">
                This project showcases our expertise in creating memorable event experiences with attention to every
                detail.
              </p>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors">
                View More Projects
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
