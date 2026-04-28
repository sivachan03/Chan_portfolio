import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Portfolio - Software Developer",
  description: "Professional portfolio showcasing skills, projects, and experience",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark bg-background">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}>
        <Suspense fallback={null}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
