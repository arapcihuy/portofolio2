import type React from "react"
import "@/app/globals.css"

export const metadata = {
  metadataBase: new URL("https://arapcihuy.github.io"),
  title: "Rasyid Achmad — Fullstack Developer & Cybersecurity",
  description: "Fullstack developer specializing in React, Next.js, Vue, and Laravel. Cybersecurity specialist at Flut. Building secure, scalable web applications.",
  generator: "v0.dev",
  openGraph: {
    title: "Rasyid Achmad — Fullstack Developer & Cybersecurity",
    description: "Fullstack developer specializing in React, Next.js, Vue, and Laravel. Cybersecurity specialist at Flut. Building secure, scalable web applications.",
    url: "https://arapcihuy.github.io",
    siteName: "Rasyid Achmad",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rasyid Achmad — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasyid Achmad — Fullstack Developer & Cybersecurity",
    description: "Fullstack developer specializing in React, Next.js, Vue, and Laravel. Cybersecurity specialist at Flut.",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon-180.png" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body suppressHydrationWarning className="antialiased text-zinc-100 bg-[#0a0a0a]" style={{ fontFamily: 'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
