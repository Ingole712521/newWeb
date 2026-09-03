import type { ArtKind } from '../../types'
import styles from './MockArt.module.css'

type Props = {
  kind: ArtKind
  title?: string
}

export function MockArt({ kind, title = 'SILVER' }: Props) {
  return (
    <div className={`${styles.root} ${styles[kind]}`} aria-hidden="true">
      {kind === 'pamphlet' && <Pamphlet />}
      {kind === 'wordmark' && <Wordmark title={title} />}
      {kind === 'talent' && <Talent />}
      {kind === 'phones' && <Phones />}
      {kind === 'brandbook' && <Brandbook />}
      {kind === 'signage' && <Signage />}
      {kind === 'packaging' && <Packaging />}
      {kind === 'uniform' && <Uniform />}
      {kind === 'wayfinding' && <Wayfinding />}
      {kind === 'social' && <Phones />}
      {kind === 'reel' && <Reel />}
    </div>
  )
}

function DropMark() {
  return (
    <svg viewBox="0 0 48 48" className={styles.drop}>
      <circle cx="24" cy="24" r="20" fill="#1d4f9c" />
      <path
        d="M24 12c6 8 10 12 10 17a10 10 0 1 1-20 0c0-5 4-9 10-17Z"
        fill="#f4f7fb"
      />
    </svg>
  )
}

function Pamphlet() {
  return (
    <div className={styles.sheet}>
      <div className={styles.pamLeft}>
        <DropMark />
        <p>SILVER</p>
        <span>Pumps 2025</span>
      </div>
      <div className={styles.pamRight}>
        <b>Submersible range</b>
        <p>Borewell · Openwell · Centrifugal</p>
        <div className={styles.lines} />
      </div>
    </div>
  )
}

function Wordmark({ title }: { title: string }) {
  return (
    <div className={styles.markField}>
      <DropMark />
      <p className={styles.word}>{title}</p>
      <p className={styles.sub}>PUMPS &amp; MOTORS</p>
    </div>
  )
}

function Talent() {
  return (
    <div className={styles.talent}>
      <div className={styles.figure}>
        <div className={styles.head} />
        <div className={styles.jersey}>
          <span>SILVER</span>
        </div>
        <div className={styles.legs} />
      </div>
      <div className={styles.collateral}>
        <div />
        <div />
      </div>
    </div>
  )
}

function Phones() {
  return (
    <div className={styles.phoneRow}>
      <div className={styles.phone}>
        <span>Story</span>
        <DropMark />
      </div>
      <div className={`${styles.phone} ${styles.phoneMid}`}>
        <span>Feed</span>
        <b>SILVER</b>
      </div>
      <div className={styles.phone}>
        <span>Reel</span>
        <div className={styles.bar} />
      </div>
    </div>
  )
}

function Brandbook() {
  return (
    <div className={styles.book}>
      <div className={styles.pageL}>
        <DropMark />
        <p>01 — Mark</p>
      </div>
      <div className={styles.pageR}>
        <p className={styles.wordSm}>SILVER</p>
        <p>Clear space · colour · type</p>
        <div className={styles.swatches}>
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  )
}

function Signage() {
  return (
    <div className={styles.sign}>
      <div className={styles.facade} />
      <p>ATELIER NORTH</p>
    </div>
  )
}

function Packaging() {
  return (
    <div className={styles.packs}>
      <div />
      <div />
      <div />
    </div>
  )
}

function Uniform() {
  return (
    <div className={styles.kit}>
      <div className={styles.shirt}>KOVA</div>
    </div>
  )
}

function Wayfinding() {
  return (
    <div className={styles.way}>
      <p>Gallery 02</p>
      <span>Lift · Archive · Court</span>
    </div>
  )
}

function Reel() {
  return (
    <div className={styles.reel}>
      <div className={styles.screen}>
        <span>Line 1 · Althan</span>
      </div>
    </div>
  )
}
