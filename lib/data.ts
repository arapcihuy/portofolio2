import { Home, Instagram, Github, Linkedin, Twitter, Mail } from "lucide-react"

export const experienceData = [
  {
    title: "Flut Technology (Cybersecurity Team)",
    logo: "/portfolio/flut-app.jpg",
    bgColor: "bg-white",
    type: "Work",
    role: "Cybersecurity Specialist",
    period: "2025 - Present",
    delay: "0.05s",
    description:
      "Part of the cybersecurity team at Flut — a video-first hiring platform (flutapp.com). Responsible for securing the platform infrastructure, conducting vulnerability assessments, and implementing security protocols to protect user data and video profiles.",
  },
  {
    title: "PT Ontiyus Karya Mulia (CIMEDs)",
    logo: "/ontiyus-logo-full.png",
    bgColor: "bg-white",
    type: "Work",
    role: "Website Developer (Internship)",
    period: "January 2026 - March 2026",
    delay: "0.1s",
    description:
      "Responsible for designing, building, and managing the portal website architecture (frontend and backend) for Medical Information System (CIMEDs) in collaboration with UGM, ensuring optimal and responsive performance.",
  },
  {
    title: "PT Cakra Bahana Sakti",
    logo: "/logo-cbs.png",
    bgColor: "bg-white",
    type: "Work",
    role: "Website Portal Developer (Internship)",
    period: "October 2025 - January 2026",
    delay: "0.2s",
    description:
      "Operated CMS for layout customization and regular portal post management for a substation equipment supplier.",
  },
  {
    title: "Rumbeldirgantara",
    logo: "/Cropped_Image.png",
    bgColor: "bg-white",
    type: "Project",
    role: "Fullstack Developer",
    period: "August 2022 - Present",
    delay: "0.3s",
    description:
      "Developed and maintained a tutoring website for elementary school students focusing on simplicity, responsiveness, and easy navigation for parents.",
  },
  {
    title: "Rumah Kinclong",
    logo: "/download (2).png",
    bgColor: "bg-white",
    type: "Project",
    role: "Frontend Developer",
    period: "October 2020 - February 2021",
    delay: "0.4s",
    description:
      "Developed a mobile application for booking home cleaning services with real-time scheduling and service tracking. Built with React Native, Firebase, Redux, and secure Stripe payment integration.",
  },
  {
    title: "Quondam",
    logo: "/quondam-logo.png",
    bgColor: "bg-white",
    type: "Project",
    role: "UI/UX Designer & Instructor",
    period: "March 2021 - May 2022",
    delay: "0.5s",
    description:
      "Designed user-friendly concepts using Figma for an e-commerce platform. Managed an innovative online learning platform with interactive courses and progress tracking.",
  },
]

export const skillsData = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS", "PHP", "Dart", "C++"],
  frameworks: ["React", "Next.js", "Angular", "Vue.js", "Flutter", "Ionic", "Capacitor", "Laravel", "Tailwind CSS", "Bootstrap", "Express.js"],
  tools: ["Git", "GitHub", "Figma", "Adobe XD", "VS Code", "Vite", "Webpack", "Vercel", "Netlify", "Firebase", "Node.js", "ESP32", "Fastlane"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore"],
}

export const galleryData = [
  {
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=1000",
    title: "Deep Focus Sessions",
    alt: "Developer desk at night"
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    title: "Wireframing Concepts",
    alt: "Notepad with UI sketches"
  },
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    title: "Architecture Design",
    alt: "Nexus Analytics Dashboard Mockup"
  }
]

