import { motion } from 'framer-motion'
import AppStoreBadge from './AppStoreBadge'

const socials = [
  {
    label: 'X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.18 8.18 0 004.76 1.52V7.05a4.84 4.84 0 01-1-.36z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-flipside-void overflow-hidden">
      <div className="absolute top-0 left-0 right-0 holo-line" />
      <div className="absolute inset-0 grid-flat opacity-40" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <motion.img
                src="/logo.png"
                alt="FlipSide"
                className="w-10 h-10 rounded-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
              />
              <span className="font-display text-base tracking-[0.2em] text-white">FLIPSIDE</span>
            </div>
            <p className="font-mono text-flipside-text-secondary text-xs tracking-wider">
              Flip The Perspective. Change The Outcome.
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex items-center gap-8">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-mono text-xs tracking-[0.2em] uppercase text-flipside-text-secondary hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gradient-to-r from-flipside-accent to-flipside-hot-pink group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right: App Store + Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <motion.a href="#" whileHover={{ scale: 1.05 }} aria-label="Download on the App Store">
              <AppStoreBadge className="h-10 w-auto" />
            </motion.a>

            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full ghost-btn flex items-center justify-center text-flipside-text-secondary hover:text-flipside-accent transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="chrome-line my-8" />

        {/* Copyright */}
        <p className="text-center font-mono text-flipside-text-secondary text-[11px] tracking-[0.25em] uppercase">
          ✦ {new Date().getFullYear()} FlipSide. All rights reserved. ✦
        </p>
      </div>
    </footer>
  )
}
