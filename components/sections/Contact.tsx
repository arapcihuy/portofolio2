"use client"

import { motion } from "framer-motion"
import { Instagram, Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/rasyid-ahmad-840b8b250/" },
  { icon: Instagram, href: "https://www.instagram.com/r.asyidahmad/" },
  { icon: Github, href: "https://github.com/arapcihuy" },
  { icon: Mail, href: "mailto:rasyidahmad180@gmail.com" },
]

export default function Contact() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black py-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between min-h-[20rem] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center w-full">
          <div className="space-y-3 flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="text-white text-3xl sm:text-4xl font-bold tracking-tight">RASYID</span>
            </div>
            <p className="text-white/60 font-semibold text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
              Explore my work and connect with me.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex mb-8 mt-6 gap-6">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx}
                className="text-white/60 hover:text-white transition-colors duration-300 transform hover:scale-110" 
                target="_blank" 
                rel="noopener noreferrer" 
                href={link.href}
              >
                <link.icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-8 text-center sm:text-left gap-4">
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
            &copy; {currentYear} RASYID. All rights reserved.
          </p>
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
            Crafted by Rasyid
          </p>
        </div>
      </div>
    </footer>
  )
}
