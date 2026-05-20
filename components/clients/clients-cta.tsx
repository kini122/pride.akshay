export function ClientsCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-4">Want to Join Our Family of Happy Clients?</h2>

        <p className="text-lg text-white/90 mb-8">
          Let's discuss how we can create memorable experiences for your brand
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-background text-primary font-bold rounded-md hover:bg-muted/50 transition-colors duration-300 hover:-translate-y-1 transition-transform duration-300">
            Schedule Consultation
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-background/10 transition-colors duration-300 hover:-translate-y-1 transition-transform duration-300">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  )
}
