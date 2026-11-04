import type { Tone } from '../data/articles'

const toneClass: Record<Tone, string> = {
  red: 'bg-brand',
  blue: 'bg-tag-blue',
  green: 'bg-tag-green',
  orange: 'bg-tag-orange',
  purple: 'bg-tag-purple',
  teal: 'bg-tag-teal',
}

type Props = {
  label: string
  tone: Tone
}

export function CategoryBadge({ label, tone }: Props) {
  return (
    <span
      className={`inline-block rounded-[2px] px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase ${toneClass[tone]}`}
    >
      {label}
    </span>
  )
}
