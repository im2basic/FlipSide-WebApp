import { ReactNode, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface HoloCardProps {
  children: ReactNode
  className?: string
}

/* Mouse-tracking holographic foil card with 3D tilt */
export default function HoloCard({ children, className = '' }: HoloCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const springX = useSpring(mx, { stiffness: 200, damping: 25 })
  const springY = useSpring(my, { stiffness: 200, damping: 25 })

  const rotateX = useTransform(springY, [0, 1], [7, -7])
  const rotateY = useTransform(springX, [0, 1], [-7, 7])
  const glareX = useTransform(springX, [0, 1], ['0%', '100%'])
  const glareY = useTransform(springY, [0, 1], ['0%', '100%'])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  function handleMouseLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative group ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* Holographic glare following the cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([x, y]) =>
              `radial-gradient(circle at ${x} ${y}, rgba(0,212,255,0.16) 0%, rgba(255,105,180,0.10) 30%, transparent 60%)`
          ),
        }}
      />
    </motion.div>
  )
}
