import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: "rgba(246, 109, 55, 1)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-6">
          Ready to Create Your Next Unforgettable Event?
        </h2>
        <p className="text-xl text-white/90 mb-12">
          Let's bring your vision to life with our expert team and creative solutions.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-foreground text-background rounded-md hover:bg-black transition-colors font-bold text-lg"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}
