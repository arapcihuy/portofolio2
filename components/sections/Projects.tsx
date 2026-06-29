"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { translations, translatedProjects } from "@/lib/translations"

interface ProjectsProps {
  locale: "EN" | "ID"
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
    <section id="projects" className="w-full bg-black text-zinc-100 overflow-hidden py-16 md:py-24">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.15), transparent 50%)" }}></div>
      </div>

      <main className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-400">
            {t("projects.showcase")}
          </h1>
          <p className="text-sm md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t("projects.showcase_desc")}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center w-full mb-12 px-2">
          <div className="flex items-center gap-1 p-1.5 rounded-full bg-zinc-900/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative min-w-[70px] md:min-w-[85px] px-4 h-10 md:h-12 rounded-full flex items-center justify-center text-[10px] md:text-sm font-medium focus:outline-none"
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/5 shadow-inner"
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${activeCategory === cat ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                  {cat}
                </span>
                {activeCategory === cat && (
                  <span className="absolute -bottom-1 h-1 w-6 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Highlight */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full"
          >
            {/* Image Circle Showcase */}
            <div className="relative group shrink-0">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20%] rounded-full border border-dashed border-white/10 border-l-blue-500/50" 
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-900 blur-2xl opacity-40 scale-[1.00051]" />
              
              <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-[450px] lg:w-[450px] rounded-full border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden bg-black/20 backdrop-blur-sm">
                {activeProject.isVideo ? (
                  <video src={activeProject.video} autoPlay loop muted playsInline className="w-full h-full object-cover p-4 scale-[1.1]" />
                ) : (
                  <Image src={activeProjectMockup} alt={activeProject.title} fill className="object-cover p-4 scale-[1.1]" />
                )}
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <a href={activeProject.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 bg-zinc-950/80 px-4 py-2 rounded-full border border-white/5 backdrop-blur hover:text-white hover:border-white/20 transition-all">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                  {activeProject.title}
                </a>
              </div>
            </div>

            {/* Description */}
            <div className="w-full max-w-md text-left">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                {activeCategory}
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                {activeProject.title}
              </h1>
              <p className="text-sm md:text-base text-zinc-400 mb-8 max-w-sm leading-relaxed">
                {activeProject.description}
              </p>

              <div className="w-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Gallery</span>
                </div>
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 cursor-grab">
                  <div className="group relative flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden bg-zinc-900/60 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <Image src="/Tangkapan Layar 2025-06-13 pukul 16.43.20.png" alt="Gallery" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="group relative flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden bg-zinc-900/60 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <Image src="/quondam-logo.png" alt="Gallery" fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Projects Section */}
        <div className="mt-32 border-t border-white/10 pt-16">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4 text-3xl md:text-4xl font-semibold text-white"
              >
                {t("projects.all")}
              </motion.h2>
              <p className="text-white/70 max-w-2xl text-sm md:text-base">
                {t("projects.all_desc")}
              </p>
            </div>
            <a href="#" className="group flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white mt-6 md:mt-0">
              {t("projects.see_all")}
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {projects.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="min-w-[300px] md:min-w-[400px] group cursor-pointer transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[3/2] overflow-hidden rounded-xl bg-white/5 mb-4 relative">
                  {item.isVideo ? (
                    <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full bg-white/10 flex items-center justify-center text-white/20 text-xs">No Image</div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View Details</span>
                  </div>
                </div>
                <div className="text-xl font-medium text-white mb-2">{item.title}</div>
                <div className="text-xs font-medium text-white/50 uppercase tracking-wider mb-2">Category: {item.category}</div>
                <div className="text-sm text-white/70 line-clamp-2">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </section>
  )
}
