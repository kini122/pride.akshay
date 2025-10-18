"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FeatureItem {
  id: number
  title: string
  image: string
  description: string
}

interface Feature197Props {
  features?: FeatureItem[]
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Ready-to-Use UI Blocks",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
    description:
      "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui. Each block is carefully crafted to be responsive, accessible, and easily customizable. Simply copy and paste the code into your project.",
  },
  {
    id: 2,
    title: "Tailwind CSS & TypeScript",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    description:
      "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code that integrates seamlessly with your Next.js projects.",
  },
  {
    id: 3,
    title: "Dark Mode & Customization",
    image:
      "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1200&auto=format&fit=crop",
    description:
      "Every block supports dark mode out of the box and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration. The shadcn/ui theming system makes it easy to maintain consistency across your site.",
  },
  {
    id: 4,
    title: "Accessibility First",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    description:
      "All blocks are built with accessibility in mind, following WCAG guidelines. They include proper ARIA labels, keyboard navigation support, and semantic HTML structure.",
  },
  {
    id: 5,
    title: "Modern Development Stack",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Built for modern web development with React 18, Next.js, and the latest shadcn/ui components.",
  },
]

const Feature197 = ({ features = defaultFeatures }: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(features[0]?.id ?? null)
  const [activeImage, setActiveImage] = useState(features[0]?.image ?? "")

  return (
    <section className="py-20 md:py-32" style={{ padding: "30px 0 50px" }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue={`item-${features[0]?.id ?? 1}`} collapsible>
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image)
                      setActiveTabId(tab.id)
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-left text-xl font-semibold ${
                        tab.id === activeTabId ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">{tab.description}</p>
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                        loading="lazy"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted md:block">
            <img src={activeImage} alt="Feature preview" className="aspect-[4/3] rounded-md object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Feature197 }
