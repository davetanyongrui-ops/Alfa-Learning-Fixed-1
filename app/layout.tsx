import "./globals.css"

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ConvexClientProvider } from "@/components/convex-client-provider"
import { LanguageProvider } from "@/contexts/language-context"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "EduTech Academy | Online Classes for Basic, Intermediate & Advanced Levels",
  description: "Transform your future with our comprehensive online education platform. From basic foundations to GCSE A-Levels, we prepare students for the digital age.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ConvexClientProvider>
            <LanguageProvider>
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
            </LanguageProvider>
          </ConvexClientProvider>
        </body>
    </html>
  )
}