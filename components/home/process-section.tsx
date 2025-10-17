"use client"

import { Feature197 } from "@/components/ui/accordion-feature-section"
import Link from "next/link"

const howWeWork = [
  {
    id: 1,
    title: "01. Initial Consultation",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    description:
      "We begin by understanding your goals, vision, and budget to craft a tailored plan and timeline for your event.",
  },
  {
    id: 2,
    title: "02. Planning & Design",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
    description:
      "Our team designs the experience—venue, décor, vendors, and schedules—ensuring every detail aligns with your brand and style.",
  },
  {
    id: 3,
    title: "03. Execution & Coordination",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    description:
      "On the day, we manage operations end-to-end: setup, logistics, vendor coordination, and guest experience.",
  },
  {
    id: 4,
    title: "04. Post-Event Services",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1200&auto=format&fit=crop",
    description:
      "We wrap up with feedback, media delivery, and post-event reporting to measure success and capture memories.",
  },
]

export function ProcessSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">How we work?</h2>
        </div>
        <Feature197 features={howWeWork} />
        <div className="-mt-6 mb-16 px-4 md:px-0">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-black px-5 py-3 text-white hover:bg-neutral-800 transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  )
}
