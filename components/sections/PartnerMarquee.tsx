"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { translations } from "@/lib/translations"

interface PartnerMarqueeProps {
  locale: "EN" | "ID"
}

const partners = [
  { name: "Flut Technology", logo: "/portfolio/flut-app.jpg" },
  { name: "UGM", logo: "/1279831.png" },
  { name: "CIMEDs", logo: "/ontiyus-logo-full.png" },
  { name: "CBS", logo: "/logo-cbs.png" },
  { name: "Bangkit Academy", logo: "/channels4_profile.jpg" },
  { name: "Cisco", logo: "/Cisco_logo_blue_2016.svg.png" },
  { name: "Rumbeldirgantara", logo: "/Cropped_Image.png" },
  { name: "Rumah Kinclong", logo: "/download (2).png" },
  { name: "Quondam", logo: "/quondam-logo.png" },
  { name: "Merdeka Siber", logo: "/logo-merdeka-siber.png" },
  { name: "9Router", logo: "/logo.png" },
  { name: "Hermes Agent", logo: "/favicon.png" },
]

export default function PartnerMarquee({ locale }: PartnerMarqueeProps) {
  const t = (key: string) => {
    return translations[key]?.[locale] || key
  }

  return (
    <section className="w-full bg-black py-6 sm:py-8 md:py-10">
      <div className="relative mx-auto max-w-3xl px-4">
        {/* Header — whileInView fade-in-up */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center font-medium text-white text-lg md:text-2xl"
        >
          <span className="text-white/70">{t("partner.heading1")}</span><br />
          <span className="font-semibold text-white">{t("partner.heading2")}</span>
        </motion.h2>
        
        <div className="mx-auto my-4 h-px max-w-sm bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Marquee — whileInView fade-in-up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden py-4 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
              className="flex w-max gap-10"
            >
              {[...partners, ...partners].map((partner, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="h-7 md:h-9 w-auto object-contain opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        <div className="mx-auto mt-4 h-px max-w-sm bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  )
}
