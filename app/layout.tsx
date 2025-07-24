import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "reeCoder - Innovative Software & AI Solutions",
  description:
    "A future-focused software house specializing in AI agents, intelligent chatbots, full-stack web development, and enterprise-ready digital solutions.|| WE BUILD WHAT YOU IMAGINE",
  keywords: "AI Agents, software house, web development, AI solutions, digital transformation, Chatbot,API Developer ",
    generator: 'reeCoder',

  icons: { // <--- Add this section
    icon: '/imgg.png', // For .ico files
    shortcut: '/imgg.png', // For smaller PNG icons
    apple: '/imgg.png', // For Apple devices
   
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
