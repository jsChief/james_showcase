import { site } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <SectionHeading
          eyebrow="Stack"
          title="The tools I reach for"
          lead="A focused set of technologies I know deeply, chosen for reliability and for how fast they let a small team ship."
        />

        <div className="stack-groups">
          {site.stack.map((group, index) => (
            <Reveal key={group.group} delay={index * 0.08}>
              <div className="card stack-group">
                <div className="stack-group-head">
                  <h3 className="stack-group-title">{group.group}</h3>
                  <span className="stack-group-count">{group.items.length} technologies</span>
                </div>
                <div className="chip-grid">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
