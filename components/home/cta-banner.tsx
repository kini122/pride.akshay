import Link from "next/link"

import { FlowButton } from "@/components/ui/flow-button"

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
        <div className="inline-block">
          <FlowButton href="/contact" text="Get Started" />
        </div>
      </div>
    </section>
  )
}
