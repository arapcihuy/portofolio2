export const translations: { [key: string]: { EN: string; ID: string } } = {
  // Navbar
  "nav.about": { EN: "About", ID: "Tentang" },
  "nav.projects": { EN: "Projects", ID: "Proyek" },
  "nav.contact": { EN: "Contact", ID: "Kontak" },
  "nav.download": { EN: "Download CV", ID: "Unduh CV" },

  // Hero
  "hero.role1": { EN: "Frontend Developer", ID: "Pengembang Frontend" },
  "hero.role2": { EN: "UI/UX Designer", ID: "Desainer UI/UX" },
  "hero.tagline": { EN: "Building high-performance web experiences", ID: "Membangun pengalaman web berkinerja tinggi" },

  // PartnerMarquee
  "partner.heading1": { EN: "Trusted by experts.", ID: "Dipercaya oleh para ahli." },
  "partner.heading2": { EN: "Used by the leaders.", ID: "Digunakan oleh para pemimpin." },

  // Projects
  "projects.showcase": { EN: "Project Showcase", ID: "Showcase Proyek" },
  "projects.showcase_desc": { 
    EN: "Explore our innovative product lineup. Each variant is engineered for excellence, delivering exceptional performance tailored to your needs.", 
    ID: "Jelajahi rangkaian produk inovatif kami. Setiap varian dirancang untuk keunggulan, memberikan performa luar biasa yang disesuaikan dengan kebutuhan Anda." 
  },
  "projects.all": { EN: "All Projects", ID: "Semua Proyek" },
  "projects.all_desc": {
    EN: "Explore my portfolio — every project is a meaningful story. A collection of creative projects and innovative solutions built with passion and technical expertise.",
    ID: "Jelajahi portofolio saya — setiap proyek adalah cerita yang bermakna. Koleksi proyek kreatif dan solusi inovatif yang dibangun dengan semangat dan keahlian teknis."
  },
  "projects.see_all": { EN: "See all Project", ID: "Lihat semua Proyek" },

  // About
  "about.collaborate": { EN: "Collaborate", ID: "Kolaborasi" },
  "about.built": { EN: "Built for all of us.", ID: "Dibangun untuk kita semua." },
  "about.hi": { EN: "Hi, I'm RASYID ACHMAD.", ID: "Halo, saya RASYID ACHMAD." },
  "about.bio": {
    EN: "I am a Frontend Developer and UI/UX Designer specializing in building high-performance, visually stunning web experiences. With deep expertise in React, Next.js, and modern animation libraries, I bridge the gap between complex engineering and human-centered design.",
    ID: "Saya adalah Pengembang Frontend dan Desainer UI/UX yang berspesialisasi dalam membangun pengalaman web berkinerja tinggi dan menawan secara visual. Dengan keahlian mendalam di React, Next.js, dan pustaka animasi modern, saya menjembatani celah antara rekayasa kompleks dan desain yang berpusat pada manusia."
  },
  "about.learn_more": { EN: "Learn more", ID: "Pelajari selengkapnya" },
  "about.selected_work": { EN: "Selected Work", ID: "Pekerjaan Terpilih" },
  "about.education": { EN: "Education", ID: "Pendidikan" },

  // Gallery
  "gallery.label": { EN: "Activity Documentation", ID: "Dokumentasi Kegiatan" },
  "gallery.title": { EN: "Building the Future", ID: "Membangun Masa Depan" },
  "gallery.view": { EN: "View", ID: "Lihat" },

  // Contact
  "contact.label": { EN: "[ Get in Touch ]", ID: "[ Hubungi Saya ]" },
  "contact.heading1": { EN: "Let's build", ID: "Mari membangun" },
  "contact.heading2": { EN: "something great.", ID: "sesuatu yang hebat." },
  "contact.copyright": { EN: "Crafted with Precision", ID: "Dibuat dengan Presisi" },
}

