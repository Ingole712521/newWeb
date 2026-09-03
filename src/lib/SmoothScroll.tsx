import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis
      options={{
        lerp: 0.1,
        duration: 1.1,
        smoothWheel: true,
      }}
      className="scroll"
      root={false}
    >
      {children}
    </ReactLenis>
  )
}
