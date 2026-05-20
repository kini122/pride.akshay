"use client"

import Link from "next/link"

export function CTABanner() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-r from-primary to-orange-500 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-background rounded-full blur-3xl opacity-10 " />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-background rounded-full blur-3xl opacity-10  delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-4">Have a Project in Mind?</h2>
        <p className="text-xl text-white/90 mb-8">Let's bring your vision to life with our creative expertise</p>

        {/* Two Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services/corporate"
            className="px-8 py-3 bg-background text-primary font-semibold rounded-md hover:bg-muted/50 transition-colors"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-background text-primary font-semibold rounded-md hover:bg-muted/50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
