"use client"

export function CTASection() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url("/placeholder.svg?key=cta-bg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Everything you need to get attention from your audience.
        </h2>
        <p className="text-xl text-white/90">
          Let us create an unforgettable experience that resonates with your guests
        </p>
      </div>
    </section>
  )
}
