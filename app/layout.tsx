import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ved - Portfolio',
  description: 'Full Stack Developer & Designer - Creating beautiful, functional, and user-centered digital experiences.',
  keywords: ['Ved', 'Portfolio', 'Full Stack Developer', 'Web Developer', 'Designer'],
  authors: [{ name: 'Ved' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} bg-white text-gray-900 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
