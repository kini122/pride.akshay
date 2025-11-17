"use client"

import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const serviceData = [
  {
    key: "weddings",
    index: 0,
    name: "Weddings",
    href: "/services/weddings",
    image: "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F2e817c6c6df2436f8b942350c20d40c3",
    desc:
      "Your dream wedding deserves a perfect setting! We create unforgettable moments with elegant décor, seamless coordination, and personalized touches that reflect your unique love story.",
  },
  {
    key: "corporate",
    index: 1,
    name: "Corporate Events",
    href: "/services/corporate",
    image: "/corporate-event-presentation-stage-audience-pink-l.jpg",
    desc:
      "From conferences to team celebrations, we deliver professional corporate events that inspire collaboration, strengthen relationships, and leave lasting impressions on your stakeholders.",
  },
  {
    key: "decorations",
    index: 2,
    name: "Decorations",
    href: "/services/decorations",
    image: "/placeholder.svg",
    desc:
      "Transform any space into a visual masterpiece. Our creative decoration services blend aesthetics with ambiance, creating immersive environments that captivate and delight your guests.",
  },
  {
    key: "promotions",
    index: 3,
    name: "Brand Promotions",
    href: "/services/promotions",
    image: "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2Fe1da8ce475ee40cfa59dd56c139972da",
    desc:
      "Elevate your brand presence with impactful promotional events. We craft experiential campaigns that engage audiences, build brand awareness, and drive meaningful customer connections.",
  },
  {
    key: "post",
    index: 4,
    name: "Post Events",
    href: "/services/post-events",
    image: "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F6480fe7190494ef5aeea8bb11fd7f63c",
    desc:
      "Extend the magic beyond the main event. Our post-event services ensure seamless transitions, memorable afterparties, and comprehensive wrap-up management for complete satisfaction.",
  },
  {
    key: "exhibitions",
    index: 5,
    name: "Exhibitions",
    href: "/services/exhibitions",
    image: "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2Fddd51d464eb140a5b60b249efe1f5e26",
    desc:
      "Make your mark at exhibitions and trade shows. We design and execute captivating booths and displays that attract visitors, showcase your offerings, and maximize engagement.",
  },
]

const imageVariants = {
  enter: { opacity: 0, scale: 0.98, x: 30 },
  center: { opacity: 1, scale: 1, x: 0 },
  exit: { opacity: 0, scale: 0.98, x: -30 },
}

const cardVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function ServicesPage() {
  const router = useRouter()
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    // Preload images for smoother switches
    serviceData.forEach((s) => {
      if (!s.image) return
      const img = new Image()
      img.src = s.image
    })
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  function selectService(index: number) {
    if (index === active || animating) return
    setAnimating(true)
    // Wait for exit animation then swap
    timeoutRef.current = window.setTimeout(() => {
      setActive(index)
      // small delay to allow enter animation on children
      timeoutRef.current = window.setTimeout(() => setAnimating(false), 420)
    }, 180)
  }

  const current = serviceData[active]

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="services-hero"
          aria-label="Services hero"
          style={{ backgroundImage: `url('/placeholder.svg')` }}
        >
          <div className="services-hero-overlay" />
          <div className="services-hero-inner">
            <h1 className="hero-title">Seamless Planning. Spectacular Celebrations.</h1>
            <p className="hero-sub">Expert planning, flawless execution — we craft unforgettable moments.</p>
            <button className="hero-cta" onClick={() => router.push("/contact")}>Let&apos;s work together</button>
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

        {/* Interactive section */}
        <section className="services-main" aria-labelledby="services-interactive">
          <div className="services-container">
            <div className="services-left">
              <p className="lead">We are a dedicated event management team focused on thoughtful planning, inspired design, and meticulous execution. We collaborate closely with clients to deliver memorable experiences, tailored to every objective and audience.</p>
              <p className="lead">From concept to completion, our services cover every stage of event production — ensuring seamless coordination, creative direction, and exceptional on-site management.</p>

              <nav
                aria-label="Service categories"
                className="service-categories"
                role="tablist"
              >
                {serviceData.map((s, i) => {
                  const isActive = i === active
                  return (
                    <button
                      key={s.key}
                      role="tab"
                      aria-selected={isActive}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") selectService(i)
                      }}
                      onClick={() => selectService(i)}
                      className={`service-list-item ${isActive ? 'service-list-item--primary' : ''}`}
                      style={{
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
                      <span className="service-name">{s.name}</span>
                    </button>
                  )
                })}
              </nav>
            </div>

            <div className="services-right" aria-live="polite">
              <div className="featured-image-wrap" style={{ position: 'relative' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.key}
                    src={current.image}
                    alt={current.name}
                    className="featured-image"
                    loading="lazy"
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
                  />
                </AnimatePresence>

                <div style={{ position: 'absolute', bottom: -40, left: -60, zIndex: 2 }}>
                  <AnimatePresence mode="wait">
                    <motion.aside
                      key={current.key + '-card'}
                      className="featured-card"
                      variants={cardVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.36, ease: [0.4, 0, 0.2, 1] }}
                      aria-labelledby="featured-heading"
                    >
                      <h3 id="featured-heading" style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#1a1a1a' }}>{current.name}</h3>
                      <p style={{ color: '#666666', marginTop: 12, fontSize: 15, lineHeight: 1.65 }}>{current.desc}</p>
                      <div style={{ marginTop: 18 }}>
                        <a href={current.href} className="service-cta">View service</a>
                      </div>
                    </motion.aside>
                  </AnimatePresence>
                </div>
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

      <Footer />
    </>
  )
}
