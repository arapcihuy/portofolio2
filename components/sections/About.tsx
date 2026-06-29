"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { translations, translatedExperience } from "@/lib/translations"

interface AboutProps {
  locale: "EN" | "ID"
}

export default function About({ locale }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const collaborateRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Collaborate section 3D scroll effects
  const { scrollYProgress: collabProgress } = useScroll({
    target: collaborateRef,
    offset: ["start end", "end start"]
  })

  // Image scale: starts at 0.8, scales to 1.1 at center, back to 1
  const collabScale = useSpring(
    useTransform(collabProgress, [0, 0.5, 1], [0.85, 1.05, 1]),
    { stiffness: 100, damping: 20 }
  )
  
  // Image rotateX: starts tilted, flattens as you scroll
  const collabRotateX = useSpring(
    useTransform(collabProgress, [0, 0.5, 1], [8, 0, -4]),
    { stiffness: 100, damping: 20 }
  )
  
  // Image opacity: fades in
  const collabOpacity = useTransform(collabProgress, [0, 0.3], [0, 1])
  
  // Text parallax: moves up faster than image
  const textY = useTransform(collabProgress, [0, 0.5, 1], [60, 0, -30])
  
  // Image parallax: moves slower (background)
  const imageY = useTransform(collabProgress, [0, 0.5, 1], [80, 0, -40])

  const t = (key: string) => {
    return translations[key]?.[locale] || key
  }

  const experience = translatedExperience(locale)

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
    <section id="about" ref={containerRef} className="w-full bg-black py-12 sm:py-16 md:py-20 text-white overflow-hidden">
      {/* Collaborate Hero — 3D scroll effect */}
      <div ref={collaborateRef} className="relative w-full max-w-7xl mx-auto mb-16 px-4">
        <motion.div
          style={{
            scale: collabScale,
            rotateX: collabRotateX,
            opacity: collabOpacity,
            perspective: 1200,
            transformStyle: "preserve-3d",
          }}
          className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden rounded-3xl bg-neutral-900 shadow-[0_0_80px_rgba(0,0,0,0.5)]"
        >
          {/* Background image with parallax */}
          <motion.div style={{ y: imageY }} className="absolute inset-[-10%]">
            <Image 
              src="/portfolio/gallery_11.jpg" 
              alt="Collaborate background" 
              fill 
              className="object-cover opacity-40" 
              priority
            />
          </motion.div>
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
          
          {/* Text with parallax */}
          <motion.div 
            style={{ y: textY }} 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-2xl mb-4 font-light tracking-widest text-zinc-400 uppercase"
            >
              {t("about.collaborate")}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500"
            >
              {t("about.built")}
            </motion.p>
          </motion.div>
          
          {/* 3D border glow */}
          <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
        </motion.div>
      </div>

      {/* Gallery Carousel with prev/next arrows */}
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
            "/portfolio/gallery_1.jpg",
            "/portfolio/gallery_2.jpg",
            "/portfolio/gallery_3.jpg",
            "/portfolio/gallery_4.jpg",
            "/portfolio/gallery_5.jpg",
            "/portfolio/gallery_6.jpg",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex-shrink-0 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 snap-center"
            >
              <Image 
                src={src} 
                alt={`Gallery ${i + 1}`} 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-110" 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile Info + Project Descriptions */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Profile — fadeInUp on scroll */}
        <div>
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

        {/* Project Descriptions */}
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
