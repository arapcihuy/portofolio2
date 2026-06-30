import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "Rasyid Achmad - Frontend Developer",
  description: "Frontend Developer - UI/UX Designer. Passionate about creating beautiful and functional web experiences.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/logo.png?v=3" />
        <link rel="shortcut icon" type="image/png" href="/logo.png?v=3" />
      </head>
      <body suppressHydrationWarning className="antialiased text-zinc-100 bg-[#0a0a0a]" style={{ fontFamily: 'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
