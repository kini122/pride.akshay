"use client"

import { useEffect, useRef, useState } from "react"

interface ClientCard {
  id: number
  name: string
  description: string
  logo: string
}

const clients: ClientCard[] = [
  {
    id: 1,
    name: "Fevicol",
    description:
      "One of the most trusted adhesive brands in India, Fevicol has set industry standards for decades. With reliability in manufacturing and construction, we made it a household name.",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fa9cdc524d3464c029cc1b01cb24af14a?format=webp&width=800",
  },
  {
    id: 2,
    name: "Fevikwik",
    description:
      "Leading the instant adhesive segment with fierce loyalty, Fevikwik is known for its fast-acting, strong bonding formula. It is widely used for quick household repairs, industrial applications, and consumer needs.",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Fd7daeac74c234251bf4099d8cf47b791?format=webp&width=800",
  },
  {
    id: 3,
    name: "Mirchi",
    description:
      "A pioneer and undisputed king of the nationwide Radio leading each network, Radio Mirchi. With its engaging music, talk shows, and big FM presence, Mirchi connects with millions of listeners daily.",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F3e0507135bd7417d9b2ccb7cbb359293?format=webp&width=800",
  },
  {
    id: 4,
    name: "Zespri",
    description:
      "It globally recognizes best fruit & premium kiwifruit brand delivering excellence in both offering a bright, vibrant taste & fresh produce world. The only quality nutritious fruit has grown successfully.",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F63036d9ee4cb4551a327ef146ccd5f52?format=webp&width=800",
  },
  {
    id: 5,
    name: "ICICI Bank",
    description:
      "One of India's biggest and most prestigious for vast corporate banking. They offer comprehensive range of banking and financial services, including retail corporate, and a good banking solution.",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F091fdcb4dc784f1daa4b0cbaf287fedb?format=webp&width=800",
  },
  {
    id: 6,
    name: "Zee TV",
    description:
      "As India's original television story, it is a leading entertainment destination known for its creative programming, including blockbuster shows, reality shows and cultural storytelling.",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2Ff9b9fe73e0ae4513a30c0daf5dd06b61?format=webp&width=800",
  },
]

export function FeaturedClientsGrid() {
    const containerRef = useRef<HTMLDivElement>(null)

  

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {clients.map((client, index) => (
            <div
              key={client.id}
              data-card-id={client.id}
              className={`bg-background p-14 rounded-md border border-border/50 hover:border-primary/50-none border border-border/50 transition-all duration-300 ${
                "animate-fade-in-up"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Logo */}
              <div className="client-logo mb-6">
                <img src={client.logo} alt={`${client.name} logo`} className="w-40 h-auto mx-auto object-contain" />
              </div>

              {/* Content wrapper to constrain text width and align left like reference */}
              <div className="max-w-[28rem] mx-auto text-left">
                {/* Client Name */}
                <h3 className="text-lg font-semibold text-foreground mb-3">{client.name}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
