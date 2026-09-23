import { motion, useReducedMotion } from 'framer-motion'
import { Mascot } from 'page-mascot'
import { Link } from 'react-router-dom'
import { aglWorkImages } from '../../data/aglStage'
import { publicAsset } from '../../lib/publicAsset'
import { studio } from '../../data/studio'

export function FloatingWorkStage() {
  const reduce = useReducedMotion()

  return (
    <section className="poster" aria-label="Ravindra Soyam, graphic designer">
      <div className="poster-grain" aria-hidden="true" />
      <span className="poster-plus poster-plus-tl" aria-hidden="true" />
      <span className="poster-plus poster-plus-br" aria-hidden="true" />

      <div className="poster-copy">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="poster-role">Graphic designer</p>
          <h1>
            Graphic
            <br />
            designer
          </h1>
          <p className="poster-services">Branding / Print / Digital</p>
          <p className="poster-dek">
            I create visual identities, print materials and digital experiences
            that help brands look better, communicate clearer and leave a
            lasting impression.
          </p>
          <div className="poster-actions">
            <Link to="/work" className="poster-cta">
              View selected work
              <span className="poster-cta-line" aria-hidden="true" />
            </Link>
            <a href={`mailto:${studio.email}`} className="poster-talk">
              Let's talk
            </a>
          </div>
        </motion.div>

        <div className="poster-foot" aria-hidden="true">
          <div className="poster-torn">
            <span>DES</span>
          </div>
          <div className="poster-cmyk">
            <span className="cmyk-c" />
            <span className="cmyk-m" />
            <span className="cmyk-y" />
            <span className="cmyk-k" />
            <p>
              Print
              <br />
              Branding
              <br />
              Digital
            </p>
          </div>
        </div>
        <p className="poster-copy-year">© 2025 Ravindra Soyam</p>
      </div>

      <div className="poster-board">
        <article className="board-card board-guide">
          <span className="tape tape-l" />
          <span className="tape tape-r" />
          <div className="board-guide-top">
            <p>Brand guidelines</p>
            <span>2024</span>
          </div>
          <p className="board-guide-sub">Visual identity and brand system</p>
          <img src={aglWorkImages.glifo} alt="" width={640} height={480} />
          <div className="board-swatches" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </article>

        <div className="board-type" aria-hidden="true">
          <p className="board-aa">Aa</p>
          <p className="board-face">
            Syne
            <br />
            ExtraBold
          </p>
          <p className="board-alpha">ABCDEFGHIJKLM</p>
          <p className="board-alpha">NOPQRSTUVWXYZ</p>
          <p className="board-alpha">0123456789</p>
        </div>

        <div className="board-note">
          <span className="tape tape-note" />
          Good design solves real problems
        </div>

        <div className="board-mascot">
          <Mascot
            directions={publicAsset('/mascots/studio-directions.webp')}
            reactions={publicAsset('/mascots/studio-reactions.webp')}
            size={340}
            label="Studio mascot"
          />
        </div>

        <article className="board-card board-show">
          <img src={aglWorkImages.signature} alt="" width={640} height={420} />
          <p>Showroom branding</p>
        </article>

        <article className="board-card board-product">
          <img src={aglWorkImages.fresco} alt="" width={480} height={640} />
          <p>
            Product
            <br />
            catalogue
          </p>
        </article>

        <article className="board-card board-sheet">
          <img src={aglWorkImages.mq} alt="" width={640} height={420} />
        </article>

        <article className="board-card board-agl">
          <span className="tape tape-agl" />
          <p className="board-agl-mark">AGL</p>
          <p className="board-agl-title">Build better spaces</p>
          <img src={aglWorkImages.binderFiona} alt="" width={480} height={360} />
        </article>

        <p className="board-meta" aria-hidden="true">
          Type
          <br />
          Layout
          <br />
          Design
          <br />
          Print
        </p>
        <p className="board-scroll">Scroll to explore</p>
        <p className="board-folio">Portfolio</p>
      </div>
    </section>
  )
}
