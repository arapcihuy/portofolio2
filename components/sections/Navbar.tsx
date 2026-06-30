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
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLocale = () => {
    setLocale(locale === "EN" ? "ID" : "EN")
  }

  // Exact hayhasan box-shadow values
  const scrolledShadow = "rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset"
  const defaultShadow = "rgba(34, 42, 53, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px, rgba(34, 42, 53, 0) 0px 0px 0px, rgba(34, 42, 53, 0) 0px 0px 0px, rgba(47, 48, 55, 0) 0px 0px 0px, rgba(255, 255, 255, 0) 0px 1px 0px inset"

  return (
    <header role="banner" className="fixed top-0 inset-x-0 z-[100] w-full pointer-events-none">
      <div className="flex justify-center px-4 py-4 md:py-6">
        {/* Navbar pill — exact hayhasan behavior */}
        <motion.div
          animate={{
            y: isScrolled ? 20 : 0,
            width: isScrolled ? "min(90%, 800px)" : "100%",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            minWidth: isScrolled ? "min(90%, 800px)" : "0px",
            maxWidth: isScrolled ? "800px" : "none",
            backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
            boxShadow: isScrolled ? scrolledShadow : defaultShadow,
            backgroundColor: isScrolled ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
          }}
          className="pointer-events-auto relative z-[60] mx-auto flex flex-row items-center justify-between self-start rounded-full px-3 sm:px-4 py-2 w-full border-0"
        >
          {/* Logo */}
          <Link href="#" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal transition-colors text-white">
            <Code2 className="w-4 h-4 text-white/80" />
            <span className="font-medium transition-colors text-white">Rasyid</span>
          </Link>

          {/* Desktop Navigation Links — absolutely centered */}
          <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2 text-white hover:text-white/80">
            <Link href="#about" className="relative px-4 py-2 transition-colors text-white hover:text-white/80">
              <span className="relative z-20">{t("nav.about")}</span>
            </Link>
            <Link href="#projects" className="relative px-4 py-2 transition-colors text-white hover:text-white/80">
              <span className="relative z-20">{t("nav.projects")}</span>
            </Link>
            <Link href="#contact" className="relative px-4 py-2 transition-colors text-white hover:text-white/80">
              <span className="relative z-20">{t("nav.contact")}</span>
            </Link>
          </div>

          {/* Right side: Lang toggle + Download CV */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLocale}
              className="relative px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 text-white hover:text-white/80 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 cursor-pointer active:scale-95"
            >
              <span className="relative z-10" style={{ opacity: 1, transform: "none" }}>{locale}</span>
            </button>
            <a 
              href="/cv.pdf" 
              className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition-all duration-300 inline-block text-center liquid-glass-btn hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              {t("nav.download")}
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden ml-3 text-white hover:text-white/80 p-1 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden mt-2 mx-4 bg-black/80 backdrop-blur-xl rounded-3xl border border-white/10"
          >
            <div className="flex flex-col space-y-1 p-4">
              <Link 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-lg"
              >
                {t("nav.about")}
              </Link>
              <Link 
                href="#projects" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-lg"
              >
                {t("nav.projects")}
              </Link>
              <Link 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-lg"
              >
                {t("nav.contact")}
              </Link>
              <div className="border-t border-white/10 pt-3 mt-2 flex gap-3">
                <button 
                  onClick={toggleLocale}
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm text-white"
                >
                  {locale}
                </button>
                <a href="/cv.pdf" className="flex-1 text-center px-4 py-2 rounded-lg bg-white text-black text-sm font-bold">
                  {t("nav.download")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
