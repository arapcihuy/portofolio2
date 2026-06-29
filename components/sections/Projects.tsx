"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { translations, translatedProjects } from "@/lib/translations"

interface ProjectsProps {
  locale: "EN" | "ID"
}

// Simple Laptop Mockup
function LaptopMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-blue-500/8 blur-[40px] rounded-full" />
      <div className="relative bg-gradient-to-b from-[#c0c0c0] via-[#a8a8a8] to-[#909090] rounded-t-[14px] p-[6px] pb-0 shadow-[0_-2px_20px_rgba(0,0,0,0.3)]">
        <div className="absolute top-[3px] left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a] shadow-inner" />
          <div className="w-1 h-1 rounded-full bg-[#1a1a1a]" />
        </div>
        <div className="relative bg-[#111] rounded-t-[8px] overflow-hidden aspect-[16/10] shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
          <div className="relative w-full h-full">{children}</div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="h-4 bg-gradient-to-b from-[#a0a0a0] to-[#888] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#666] shadow-inner" />
        </div>
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black/30 blur-xl rounded-full" />
    </div>
  )
}

// Simple Phone Mockup
function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -inset-10 bg-purple-500/8 blur-[40px] rounded-full" />
      <div className="relative bg-gradient-to-b from-[#8a8a8e] via-[#6e6e72] to-[#5a5a5e] rounded-[3rem] p-[3px] shadow-[0_0_40px_rgba(0,0,0,0.5),0_20px_60px_rgba(0,0,0,0.4)]">
        <div className="absolute right-[-1.5px] top-28 w-[2px] h-10 bg-[#777] rounded-r-sm" />
        <div className="absolute left-[-1.5px] top-24 w-[2px] h-5 bg-[#777] rounded-l-sm" />
        <div className="absolute left-[-1.5px] top-32 w-[2px] h-8 bg-[#777] rounded-l-sm" />
        <div className="relative bg-[#000] rounded-[2.8rem] overflow-hidden aspect-[9/19.5]">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-black rounded-full z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
          <div className="relative w-full h-full">{children}</div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none z-10" />
        </div>
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-black/30 blur-xl rounded-full" />
    </div>
  )
}

export default function Projects({ locale }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("SaaS Website")

  const t = (key: string) => {
    return translations[key]?.[locale] || key
  }

  const projects = translatedProjects(locale)

  const categories = [
    locale === "EN" ? "Security" : "Keamanan",
    locale === "EN" ? "SaaS Website" : "SaaS Website",
    locale === "EN" ? "e-Commerce" : "e-Commerce",
    locale === "EN" ? "CMS Website" : "CMS Website",
    locale === "EN" ? "Monitoring System" : "Sistem Monitoring"
  ]

  const categoryMap: { [key: string]: string } = {
    "Security": "Flut App — Cybersecurity",
    "Keamanan": "Flut App — Cybersecurity",
    "SaaS Website": "CIMEDs / PT Ontiyus Karya Mulia",
    "e-Commerce": "Quondam E-commerce",
    "CMS Website": "PT. Cakra Bahana Sakti",
    "Monitoring System": "Rumah Kinclong",
    "Sistem Monitoring": "Rumah Kinclong"
  }

  const activeProjectName = categoryMap[activeCategory] || "CIMEDs / PT Ontiyus Karya Mulia"
  const activeProject = projects.find(p => p.title === activeProjectName) || projects[0]
  const activeProjectMockup = activeProject.image || "/Tangkapan Layar 2025-06-13 pukul 16.43.20.png"

  return (
    <section id="projects" className="w-full bg-black text-zinc-100 overflow-hidden py-12 md:py-20">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.12), transparent 50%)" }}></div>
      </div>

      <main className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-400">
            {t("projects.showcase")}
          </h1>
          <p className="text-sm md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t("projects.showcase_desc")}
          </p>
        </motion.div>

        {/* Filters — BIG clickable */}
        <div className="flex justify-center w-full mb-10 md:mb-14 px-2">
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-zinc-900/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 md:px-8 py-4 md:py-5 rounded-xl text-xs md:text-sm font-semibold cursor-pointer transition-all duration-200 active:scale-95 z-10 ${activeCategory === cat ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                  />
                )}
                <span className="relative z-20">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full"
          >
            {/* Device Mockups */}
            <div className="relative flex items-end justify-center gap-6 lg:gap-10 py-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40%] rounded-full border border-dashed border-white/[0.03]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-blue-600/10 blur-[60px]" />

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative z-0 hidden md:block"
              >
                <div className="w-36 lg:w-44">
                  <PhoneMockup>
                    <Image src={activeProjectMockup} alt={`${activeProject.title} mobile`} fill className="object-cover" />
                  </PhoneMockup>
                </div>
              </motion.div>

              {/* Laptop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="relative z-10"
              >
                <div className="w-72 sm:w-80 lg:w-[420px]">
                  <LaptopMockup>
                    {activeProject.isVideo ? (
                      <video src={activeProject.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    ) : (
                      <Image src={activeProjectMockup} alt={activeProject.title} fill className="object-cover" />
                    )}
                  </LaptopMockup>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20"
              >
                <a href={activeProject.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 bg-zinc-950/80 px-4 py-2 rounded-full border border-white/5 backdrop-blur hover:text-white hover:border-white/20 transition-all whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                  {activeProject.title}
                </a>
              </motion.div>
            </div>

            {/* Description */}
            <div className="w-full max-w-md text-left lg:pl-4">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                {activeCategory}
              </h2>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                {activeProject.title}
              </h1>
              <p className="text-sm md:text-base text-zinc-400 mb-6 max-w-sm leading-relaxed">
                {activeProject.description}
              </p>

              <div className="w-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] md:text-xs font-medium text-zinc-500 uppercase tracking-wider">Gallery</span>
                </div>
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 cursor-grab">
                  <div className="group relative flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden bg-zinc-900/60 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <Image src={activeProjectMockup} alt="Gallery 1" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="group relative flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden bg-zinc-900/60 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <Image src="/portfolio/flut-logo.png" alt="Gallery 2" fill className="object-contain transition-transform duration-500 group-hover:scale-110 p-2" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Projects */}
        <div className="mt-20 md:mt-32 border-t border-white/10 pt-12 md:pt-16">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
              >
                {t("projects.all")}
              </motion.h2>
              <p className="text-white/70 max-w-2xl text-sm md:text-base">
                {t("projects.all_desc")}
              </p>
            </div>
            <a href="#" className="group flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white mt-4 md:mt-0">
              {t("projects.see_all")}
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>

          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {projects.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="min-w-[260px] md:min-w-[340px] group cursor-pointer transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[3/2] overflow-hidden rounded-xl bg-white/5 mb-3 relative">
                  {item.isVideo ? (
                    <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                  ) : item.image ? (
                    <Image src={item.image} alt={item.title} fill className="object-cover transition duration-300 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full bg-white/10 flex items-center justify-center text-white/20 text-xs">No Image</div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View Details</span>
                  </div>
                </div>
                <div className="text-lg font-medium text-white mb-1">{item.title}</div>
                <div className="text-[10px] font-medium text-white/50 uppercase tracking-wider mb-1">Category: {item.category}</div>
                <div className="text-xs text-white/70 line-clamp-2">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </section>
  )
}
