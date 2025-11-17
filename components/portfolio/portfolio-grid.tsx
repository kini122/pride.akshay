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
  // Added new gallery items from attachments
  {
    id: 13,
    title: "Rotary Governor Elect Seminar Stage",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fd71f94c4968f48a3ad8e5933963902b1?format=webp&width=800",
    date: "December 2024",
  },
  {
    id: 14,
    title: "Godrej Unlocking 7 Product Launch",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F6a3a0e7c5ad54f4099707bb3d66477b9?format=webp&width=800",
    date: "2024",
  },
  {
    id: 15,
    title: "HP x Microsoft Future Is Here Conference",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F996b029f5fcb4a51b6d3c7f8ad3661ef?format=webp&width=800",
    date: "2024",
  },
  {
    id: 16,
    title: "Carestream Partner Conference Welcome Stage",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa7beb0d255d14d0a9ac16dc1f44be26e?format=webp&width=800",
    date: "2025",
  },
  {
    id: 17,
    title: "Pidilite Premier Club Live Performance",
    category: "shows",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fbeda75a87a2e4568b5d66d9671b4e4aa?format=webp&width=800",
    date: "2024",
  },
  {
    id: 18,
    title: "LED Infinity Dance Floor Setup",
    category: "shows",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F82c332469bd34e908924db10173dca0c?format=webp&width=800",
    date: "2024",
  },
  {
    id: 19,
    title: "Rotary Panel Discussion Stage with Dual Screens",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F2426867686274f258daf5c5e650c4458?format=webp&width=800",
    date: "2024",
  },
  {
    id: 20,
    title: "Cultural Welcome Procession with Elephants",
    category: "events",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fbba071cdbc08433fad8260996e49be86?format=webp&width=800",
    date: "2024",
  },
  {
    id: 21,
    title: "Rotary Institute Grand Red Stage Lighting",
    category: "shows",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa2982656be3648e18012fc92e12b6518?format=webp&width=800",
    date: "2024",
  },
  {
    id: 22,
    title: "Event Check‑in and Wayfinding Branding",
    category: "branding",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F87489872402d4dcfb6cc169bef7944f2?format=webp&width=800",
    date: "2024",
  },
  {
    id: 23,
    title: "Boardroom Seminar Setup",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F53f6b6ee8aa54930afa049e3d290424e?format=webp&width=800",
    date: "2024",
  },
  {
    id: 24,
    title: "Traditional Tilak Welcome Ceremony",
    category: "events",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Ff1fcdd52c7b24426b70fb147487e6383?format=webp&width=800",
    date: "2024",
  },
  {
    id: 25,
    title: "Pidilite Premier Club Night Stage",
    category: "shows",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa40c787ed1f24d148e8284d95a08c247?format=webp&width=800",
    date: "2024",
  },
  {
    id: 26,
    title: "LEAP 2025 Ballroom Conference",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F4d68f53b5629472c938e18e1dcf7c72f?format=webp&width=800",
    date: "2025",
  },
  {
    id: 27,
    title: "Premier Club Stage with Side LED Walls",
    category: "shows",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fded0f48caef74b2ea6dee2d191279da7?format=webp&width=800",
    date: "2024",
  },
  {
    id: 28,
    title: "Kajaria Kerovit Brand Conference Stage",
    category: "branding",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F4212bbd5c9244b83bf5cfba36dab8ea0?format=webp&width=800",
    date: "2024",
  },
  {
    id: 29,
    title: "Rotary Institute Main Hall Night Show",
    category: "shows",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F5e49c185a78d444585e93493f9bb4a92?format=webp&width=800",
    date: "2024",
  },
  {
    id: 30,
    title: "Corporate Annual Meet – Collections Team",
    category: "corporate",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F13d418bdcef54491bccf791cd3692165?format=webp&width=800",
    date: "2024",
  },
  {
    id: 31,
    title: "Medtronic Exhibition Booth",
    category: "exhibitions",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fc7af8a2f5cdc4da29f16df64c6dea0e2?format=webp&width=800",
    date: "2024",
  },
  {
    id: 32,
    title: "PREET Heavy Machinery Outdoor Stall",
    category: "exhibitions",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fea0e9852f5984c498e38a14cd04d2d58?format=webp&width=800",
    date: "2024",
  },
  {
    id: 33,
    title: "Rotary International Terminal Check‑in Setup",
    category: "branding",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F51c02e0fb16849aaa80a3af104b3f1c3?format=webp&width=800",
    date: "2024",
  },
  {
    id: 34,
    title: "Pharma Backlit Product Showcase Booth",
    category: "exhibitions",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fb4b463a000684fdc8614f9dba5cf7960?format=webp&width=800",
    date: "2024",
  },
  {
    id: 35,
    title: "Premier Club Outdoor Night Stage",
    category: "shows",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa674fa8251e74b1ca18bee31d16aa87d?format=webp&width=800",
    date: "2024",
  },
  {
    id: 36,
    title: "Epson Branded Exhibition Pavilion",
    category: "exhibitions",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F6c0150dd8c4f4285a31c213ebae6def6?format=webp&width=800",
    date: "2024",
  },
  {
    id: 37,
    title: "KFC Onam Mall Activation",
    category: "events",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F72800419188d4458b89d69eba8e971a7?format=webp&width=800",
    date: "2024",
  },
  {
    id: 38,
    title: "River EV Scooters Shopping Mall Display",
    category: "events",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F799eef597d8a464fa3d9665d1fa90f25?format=webp&width=800",
    date: "2024",
  },
  {
    id: 39,
    title: "LinenClub Showroom on Wheels Van",
    category: "events",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F4186d12cddf648a4ba750d25117ddc4a?format=webp&width=800",
    date: "2024",
  },
  {
    id: 40,
    title: "Bosch Beach Roadshow Experience Truck",
    category: "events",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fd388df5ae1d24615bd441a7abd1f260e?format=webp&width=800",
    date: "2024",
  },
  {
    id: 41,
    title: "Canon Dealer Meet Roadshow Launch",
    category: "events",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fbb9e53f019704f1d9ec3510043a91258?format=webp&width=800",
    date: "2024",
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
                className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer animate-fade-in-up portfolio-item"
                style={{ ['--portfolio-delay']: `${index * 50}ms` }}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image */}
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 portfolio-overlay" />

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
