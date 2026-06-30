"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { translations, translatedExperience } from "@/lib/translations"

interface AboutProps {
  locale: "EN" | "ID"
}

export default function About({ locale }: AboutProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const collaborateContainerRef = useRef<HTMLDivElement>(null)

  const t = (key: string) => {
    return translations[key]?.[locale] || key
  }

  const experience = translatedExperience(locale)

  // Scroll setup matching hayhasan
  const { scrollYProgress } = useScroll({
    target: collaborateContainerRef,
    offset: ["start end", "end start"]
  })

  // Exact hayhasan ranges:
  // scale(0.92) to scale(1)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  
  // translateY from 250px to -250px and opacity fade
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150])
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.5, 1, 0.5, 0])

  const scrollGallery = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const amount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="about" className="w-full bg-black py-12 sm:py-16 md:py-20 text-white overflow-hidden">
      {/* Collaborate Section — Exactly matching hayhasan.my.id sticky scroll parallax */}
      <div 
        ref={collaborateContainerRef}
        className="relative h-[65vh] sm:h-[75vh] md:h-[80vh] w-full max-w-7xl mx-auto mb-16 px-4"
      >
        {/* Sticky wrapper for image */}
        <motion.div 
          style={{ scale }}
          className="sticky top-0 z-0 h-full w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-neutral-950"
        >
          <Image 
            src="/portfolio/flut-hero.png" 
            alt="Collaborate background" 
            fill 
            className="object-cover opacity-35" 
            priority
          />
          {/* Exact hayhasan backdrop-filter overlay */}
          <div className="absolute inset-0 bg-neutral-950/60 dark:bg-neutral-950/70" />
        </motion.div>

        {/* Parallax moving text container over sticky wrapper */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center px-4 text-white pointer-events-none z-10"
        >
          <p className="mb-2 text-center text-lg sm:text-xl md:mb-4 md:text-3xl font-light tracking-widest text-zinc-400 uppercase">
            {t("about.collaborate")}
          </p>
          <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-6xl lg:text-7xl tracking-tight">
            {t("about.built")}
          </h2>
        </motion.div>
      </div>

      {/* Gallery Carousel */}
      <div className="w-full mb-10 overflow-hidden">
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 mb-4">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-mono tracking-widest uppercase text-zinc-500"
          >
            Gallery
          </motion.span>
          <div className="flex gap-2">
            <button
              onClick={() => scrollGallery("left")}
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>
            <button
              onClick={() => scrollGallery("right")}
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto px-4 sm:px-8 md:px-12 lg:px-16 pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {[
            { src: "/portfolio/flut-chess.png", alt: "Chess Strategy" },
            { src: "/portfolio/uiux-1.jpg", alt: "UI Design" },
            { src: "/portfolio/flut-hand-phone.png", alt: "Mobile Preview" },
            { src: "/portfolio/uiux-3.jpg", alt: "Mobile UI" },
            { src: "/portfolio/flut-heads.png", alt: "Neural Design" },
            { src: "/portfolio/uiux-4.jpg", alt: "Dashboard" },
            { src: "/portfolio/flut-iphone.png", alt: "Flut iPhone" },
            { src: "/portfolio/uiux-5.jpg", alt: "Design System" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex-shrink-0 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden snap-center liquid-glass-card"
            >
              <Image 
                src={item.src} 
                alt={item.alt} 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-110" 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile + Experience */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 rounded-2xl overflow-hidden"
          >
            <Image
              src="/portfolio/profile-rasyid.png"
              alt="Rasyid Achmad"
              fill
              className="object-cover object-top"
            />
            {/* Subtle glow border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold mb-8"
          >
            {t("about.hi")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-lg leading-relaxed mb-8"
          >
            {t("about.bio")}
          </motion.p>
          
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-8"
          >
            {t("about.learn_more")}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-white/10 pt-8 space-y-6"
          >
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center">
                <span className="text-white/40 text-xs font-bold">UII</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Universitas Islam Indonesia</h4>
                <p className="text-sm text-zinc-400">Bachelor of Informatics</p>
                <p className="text-xs text-zinc-500">Sep 2021 – Present</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold mb-6 text-zinc-300"
          >
            {t("about.selected_work")}
          </motion.h3>
          <div className="space-y-6">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-b border-white/10 pb-6 last:border-0"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-md overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white/50 text-[10px] font-bold">
                      {item.title.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-zinc-500">{item.period}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                    {item.type}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed ml-11">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
