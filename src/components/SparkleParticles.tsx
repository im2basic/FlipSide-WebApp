import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
  isStar: boolean
}

const COLORS = ['#00D4FF', '#FF69B4', '#7B61FF', '#C8FF00', '#E8E8E8']

export default function SparkleParticles({ count = 22 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generated: Sparkle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 4,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      isStar: Math.random() > 0.4,
    }))
    setSparkles(generated)
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) =>
        sparkle.isStar ? (
          <motion.svg
            key={sparkle.id}
            viewBox="0 0 24 24"
            className="absolute"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: sparkle.size,
              height: sparkle.size,
              filter: `drop-shadow(0 0 ${sparkle.size / 2}px ${sparkle.color})`,
            }}
            animate={{
              opacity: [0.1, 0.9, 0.1],
              scale: [0.6, 1.2, 0.6],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <path
              d="M12 0C12.9 7.2 16.8 11.1 24 12C16.8 12.9 12.9 16.8 12 24C11.1 16.8 7.2 12.9 0 12C7.2 11.1 11.1 7.2 12 0Z"
              fill={sparkle.color}
            />
          </motion.svg>
        ) : (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: sparkle.size / 2.5,
              height: sparkle.size / 2.5,
              background: `radial-gradient(circle, ${sparkle.color}, transparent)`,
              boxShadow: `0 0 ${sparkle.size}px ${sparkle.color}99`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [0.8, 1.4, 0.8],
              y: [0, -34, 0],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )
      )}
    </div>
  )
}
