"use client"

import Link from "next/link"

export function TeamStatement() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <div className="mb-8">
              <span className="text-8xl font-bold text-gray-200">01</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-6">
              We are a dynamic team turning innovative ideas into reality.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our team of experienced professionals brings creativity, expertise, and passion to every project. We work
              collaboratively to ensure your vision becomes an unforgettable reality.
            </p>
            <Link href="/about" className="text-primary font-semibold hover:text-accent transition-colors">
              Learn More →
            </Link>
          </div>

          {/* Right Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/home/team/santa-party-decoration-event.jpg"
              alt="Party decoration"
              className="w-full h-64 object-cover rounded-md border border-border/50"
            />
            <img
              src="/home/team/exhibition-trade-show-atomfrost.jpg"
              alt="Exhibition"
              className="w-full h-64 object-cover rounded-md border border-border/50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
