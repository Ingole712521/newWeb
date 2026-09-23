type Props = {
  className?: string
}

export function Tape({ className = '' }: Props) {
  return <span className={`tape ${className}`} aria-hidden="true" />
}
