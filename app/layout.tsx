import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Innovation Lab - University Makerspace",
  description:
    "Empowering students to create, innovate, and build the future through cutting-edge technology, collaborative learning, and hands-on experimentation in robotics, AI, and IoT.",
  keywords: "makerspace, innovation lab, university, robotics, AI, IoT, 3D printing, Arduino, Raspberry Pi",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
