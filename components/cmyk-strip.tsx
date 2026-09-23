type Props = {
  className?: string
}

export function CmykStrip({ className = '' }: Props) {
  return (
    <div className={`flex flex-col gap-px ${className}`} aria-hidden="true">
      <span className="h-5 w-3.5 bg-[var(--cyan)]" />
      <span className="h-5 w-3.5 bg-[var(--magenta)]" />
      <span className="h-5 w-3.5 bg-[var(--yellow)]" />
      <span className="h-5 w-3.5 bg-black" />
    </div>
  )
}
