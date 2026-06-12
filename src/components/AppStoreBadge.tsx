export default function AppStoreBadge({ className = 'h-14 w-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="#000" stroke="#A6A6A6" strokeWidth="0.5" />
      <g fill="#fff">
        <text x="42" y="14" fontSize="5" fontFamily="'Chakra Petch', sans-serif" fontWeight="400">
          Download on the
        </text>
        <text x="42" y="27" fontSize="11" fontFamily="'Chakra Petch', sans-serif" fontWeight="700">
          App Store
        </text>
        <path
          d="M24.5 12.2c.5-.6.8-1.4.7-2.2-.7 0-1.6.5-2.1 1.1-.4.5-.8 1.4-.7 2.2.8.1 1.6-.4 2.1-1.1zm.7 1.2c-1.2-.1-2.2.7-2.7.7s-1.4-.6-2.4-.6c-1.2 0-2.3.7-2.9 1.8-1.3 2.2-.3 5.4.9 7.2.6.9 1.3 1.8 2.3 1.8.9 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1 0 1.6-.9 2.2-1.8.7-1 1-2 1-2s-1.9-.8-1.9-3c0-1.9 1.5-2.8 1.6-2.8-.9-1.3-2.3-1.4-2.9-1.3z"
          transform="translate(6, 5)"
        />
      </g>
    </svg>
  )
}
