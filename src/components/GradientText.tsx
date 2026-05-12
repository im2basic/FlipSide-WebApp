import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  variant?: 'duality' | 'cyber' | 'chrome'
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

const gradientClasses: Record<string, string> = {
  duality: 'gradient-duality',
  cyber: 'gradient-cyber',
  chrome: 'gradient-chrome',
}

export default function GradientText({
  children,
  variant = 'duality',
  className = '',
  as: Tag = 'span',
}: GradientTextProps) {
  return (
    <Tag className={`${gradientClasses[variant]} ${className}`}>
      {children}
    </Tag>
  )
}
