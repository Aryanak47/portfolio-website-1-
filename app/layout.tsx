import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "John Developer - Full-Stack Engineer | .NET, React, Angular, Node.js",
  description:
    "Experienced Full-Stack Developer specializing in .NET, React, Angular, and Node.js. View my portfolio of web applications, APIs, and UI designs. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Full-Stack Developer",
    ".NET",
    "React",
    "Angular",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "John Developer" }],
  creator: "John Developer",
  publisher: "John Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndeveloper.dev",
    title: "John Developer - Full-Stack Engineer",
    description:
      "Experienced Full-Stack Developer specializing in modern web technologies. View my portfolio and get in touch for your next project.",
    siteName: "John Developer Portfolio",
    images: [
      {
        url: "/professional-developer-headshot.png",
        width: 1200,
        height: 630,
        alt: "John Developer - Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Developer - Full-Stack Engineer",
    description: "Experienced Full-Stack Developer specializing in modern web technologies.",
    images: ["/professional-developer-headshot.png"],
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
