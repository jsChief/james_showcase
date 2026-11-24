import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  lead?: string
}

export function SectionHeading({ eyebrow, title, lead }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <p className="section-lead">{lead}</p>
        </Reveal>
      )}
    </div>
  )
}
