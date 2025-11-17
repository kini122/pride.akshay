"use client"

import { CustomersSection } from "@/components/ui/customers-section"

export function ClientLogos() {
  const customers = [
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F4b1bb9be37bf4d5cb1276bf94a397d52?format=webp&width=300", alt: "Boroline", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F152a80096ce446e5b842af665d3ad116?format=webp&width=300", alt: "Cars24", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F6ad9c274e7494845be640247693c2ace?format=webp&width=300", alt: "Fevicol", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2Fd3b448001fd34438a60470426b69ebf4?format=webp&width=300", alt: "Fevikwik", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2Fb017cf56d63a4ece9350b85debef2015?format=webp&width=300", alt: "Dr. Fixit", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F9a764c957d764b0bb741a9c56d7675d1?format=webp&width=300", alt: "GroupM", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F7c50757efb964c87b7e13e48514a87c5?format=webp&width=300", alt: "ICICI Bank", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F3e4614459e0d456582d3f76d13c2e40f?format=webp&width=300", alt: "Kansai Nerolac Paints", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2Fc175357c227c4664a3ee8e060ac90fda?format=webp&width=300", alt: "Licious", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F8d5736b1c0fb4127b2b2e0f41d24a5b1?format=webp&width=300", alt: "Mirchi", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F73e15cc9f0044be7ab66af70099814b7?format=webp&width=300", alt: "Niva Bupa Health Insurance", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F4ef6e6e9d6644903906b4cb6e236a52a?format=webp&width=300", alt: "Pidilite", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F39dfefbf64874949ac73bad025483cb2?format=webp&width=300", alt: "Roff", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2Fb900618b5f6a407ea9d979b560d88ea9?format=webp&width=300", alt: "Thomas Cook", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2Fcab575f34d544e90ba052753b7fa663e?format=webp&width=300", alt: "Zee TV", height: 48 },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F75c96108b8814544a7f5005baa5bd252%2F393a45e6c2b04e73b2b5372a2ffa5e1f?format=webp&width=300", alt: "Zespri", height: 48 },
  ]

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'rgba(255,255,255,1)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">Impactful Clients & Companies</h2>
        <CustomersSection customers={customers} className="pt-8" />
      </div>
    </section>
  )
}
