"use client"

export function ClientLogos() {
  const logos = [
    "Coca-Cola",
    "KitKat",
    "Oreo",
    "Parle",
    "Tata",
    "Britannia",
    "Pepsi",
    "Cadbury",
    "Nestlé",
    "ITC",
    "Unilever",
    "Amul",
  ]

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          Impactful Clients & Companies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full h-16 bg-gray-300 rounded flex items-center justify-center text-gray-500 font-semibold text-sm text-center">
                {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
