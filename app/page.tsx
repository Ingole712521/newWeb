import { AboutBlock } from '../components/about-block'
import { Contact } from '../components/contact'
import { Experience } from '../components/experience'
import { Hero } from '../components/hero'
import { Process } from '../components/process'
import { SelectedWork } from '../components/selected-work'
import { Skills } from '../components/skills'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Process />
      <AboutBlock />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}
