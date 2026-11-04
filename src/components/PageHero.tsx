type Props = {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: Props) {
  return (
    <div className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>}
      </div>
    </div>
  )
}
