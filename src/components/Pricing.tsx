import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import GradientText from './GradientText'

interface PlanFeature {
  text: string
}

interface Plan {
  name: string
  badge?: string
  badgeVariant?: 'cyber' | 'duality'
  priceMonthly: string
  priceYearly: string
  priceSuffix?: string
  yearlyNote?: string
  subtitle?: string
  features: PlanFeature[]
  cta: string
  ctaVariant: 'outline-chrome' | 'filled-cyber' | 'outline-duality'
  highlighted?: boolean
  comingSoon?: boolean
}

const plans: Plan[] = [
  {
    name: 'Free',
    priceMonthly: '$0',
    priceYearly: '$0',
    subtitle: 'Try the experience',
    features: [
      { text: '2 free debate trials' },
      { text: 'Watch unlimited debates' },
      { text: 'Vote on debates' },
      { text: 'Basic profile' },
    ],
    cta: 'Get Started',
    ctaVariant: 'outline-chrome',
  },
  {
    name: 'Premium',
    badge: 'Most Popular',
    badgeVariant: 'cyber',
    priceMonthly: '$14.99',
    priceYearly: '$99.99',
    priceSuffix: '/mo',
    yearlyNote: 'save 44%',
    features: [
      { text: 'Unlimited debates' },
      { text: 'Real-time AI fact-checking' },
      { text: 'Full debate history' },
      { text: 'Debate stats & streaks' },
      { text: 'Export & share' },
      { text: 'Priority processing' },
    ],
    cta: 'Start Free Trial',
    ctaVariant: 'filled-cyber',
    highlighted: true,
  },
  {
    name: 'Creator',
    badge: 'Coming Soon',
    badgeVariant: 'duality',
    priceMonthly: '$29.99',
    priceYearly: '$249.99',
    priceSuffix: '/mo',
    subtitle: 'For podcasters & creators',
    features: [
      { text: 'Everything in Premium' },
      { text: '3+ hour sessions' },
      { text: '6 speaker support' },
      { text: 'Streaming overlay' },
      { text: 'Custom branding' },
      { text: 'Episode analytics' },
    ],
    cta: 'Join Waitlist',
    ctaVariant: 'outline-duality',
    comingSoon: true,
  },
]

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-24 md:py-32 px-4 bg-flipside-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <GradientText
            as="h2"
            variant="duality"
            className="text-3xl md:text-5xl font-black mb-4"
          >
            Choose Your Plan
          </GradientText>
        </motion.div>

        {/* Monthly/Annual Toggle */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span
            className={`text-sm font-medium transition-colors ${
              !isAnnual ? 'text-white' : 'text-flipside-text-secondary'
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 rounded-full transition-colors duration-300"
            style={{
              background: isAnnual
                ? 'linear-gradient(135deg, #00D4FF, #7B61FF)'
                : '#1A1F3D',
            }}
            aria-label="Toggle annual pricing"
          >
            <motion.div
              className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-lg"
              animate={{ left: isAnnual ? '30px' : '2px' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              isAnnual ? 'text-white' : 'text-flipside-text-secondary'
            }`}
          >
            Annual
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col ${
                plan.highlighted
                  ? 'border-chrome card-glow-premium lg:scale-105 lg:-my-4 lg:py-12'
                  : 'border-chrome'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.15,
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ${
                    plan.badgeVariant === 'cyber'
                      ? 'bg-cyber-gradient'
                      : 'bg-duality-gradient'
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                {plan.subtitle && (
                  <p className="text-flipside-text-secondary text-sm">
                    {plan.subtitle}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black text-white">
                    {isAnnual ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  {plan.priceSuffix && (
                    <span className="text-flipside-text-secondary text-sm">
                      {isAnnual ? '/yr' : plan.priceSuffix}
                    </span>
                  )}
                </div>
                {plan.yearlyNote && isAnnual && (
                  <p className="text-flipside-verified text-xs mt-1 font-medium">
                    {plan.yearlyNote}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-start gap-3 text-sm text-flipside-text-secondary"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 shrink-0"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 5"
                        stroke={plan.highlighted ? '#00D4FF' : '#C0C0C0'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
                  plan.ctaVariant === 'filled-cyber'
                    ? 'bg-cyber-gradient text-white shadow-lg shadow-flipside-accent/20 hover:shadow-flipside-accent/40'
                    : plan.ctaVariant === 'outline-duality'
                    ? 'border border-transparent bg-clip-padding text-white hover:bg-flipside-surface-secondary'
                    : 'border border-flipside-chrome/40 text-flipside-chrome hover:bg-flipside-surface-secondary hover:text-white'
                }`}
                style={
                  plan.ctaVariant === 'outline-duality'
                    ? {
                        borderImage: 'linear-gradient(135deg, #3B82F6, #FF2D55) 1',
                      }
                    : undefined
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
