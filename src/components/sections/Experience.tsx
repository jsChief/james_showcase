import { site } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been building"
          lead="Three years of shipping production software with teams that care about craft."
        />

        <div className="timeline">
          {site.experience.map((role, index) => (
            <Reveal key={role.company} delay={index * 0.05}>
              <article className="timeline-item">
                <span className="timeline-period">{role.period}</span>
                <div className="timeline-body">
                  <h3 className="timeline-role">{role.title}</h3>
                  <span className="timeline-company">{role.company}</span>
                  <p className="timeline-summary">{role.summary}</p>
                  <ul className="timeline-highlights">
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
