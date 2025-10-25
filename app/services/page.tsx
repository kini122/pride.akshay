"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const services = [
  { key: "weddings", name: "Weddings", href: "/services/weddings", image: "/placeholder.svg", desc: "Your dream wedding deserves a perfect setting! We create unforgettable moments with elegant décor, seamless coordination, and personalized touches." },
  { key: "corporate", name: "Corporate Events", href: "/services/corporate", image: "/placeholder.svg", desc: "Bespoke corporate event planning and execution." },
  { key: "decorations", name: "Decorations", href: "/services/decorations", image: "/placeholder.svg", desc: "Stylish and on-theme decorations tailored to your event." },
  { key: "promotions", name: "Brand Promotions", href: "/services/promotions", image: "/placeholder.svg", desc: "Creative promotions and brand activations." },
  { key: "post", name: "Post Events", href: "/services/post-events", image: "/placeholder.svg", desc: "After-event followups, reporting and wrap-ups." },
  { key: "exhibitions", name: "Exhibitions", href: "/services/exhibitions", image: "/placeholder.svg", desc: "Immersive exhibitions and curated displays." },
]

export default function ServicesPage() {
  const router = useRouter()

  return (
    <main>
      {/* Hero */}
      <section className="services-hero" aria-label="Services hero" style={{ backgroundImage: `url('/placeholder.svg')` }}>
        <div className="services-hero-overlay" />
        <div className="services-hero-inner">
          <h1 className="hero-title">Seamless Planning. Spectacular Celebrations.</h1>
          <p className="hero-sub">Expert planning, flawless execution — we craft unforgettable moments.</p>
          <button className="hero-cta" onClick={() => router.push('/contact')}>Let&apos;s work together</button>
        </div>
      </section>

      {/* Ticker */}
      <div className="services-ticker" aria-hidden>
        <div className="ticker-track">
          <span className="ticker-item">10 YEARS OF EXPERIENCE</span>
          <span className="ticker-item">10 YEARS OF EXPERIENCE</span>
          <span className="ticker-item">10 YEARS OF EXPERIENCE</span>
          <span className="ticker-item">10 YEARS OF EXPERIENCE</span>
        </div>
      </div>

      {/* Main content */}
      <section className="services-main">
        <div className="services-container">
          <div className="services-left">
            <p className="lead">We are a dedicated event management team focused on thoughtful planning, inspired design, and meticulous execution. We collaborate closely with clients to deliver memorable experiences, tailored to every objective and audience.</p>
            <p className="lead">From concept to completion, our services cover every stage of event production — ensuring seamless coordination, creative direction, and exceptional on-site management.</p>

            <nav aria-label="Service categories" className="service-categories">
              {services.map((s, idx) => (
                <button
                  key={s.key}
                  onClick={() => router.push(s.href)}
                  className={`service-list-item ${s.key === 'weddings' ? 'service-list-item--primary' : ''}`}
                >
                  <span className="service-index">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="service-name">{s.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="services-right">
            <div className="featured-image-wrap">
              <img src="/placeholder.svg" alt="Featured service" className="featured-image" loading="lazy" />

              <aside className="featured-card" aria-labelledby="featured-heading">
                <h3 id="featured-heading">Weddings</h3>
                <p>Your dream wedding deserves a perfect setting! We create unforgettable moments with elegant décor, seamless coordination, and personalized touches that reflect your unique love story.</p>
                <Link href="/services/weddings" className="service-cta" prefetch={false}>View service</Link>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose section */}
      <section className="why-choose" aria-labelledby="why-heading">
        <div className="why-inner">
          <h2 id="why-heading">Why choose Pride Eventz?</h2>
          <p className="why-sub">We combine creativity, operational excellence, and trusted vendor relationships to deliver exceptional experiences that exceed expectations.</p>

          <div className="features-grid">
            <article className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h4>Unique Experiences</h4>
              <p>We craft extraordinary and personalized events, ensuring each celebration stands out with creativity and elegance.</p>
            </article>

            <article className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false"><path d="M12 2l3 5 5 .5-3.5 3 1 5-4-2.5L8 16l1-5L6 8.5 11 8l1-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h4>Quality & Service</h4>
              <p>Our team ensures top-notch event execution with high-quality materials, reliable vendors, and seamless coordination.</p>
            </article>

            <article className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false"><path d="M12 2v6l4 2-4 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h4>Seamless Coordination</h4>
              <p>From start to finish, we handle every detail, ensuring a stress-free experience for you and a flawless event for your guests.</p>
            </article>

            <article className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false"><path d="M12 2l1.5 4.5L18 8l-3.75 2.75L15 15 12 12.5 9 15l.75-4.25L6 8l4.5-1.5L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h4>Expert Planning</h4>
              <p>Our professional planners bring experience and innovation to every event, turning your ideas into extraordinary experiences.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
