import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceTemplate } from "@/components/services/service-template"

export default function PrivatePartiesPage() {
  return (
    <>
      <Navbar />
      <ServiceTemplate
        title="Private Parties & Celebrations"
        subtitle="Celebrate Life's Special Moments"
        description="Whether it's a milestone birthday, anniversary, or intimate gathering, we create personalized celebrations that reflect your style and personality. Our team handles every detail so you can focus on enjoying the moment with your loved ones."
        heroImage="/placeholder.svg?key=private-parties-hero"
        whatIncluded={[
          "Venue selection and decoration",
          "Customized menu planning",
          "Entertainment and music",
          "Photography and videography",
          "Guest management and coordination",
          "Themed decor and ambiance",
        ]}
        process={[
          "Consultation: Understanding your vision and preferences",
          "Planning: Creating a detailed celebration blueprint",
          "Preparation: Coordinating all elements",
          "Celebration: Ensuring a memorable experience",
        ]}
        packages={[
          {
            name: "Intimate Gathering",
            price: "₹1,00,000",
            features: [
              "Up to 50 guests",
              "Venue coordination",
              "Basic catering",
              "Simple decoration",
              "Event coordination",
            ],
          },
          {
            name: "Grand Celebration",
            price: "₹3,00,000",
            features: [
              "Up to 150 guests",
              "Premium venue",
              "Gourmet catering",
              "Themed decoration",
              "Entertainment",
              "Photography",
            ],
          },
          {
            name: "Luxury Experience",
            price: "₹7,00,000+",
            features: [
              "Unlimited guests",
              "Exclusive venue",
              "Customized menu",
              "Full decoration",
              "Live entertainment",
              "Video production",
            ],
          },
        ]}
        faqs={[
          {
            question: "Can you accommodate dietary restrictions?",
            answer: "Yes, we work with our catering partners to accommodate all dietary preferences and restrictions.",
          },
          {
            question: "What entertainment options are available?",
            answer:
              "We offer DJ services, live bands, performers, games, and interactive entertainment tailored to your preferences.",
          },
          {
            question: "How much customization is possible?",
            answer:
              "Complete customization! From themes to menus to entertainment, we tailor every aspect to your vision.",
          },
          {
            question: "What's your cancellation policy?",
            answer: "We offer flexible cancellation policies with refunds based on the timing of cancellation.",
          },
        ]}
      />
      <Footer />
    </>
  )
}
