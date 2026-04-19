import type { Metadata } from "next"
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Isaac Pasapera — Full-Stack Developer & AI Integration",
  description:
    "Full-Stack Developer with 2 years of experience building scalable web apps, RESTful APIs, and AI-integrated solutions. Node.js, React, Next.js, Claude API.",
  keywords: ["Full-Stack Developer", "AI Integration", "Next.js", "Node.js", "React", "TypeScript"],
  authors: [{ name: "Isaac Pasapera" }],
  openGraph: {
    title: "Isaac Pasapera — Full-Stack Developer",
    description: "Building scalable web applications and AI-integrated solutions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
