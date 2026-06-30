"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export default function ParticleSignature() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)
  const visibleRef = useRef(false)

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(60, Math.floor((width * height) / 15000))
    const particles: Particle[] = []

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6'
      })
    }
    particlesRef.current = particles
  }, [])

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height)

    const particles = particlesRef.current
    const mouse = mouseRef.current
    const gridSize = 120

    // Spatial grid for O(n) neighbor lookup
    const grid = new Map<string, Particle[]>()
    for (const p of particles) {
      const key = `${Math.floor(p.x / gridSize)},${Math.floor(p.y / gridSize)}`
      if (!grid.has(key)) grid.set(key, [])
      grid.get(key)!.push(p)
    }

    particles.forEach(p => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > width) p.vx *= -1
      if (p.y < 0 || p.y > height) p.vy *= -1

      const dx = mouse.x - p.x
      const dy = mouse.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 100 && dist > 0) {
        const force = (100 - dist) / 100
        p.vx -= (dx / dist) * force * 0.5
        p.vy -= (dy / dist) * force * 0.5
      }

      p.vx *= 0.99
      p.vy *= 0.99

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = p.opacity
      ctx.fill()

      // Only check neighboring grid cells
      const gx = Math.floor(p.x / gridSize)
      const gy = Math.floor(p.y / gridSize)
      for (let ox = -1; ox <= 1; ox++) {
        for (let oy = -1; oy <= 1; oy++) {
          const neighbors = grid.get(`${gx + ox},${gy + oy}`)
          if (!neighbors) continue
          for (const p2 of neighbors) {
            if (p2 === p) continue
            const dx2 = p.x - p2.x
            const dy2 = p.y - p2.y
            const dist2 = dx2 * dx2 + dy2 * dy2
            if (dist2 < 10000) { // 100² = 10000
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.strokeStyle = p.color
              ctx.globalAlpha = (1 - Math.sqrt(dist2) / 100) * 0.2
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }
      }
    })

    ctx.globalAlpha = 1
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
      initParticles(canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    // IntersectionObserver: pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(canvas)

    const animate = () => {
      if (visibleRef.current) {
        draw(ctx, canvas.width, canvas.height)
      }
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
      cancelAnimationFrame(animationRef.current)
    }
  }, [draw, initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[4] pointer-events-auto cursor-none"
      style={{ mixBlendMode: 'screen' } as React.CSSProperties}
    />
  )
}
