import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GradientText from './GradientText'

const features = [
  {
    title: 'Real-Time Fact-Checking',
    description: 'AI verifies claims against live web sources in seconds',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3L4 9v8c0 7.2 5.1 13.3 12 15 6.9-1.7 12-7.8 12-15V9L16 3z" />
        <path d="M11 16l3.5 3.5L21 13" />
      </svg>
    ),
  },
  {
    title: 'Live Transcription',
    description: 'Both speakers transcribed with automatic speaker identification',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 16h3" />
        <path d="M9 11v10" />
        <path d="M13 8v16" />
        <path d="M17 12v8" />
        <path d="M21 6v20" />
        <path d="M25 10v12" />
        <path d="M29 14v4" />
      </svg>
    ),
  },
  {
    title: 'Smart Caching',
    description: 'Frequently checked facts load instantly from our knowledge base',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3L19 12H28L21 18L23.5 27L16 21.5L8.5 27L11 18L4 12H13L16 3Z" />
      </svg>
    ),
  },
  {
    title: '10 Categories',
    description: 'Politics, Science, Sports, History, and more -- each optimized for accuracy',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="10" height="10" rx="2" />
        <rect x="18" y="4" width="10" height="10" rx="2" />
        <rect x="4" y="18" width="10" height="10" rx="2" />
        <rect x="18" y="18" width="10" height="10" rx="2" />
      </svg>
    ),
  },
  {
    title: 'Debate History',
    description: 'Review past debates with full transcripts and fact-check results',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v8l5 3" />
      </svg>
    ),
  },
  {
    title: 'Share Results',
    description: 'Export summaries and highlight clips to social media',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="22" cy="8" r="4" />
        <circle cx="10" cy="16" r="4" />
        <circle cx="22" cy="24" r="4" />
        <path d="M13.5 17.8L18.5 22.2" />
        <path d="M18.5 9.8L13.5 14.2" />
      </svg>
    ),
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 px-4 bg-flipside-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <GradientText
            as="h2"
            variant="duality"
            className="text-3xl md:text-5xl font-black mb-4"
          >
            Why FlipSide?
          </GradientText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="border-chrome rounded-xl p-6 md:p-8 transition-all duration-300 card-glow group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <div className="text-flipside-accent mb-4 group-hover:text-flipside-purple transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-flipside-text-secondary text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
