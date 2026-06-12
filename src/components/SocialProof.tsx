import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  {
    target: 10000,
    suffix: '+',
    label: 'Debates Fact-Checked',
    color: '#00D4FF',
  },
  {
    target: 50000,
    suffix: '+',
    label: 'Claims Verified',
    color: '#FF69B4',
  },
  {
    target: 4.8,
    suffix: '',
    label: 'App Store Rating',
    decimals: 1,
    showStar: true,
    color: '#FFD600',
  },
]

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 md:py-28 px-4 bg-flipside-void overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 holo-line" />
      <div className="absolute bottom-0 left-0 right-0 holo-line" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative flex flex-col items-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Glow behind number */}
              <div
                className="absolute top-0 w-40 h-24 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                style={{ background: stat.color }}
              />

              <div className="relative flex items-center gap-2 mb-4">
                <span className="font-display text-4xl md:text-5xl chrome-text">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    duration={2.5}
                  />
                </span>
                {stat.showStar && (
                  <motion.svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#FFD600"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(255,214,0,0.7))' }}
                    animate={{ rotate: [0, 18, -8, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </motion.svg>
                )}
              </div>
              <span
                className="font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase"
                style={{ color: stat.color, textShadow: `0 0 14px ${stat.color}55` }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
