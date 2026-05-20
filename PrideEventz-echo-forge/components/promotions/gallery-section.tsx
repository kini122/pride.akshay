"use client"

import { useEffect, useRef, useState } from "react"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const galleryImages = [
  {
    src: "/promotions/gallery/product-launch-event.png",
    title: "Product Launch",
    client: "Tech Brand",
  },
  {
    src: "/promotions/gallery/mall-activation.jpg",
    title: "Mall Activation",
    client: "Retail Co.",
  },
  {
    src: "/promotions/gallery/street-marketing-campaign.jpg",
    title: "Street Marketing",
    client: "FMCG Brand",
  },
  {
    src: "/promotions/gallery/brand-promotion-event.jpg",
    title: "Brand Promotion",
    client: "Fashion Brand",
  },
  {
    src: "/promotions/gallery/roadshow-event.jpg",
    title: "Roadshow",
    client: "Automotive",
  },
  {
    src: "/promotions/gallery/sampling-campaign.jpg",
    title: "Sampling Campaign",
    client: "FMCG Co.",
  },
]

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(true)
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">
          Promotional Campaigns in Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-md transition-all duration-700 ${
                "animate-fade-in-up"
              }`}
              style={{ transitionDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold">{image.title}</p>
                <p className="text-white/70 text-sm">{image.client}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/portfolio" className="inline-flex px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors">
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors z-50 p-2"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation & Image Container */}
            <div className="relative w-full flex justify-center items-center group">
              {/* Left Navigation */}
              {galleryImages.findIndex((img) => img.src === selectedImage.src) > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const idx = galleryImages.findIndex((img) => img.src === selectedImage.src)
                    setSelectedImage(galleryImages[idx - 1])
                  }}
                  className="absolute left-2 md:-left-12 z-20 bg-black/50 hover:bg-primary p-3 rounded-full text-white transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Image */}
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-md shadow-2xl animate-fade-in-up"
              />

              {/* Right Navigation */}
              {galleryImages.findIndex((img) => img.src === selectedImage.src) < galleryImages.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const idx = galleryImages.findIndex((img) => img.src === selectedImage.src)
                    setSelectedImage(galleryImages[idx + 1])
                  }}
                  className="absolute right-2 md:-right-12 z-20 bg-black/50 hover:bg-primary p-3 rounded-full text-white transition-colors backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Content Below */}
            <div className="w-full mt-6 text-center text-white max-w-3xl mx-auto px-4">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.client}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
