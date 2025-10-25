"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

const services = [
  { key: "corporate", name: "Corporate Events", href: "/services/corporate", image: "/placeholder.svg", desc: "Bespoke corporate event planning and execution." },
  { key: "promotions", name: "Promotions", href: "/services/promotions", image: "/placeholder.svg", desc: "Creative promotions and brand activations." },
  { key: "exhibitions", name: "Exhibitions", href: "/services/exhibitions", image: "/placeholder.svg", desc: "Immersive exhibitions and curated displays." },
  { key: "private", name: "Private Parties", href: "/services/private-parties", image: "/placeholder.svg", desc: "Intimate and large-scale private celebrations." },
  { key: "weddings", name: "Weddings", href: "/services/weddings", image: "/placeholder.svg", desc: "Ceremonies and receptions crafted with care." },
]

export default function ServicesPage() {
  const router = useRouter()

  return (
    <main className="services-page">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-white">All Services</h1>
        <p className="mt-2 text-white/75">Explore our full range of services. Click any service to view details.</p>
      </header>

      <section className="services-grid">
        {services.map((service) => (
          <article
            key={service.key}
            className="service-card"
            role="button"
            tabIndex={0}
            onClick={() => router.push(service.href)}
            onKeyDown={(e) => { if (e.key === "Enter") router.push(service.href) }}
          >
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-content">
              <h3 className="service-title">{service.name}</h3>
              <p className="service-desc">{service.desc}</p>
              <Link href={service.href} className="service-cta" prefetch={false}>View service</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
