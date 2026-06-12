import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from './SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Tap to Listen',
    color: '#00D4FF',
    description:
      'Place your phone between debaters and tap start. FlipSide begins transcribing instantly.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <path d="M12 18v4" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Claims Detected',
    color: '#FF69B4',
    description:
      'Our AI identifies verifiable factual claims in real-time as you debate.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Facts Delivered',
    color: '#00FF88',
    description:
      'Each claim is verified against current sources. Results appear as card overlays with citations.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 px-4 bg-flipside-void overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 holo-line" />
      <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] rounded-full bg-flipside-hot-pink/8 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          kicker="protocol"
          title="Three Steps. Zero Guesswork."
          holoWord="Zero Guesswork."
          isInView={isInView}
        />

        <div className="relative mt-20">
          {/* Connecting holo line - desktop only */}
          <motion.div
            className="hidden lg:block absolute top-12 left-[16.6%] right-[16.6%] h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, #00D4FF, #FF69B4, #00FF88, transparent)',
            }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.5 }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative text-center group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Node: icon in orbiting ring */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  <motion.div
                    className="absolute w-24 h-24 rounded-full border border-dashed"
                    style={{ borderColor: `${step.color}55` }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  />
                  <div
                    className="relative w-24 h-24 rounded-full flex items-center justify-center glass-panel group-hover:scale-110 transition-transform duration-500"
                    style={{ color: step.color, boxShadow: `0 0 30px ${step.color}33` }}
                  >
                    {step.icon}
                  </div>
                  {/* Orbiting dot */}
                  <motion.span
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: step.color,
                      boxShadow: `0 0 10px ${step.color}`,
                      top: '50%',
                      left: '50%',
                      marginTop: -4,
                      marginLeft: -4,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: index * 0.8 }}
                  >
                    <span
                      className="absolute w-2 h-2 rounded-full"
                      style={{ background: step.color, transform: 'translateX(48px)' }}
                    />
                  </motion.span>
                </div>

                <div className="font-mono text-xs tracking-[0.4em] mb-3" style={{ color: step.color }}>
                  STEP_{step.number}
                </div>

                <h3 className="font-display text-base md:text-lg text-white mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-flipside-text-secondary text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
