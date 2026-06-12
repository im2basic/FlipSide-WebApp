import { motion } from 'framer-motion'

interface SectionHeadingProps {
  kicker: string
  title: string
  holoWord?: string
  isInView: boolean
}

/* Mono kicker + display heading; `holoWord` gets the holographic treatment */
export default function SectionHeading({ kicker, title, holoWord, isInView }: SectionHeadingProps) {
  const parts = holoWord ? title.split(holoWord) : [title]

  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-center gap-3 mb-5">
        <span className="holo-line w-10" />
        <span className="font-mono text-[11px] md:text-xs tracking-[0.35em] uppercase text-flipside-accent">
          {kicker}
        </span>
        <span className="holo-line w-10" />
      </div>
      <h2 className="font-display text-2xl md:text-4xl lg:text-5xl leading-tight text-balance">
        {holoWord ? (
          <>
            <span className="chrome-text">{parts[0]}</span>
            <span className="holo-text">{holoWord}</span>
            <span className="chrome-text">{parts[1]}</span>
          </>
        ) : (
          <span className="chrome-text">{title}</span>
        )}
      </h2>
    </motion.div>
  )
}