export const projectsData = [
  {
    title: "Flut App — Cybersecurity",
    description: "Video-first hiring platform secured by our cybersecurity team.",
    image: "/portfolio/flut-home.jpg",
    isVideo: false,
    tags: ["Security", "Penetration Testing", "Infrastructure"],
    link: "https://flutapp.com",
    github: "#",
    category: "security",
  },
  {
    title: "CIMEDs / PT Ontiyus Karya Mulia",
    description: "Medical information system portal developed with UGM.",
    video: "/videos/pt-ontiyus.mp4",
    isVideo: true,
    tags: ["Next.js", "React", "TypeScript"],
    link: "https://pt-ontiyus-karya-mulia.vercel.app",
    github: "https://github.com/arapcihuy/pt-ontiyus-karya-mulia",
    category: "web",
  },
  {
    title: "PT. Cakra Bahana Sakti",
    description: "Company profile portal for substation equipment supplier.",
    video: "/videos/cbs-demo.mp4",
    isVideo: true,
    tags: ["Next.js", "React", "CMS"],
    link: "https://www.cakrabahanasakti.com/",
    github: "#",
    category: "web",
  },
  {
    title: "Rumbeldirgantara",
    description: "Tutoring website for elementary school students.",
    video: "/videos/task-management.mov",
    isVideo: true,
    tags: ["Vue.js", "Firebase", "Vuex"],
    link: "https://rumbeldirgantara.com",
    github: "https://github.com/arapcihuy/jarialjabar",
    category: "web",
  },
  {
    title: "Rumah Kinclong",
    description: "Mobile application for booking home cleaning services with real-time scheduling.",
    video: "/videos/cleaning-app.mp4",
    isVideo: true,
    tags: ["React Native", "Firebase", "Stripe"],
    link: "#",
    github: "#",
    category: "mobile",
  },
  {
    title: "Quondam E-commerce",
    description: "Modern e-commerce UI concept with Figma.",
    video: "/videos/marketplace-app.mp4",
    isVideo: true,
    tags: ["Figma", "UI/UX", "E-commerce"],
    link: "#",
    github: "#",
    category: "design",
  },
]

export const educationData = [
  {
    title: "Bangkit Academy",
    logo: "/channels4_profile.jpg",
    period: "February 2023 - July 2023",
    role: "Cloud Computing",
    grade: "Grade A",
    description: "Graduated with Distinction (Grade A) from the prestigious Google-led Bangkit Academy. Specialized in Cloud Computing, mastering Google Cloud Platform (GCP) architecture, deploying scalable web applications, and implementing robust backend infrastructure for modern systems.",
    delay: "0s",
    type: "Certification",
  },
  {
    title: "Cybersecurity Essentials",
    logo: "/Cisco_logo_blue_2016.svg.png",
    period: "July 2024",
    role: "Cisco Networking Academy",
    description: "Completed an intensive Cisco Networking Academy certification program. Acquired hands-on knowledge in network defense, cryptography principles, and identifying system vulnerabilities to secure IT infrastructure against modern cyber threats.",
    delay: "0.05s",
    type: "Certification",
    link: "/certificates/cybersecurity-essentials.pdf",
  },
  {
    title: "Universitas Islam Indonesia",
    logo: "/1279831.png",
    period: "2021 - Current",
    role: "Computer Science",
    degree: "Bachelor's Degree",
    description: "Pursuing a Bachelor's Degree in Computer Science with a strong focus on Software Engineering, Web Technologies, and UI/UX Design. Actively involved in building innovative fullstack projects and participating in academic technology research.",
    delay: "0.1s",
    type: "University",
  },
  {
    title: "Merdeka Siber",
    logo: "/logo-merdeka-siber.png",
    period: "2024",
    role: "Cybersecurity Talent",
    description: "Participated in the national cybersecurity talent development program. Trained in practical penetration testing, incident response, and web application security auditing, adhering to industry standards for protecting digital assets and infrastructure.",
    delay: "0.15s",
    type: "Certification",
    link: "/certificates/merdeka-siber.pdf",
  },
]

export const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/r.asyidahmad/" },
  { icon: Github, label: "GitHub", href: "https://github.com/arapcihuy" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rasyid-ahmad-840b8b250/" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Email", href: "mailto:rasyidahmad180@gmail.com" },
]
