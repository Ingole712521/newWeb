type Props = {
  className?: string
}

export function Logo({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="15.25" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
