'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  )
}
