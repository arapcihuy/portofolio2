"use client"

import { ReactLenis } from "lenis/react"
import { ReactNode, useState, useEffect } from "react"

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <>{children}</>

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
