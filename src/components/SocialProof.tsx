import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  {
    target: 10000,
    suffix: '+',
    label: 'Debates Fact-Checked',
  },
  {
    target: 50000,
    suffix: '+',
    label: 'Claims Verified',
  },
  {
    target: 4.8,
    suffix: '',
    label: 'App Store Rating',
    decimals: 1,
    showStar: true,
  },
]

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 px-4 bg-flipside-surface" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-5xl md:text-6xl font-black gradient-duality">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    duration={2.5}
                  />
                </span>
                {stat.showStar && (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#FFD600"
                    className="mt-1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
              </div>
              <span className="gradient-chrome text-sm md:text-base font-medium tracking-wide uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
