"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Code2, Download } from "lucide-react"
import { translations } from "@/lib/translations"

interface NavbarProps {
  locale: "EN" | "ID"
  setLocale: (l: "EN" | "ID") => void
}

export default function Navbar({ locale, setLocale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const t = (key: string) => {
    return translations[key]?.[locale] || key
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLocale = () => {
    setLocale(locale === "EN" ? "ID" : "EN")
  }

  return (
    <header role="banner" className="fixed top-0 inset-x-0 z-[100] w-full flex justify-center px-4 py-4 md:py-6 pointer-events-none">
      {/* Desktop & Mobile Combined Floating Navbar */}
      <motion.div
        animate={{
          y: isScrolled ? 20 : 0,
          width: isScrolled ? "40%" : "100%",
          maxWidth: isScrolled ? "900px" : "1200px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          boxShadow: isScrolled 
            ? "rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset"
            : "none",
        }}
        className={`pointer-events-auto flex flex-col items-center justify-between rounded-full border transition-all duration-300 ${
          isScrolled 
            ? "bg-black/60 border-white/10" 
            : "bg-transparent border-transparent"
        } px-4 md:px-6 py-2 md:py-3 w-full relative`}
      >
        <div className="flex w-full flex-row items-center justify-between">
          {/* Logo */}
          <Link href="#" className="relative z-20 flex items-center space-x-2 text-sm font-medium transition-colors text-white group shrink-0">
            <Code2 className="w-5 h-5 text-white/80 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold text-white tracking-wide">Rasyid</span>
          </Link>

          {/* Desktop Navigation Links - Centered absolutely (hayhasan exact) */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-2 text-sm font-medium text-white/70">
            <Link href="#about" className="relative px-4 py-2 transition-colors text-white hover:text-white/80">
              <span>{t("nav.about")}</span>
            </Link>
            <Link href="#projects" className="relative px-4 py-2 transition-colors text-white hover:text-white/80">
              <span>{t("nav.projects")}</span>
            </Link>
            <Link href="#contact" className="relative px-4 py-2 transition-colors text-white hover:text-white/80">
              <span>{t("nav.contact")}</span>
            </Link>
          </div>

          {/* Desktop Right Side CTA & Lang Toggle */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button 
              onClick={toggleLocale}
              className="relative px-3 py-1.5 rounded-md text-xs font-semibold text-white/80 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all cursor-pointer active:scale-95"
            >
              <span>{locale}</span>
            </button>
            <a 
              href="/cv.pdf" 
              className="px-4 py-2 rounded-md bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              {t("nav.download")}
            </a>
          </div>

          {/* Mobile Right Side Menu Button & Lang Toggle */}
          <div className="flex lg:hidden items-center gap-3 shrink-0">
            <button 
              onClick={toggleLocale}
              className="relative px-3 py-1.5 rounded-md text-xs font-semibold text-white/80 bg-white/10 border border-white/20"
            >
              <span>{locale}</span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-white hover:text-white/80 p-1 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full lg:hidden overflow-hidden mt-4 border-t border-white/10 pt-4 flex flex-col space-y-3 pb-2"
            >
              <Link 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-white/80 hover:text-white transition-colors py-1.5"
              >
                {t("nav.about")}
              </Link>
              <Link 
                href="#projects" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-white/80 hover:text-white transition-colors py-1.5"
              >
                {t("nav.projects")}
              </Link>
              <Link 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-white/80 hover:text-white transition-colors py-1.5"
              >
                {t("nav.contact")}
              </Link>
              <a 
                href="/cv.pdf" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-white text-black text-xs font-bold active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" /> {t("nav.download")}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}
