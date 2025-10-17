import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceTemplate } from "@/components/services/service-template"

export default function WeddingsPage() {
  return (
    <>
      <Navbar />
      <ServiceTemplate
        title="Weddings"
        subtitle="Your Dream Wedding, Perfectly Executed"
        description="From traditional Kerala ceremonies to modern celebrations and destination weddings, we specialize in creating magical moments that celebrate your love story. Our comprehensive wedding management ensures every detail is perfect, allowing you to focus on the joy of your special day."
        heroImage="/placeholder.svg?key=weddings-hero"
        whatIncluded={[
          "Venue selection and management",
          "Catering and menu planning",
          "Decoration and floral arrangements",
          "Photography and videography",
          "Entertainment and music",
          "Guest accommodation coordination",
          "Pre-wedding events coordination",
        ]}
        process={[
          "Consultation: Understanding your wedding vision",
          "Planning: Creating a comprehensive wedding blueprint",
          "Coordination: Managing all pre-wedding events",
          "Execution: Ensuring a flawless wedding day",
        ]}
        packages={[
          {
            name: "Essential Package",
            price: "₹5,00,000",
            features: [
              "Up to 200 guests",
              "Venue coordination",
              "Basic catering",
              "Standard decoration",
              "Photography",
              "Event coordination",
            ],
          },
          {
            name: "Premium Package",
            price: "₹12,00,000",
            features: [
              "Up to 500 guests",
              "Premium venue",
              "Gourmet catering",
              "Luxury decoration",
              "Photography & videography",
              "Entertainment",
              "Pre-wedding events",
            ],
          },
          {
            name: "Luxury Destination",
            price: "₹25,00,000+",
            features: [
              "Unlimited guests",
              "Exclusive destination venue",
              "Customized multi-day events",
              "Full production team",
              "Celebrity entertainment",
              "Guest accommodation",
              "Complete video production",
            ],
          },
        ]}
        faqs={[
          {
            question: "How far in advance should we book?",
            answer: "We recommend booking 6-12 months in advance for weddings to secure premium venues and vendors.",
          },
          {
            question: "Do you handle destination weddings?",
            answer:
              "Yes! We specialize in destination weddings and can manage all logistics including venue, accommodation, and guest coordination.",
          },
          {
            question: "Can we customize the packages?",
            answer: "All packages are customizable based on your preferences, budget, and vision.",
          },
          {
            question: "What's included in the videography?",
            answer:
              "We provide cinematic wedding films, highlight reels, and raw footage. All videos are professionally edited and delivered within 4 weeks.",
          },
        ]}
      />
      <Footer />
    </>
  )
}
