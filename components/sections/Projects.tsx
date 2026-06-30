"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { translations, translatedProjects } from "@/lib/translations"

interface ProjectsProps {
  locale: "EN" | "ID"
}

const projectGalleries: { [key: string]: { img1: string; img2: string } } = {
  "Security": { img1: "/portfolio/flut-iphone.png", img2: "/portfolio/flut-chess.png" },
  "SaaS Website": { img1: "/portfolio/cimeds-screenshot.jpg", img2: "/portfolio/flut-hero.png" },
  "e-Commerce": { img1: "/portfolio/uiux-1.jpg", img2: "/portfolio/uiux-4.jpg" },
  "CMS Website": { img1: "/portfolio/cbs-portal.jpg", img2: "/portfolio/rumbel-website.jpg" },
  "Monitoring System": { img1: "/portfolio/uiux-7.jpg", img2: "/portfolio/flut-hand-phone.png" },
  "Keamanan": { img1: "/portfolio/flut-iphone.png", img2: "/portfolio/flut-chess.png" },
  "Sistem Monitoring": { img1: "/portfolio/uiux-7.jpg", img2: "/portfolio/flut-hand-phone.png" },
}

export default function Projects({ locale }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("SaaS Website")
  const sectionRef = useRef<HTMLElement>(null)

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
  const activeProjectMockup = activeProject.image || "/portfolio/cimeds-screenshot.jpg"
  const gallery = projectGalleries[activeCategory] || { img1: activeProjectMockup, img2: "/portfolio/flut-logo.png" }

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95])
  const mockupY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const borderRotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section ref={sectionRef} id="projects" className="w-full bg-black text-zinc-100 overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0 pointer-events-none">
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

        <div className="flex justify-center w-full mb-10 md:mb-14 px-2">
          <div className="flex items-center gap-1 p-1 rounded-full bg-zinc-900/60 border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-medium cursor-pointer transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-zinc-800 text-white border border-white/10' 
                    : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full"
          >
            {/* Circular Mockup — LEFT (exactly like hayhasan) */}
            <div className="relative group shrink-0">
              {/* Rotating dashed border ring */}
              <motion.div
                style={{ rotate: borderRotate }}
                className="absolute inset-[-20%] rounded-full border border-dashed border-white/10 border-l-blue-500/50 pointer-events-none"
              />

              {/* Background glow circle */}
              <motion.div 
                style={{ scale: glowScale }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-900 blur-2xl opacity-40 pointer-events-none"
              />

              {/* Circular frame — overflow visible */}
              <div className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-[450px] lg:w-[450px] rounded-full border border-white/5 shadow-2xl flex items-center justify-center overflow-visible bg-black/20 backdrop-blur-sm">
                
                {/* Parallax wrapper */}
                <motion.div 
                  style={{ y: mockupY }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  {/* MacBook-style laptop — clean flat render */}
                  <div className="relative w-[75%] md:w-[80%]" style={{ filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))' }}>
                    {/* Screen (lid) */}
                    <div className="relative bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 rounded-t-xl sm:rounded-t-2xl p-[3px] sm:p-[5px]">
                      {/* Camera dot */}
                      <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-zinc-500/60 z-20" />
                      {/* Screen bezel */}
                      <div className="relative bg-black rounded-t-lg sm:rounded-t-xl p-[2px] sm:p-[3px]">
                        {/* Screen content */}
                        <div className="relative bg-white rounded-t-md sm:rounded-t-lg overflow-hidden aspect-[16/10]">
                          {activeProject.isVideo ? (
                            <video src={activeProject.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                          ) : (
                            <img src={activeProjectMockup} alt={activeProject.title} className="w-full h-full object-cover" draggable="false" />
                          )}
                          {/* Screen glare */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    {/* Base (keyboard) */}
                    <div className="bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 rounded-b-xl sm:rounded-b-2xl mx-[-1px] sm:mx-[-2px] shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                      {/* Hinge */}
                      <div className="h-[1px] bg-zinc-200/60" />
                      {/* Keyboard */}
                      <div className="h-2 sm:h-3 mx-2 sm:mx-4 mt-0.5 bg-zinc-400/20 rounded-sm" />
                      {/* Trackpad */}
                      <div className="h-0.5 sm:h-1 bg-zinc-300/30 rounded-full mx-auto w-8 sm:w-12 mb-1.5 sm:mb-2" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project link badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
              >
                <a href={activeProject.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 bg-zinc-950/80 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/5 backdrop-blur hover:text-zinc-300 hover:border-white/20 transition-all cursor-pointer">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                  {activeProject.title}
                </a>
              </motion.div>
            </div>

            {/* Description — RIGHT */}
            <div className="w-full max-w-md text-left">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                {activeCategory}
              </h2>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-white">
                {activeProject.title}
              </h1>
              <p className="text-sm md:text-base text-zinc-400 mb-8 max-w-sm leading-relaxed">
                {activeProject.description}
              </p>

              <div className="w-full">
                <span className="text-[10px] md:text-xs font-medium text-zinc-500 uppercase tracking-wider font-mono">Gallery</span>
                <div className="flex gap-3 mt-3">
                  <div className="group relative w-28 h-28 lg:w-32 lg:h-32 rounded-xl overflow-hidden bg-zinc-900/60 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer">
                    <Image src={gallery.img1} alt="Gallery 1" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">View</span>
                    </div>
                  </div>
                  <div className="group relative w-28 h-28 lg:w-32 lg:h-32 rounded-xl overflow-hidden bg-zinc-900/60 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer">
                    <Image src={gallery.img2} alt="Gallery 2" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">View</span>
                    </div>
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
