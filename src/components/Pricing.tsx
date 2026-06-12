import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from './SectionHeading'

interface Plan {
  name: string
  badge?: string
  badgeColor?: string
  priceMonthly: string
  priceYearly: string
  priceSuffix?: string
  yearlyNote?: string
  subtitle?: string
  features: string[]
  cta: string
  ctaVariant: 'ghost' | 'aqua' | 'pink'
  highlighted?: boolean
  accent: string
}

const plans: Plan[] = [
  {
    name: 'Free',
    priceMonthly: '$0',
    priceYearly: '$0',
    subtitle: 'Try the experience',
    accent: '#C0C0C0',
    features: [
      '2 free debate trials',
      'Watch unlimited debates',
      'Vote on debates',
      'Basic profile',
    ],
    cta: 'Get Started',
    ctaVariant: 'ghost',
  },
  {
    name: 'Premium',
    badge: '★ Most Popular',
    badgeColor: '#00D4FF',
    priceMonthly: '$14.99',
    priceYearly: '$99.99',
    priceSuffix: '/mo',
    yearlyNote: 'save 44%',
    accent: '#00D4FF',
    features: [
      'Unlimited debates',
      'Real-time AI fact-checking',
      'Full debate history',
      'Debate stats & streaks',
      'Export & share',
      'Priority processing',
    ],
    cta: 'Start Free Trial',
    ctaVariant: 'aqua',
    highlighted: true,
  },
  {
    name: 'Creator',
    badge: '✦ Coming Soon',
    badgeColor: '#FF69B4',
    priceMonthly: '$29.99',
    priceYearly: '$249.99',
    priceSuffix: '/mo',
    subtitle: 'For podcasters & creators',
    accent: '#FF69B4',
    features: [
      'Everything in Premium',
      '3+ hour sessions',
      '6 speaker support',
      'Streaming overlay',
      'Custom branding',
      'Episode analytics',
    ],
    cta: 'Join Waitlist',
    ctaVariant: 'pink',
  },
]

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="relative py-24 md:py-32 px-4 bg-flipside-bg overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-flat opacity-50" />
      <div className="absolute top-0 left-0 right-0 holo-line" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-flipside-purple/8 blur-[150px]" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          kicker="access levels"
          title="Choose Your Plan"
          holoWord="Your Plan"
          isInView={isInView}
        />

        {/* Monthly/Annual Toggle */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-14 -mt-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span
            className={`font-mono text-xs tracking-[0.25em] uppercase transition-colors ${
              !isAnnual ? 'text-white' : 'text-flipside-text-secondary'
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-16 h-8 rounded-full transition-all duration-300 border border-white/15"
            style={{
              background: isAnnual
                ? 'linear-gradient(135deg, #00D4FF, #7B61FF, #FF69B4)'
                : '#1A1F3D',
              boxShadow: isAnnual ? '0 0 20px rgba(0,212,255,0.4)' : 'none',
            }}
            aria-label="Toggle annual pricing"
          >
            <motion.div
              className="absolute top-0.5 w-7 h-7 rounded-full bg-white shadow-lg"
              animate={{ left: isAnnual ? '34px' : '2px' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span
            className={`font-mono text-xs tracking-[0.25em] uppercase transition-colors ${
              isAnnual ? 'text-white' : 'text-flipside-text-secondary'
            }`}
          >
            Annual
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-5 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col transition-transform duration-500 hover:-translate-y-2 ${
                plan.highlighted
                  ? 'border-holo card-glow-premium lg:scale-105'
                  : 'border-chrome'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-mono text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap border backdrop-blur-sm"
                  style={{
                    color: plan.badgeColor,
                    borderColor: `${plan.badgeColor}66`,
                    background: 'rgba(3,3,9,0.9)',
                    boxShadow: `0 0 18px ${plan.badgeColor}44`,
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="font-display text-lg text-white mb-2 tracking-wider"
                  style={{ textShadow: `0 0 24px ${plan.accent}55` }}
                >
                  {plan.name}
                </h3>
                {plan.subtitle && (
                  <p className="text-flipside-text-secondary text-sm">{plan.subtitle}</p>
                )}
              </div>

              {/* Price */}
              <div className="mb-7">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-3xl md:text-4xl chrome-text">
                    {isAnnual ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  {plan.priceSuffix && (
                    <span className="font-mono text-flipside-text-secondary text-xs">
                      {isAnnual ? '/yr' : plan.priceSuffix}
                    </span>
                  )}
                </div>
                {plan.yearlyNote && isAnnual && (
                  <p className="font-mono text-flipside-verified text-xs mt-2 tracking-widest uppercase">
                    ✦ {plan.yearlyNote}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3.5 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-flipside-text-secondary"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={plan.accent}
                      className="mt-0.5 shrink-0"
                      style={{ filter: `drop-shadow(0 0 4px ${plan.accent}88)` }}
                    >
                      <path d="M12 0C12.9 7.2 16.8 11.1 24 12C16.8 12.9 12.9 16.8 12 24C11.1 16.8 7.2 12.9 0 12C7.2 11.1 11.1 7.2 12 0Z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-3.5 px-6 rounded-full font-bold text-xs font-mono tracking-[0.2em] uppercase text-white ${
                  plan.ctaVariant === 'aqua'
                    ? 'aqua-btn'
                    : plan.ctaVariant === 'pink'
                    ? 'gel-btn-pink'
                    : 'ghost-btn'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">{plan.cta}</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
