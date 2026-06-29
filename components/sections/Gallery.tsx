"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { translations } from "@/lib/translations"

const galleryImages = [
  { src: "/portfolio/uiux-1.jpg", alt: "UI Design System" },
  { src: "/portfolio/uiux-2.jpg", alt: "UX Wireframe" },
  { src: "/portfolio/uiux-3.jpg", alt: "Mobile UI Design" },
  { src: "/portfolio/uiux-4.jpg", alt: "Dashboard Design" },
  { src: "/portfolio/uiux-5.jpg", alt: "Design System" },
  { src: "/portfolio/uiux-6.jpg", alt: "Color Palette" },
  { src: "/portfolio/uiux-7.jpg", alt: "Mobile App UI" },
  { src: "/portfolio/uiux-8.jpg", alt: "Analytics Dashboard" },
  { src: "/portfolio/flut-iphone.png", alt: "Flut App Mockup" },
]

interface GalleryProps {
  locale: "EN" | "ID"
}

export default function Gallery({ locale }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const t = (key: string) => {
    return translations[key]?.[locale] || key
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section id="gallery" className="w-full bg-black py-12 sm:py-16 md:py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono tracking-widest uppercase text-zinc-500 mb-4"
        >
          {t("gallery.label")}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-12"
        >
          {t("gallery.title")}
        </motion.h3>

        {/* Gallery Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          >
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="relative flex-shrink-0 w-64 h-80 md:w-80 md:h-[400px] rounded-2xl overflow-hidden snap-center cursor-pointer group liquid-glass-card"
                onClick={() => setSelectedIndex(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    {t("gallery.view")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white text-3xl cursor-pointer"
            >
              ×
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white cursor-pointer"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="w-full h-full object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white cursor-pointer"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
