import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GradientText from './GradientText'

const steps = [
  {
    number: '01',
    title: 'Tap to Listen',
    description:
      'Place your phone between debaters and tap start. FlipSide begins transcribing instantly.',
  },
  {
    number: '02',
    title: 'Claims Detected',
    description:
      'Our AI identifies verifiable factual claims in real-time as you debate.',
  },
  {
    number: '03',
    title: 'Facts Delivered',
    description:
      'Each claim is verified against current sources. Results appear as card overlays with citations.',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 px-4 bg-flipside-surface" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <GradientText
            as="h2"
            variant="duality"
            className="text-3xl md:text-5xl font-black"
          >
            Three Steps. Zero Guesswork.
          </GradientText>
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop only */}
          <motion.div
            className="hidden lg:block absolute top-20 left-[16.6%] right-[16.6%] h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, #808080, #C0C0C0, #E8E8E8, #C0C0C0, #808080, transparent)',
            }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative text-center group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.2,
                }}
              >
                {/* Step number */}
                <div className="relative inline-block mb-6">
                  <span className="text-7xl md:text-8xl font-black gradient-duality opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {step.number}
                  </span>
                  {/* Glow behind number on hover */}
                  <div className="absolute inset-0 bg-flipside-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
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
