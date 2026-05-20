import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Clients | Pride Eventz",
  description: "Trusted by Fevicol, ICICI Bank, Zee TV, Radio Mirchi, Zespri and 16+ leading brands across India.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
