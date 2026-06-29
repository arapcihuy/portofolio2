"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { translations } from "@/lib/translations"

interface HeroProps {
  locale: "EN" | "ID"
}

export default function Hero({ locale }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()

  // Scroll-linked parallax values (hayhasan style)
  // Hero text: moves DOWN and fades OUT
  const heroTextY = useTransform(scrollY, [0, 400], [0, 60])
  const heroTextOpacity = useTransform(scrollY, [0, 300], [1, 0])

  // Left text: moves LEFT and fades OUT
  const leftTextX = useTransform(scrollY, [0, 300], [0, -120])
  const leftTextOpacity = useTransform(scrollY, [0, 250], [1, 0])

  // Right text: moves RIGHT and fades OUT
  const rightTextX = useTransform(scrollY, [0, 300], [0, 120])
  const rightTextOpacity = useTransform(scrollY, [0, 250], [1, 0])

  // Bottom arrow: moves DOWN and fades OUT
  const arrowY = useTransform(scrollY, [0, 400], [0, 80])
  const arrowOpacity = useTransform(scrollY, [0, 300], [1, 0])

  const t = (key: string) => {
    return translations[key]?.[locale] || key
  }

  return (
    <section id="main-content" ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden selection:bg-zinc-800">
      {/* Background Image (hayhasan style) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/portfolio/hero-bg.jpg"
          alt="Developer workstation background"
          fill
          className="object-cover opacity-20 scale-[1.05]"
          priority
        />
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8))]" />
      </div>
      
      {/* Main Text — scroll-linked parallax (hayhasan exact) */}
      <motion.div 
        style={{ 
          y: heroTextY, 
          opacity: heroTextOpacity,
          bottom: "15%",
          position: "absolute",
          left: 0,
          right: 0,
        }}
        className="z-50 pointer-events-none"
      >
        <div 
          className="font-black text-white text-center leading-[0.8] tracking-[-0.02em]"
          style={{ fontSize: "clamp(4rem, 15vw, 12rem)", fontFamily: "'Arial Black', Arial, sans-serif" }}
        >
          RASYID
        </div>
      </motion.div>

      {/* Left description — scroll-linked parallax (hayhasan exact) */}
      <motion.div 
        style={{ 
          x: leftTextX, 
          opacity: leftTextOpacity,
        }}
        className="absolute left-8 top-[40%] z-50"
      >
        <div className="text-[11px] text-white leading-[1.4] tracking-[0.5px] uppercase opacity-80 max-w-[150px]">
          {t("hero.role1")}<br/>
          {t("hero.role2")}<br/><br/>
        </div>
      </motion.div>

      {/* Right description — scroll-linked parallax (hayhasan exact) */}
      <motion.div 
        style={{ 
          x: rightTextX, 
          opacity: rightTextOpacity,
        }}
        className="absolute right-8 top-[40%] z-50"
      >
        <div className="text-[11px] text-white leading-[1.4] tracking-[0.5px] uppercase opacity-80 max-w-[150px] text-right">
          {t("hero.tagline")}<br/>
        </div>
      </motion.div>

      {/* Bottom scroll arrow — scroll-linked parallax */}
      <motion.div
        style={{
          y: arrowY,
          opacity: arrowOpacity,
          bottom: "8%",
          left: "2rem",
          position: "absolute",
          zIndex: 50,
        }}
        className="pointer-events-none"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
