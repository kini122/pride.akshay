import Link from "next/link"

export function CTABanner() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url("/elegant-event-celebration.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Create Magic?</h2>
        <p className="text-xl text-white/90 mb-8">Let's transform your vision into an unforgettable experience</p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all duration-300 group"
        >
          Get Started
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}
