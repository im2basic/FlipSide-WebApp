import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function SparkleParticles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generated: Sparkle[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }))
    setSparkles(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
            background: 'radial-gradient(circle, rgba(192, 192, 192, 0.9), rgba(0, 212, 255, 0.4))',
            boxShadow: `0 0 ${sparkle.size * 2}px rgba(0, 212, 255, 0.3)`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.8, 1.3, 0.8],
            y: [0, -30, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
