import { motion, useReducedMotion } from 'framer-motion'
import { Mascot } from 'page-mascot'
import { Link } from 'react-router-dom'
import { publicAsset } from '../../lib/publicAsset'
import { studio } from '../../data/studio'

export function FloatingWorkStage() {
  const reduce = useReducedMotion()

  return (
    <section className="float-stage" aria-label="360 Branding Studio">
      <div className="home-mascot">
        <Mascot
          directions={publicAsset('/mascots/studio-directions.webp')}
          reactions={publicAsset('/mascots/studio-reactions.webp')}
          size={420}
          label="360 studio mascot"
        />
      </div>

      <div className="float-copy">
        <motion.div
          className="float-copy-inner"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="float-kicker">360 Branding Studio</p>
          <h1>The print-first branding studio</h1>
          <p className="float-dek">
            Catalogues, binders, marks, and kit. Identity built for objects
            people actually hold.
          </p>
          <div className="float-actions">
            <Link to="/work" className="float-btn float-btn-solid">
              See the work
            </Link>
            <a href={`mailto:${studio.email}`} className="float-btn float-btn-ghost">
              Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
