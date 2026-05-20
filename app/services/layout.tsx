import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Pride Eventz",
  description: "Comprehensive event services — corporate events, weddings, concerts, MICE, exhibitions, brand activation and rural marketing.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
