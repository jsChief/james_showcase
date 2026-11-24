import { lazy, Suspense, useEffect, useState } from 'react'
import { site } from '../../data/site'
import { Button } from '../ui/Button'

const HeroScene = lazy(() =>
  import('../three/HeroScene').then((module) => ({ default: module.HeroScene })),
)

export function Hero() {
  const [hintHidden, setHintHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => setHintHidden(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <section className="hero" id="top">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <div className="hero-veil" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="status">
            <span className="status-dot" aria-hidden="true" />
            {site.availability}
          </span>

          <h1 className="hero-title">
            {site.name}
            <span className="hero-role">{site.role}</span>
          </h1>

          <p className="hero-tagline">{site.tagline}</p>

          <div className="hero-actions">
            <Button href="#projects" variant="primary">
              View my work
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Button>
            <Button href="#contact">Get in touch</Button>
          </div>

          <ul className="hero-stats">
            {site.stats.map((stat) => (
              <li className="hero-stat" key={stat.label}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a className="scroll-hint" href="#about" data-hidden={hintHidden} aria-hidden={hintHidden}>
        <span>Scroll</span>
        <span className="scroll-hint-line" aria-hidden="true" />
      </a>
    </section>
  )
}