// Translate experience and project data dynamically
export const translatedExperience = (locale: "EN" | "ID") => [
  {
    title: "Flut Technology (Cybersecurity Team)",
    logo: "/portfolio/flut-logo.png",
    bgColor: "bg-white",
    type: locale === "EN" ? "Work" : "Pekerjaan",
    role: locale === "EN" ? "Cybersecurity Specialist" : "Spesialis Keamanan Siber",
    period: locale === "EN" ? "2025 - Present" : "2025 - Sekarang",
    delay: "0.05s",
    description: locale === "EN"
      ? "Part of the cybersecurity team at Flut — a video-first hiring platform (flutapp.com). Responsible for securing the platform infrastructure, conducting vulnerability assessments, and implementing security protocols to protect user data and video profiles."
      : "Bagian dari tim keamanan siber di Flut — platform perekrutan berbasis video (flutapp.com). Bertanggung jawab mengamankan infrastruktur platform, melakukan asesmen kerentanan, dan mengimplementasikan protokol keamanan untuk melindungi data pengguna dan profil video.",
  },
  {
    title: "PT Ontiyus Karya Mulia (CIMEDs)",
    logo: "/ontiyus-logo-full.png",
    bgColor: "bg-white",
    type: locale === "EN" ? "Work" : "Pekerjaan",
    role: locale === "EN" ? "Website Developer (Internship)" : "Pengembang Website (Magang)",
    period: locale === "EN" ? "January 2026 - March 2026" : "Januari 2026 - Maret 2026",
    delay: "0.1s",
    description: locale === "EN" 
      ? "Responsible for designing, building, and managing the portal website architecture (frontend and backend) for Medical Information System (CIMEDs) in collaboration with UGM, ensuring optimal and responsive performance."
      : "Bertanggung jawab merancang, membangun, dan mengelola arsitektur portal website (frontend dan backend) untuk Sistem Informasi Medis (CIMEDs) berkolaborasi dengan UGM, memastikan performa yang optimal dan responsif.",
  },
  {
    title: "PT Cakra Bahana Sakti",
    logo: "/logo-cbs.png",
    bgColor: "bg-white",
    type: locale === "EN" ? "Work" : "Pekerjaan",
    role: locale === "EN" ? "Website Portal Developer (Internship)" : "Pengembang Portal Website (Magang)",
    period: locale === "EN" ? "October 2025 - January 2026" : "Oktober 2025 - Januari 2026",
    delay: "0.2s",
    description: locale === "EN"
      ? "Operated CMS for layout customization and regular portal post management for a substation equipment supplier."
      : "Mengoperasikan CMS untuk kustomisasi tata letak dan pengelolaan postingan portal secara berkala untuk pemasok peralatan gardu induk.",
  },
  {
    title: "Rumbeldirgantara",
    logo: "/Cropped_Image.png",
    bgColor: "bg-white",
    type: locale === "EN" ? "Project" : "Proyek",
    role: "Fullstack Developer",
    period: locale === "EN" ? "August 2022 - Present" : "Agustus 2022 - Sekarang",
    delay: "0.3s",
    description: locale === "EN"
      ? "Developed and maintained a tutoring website for elementary school students focusing on simplicity, responsiveness, and easy navigation for parents."
      : "Mengembangkan dan memelihara situs bimbingan belajar untuk siswa sekolah dasar yang berfokus pada kesederhanaan, responsivitas, dan navigasi yang mudah bagi orang tua.",
  },
  {
    title: "Rumah Kinclong",
    logo: "/download (2).png",
    bgColor: "bg-white",
    type: locale === "EN" ? "Project" : "Proyek",
    role: "Frontend Developer",
    period: locale === "EN" ? "October 2020 - February 2021" : "Oktober 2020 - Februari 2021",
    delay: "0.4s",
    description: locale === "EN"
      ? "Developed a mobile application for booking home cleaning services with real-time scheduling and service tracking. Built with React Native, Firebase, Redux, and secure Stripe payment integration."
      : "Mengembangkan aplikasi seluler untuk pemesanan layanan kebersihan rumah dengan penjadwalan waktu nyata dan pelacakan layanan. Dibangun dengan React Native, Firebase, Redux, dan integrasi pembayaran Stripe yang aman.",
  },
  {
    title: "Quondam",
    logo: "/quondam-logo.png",
    bgColor: "bg-white",
    type: locale === "EN" ? "Project" : "Proyek",
    role: "UI/UX Designer & Instructor",
    period: locale === "EN" ? "March 2021 - May 2022" : "Maret 2021 - Mei 2022",
    delay: "0.5s",
    description: locale === "EN"
      ? "Designed user-friendly concepts using Figma for an e-commerce platform. Managed an innovative online learning platform with interactive courses and progress tracking."
      : "Merancang konsep ramah pengguna menggunakan Figma untuk platform e-commerce. Mengelola platform pembelajaran daring inovatif dengan kursus interaktif dan pelacakan kemajuan.",
  },
  {
    title: "TIASA Solution",
    logo: "/portfolio/tiasa-hero.png",
    bgColor: "bg-white",
    type: locale === "EN" ? "Work" : "Pekerjaan",
    role: locale === "EN" ? "Fullstack Developer" : "Pengembang Fullstack",
    period: locale === "EN" ? "2026 - Present" : "2026 - Sekarang",
    delay: "0.6s",
    description: locale === "EN"
      ? "Built enterprise digital solutions including Smart POS systems, company profiles, and management platforms for FnB businesses in Yogyakarta. Responsible for full-stack development using TypeScript, React, and Laravel."
      : "Membangun solusi digital enterprise termasuk sistem Smart POS, company profile, dan platform manajemen untuk bisnis FnB di Yogyakarta. Bertanggung jawab atas pengembangan full-stack menggunakan TypeScript, React, dan Laravel.",
  },
]

