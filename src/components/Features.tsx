import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import HoloCard from './HoloCard'
import SectionHeading from './SectionHeading'

const features = [
  {
    title: 'Real-Time Fact-Checking',
    description: 'AI verifies claims against live web sources in seconds',
    color: '#00D4FF',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3L4 9v8c0 7.2 5.1 13.3 12 15 6.9-1.7 12-7.8 12-15V9L16 3z" />
        <path d="M11 16l3.5 3.5L21 13" />
      </svg>
    ),
  },
  {
    title: 'Live Transcription',
    description: 'Both speakers transcribed with automatic speaker identification',
    color: '#FF69B4',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
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
    color: '#C8FF00',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3L19 12H28L21 18L23.5 27L16 21.5L8.5 27L11 18L4 12H13L16 3Z" />
      </svg>
    ),
  },
  {
    title: '10 Categories',
    description: 'Politics, Science, Sports, History, and more — each optimized for accuracy',
    color: '#7B61FF',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    color: '#FFD600',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v8l5 3" />
      </svg>
    ),
  },
  {
    title: 'Share Results',
    description: 'Export summaries and highlight clips to social media',
    color: '#00FF88',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <section id="features" className="relative py-24 md:py-32 px-4 bg-flipside-bg overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-flat opacity-60" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-flipside-accent/5 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          kicker="capabilities"
          title="Why FlipSide?"
          holoWord="FlipSide"
          isInView={isInView}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <HoloCard className="h-full">
                <div className="border-holo rounded-2xl p-6 md:p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{
                        color: feature.color,
                        borderColor: `${feature.color}44`,
                        background: `${feature.color}0D`,
                        boxShadow: `0 0 18px ${feature.color}22`,
                      }}
                    >
                      {feature.icon}
                    </div>
                    <span className="font-mono text-[11px] tracking-widest text-white/25">
                      {String(index + 1).padStart(2, '0')}//
                    </span>
                  </div>
                  <h3 className="font-display text-sm md:text-base text-white mb-2.5 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-flipside-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </HoloCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
