import { useEffect, useRef } from 'react'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

export function CinematicFooter() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      video.loop = true
      video.style.opacity = '1'
      return
    }

    let frame = 0

    const tick = () => {
      const { currentTime, duration } = video
      if (duration && !Number.isNaN(duration)) {
        const fade = 0.5
        if (currentTime < fade) {
          video.style.opacity = String(Math.min(1, currentTime / fade))
        } else if (currentTime > duration - fade) {
          video.style.opacity = String(Math.max(0, (duration - currentTime) / fade))
        } else {
          video.style.opacity = '1'
        }
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)

    const onEnded = () => {
      video.style.opacity = '0'
      window.setTimeout(() => {
        video.currentTime = 0
        void video.play()
      }, 100)
    }

    video.addEventListener('ended', onEnded)
    void video.play()

    return () => {
      cancelAnimationFrame(frame)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  return (
    <footer className="relative min-h-screen w-full overflow-hidden bg-background" aria-label="Studio film">
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        muted
        playsInline
        autoPlay
        preload="metadata"
        aria-hidden="true"
        style={{ opacity: 0 }}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background via-transparent to-background" />
    </footer>
  )
}
