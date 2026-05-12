import { motion } from 'framer-motion'
import SparkleParticles from './SparkleParticles'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-flipside-bg">
      <SparkleParticles />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="FlipSide"
          className="w-72 md:w-96 lg:w-[500px] mb-10"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Tagline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-shimmer"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Flip The Perspective.
          <br />
          Change The Outcome.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-flipside-text-secondary mb-10 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Real-time AI fact-checking for live debates
        </motion.p>

        {/* App Store Badge */}
        <motion.a
          href="#"
          className="inline-block mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            viewBox="0 0 120 40"
            className="h-14 w-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="120" height="40" rx="6" fill="#000" stroke="#A6A6A6" strokeWidth="0.5" />
            <g fill="#fff">
              <text x="42" y="14" fontSize="5" fontFamily="Inter, sans-serif" fontWeight="400">
                Download on the
              </text>
              <text x="42" y="27" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700">
                App Store
              </text>
              <path
                d="M24.5 12.2c.5-.6.8-1.4.7-2.2-.7 0-1.6.5-2.1 1.1-.4.5-.8 1.4-.7 2.2.8.1 1.6-.4 2.1-1.1zm.7 1.2c-1.2-.1-2.2.7-2.7.7s-1.4-.6-2.4-.6c-1.2 0-2.3.7-2.9 1.8-1.3 2.2-.3 5.4.9 7.2.6.9 1.3 1.8 2.3 1.8.9 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1 0 1.6-.9 2.2-1.8.7-1 1-2 1-2s-1.9-.8-1.9-3c0-1.9 1.5-2.8 1.6-2.8-.9-1.3-2.3-1.4-2.9-1.3z"
                transform="translate(6, 5)"
              />
            </g>
          </svg>
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs text-flipside-text-secondary tracking-widest uppercase">Scroll</span>
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-flipside-chrome"
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
      </motion.div>

      {/* Chrome divider line at very bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 chrome-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </section>
  )
}
