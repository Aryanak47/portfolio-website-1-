import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Yougal Bimali - Full-Stack Developer | Java, Spring Boot, React, Node.js",
  description:
    "Experienced Full-Stack Developer specializing in Java, Spring Boot, React, and Node.js. Currently working at VerifyWise on AI governance solutions. View my portfolio of web applications, mobile apps, and fintech projects.",
  keywords: [
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "React",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "VerifyWise",
    "Hamro Patro",
    "FinTech",
  ],
  authors: [{ name: "Yougal Bimali" }],
  creator: "Yougal Bimali",
  publisher: "Yougal Bimali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yougalbimali.dev",
    title: "Yougal Bimali - Full-Stack Developer",
    description:
      "Experienced Full-Stack Developer specializing in Java, Spring Boot, React, and modern web technologies. View my portfolio and get in touch for your next project.",
    siteName: "Yougal Bimali Portfolio",
    images: [
      {
        url: "/avatar.jpeg",
        width: 1200,
        height: 630,
        alt: "Yougal Bimali - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yougal Bimali - Full-Stack Developer",
    description: "Experienced Full-Stack Developer specializing in Java, Spring Boot, React, and modern web technologies.",
    images: ["/avatar.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
