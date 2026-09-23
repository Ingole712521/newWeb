import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { studio } from '../../data/studio'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const links = [
  { to: '/', label: 'Home', end: true, tone: 'ink' as const },
  { to: '/work', label: 'Studio', tone: 'mute' as const },
  { to: '/about', label: 'About', tone: 'mute' as const },
  { to: '/blog', label: 'Journal', tone: 'mute' as const },
  { to: '/contact', label: 'Reach Us', tone: 'mute' as const },
]

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
    <footer className="relative min-h-screen w-full overflow-hidden bg-background text-black">
      <div className="pointer-events-none absolute z-0" style={{ top: 300, right: 0, bottom: 0, left: 0 }}>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={VIDEO_SRC}
          muted
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden="true"
          style={{ opacity: 0 }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Link to="/" className="font-instrument text-3xl tracking-tight text-black">
          360 Branding
          <sup className="text-[0.55em]">®</sup>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Footer">
          {links.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `font-inter text-sm transition-colors ${
                  isActive || item.tone === 'ink' ? 'text-black' : 'text-[#6F6F6F] hover:text-black'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={`mailto:${studio.email}`}
          className="rounded-full bg-black px-6 py-2.5 font-inter text-sm text-white transition-transform hover:scale-[1.03]"
        >
          Begin Journey
        </a>
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
      >
        <h2
          className="animate-fade-rise font-instrument text-5xl font-normal text-black sm:text-7xl md:text-8xl"
          style={{ maxWidth: '80rem', lineHeight: 0.95, letterSpacing: '-2.46px' }}
        >
          Beyond{' '}
          <em className="text-[#6F6F6F]">silence,</em>
          <br />
          we build <em className="text-[#6F6F6F]">the eternal.</em>
        </h2>
        <p className="animate-fade-rise-delay mt-8 max-w-2xl font-inter text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
          Building platforms for brilliant minds, fearless makers, and thoughtful
          souls. Through the noise, we craft digital havens for deep work and
          pure flows.
        </p>
        <a
          href={`mailto:${studio.email}`}
          className="animate-fade-rise-delay-2 mt-12 rounded-full bg-black px-14 py-5 font-inter text-base text-white transition-transform hover:scale-[1.03]"
        >
          Begin Journey
        </a>
      </div>
    </footer>
  )
}
