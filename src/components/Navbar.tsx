import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? 'mt-3 max-w-5xl rounded-2xl glass-panel shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
            : 'mt-0 max-w-full bg-transparent border border-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-5 md:px-8 h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="FlipSide"
              className="w-8 h-8 rounded-lg group-hover:rotate-[360deg] transition-transform duration-700"
            />
            <span className="font-display text-sm tracking-[0.2em] text-white">
              FLIPSIDE
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-mono text-xs tracking-widest uppercase text-flipside-text-secondary hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gradient-to-r from-flipside-accent to-flipside-hot-pink group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#pricing"
              className="hidden sm:inline-flex aqua-btn rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get the App</span>
            </motion.a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-6 h-0.5 bg-white"
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 4 : 0 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white"
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -4 : 0 }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-1 px-5 pb-5 pt-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="font-mono text-sm tracking-widest uppercase text-flipside-text-secondary hover:text-flipside-accent py-2.5 border-b border-white/5 transition-colors"
                    onClick={() => setMenuOpen(false)}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
