import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { aglStageCards, type AglStageCard } from '../../data/aglStage'

type CardProps = {
  card: AglStageCard
  mx: MotionValue<number>
  my: MotionValue<number>
  reduce: boolean | null
}

function FloatingCard({ card, mx, my, reduce }: CardProps) {
  const shiftX = useTransform(mx, (value) => value * card.depth)
  const shiftY = useTransform(my, (value) => value * card.depth * 0.75)

  return (
    <motion.div
      className={`float-card${card.keep ? ' float-card-keep' : ''}`}
      style={{
        left: card.left,
        top: card.top,
        width: card.width,
        height: card.height,
        x: reduce ? 0 : shiftX,
        y: reduce ? 0 : shiftY,
        rotate: card.rotate,
      }}
      initial={reduce ? false : { opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.9,
        delay: card.delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        className="float-card-drift"
        animate={
          reduce
            ? undefined
            : {
                x: [0, card.floatX, 0, -card.floatX * 0.55, 0],
                y: [0, -card.floatY, 0, card.floatY * 0.45, 0],
              }
        }
        transition={
          reduce
            ? undefined
            : {
                duration: card.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      >
        <Link to="/works/agl" className="float-card-link" aria-label={card.alt}>
          <img
            src={card.src}
            alt=""
            width={320}
            height={240}
            decoding="async"
            loading={card.keep ? 'eager' : 'lazy'}
          />
        </Link>
      </motion.div>
    </motion.div>
  )
}

export function FloatingWorkStage() {
  const reduce = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mx = useSpring(rawX, { stiffness: 70, damping: 22, mass: 0.6 })
  const my = useSpring(rawY, { stiffness: 70, damping: 22, mass: 0.6 })

  function onMove(event: MouseEvent<HTMLElement>) {
    if (reduce) return
    const box = event.currentTarget.getBoundingClientRect()
    rawX.set((event.clientX - box.left) / box.width - 0.5)
    rawY.set((event.clientY - box.top) / box.height - 0.5)
  }

  function onLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <section
      className="float-stage"
      aria-label="Featured work, AGL catalogues"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {aglStageCards.map((card) => (
        <FloatingCard key={card.id} card={card} mx={mx} my={my} reduce={reduce} />
      ))}

      <div className="float-copy">
        <motion.div
          className="float-copy-inner"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="float-kicker">AGL · Catalogues &amp; binders</p>
          <h2>
            Tile literature, shot as objects
          </h2>
          <p className="float-dek">
            Collection books and sample binders for a ceramics house — printed
            matter that has to hold up on a dealer desk.
          </p>
          <div className="float-actions">
            <Link to="/works/agl" className="float-btn float-btn-solid">
              Open the case
            </Link>
            <Link to="/works" className="float-btn float-btn-ghost">
              All works
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
