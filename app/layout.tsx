import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MAKERSPACE",
  description:
    "Empowering students to create, innovate, and build the future through cutting-edge technology, collaborative learning, and hands-on experimentation in robotics, AI, and IoT.",
  keywords: "makerspace, innovation lab, university, robotics, AI, IoT, 3D printing, Arduino, Raspberry Pi",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/makerspace logo.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/makerspace logo 1.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/makerspace logo.jpg',
    apple: '/makerspace logo.jpg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/makerspace logo.jpg',
    },
  },
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
