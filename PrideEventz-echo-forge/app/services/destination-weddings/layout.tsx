import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Destination Wedding Planning | Pride Eventz",
  description: "Dream wedding planning from concept to execution. Elegant décor, seamless coordination, unforgettable memories.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
