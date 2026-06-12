import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'

const faqs = [
  {
    question: 'How does FlipSide fact-check in real-time?',
    answer:
      'FlipSide uses a three-stage AI pipeline. First, live audio is transcribed using Deepgram with speaker diarization. Second, our claim detection model (powered by Groq) identifies verifiable factual statements. Third, each claim is checked against current web sources via Gemini, returning a verdict with citations — all within seconds.',
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
      className={`rounded-xl overflow-hidden transition-all duration-500 ${
        isOpen ? 'border-holo' : 'border-chrome'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left hover:bg-white/[0.03] transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-4">
          <span
            className={`font-mono text-[11px] tracking-widest shrink-0 transition-colors duration-300 ${
              isOpen ? 'text-flipside-accent' : 'text-white/30'
            }`}
          >
            Q{String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-white font-semibold text-sm md:text-base">{question}</span>
        </span>
        <motion.span
          className={`relative shrink-0 w-6 h-6 flex items-center justify-center transition-colors duration-300 ${
            isOpen ? 'text-flipside-hot-pink' : 'text-flipside-chrome'
          }`}
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="absolute w-4 h-0.5 bg-current rounded-full" />
          <span className="absolute w-0.5 h-4 bg-current rounded-full" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 pl-[60px] md:pl-[68px] text-flipside-text-secondary text-sm md:text-base leading-relaxed">
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
    <section id="faq" className="relative py-24 md:py-32 px-4 bg-flipside-bg overflow-hidden" ref={ref}>
      <div className="absolute -top-20 right-1/4 w-[420px] h-[420px] rounded-full bg-flipside-accent/6 blur-[140px]" />

      <div className="relative max-w-3xl mx-auto">
        <SectionHeading
          kicker="transmission log"
          title="Frequently Asked Questions"
          holoWord="Questions"
          isInView={isInView}
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
