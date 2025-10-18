"use client"

export function TeamStatement() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <div className="mb-8">
              <span className="text-8xl font-bold text-gray-200">01</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We are a dynamic team turning innovative ideas into reality.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team of experienced professionals brings creativity, expertise, and passion to every project. We work
              collaboratively to ensure your vision becomes an unforgettable reality.
            </p>
            <a href="#" className="text-primary font-semibold hover:text-accent transition-colors">
              Learn More →
            </a>
          </div>

          {/* Right Column - Images */}
          <div className="flex items-center justify-center">
            {/* Infinite horizontal image scroller with arrows */}
            <div className="w-full max-w-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <DynamicScroller />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
