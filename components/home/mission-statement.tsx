"use client"

export function MissionStatement() {
  return (
    <section className="bg-white" style={{ padding: "80px 0 68px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Learn More Link */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-2xl">
            Transforming Ideas into Stunning Layouts.
          </h2>
          <a href="#" className="text-primary font-semibold hover:text-accent transition-colors mt-4 md:mt-0">
            Learn More About Us →
          </a>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/mall-exhibition-hall-event-space.jpg" alt="Event space" className="w-full object-cover" style={{ height: "436px" }} />
          </div>

          {/* Right Column - Text Blocks */}
          <div className="space-y-8">
            {/* Vision */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading event management company in Kerala, known for creating extraordinary experiences that
                leave lasting impressions on every attendee.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional event management services that exceed expectations, combining creativity,
                professionalism, and attention to detail in every project.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in integrity, innovation, and customer satisfaction. Every event is an opportunity to create
                magic and build lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
