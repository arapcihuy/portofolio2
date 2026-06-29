"use client"

import { motion } from "framer-motion"
import { Instagram, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import TextReveal from "@/components/TextReveal"
import { translations } from "@/lib/translations"

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rasyid-ahmad-840b8b250/", handle: "rasyid-ahmad" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/r.asyidahmad/", handle: "@r.asyidahmad" },
  { icon: Github, label: "GitHub", href: "https://github.com/arapcihuy", handle: "arapcihuy" },
  { icon: Mail, label: "Email", href: "mailto:rasyidahmad180@gmail.com", handle: "rasyidahmad180@gmail.com" },
]

interface ContactProps {
  locale: "EN" | "ID"
}

export default function Contact({ locale }: ContactProps) {
  const t = (key: string) => {
    return translations[key]?.[locale] || key
  }

  return (
    <section id="contact" className="w-full bg-black py-16 sm:py-20 md:py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono tracking-widest uppercase text-zinc-500 mb-12"
        >
          {t("contact.label")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            <TextReveal text={t("contact.heading1")} />
          </h3>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-zinc-400 mt-2">
            <TextReveal text={t("contact.heading2")} delay={0.3} />
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-white/10">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex items-center justify-between p-6 sm:p-8 border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <link.icon size={24} className="text-zinc-400 group-hover:text-white transition-colors" />
                <div>
                  <p className="text-lg font-medium group-hover:text-white text-zinc-300 transition-colors">{link.label}</p>
                  <p className="text-sm text-zinc-600 font-mono">{link.handle}</p>
                </div>
              </div>
              <ArrowUpRight size={20} className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
            &#169; {new Date().getFullYear()} Rasyid Achmad &#8212; {t("contact.copyright")}
          </p>
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
            Frontend Developer & UI/UX Designer
          </p>
        </div>
      </div>
    </section>
  )
}
