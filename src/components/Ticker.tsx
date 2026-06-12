const items = [
  { text: 'CLAIM VERIFIED', color: '#00FF88' },
  { text: 'REAL-TIME AI', color: '#00D4FF' },
  { text: 'CLAIM FALSE', color: '#FF2D55' },
  { text: 'SOURCES CITED', color: '#C8FF00' },
  { text: 'LIVE TRANSCRIPTION', color: '#7B61FF' },
  { text: 'SPEAKER DETECTED', color: '#FF69B4' },
  { text: 'FACT-CHECK COMPLETE', color: '#00FF88' },
  { text: 'TRUTH WINS', color: '#FFD600' },
]

function Star({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color} className="shrink-0">
      <path d="M12 0C12.9 7.2 16.8 11.1 24 12C16.8 12.9 12.9 16.8 12 24C11.1 16.8 7.2 12.9 0 12C7.2 11.1 11.1 7.2 12 0Z" />
    </svg>
  )
}

function Row() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6 shrink-0">
          <Star color={item.color} />
          <span
            className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase whitespace-nowrap"
            style={{ color: item.color, textShadow: `0 0 12px ${item.color}66` }}
          >
            {item.text}
          </span>
        </span>
      ))}
    </>
  )
}

export default function Ticker({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-flipside-void/80 py-3.5">
      <div
        className={`flex w-max items-center gap-6 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        <div className="flex items-center gap-6 shrink-0">
          <Row />
        </div>
        <div className="flex items-center gap-6 shrink-0" aria-hidden="true">
          <Row />
        </div>
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-flipside-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-flipside-bg to-transparent" />
    </div>
  )
}
