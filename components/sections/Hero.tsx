"use client"

import { motion } from "framer-motion"
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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/portfolio/hero-bg.jpg"
          alt="Developer workstation background"
          fill
          className="object-cover opacity-20 scale-[1.05]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8))]" />
      </div>
      
      {/* Main Text */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-[15%] left-0 right-0 z-10 pointer-events-none"
      >
        <div 
          className="font-black text-white text-center leading-[0.8] tracking-[-0.02em]"
          style={{ fontSize: "clamp(4rem, 15vw, 12rem)", fontFamily: "'Arial Black', Arial, sans-serif" }}
        >
          RASYID
        </div>
      </motion.div>

      {/* Left description */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="absolute left-8 top-[40%] z-10 pointer-events-none"
      >
        <div className="text-[11px] text-white leading-[1.4] tracking-[0.5px] uppercase opacity-80 max-w-[150px]">
          {t("hero.role1")}<br/>
          {t("hero.role2")}<br/><br/>
        </div>
      </motion.div>

      {/* Right description */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="absolute right-8 top-[40%] z-10 pointer-events-none"
      >
        <div className="text-[11px] text-white leading-[1.4] tracking-[0.5px] uppercase opacity-80 max-w-[150px] text-right">
          {t("hero.tagline")}<br/>
        </div>
      </motion.div>

      {/* Bottom scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-[8%] left-8 z-10 pointer-events-none"
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
