"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { translations } from "@/lib/translations"

interface HeroProps {
  locale: "EN" | "ID"
}

export default function Hero({ locale }: HeroProps) {
  const t = (key: string) => {
    return translations[key]?.[locale] || key
  }

  return (
    <section id="main-content" className="relative w-full h-screen bg-black overflow-hidden selection:bg-zinc-800">
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
      
      {/* Main Text — staggered fadeInUp */}
      <div className="absolute bottom-[15%] left-0 right-0 z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-black text-white text-center leading-[0.8] tracking-[-0.02em]"
          style={{ fontSize: "clamp(4rem, 15vw, 12rem)", fontFamily: "'Arial Black', Arial, sans-serif" }}
        >
          RASYID
        </motion.div>
      </div>

      {/* Side descriptions — staggered fadeInUp */}
      <div className="absolute left-8 top-[40%] z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-[11px] text-white leading-[1.4] tracking-[0.5px] uppercase opacity-80 max-w-[150px]"
        >
          {t("hero.role1")}<br/>
          {t("hero.role2")}<br/><br/>
        </motion.div>
      </div>

      <div className="absolute right-8 top-[40%] z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="text-[11px] text-white leading-[1.4] tracking-[0.5px] uppercase opacity-80 max-w-[150px] text-right"
        >
          {t("hero.tagline")}<br/>
        </motion.div>
      </div>
    </section>
  )
}
