
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "reeCoder - Innovative Software & AI Solutions",
  description:
    "reeCoder is a future-focused software house specializing in AI agents, intelligent chatbots, full-stack web development, and enterprise-ready digital transformation solutions. WE BUILD WHAT YOU IMAGINE.",
  keywords:
    "reeCoder, reecoder, AI Agents, software house, custom software development, web development, AI solutions, automation tools, digital transformation, intelligent chatbot, chatbot development, enterprise software, API development, app development, full-stack development, reecoder.com , machine learning, deep learning, API integration, tech startup, innovation lab, business automation, smart software, scalable solutions, modern web apps, AI-powered tools, digital products, AI automation, software consultancy, no-code solutions, low-code platforms",
  generator: "reeCoder",
  metadataBase: new URL("https://www.reecoder.com"), // Replace with your domain
  alternates: {
    canonical: "https://www.reecoder.com",
  },
  openGraph: {
    title: "reeCoder - Innovative Software & AI Solutions",
    description:
      "We build smart web solutions, AI agents, and digital systems to help businesses scale faster.",
    url: "https://www.reecoder.com",
    siteName: "reeCoder",
    images: [
      {
        url: "/imgg.png", // ideally a 1200x630 image
        width: 1200,
        height: 630,
        alt: "reeCoder Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "reeCoder - Innovative Software & AI Solutions",
    description:
      "Future-ready software and AI systems to automate, enhance, and grow your digital presence.",
    site: "@thereecoder", // optional, your Twitter handle
    images: ["/imgg.png"],
  },
  icons: {
    icon: "/imgg.png",
    shortcut: "/imgg.png",
    apple: "/imgg.png",
  },
  category: "technology",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "reeCoder",
              url: "https://www.reecoder.com",
              logo: "https://www.reecoder.com/imgg.png",
              sameAs: [
                "https://twitter.com/thereecoder",
                "https://linkedin.com/company/reecoder",
                "https://www.instagram.com/thereecoder/"
                // Add more profiles
              ],
              description:
                "reeCoder is a future-focused software agency building smart AI Solutions and web solutions.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