export const translatedProjects = (locale: "EN" | "ID") => [
  {
    title: "Flut App — Cybersecurity",
    description: locale === "EN" ? "Video-first hiring platform secured by our cybersecurity team." : "Platform perekrutan berbasis video yang diamankan oleh tim keamanan siber kami.",
    image: "/portfolio/flut-iphone.png",
    isVideo: false,
    tags: ["Security", "Penetration Testing", "Infrastructure"],
    link: "https://flutapp.com",
    github: "#",
    category: "security",
  },
  {
    title: "CIMEDs / PT Ontiyus Karya Mulia",
    description: locale === "EN" ? "Medical information system portal developed with UGM." : "Portal sistem informasi medis yang dikembangkan bersama UGM.",
    video: "/videos/pt-ontiyus.mp4",
    isVideo: true,
    tags: ["Next.js", "React", "TypeScript"],
    link: "https://pt-ontiyus-karya-mulia.vercel.app",
    github: "https://github.com/arapcihuy/pt-ontiyus-karya-mulia",
    category: "web",
  },
  {
    title: "PT. Cakra Bahana Sakti",
    description: locale === "EN" ? "Company profile portal for substation equipment supplier." : "Portal profil perusahaan untuk pemasok peralatan gardu induk.",
    video: "/videos/cbs-demo.mp4",
    isVideo: true,
    tags: ["Next.js", "React", "CMS"],
    link: "https://www.cakrabahanasakti.com/",
    github: "https://github.com/arapcihuy/pt.cakra-bahana-sakti",
    category: "web",
  },
  {
    title: "Rumbeldirgantara",
    description: locale === "EN" ? "Tutoring website for elementary school students." : "Situs web bimbingan belajar untuk siswa sekolah dasar.",
    video: "/videos/task-management.mov",
    isVideo: true,
    tags: ["Vue.js", "Firebase", "Vuex"],
    link: "https://rumbeldirgantara.com",
    github: "https://github.com/arapcihuy/jarialjabar",
    category: "web",
  },
  {
    title: "Rumah Kinclong",
    description: locale === "EN" ? "Mobile application for booking home cleaning services with real-time scheduling." : "Aplikasi seluler untuk pemesanan layanan kebersihan rumah dengan penjadwalan real-time.",
    video: "/videos/cleaning-app.mp4",
    isVideo: true,
    tags: ["React Native", "Firebase", "Stripe"],
    link: "#",
    github: "#",
    category: "mobile",
  },
  {
    title: "Quondam E-commerce",
    description: locale === "EN" ? "Modern e-commerce UI concept with Figma." : "Konsep UI e-commerce modern dengan Figma.",
    video: "/videos/marketplace-app.mp4",
    isVideo: true,
    tags: ["Figma", "UI/UX", "E-commerce"],
    link: "#",
    github: "#",
    category: "design",
  },
  {
    title: "Sistem Billiard",
    description: locale === "EN" ? "Multi-tenant billiard hall management system with real-time tracking, table reservations, and payment integration." : "Sistem manajemen hall biliar multi-tenant dengan pelacakan real-time, reservasi meja, dan integrasi pembayaran.",
    image: "/portfolio/sistem-billiard.jpg",
    isVideo: false,
    tags: ["Laravel", "React", "Inertia.js", "TypeScript"],
    link: "#",
    github: "https://github.com/arapcihuy/sistem-billiard",
    category: "web",
  },
  {
    title: "ESP32 DHT11 Monitoring",
    description: locale === "EN" ? "Real-time temperature and humidity monitoring system using ESP32 and DHT-11 sensor with live dashboard." : "Sistem monitoring suhu dan kelembaban secara real-time menggunakan ESP32 dan sensor DHT-11 dengan dashboard live.",
    image: "/portfolio/esp32-monitoring.jpg",
    isVideo: false,
    tags: ["ESP32", "TypeScript", "IoT", "Real-time"],
    link: "#",
    github: "https://github.com/arapcihuy/esp32-dht11-monitoring",
    category: "iot",
  },
  {
    title: "IoT Water Monitoring",
    description: locale === "EN" ? "Water quality monitoring system based on IoT with real-time sensors and analytics dashboard." : "Sistem monitoring kualitas air berbasis IoT dengan sensor real-time dan dashboard analisis.",
    image: "/portfolio/iot-water.jpg",
    isVideo: false,
    tags: ["CMake", "IoT", "ESP32", "Dashboard"],
    link: "#",
    github: "https://github.com/arapcihuy/iot-water-monitoring",
    category: "iot",
  },
  {
    title: "Momo Dimsum Menu",
    description: locale === "EN" ? "Digital menu website and ordering system for Momo Dimsum restaurant." : "Website menu digital dan sistem pemesanan untuk restoran Momo Dimsum.",
    image: "/portfolio/momo-dimsum.jpg",
    isVideo: false,
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    link: "#",
    github: "https://github.com/arapcihuy/momo_dimsumm",
    category: "web",
  },
  {
    title: "AI Chatbot",
    description: locale === "EN" ? "AI-powered chatbot built with Next.js and OpenAI integration with real-time streaming responses." : "Chatbot bertenaga AI yang dibangun dengan Next.js dan integrasi OpenAI dengan respons streaming real-time.",
    image: "/portfolio/ai-chatbot.jpg",
    isVideo: false,
    tags: ["Next.js", "OpenAI", "TypeScript", "AI"],
    link: "#",
    github: "https://github.com/arapcihuy/nextjs-ai-chatbot",
    category: "ai",
  },
  {
    title: "Flut Security Audit",
    description: locale === "EN" ? "Professional security audit report — mobile penetration testing portfolio for Flut App." : "Laporan audit keamanan profesional — portofolio penetration testing mobile untuk Flut App.",
    image: "/portfolio/flut-iphone.png",
    isVideo: false,
    tags: ["Security", "Penetration Testing", "Mobile"],
    link: "#",
    github: "https://github.com/arapcihuy/flut-app-security-audit",
    category: "security",
  },
  {
    title: "TIASA Solution",
    description: locale === "EN" ? "Enterprise solution platform built with TypeScript for business process automation." : "Platform solusi enterprise yang dibangun dengan TypeScript untuk otomatisasi proses bisnis.",
    image: "/portfolio/tiasa-hero.png",
    isVideo: false,
    tags: ["TypeScript", "React", "Enterprise"],
    link: "https://www.tiasasolution.com/",
    github: "https://github.com/arapcihuy/tiasa-solution",
    category: "web",
  },
]
