"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { BellIcon as Balloon, Radiation as Graduation, Trophy, Heart, Briefcase, Megaphone } from "lucide-react"

const services = [
  {
    icon: Balloon,
    title: "Parties",
    description: "Celebrate life's special moments with our expertly planned and executed party services.",
  },
  {
    icon: Graduation,
    title: "Exhibitions",
    description: "Showcase your brand with stunning exhibition setups and immersive experiences.",
  },
  {
    icon: Trophy,
    title: "Event in Budget",
    description: "Premium events tailored to your budget without compromising on quality.",
  },

  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional corporate gatherings that impress and inspire your team.",
  },
  {
    icon: Megaphone,
    title: "Promotions",
    description: "Launch your brand with impactful promotional events and activations.",
  },
]

export function ServicesCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const itemsPerView = 3
  const totalSlides = Math.ceil(services.length / itemsPerView)

  useEffect(() => {
    if (!isAutoPlay) return

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(autoPlayRef.current)
  }, [isAutoPlay, totalSlides])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setIsAutoPlay(false)
  }

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url("/about/services-carousel/event-venue-background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-white/80">Comprehensive event solutions tailored to your needs</p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6 px-4">
                  {services.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).map((service, idx) => {
                    const Icon = service.icon
                    return (
                      <div
                        key={service.title}
                        className="flex-1 bg-background/10 backdrop-blur-md rounded-md p-8 text-center text-white hover:bg-background/20 transition-all duration-300 hover:translate-y-[-10px] hover:border-primary/50-2xl"
                        style={{
                          animationDelay: `${idx * 0.1}s`,
                        }}
                      >
                        <div className="flex justify-center mb-6">
                          <div className="p-4 bg-primary/20 rounded-full">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 p-3 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 p-3 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx)
                  setIsAutoPlay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-8" : "bg-background/40 hover:bg-background/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
