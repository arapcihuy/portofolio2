"use client"

import { useEffect, useRef } from "react"

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Generate static noise once, re-render every 4th frame only
    let frameCount = 0
    let animationFrameId: number
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"
      ctx.scale(dpr, dpr)
    }

    const generateNoise = () => {
      // Render at half resolution for performance
      const w = Math.ceil(canvas.width / dpr / 2)
      const h = Math.ceil(canvas.height / dpr / 2)
      const imageData = ctx.createImageData(w, h)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value
        data[i + 1] = value
        data[i + 2] = value
        data[i + 3] = 12
      }

      // Clear and draw scaled up
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
      const tmpCanvas = document.createElement("canvas")
      tmpCanvas.width = w
      tmpCanvas.height = h
      tmpCanvas.getContext("2d")!.putImageData(imageData, 0, 0)
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(tmpCanvas, 0, 0, w, h, 0, 0, canvas.width / dpr, canvas.height / dpr)
    }

    const loop = () => {
      frameCount++
      if (frameCount % 4 === 0) {
        generateNoise()
      }
      animationFrameId = window.requestAnimationFrame(loop)
    }

    window.addEventListener("resize", resize)
    resize()
    loop()

    return () => {
      window.removeEventListener("resize", resize)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] mix-blend-overlay"
      style={{ willChange: "contents" }}
    />
  )
}
