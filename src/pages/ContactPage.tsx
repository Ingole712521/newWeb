import { type FormEvent, useState } from 'react'
import { studio } from '../data/studio'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="page">
      <p className="page-kicker">Studio</p>
      <h1 className="page-title">Contact</h1>
      <p className="page-lead">
        New work starts with a room, a product, or a problem — not a moodboard.
        Write to us with the context you already have.
      </p>

      {sent ? (
        <p className="form-ok" role="status">
          Received. We read every note and reply from {studio.email} within two
          working days.
        </p>
      ) : (
        <form className="form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="about">What needs an identity</label>
            <select id="about" name="about" defaultValue="industrial">
              <option value="industrial">Factory or product line</option>
              <option value="space">Building or interior</option>
              <option value="hospitality">Hotel or restaurant</option>
              <option value="civic">Civic or transport</option>
              <option value="other">Something else</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="note">Note</label>
            <textarea id="note" name="note" required />
          </div>
          <button type="submit" className="cta">
            Send
          </button>
        </form>
      )}

      <div className="contact-aside">
        <span>{studio.address}</span>
        <span>{studio.phone}</span>
        <a href={`mailto:${studio.email}`}>{studio.email}</a>
        <span>{studio.hours}</span>
      </div>
    </section>
  )
}
