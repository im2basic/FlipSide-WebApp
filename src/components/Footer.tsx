export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-flipside-surface border-t border-flipside-surface-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="FlipSide"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-bold text-white">FlipSide</span>
            </div>
            <p className="text-flipside-text-secondary text-sm">
              Flip The Perspective. Change The Outcome.
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-flipside-text-secondary text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-flipside-text-secondary text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>

          {/* Right: App Store + Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* App Store Badge (small) */}
            <a href="#" className="inline-block">
              <svg
                viewBox="0 0 120 40"
                className="h-10 w-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="120"
                  height="40"
                  rx="6"
                  fill="#000"
                  stroke="#A6A6A6"
                  strokeWidth="0.5"
                />
                <g fill="#fff">
                  <text
                    x="42"
                    y="14"
                    fontSize="5"
                    fontFamily="Inter, sans-serif"
                    fontWeight="400"
                  >
                    Download on the
                  </text>
                  <text
                    x="42"
                    y="27"
                    fontSize="11"
                    fontFamily="Inter, sans-serif"
                    fontWeight="700"
                  >
                    App Store
                  </text>
                  <path
                    d="M24.5 12.2c.5-.6.8-1.4.7-2.2-.7 0-1.6.5-2.1 1.1-.4.5-.8 1.4-.7 2.2.8.1 1.6-.4 2.1-1.1zm.7 1.2c-1.2-.1-2.2.7-2.7.7s-1.4-.6-2.4-.6c-1.2 0-2.3.7-2.9 1.8-1.3 2.2-.3 5.4.9 7.2.6.9 1.3 1.8 2.3 1.8.9 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1 0 1.6-.9 2.2-1.8.7-1 1-2 1-2s-1.9-.8-1.9-3c0-1.9 1.5-2.8 1.6-2.8-.9-1.3-2.3-1.4-2.9-1.3z"
                    transform="translate(6, 5)"
                  />
                </g>
              </svg>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* X (Twitter) */}
              <a
                href="#"
                className="text-flipside-text-secondary hover:text-white transition-colors"
                aria-label="X"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-flipside-text-secondary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="text-flipside-text-secondary hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.18 8.18 0 004.76 1.52V7.05a4.84 4.84 0 01-1-.36z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Chrome divider */}
        <div className="chrome-line my-8" />

        {/* Copyright */}
        <p className="text-center text-flipside-text-secondary text-xs">
          {new Date().getFullYear()} FlipSide. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
