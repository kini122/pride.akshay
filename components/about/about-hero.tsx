import { MapPin, Target, Sparkles } from "lucide-react"

export function AboutHero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: 'url("/about/hero/luxury-event-venue-with-elegant-decorations.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-32">
        <div className="mb-8 inline-block">
          <div className="border-2 border-white/50 rounded-md px-6 py-2 text-white text-sm font-semibold uppercase tracking-wider">
            We are event management group
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight lg:text-6xl tracking-tight lg:text-7xl font-bold text-white mb-8 leading-tight">
          Crafting unforgettable events with creativity and style.
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <div className="text-white text-center flex flex-col items-center">
            <div className="w-12 h-12 mb-3 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm font-semibold">Based in Kerala</p>
          </div>
          <div className="text-white text-center flex flex-col items-center">
            <div className="w-12 h-12 mb-3 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm font-semibold">Established in 2010</p>
          </div>
          <div className="text-white text-center flex flex-col items-center">
            <div className="w-12 h-12 mb-3 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm font-semibold">200+ Projects Done</p>
          </div>
        </div>
      </div>
    </section>
  )
}
