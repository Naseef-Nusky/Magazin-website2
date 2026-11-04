type Props = {
  className?: string
  size?: number
  variant?: 'light' | 'dark'
}

const icons = [
  {
    label: 'Facebook',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'X',
    path: 'M4 4l7.5 8.5L4 20h2.2l6-6.8L17.8 20H20l-7.7-8.8L20 4h-2.2l-5.7 6.4L6.2 4H4z',
  },
  {
    label: 'Instagram',
    path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z',
  },
  {
    label: 'YouTube',
    path: 'M22.5 6.5a2.8 2.8 0 0 0-2-2C18.8 4 12 4 12 4s-6.8 0-8.5.5a2.8 2.8 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.5a2.8 2.8 0 0 0 2 2C5.2 20 12 20 12 20s6.8 0 8.5-.5a2.8 2.8 0 0 0 2-2C23 15.8 23 12 23 12s0-3.8-.5-5.5zM10 15.5v-7l6 3.5-6 3.5z',
  },
]

export function SocialIcons({ className = '', size = 14 }: Props) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {icons.map((icon) => (
        <li key={icon.label}>
          <a
            href="#"
            aria-label={icon.label}
            className="inline-flex opacity-90 transition hover:opacity-100"
          >
            <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d={icon.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
