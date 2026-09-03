import { studio } from '../data/studio'

export function AppDownloadPage() {
  return (
    <section className="page">
      <p className="page-kicker">Lookbook</p>
      <h1 className="page-title">App Download</h1>
      <p className="page-lead">
        The 360 Lookbook is a private library of brand kits for clients and
        printers: colour, type, lockups, and approved photographs — offline, on
        a phone, on press day.
      </p>

      <div className="app-panel">
        <div>
          <h2>What is inside</h2>
          <ul>
            <li>Approved lockups at print and screen sizes</li>
            <li>Pantone, CMYK, and paint references per job</li>
            <li>Wayfinding drawings and kit spec sheets</li>
            <li>Press-ready PDFs with a changelog</li>
          </ul>
          <div className="app-actions">
            <a className="cta" href={`mailto:${studio.email}?subject=Lookbook access`}>
              Request access
            </a>
            <a className="ghost" href={`mailto:${studio.email}?subject=Lookbook for iOS`}>
              iOS
            </a>
            <a className="ghost" href={`mailto:${studio.email}?subject=Lookbook for Android`}>
              Android
            </a>
          </div>
        </div>
        <div className="phone-preview" aria-hidden="true">
          <div className="phone-preview-inner">
            <span>360</span>
            <p>Lookbook</p>
          </div>
        </div>
      </div>
    </section>
  )
}
