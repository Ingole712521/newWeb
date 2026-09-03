import { processSteps, studio } from '../data/studio'

export function AboutPage() {
  return (
    <section className="page">
      <p className="page-kicker">Studio</p>
      <h1 className="page-title">About</h1>
      <p className="page-lead">
        360 Branding Studio makes identity systems for companies that occupy
        real rooms: factories, hotels, civic halls, and shops. We work from
        Mumbai with printers, sign-writers, and kit manufacturers.
      </p>

      <div className="prose section-gap">
        <p>
          The name is literal. A brand that only exists as a mark on a
          presentation is a quarter-turn. We design the other three: print,
          space, and the people who wear it.
        </p>
        <p>
          {studio.address}. {studio.hours}.
        </p>
      </div>

      <section className="section-gap">
        <p className="page-kicker">Method</p>
        <h2 className="page-title">How a project runs</h2>
        <ol className="stack-list">
          {processSteps.map((step, index) => (
            <li className="stack-item" key={step.title}>
              <span className="idx">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </section>
  )
}
