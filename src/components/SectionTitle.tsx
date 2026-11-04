type Props = {
  children: string
}

export function SectionTitle({ children }: Props) {
  return (
    <div className="mb-5 flex items-center gap-3 border-b border-line pb-3">
      <h2 className="text-sm font-bold tracking-wide text-ink uppercase">{children}</h2>
      <span className="h-0.5 w-8 bg-brand" aria-hidden />
    </div>
  )
}
