import { site } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Contact() {
  const externalSocials = site.socials.filter((social) => social.href.startsWith('http'))

  return (
    <section className="section" id="contact">
      <div className="container contact-inner">
        <SectionHeading eyebrow="Contact" title="Let's build something worth using" />

        <Reveal>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="contact-note">
            I'm open to full-time roles and select freelance work, and happy to talk through an idea
            before there's a brief. Email is fastest — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="contact-actions">
            {externalSocials.map((social) => (
              <a
                key={social.label}
                className="text-link"
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {social.label}
                <span className="link-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
            <Button href="#top">Back to top ↑</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
