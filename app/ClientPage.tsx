"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import PartnerMarquee from "@/components/sections/PartnerMarquee"
import Gallery from "@/components/sections/Gallery"
import Navbar from "@/components/sections/Navbar"
import SmoothScroll from "@/components/SmoothScroll"

export default function ClientPage() {
  const [mounted, setMounted] = useState(false)
  const [locale, setLocale] = useState<"EN" | "ID">("EN")

  useEffect(() => {
    setMounted(true)
    document.documentElement.classList.add("dark") // Force dark mode
  }, [])

  if (!mounted) return null

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#0a0a0a]">
        <div className="transition-opacity duration-200">
          <Navbar locale={locale} setLocale={setLocale} />
          {/* Sections: Hero → PartnerMarquee → Projects → About → Gallery → Contact */}
          <div className="w-full">
            <Hero locale={locale} />
            <PartnerMarquee locale={locale} />
          </div>
          
          <div className="w-full">
            <Projects locale={locale} />
          </div>
          <div className="w-full">
            <About locale={locale} />
          </div>
          <div className="w-full">
            <Gallery locale={locale} />
          </div>
          <div className="w-full">
            <Contact locale={locale} />
          </div>
        </div>
      </main>
    </SmoothScroll>
  )
}
