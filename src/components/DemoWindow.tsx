import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Verdict = 'VERIFIED' | 'FALSE' | 'UNCERTAIN'

interface Line {
  speaker: 'A' | 'B'
  text: string
  verdict: Verdict
  source: string
}

const SCRIPT: Line[] = [
  {
    speaker: 'A',
    text: 'The Great Wall of China is visible from space with the naked eye.',
    verdict: 'FALSE',
    source: 'NASA',
  },
  {
    speaker: 'B',
    text: 'Octopuses have three hearts and blue blood.',
    verdict: 'VERIFIED',
    source: 'Smithsonian',
  },
  {
    speaker: 'A',
    text: 'Honey found in ancient tombs is still perfectly edible today.',
    verdict: 'VERIFIED',
    source: 'Nat Geo',
  },
  {
    speaker: 'B',
    text: 'Humans only use ten percent of their brains.',
    verdict: 'FALSE',
    source: 'Sci. American',
  },
  {
    speaker: 'A',
    text: 'Lightning never strikes the same place twice.',
    verdict: 'FALSE',
    source: 'NOAA',
  },
  {
    speaker: 'B',
    text: 'Bananas are botanically classified as berries.',
    verdict: 'VERIFIED',
    source: 'Britannica',
  },
]

const VERDICT_STYLE: Record<Verdict, { color: string; glow: string; label: string }> = {
  VERIFIED: { color: '#00FF88', glow: 'rgba(0,255,136,0.5)', label: '✓ VERIFIED' },
  FALSE: { color: '#FF2D55', glow: 'rgba(255,45,85,0.5)', label: '✕ FALSE' },
  UNCERTAIN: { color: '#FFD600', glow: 'rgba(255,214,0,0.5)', label: '? UNCERTAIN' },
}

interface FeedItem extends Line {
  id: number
  checked: boolean
}

export default function DemoWindow() {
  const [feed, setFeed] = useState<FeedItem[]>([])

  useEffect(() => {
    let idx = 0
    let counter = 0
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []

    function pushNext() {
      if (cancelled) return
      const line = SCRIPT[idx % SCRIPT.length]
      const id = counter++
      idx++

      setFeed((prev) => [...prev.slice(-2), { ...line, id, checked: false }])

      timers.push(
        setTimeout(() => {
          if (cancelled) return
          setFeed((prev) =>
            prev.map((item) => (item.id === id ? { ...item, checked: true } : item))
          )
        }, 1400)
      )

      timers.push(setTimeout(pushNext, 3400))
    }

    timers.push(setTimeout(pushNext, 800))

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Glow behind window */}
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-flipside-accent/20 via-flipside-purple/20 to-flipside-hot-pink/20 blur-2xl" />

      <div className="relative border-holo rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
        {/* Title bar */}
        <div className="y2k-titlebar flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-flipside-false shadow-[0_0_6px_rgba(255,45,85,0.8)]" />
            <span className="w-3 h-3 rounded-full bg-flipside-uncertain shadow-[0_0_6px_rgba(255,214,0,0.8)]" />
            <span className="w-3 h-3 rounded-full bg-flipside-verified shadow-[0_0_6px_rgba(0,255,136,0.8)]" />
          </div>
          <span className="font-mono text-[11px] tracking-[0.25em] text-flipside-chrome uppercase">
            flipside_live.exe
          </span>
          <div className="flex items-center gap-1.5">
            <motion.span
              className="w-2 h-2 rounded-full bg-flipside-false"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <span className="font-mono text-[10px] text-flipside-false tracking-widest">REC</span>
          </div>
        </div>

        {/* Feed */}
        <div className="relative bg-flipside-void/90 backdrop-blur-md px-4 md:px-5 py-5 h-[340px] flex flex-col justify-end gap-3 overflow-hidden">
          {/* Faint scanlines inside the window */}
          <div className="scanlines absolute inset-0" />

          <AnimatePresence mode="popLayout">
            {feed.map((item) => {
              const isA = item.speaker === 'A'
              const v = VERDICT_STYLE[item.verdict]
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  className={`relative max-w-[88%] ${isA ? 'self-start' : 'self-end'}`}
                >
                  <div
                    className={`rounded-xl px-4 py-3 border ${
                      isA
                        ? 'bg-flipside-speaker-a/10 border-flipside-speaker-a/30'
                        : 'bg-flipside-speaker-b/10 border-flipside-speaker-b/30'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-mono text-[10px] tracking-widest uppercase"
                        style={{ color: isA ? '#FF2D55' : '#3B82F6' }}
                      >
                        Speaker {item.speaker}
                      </span>
                      {!item.checked && (
                        <motion.span
                          className="font-mono text-[10px] text-flipside-text-secondary"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          checking…
                        </motion.span>
                      )}
                    </div>
                    <p className="text-sm text-white/90 leading-snug">{item.text}</p>
                  </div>

                  {/* Verdict stamp */}
                  <AnimatePresence>
                    {item.checked && (
                      <motion.div
                        initial={{ opacity: 0, scale: 1.6, rotate: -8 }}
                        animate={{ opacity: 1, scale: 1, rotate: -3 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                        className={`absolute -top-2.5 ${isA ? '-right-2' : '-left-2'} px-2.5 py-1 rounded-md border font-mono text-[10px] font-bold tracking-widest backdrop-blur-sm`}
                        style={{
                          color: v.color,
                          borderColor: v.color,
                          background: 'rgba(3,3,9,0.85)',
                          boxShadow: `0 0 14px ${v.glow}`,
                        }}
                      >
                        {v.label}
                        <span className="ml-1.5 font-normal opacity-60">[{item.source}]</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Listening indicator */}
          <div className="flex items-center gap-2 pt-1">
            <div className="flex items-end gap-[3px] h-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="w-[3px] rounded-full bg-flipside-accent"
                  animate={{ height: ['30%', '100%', '45%', '80%', '30%'] }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    delay: i * 0.12,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-flipside-accent/80 uppercase">
              Listening
            </span>
            <span className="font-mono text-[10px] text-flipside-accent animate-blink">▌</span>
          </div>
        </div>
      </div>
    </div>
  )
}
