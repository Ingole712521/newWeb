import { AboutBlock } from '../../components/about-block'
import { Experience } from '../../components/experience'
import { Skills } from '../../components/skills'

export default function AboutPage() {
  return (
    <main className="pt-16">
      <AboutBlock />
      <Experience />
      <Skills />
    </main>
  )
}
