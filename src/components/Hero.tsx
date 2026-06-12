import { motion } from 'framer-motion'
import SparkleParticles from './SparkleParticles'
import DemoWindow from './DemoWindow'
import AppStoreBadge from './AppStoreBadge'

function ChromeOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        background:
          'radial-gradient(circle at 32% 28%, #FFFFFF 0%, #C8D2E8 18%, #6B7694 45%, #2A3354 75%, #0F1428 100%)',
        boxShadow:
          'inset -8px -10px 24px rgba(0,0,0,0.55), 0 0 40px rgba(0,212,255,0.18), 0 14px 40px rgba(0,0,0,0.5)',
      }}
      animate={{ y: [0, -22, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}

const headlineWord = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-4 pt-28 pb-20 overflow-hidden bg-flipside-bg"
    >
      {/* Atmosphere */}
      <div className="grid-floor" />
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-flipside-speaker-b/15 blur-[160px]" />
      <div className="absolute -top-20 -right-40 w-[560px] h-[560px] rounded-full bg-flipside-speaker-a/12 blur-[160px]" />
      <SparkleParticles count={26} />
      <div className="scanlines absolute inset-0 z-20" />
      <div className="noise absolute inset-0 z-20" />

      {/* Floating chrome orbs */}
      <ChromeOrb className="w-20 h-20 top-[18%] left-[6%] hidden lg:block" />
      <ChromeOrb className="w-10 h-10 top-[64%] left-[14%] hidden lg:block" delay={1.4} />
      <ChromeOrb className="w-14 h-14 top-[24%] right-[8%] hidden xl:block" delay={0.7} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.div
            className="inline-flex items-center gap-2 font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase text-flipside-accent mb-7 px-4 py-1.5 rounded-full border border-flipside-accent/30 bg-flipside-accent/5 text-glow-cyan"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ✦ real-time ai fact-checking ✦
          </motion.div>

          <motion.h1
            className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-[1.15] mb-7"
            variants={headlineContainer}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={headlineWord} className="block chrome-text">
              FLIP THE
            </motion.span>
            <motion.span variants={headlineWord} className="block chrome-text">
              PERSPECTIVE.
            </motion.span>
            <motion.span variants={headlineWord} className="block holo-text mt-2">
              CHANGE THE
            </motion.span>
            <motion.span variants={headlineWord} className="block holo-text">
              OUTCOME.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-flipside-text-secondary mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            FlipSide listens to live debates, detects claims as they're spoken,
            and delivers AI-verified verdicts with sources — in seconds.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download on the App Store"
            >
              <AppStoreBadge className="h-14 w-auto" />
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="ghost-btn rounded-full px-7 py-4 font-mono text-xs tracking-[0.25em] uppercase text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See it work ↓
            </motion.a>
          </motion.div>
        </div>

        {/* Right: live demo window */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <DemoWindow />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="font-mono text-[10px] text-flipside-text-secondary tracking-[0.35em] uppercase">
          Scroll
        </span>
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          className="text-flipside-accent"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M10 4L10 16M10 16L4 10M10 16L16 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>

      {/* Holo divider at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 holo-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </section>
  )
}
