"use client"

import { useEffect, useState, useCallback, useMemo } from "react"

interface GridBox {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  glowIntensity: number
  animationPhase: number
  pulseSpeed: number
}

export function AnimatedBackground() {
  const [gridBoxes, setGridBoxes] = useState<GridBox[]>([])
  const [mounted, setMounted] = useState(false)

  const gridConfig = useMemo(
    () => ({
      gridSize: 80,
      boxSize: 60,
      spawnRate: 0.7,
      animationInterval: 100, // Increased from 50ms to reduce CPU usage
    }),
    [],
  )

  const createGridBoxes = useCallback(() => {
    const newBoxes: GridBox[] = []
    const { gridSize, boxSize, spawnRate } = gridConfig

    for (let x = 0; x <= window.innerWidth + gridSize; x += gridSize) {
      for (let y = 0; y <= window.innerHeight + gridSize; y += gridSize) {
        if (Math.random() > spawnRate) {
          newBoxes.push({
            id: newBoxes.length,
            x: x - boxSize / 2,
            y: y - boxSize / 2,
            size: boxSize + Math.random() * 20,
            opacity: Math.random() * 0.3 + 0.1,
            glowIntensity: Math.random() * 0.5 + 0.2,
            animationPhase: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.002 + 0.001,
          })
        }
      }
    }

    setGridBoxes(newBoxes)
  }, [gridConfig])

  useEffect(() => {
    setMounted(true)
    createGridBoxes()

    let animationId: number
    let lastTime = 0

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= gridConfig.animationInterval) {
        setGridBoxes((prevBoxes) =>
          prevBoxes.map((box) => {
            const pulse = Math.sin(currentTime * box.pulseSpeed + box.animationPhase) * 0.5 + 0.5
            const float = Math.sin(currentTime * 0.0005 + box.animationPhase) * 2

            return {
              ...box,
              opacity: box.opacity * 0.7 + pulse * 0.3,
              glowIntensity: box.glowIntensity * (0.5 + pulse * 0.5),
              y: box.y + float,
            }
          }),
        )
        lastTime = currentTime
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(createGridBoxes, 250)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      clearTimeout(resizeTimeout)
      window.removeEventListener("resize", handleResize)
    }
  }, [createGridBoxes, gridConfig.animationInterval])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {gridBoxes.map((box) => (
        <div
          key={box.id}
          className="absolute border border-cyan-400/30 rounded-lg backdrop-blur-sm will-change-transform"
          style={{
            left: box.x,
            top: box.y,
            width: box.size,
            height: box.size,
            opacity: box.opacity,
            backgroundColor: `rgba(34, 211, 238, ${box.opacity * 0.1})`,
            boxShadow: `
              0 0 ${box.size * 0.5}px rgba(34, 211, 238, ${box.glowIntensity * 0.3}),
              inset 0 0 ${box.size * 0.3}px rgba(34, 211, 238, ${box.glowIntensity * 0.1})
            `,
            transform: `scale(${0.8 + box.glowIntensity * 0.2})`,
            transition: "transform 0.3s ease-out",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-50" />
    </div>
  )
}
