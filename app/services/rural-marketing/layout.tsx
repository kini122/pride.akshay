import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rural Marketing Events | Pride Eventz",
  description: "On-ground rural marketing campaigns across Tier 2/3 cities and rural India. Van campaigns, haats and mela activations.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
