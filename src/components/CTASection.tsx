import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SparkleParticles from './SparkleParticles'
import AppStoreBadge from './AppStoreBadge'

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-28 md:py-40 px-4 overflow-hidden" ref={ref}>
      {/* Atmosphere */}
      <div className="absolute inset-0 grid-flat" />
      <div className="absolute inset-0 bg-gradient-to-b from-flipside-bg via-transparent to-flipside-bg" />
      <SparkleParticles count={16} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-flipside-purple/10 blur-[140px]" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.35em] uppercase text-flipside-lime mb-7 px-4 py-1.5 rounded-full border border-flipside-lime/30 bg-flipside-lime/5"
          animate={{ boxShadow: ['0 0 0px rgba(200,255,0,0)', '0 0 24px rgba(200,255,0,0.25)', '0 0 0px rgba(200,255,0,0)'] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✦ system online ✦
        </motion.div>

        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-6">
          <span className="chrome-text">Ready to settle it</span>
          <br />
          <span className="holo-text">once and for all?</span>
        </h2>

        <p className="text-flipside-text-secondary text-base md:text-lg mb-10 max-w-xl mx-auto">
          Download FlipSide and let the facts referee your next debate.
          Free to try — no credit card, no excuses.
        </p>

        <motion.a
          href="#"
          className="inline-block"
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Download on the App Store"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-flipside-accent via-flipside-purple to-flipside-hot-pink opacity-50 blur-lg animate-holo" style={{ backgroundSize: '300% 100%' }} />
            <AppStoreBadge className="relative h-16 w-auto" />
          </div>
        </motion.a>
      </motion.div>
    </section>
  )
}
