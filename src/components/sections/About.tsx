import { site } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Owning the whole stack,
              <br />
              not just one layer.
            </>
          }
          lead={site.about.lead}
        />

        <div className="about-grid">
          <Reveal className="about-prose">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card facts">
              {site.about.facts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
