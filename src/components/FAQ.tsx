import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import GradientText from './GradientText'

const faqs = [
  {
    question: 'How does FlipSide fact-check in real-time?',
    answer:
      'FlipSide uses a three-stage AI pipeline. First, live audio is transcribed using Deepgram with speaker diarization. Second, our claim detection model (powered by Groq) identifies verifiable factual statements. Third, each claim is checked against current web sources via Gemini, returning a verdict with citations -- all within seconds.',
  },
  {
    question: 'Do I need an internet connection?',
    answer:
      'Yes, FlipSide requires an active internet connection to perform real-time transcription, AI claim detection, and web-based fact verification. The app is optimized for standard mobile data speeds.',
  },
  {
    question: 'How accurate is the fact-checking?',
    answer:
      'FlipSide verifies claims against current web sources and returns verdicts as Verified, False, or Uncertain. Each result includes source citations so you can review the evidence yourself. Accuracy varies by topic category, with structured domains like science and history performing best.',
  },
  {
    question: 'Can I use FlipSide for podcasts?',
    answer:
      'Our Creator tier (coming soon) is designed specifically for podcasters and content creators. It supports sessions up to 3 hours, up to 6 speakers, streaming overlays for live broadcasts, custom branding, and episode analytics.',
  },
  {
    question: 'Is my audio data stored?',
    answer:
      'No. Your audio is processed in real-time and is not stored on our servers. Transcripts and fact-check results are saved to your account for debate history, but raw audio data is discarded immediately after processing.',
  },
  {
    question: 'What categories are available?',
    answer:
      'FlipSide supports 10 debate categories: Politics, Science, Technology, Health, Economics, History, Sports, Entertainment, Environment, and Education. Each category uses optimized prompts and source weighting for maximum accuracy.',
  },
]

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="border-chrome rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-flipside-surface-secondary/50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-white font-semibold text-sm md:text-base pr-4">
          {question}
        </span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="shrink-0 text-flipside-chrome"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-flipside-text-secondary text-sm md:text-base leading-relaxed border-t border-flipside-surface-secondary/50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 px-4 bg-flipside-bg" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <GradientText
            as="h2"
            variant="duality"
            className="text-3xl md:text-5xl font-black"
          >
            Frequently Asked Questions
          </GradientText>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
