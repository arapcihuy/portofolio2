"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Award } from "lucide-react"
import { translations } from "@/lib/translations"

interface CertificatesProps {
  locale: "EN" | "ID"
}

const certificatesData = [
  {
    title: "Bangkit Academy (Google, GoTo, Traveloka)",
    issuer: "Cloud Computing Specialization",
    id: "CC-2024-rasyid",
    logo: "/channels4_profile.jpg",
    link: "#"
  },
  {
    title: "Cisco Networking Academy",
    issuer: "Introduction to Cybersecurity",
    id: "CS-2024-cisco",
    logo: "/Cisco_logo_blue_2016.svg.png",
    link: "/certificates/cybersecurity-essentials.pdf"
  },
  {
    title: "Merdeka Siber Academy",
    issuer: "Junior Cybersecurity Analyst",
    id: "MS-2024-cyber",
    logo: "/logo-merdeka-siber.png",
    link: "/certificates/MS_BOCSE_20_COE_006.pdf"
  }
]

export default function Certificates({ locale }: CertificatesProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const t = (key: string) => {
    return translations[key]?.[locale] || key
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 340
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="w-full bg-[#070707] py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden">
      {/* Dynamic background matching hayhasan */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_20%,rgba(59,130,246,0.05),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="mb-2 text-2xl sm:text-3xl font-semibold text-white md:text-4xl">
              {locale === "EN" ? "Certificate Programs" : "Program Sertifikasi"}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 md:text-base max-w-2xl">
              {locale === "EN" 
                ? "Explore professional certification programs from leading tech companies. Build your skills and advance your career with industry-recognized credentials."
                : "Jelajahi program sertifikasi profesional dari perusahaan teknologi terkemuka. Bangun keahlian Anda dan tingkatkan karier dengan kredensial yang diakui industri."}
            </p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
        >
          {certificatesData.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] bg-zinc-900/40 backdrop-blur-md rounded-xl p-5 border border-white/5 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 cursor-pointer snap-center"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                {cert.logo ? (
                  <Image src={cert.logo} alt={cert.title} fill className="object-cover" />
                ) : (
                  <Award className="text-zinc-500 size-6" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-sm sm:text-base mb-1 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-2">
                  {cert.issuer}
                </p>
                <div className="text-[10px] text-zinc-500 font-mono">
                  ID: {cert.id}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
