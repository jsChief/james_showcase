import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { site } from '../../data/site'
import { Button } from '../ui/Button'

const EASE_OUT = [0.23, 1, 0.32, 1] as const
const SECTION_IDS = site.nav.map((link) => link.href.slice(1))

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const reduce = useReducedMotion() ?? false

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.6] },
    )

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  const panelMotion = reduce
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.14 } },
      }
    : {
        initial: { opacity: 0, transform: 'translateY(-10px)' },
        animate: {
          opacity: 1,
          transform: 'translateY(0px)',
          transition: { duration: 0.24, ease: EASE_OUT },
        },
        exit: {
          opacity: 0,
          transform: 'translateY(-10px)',
          transition: { duration: 0.18, ease: EASE_OUT },
        },
      }

  return (
    <>
      <header className="nav" data-scrolled={scrolled || open}>
        <div className="container nav-inner">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">
              {site.monogram}
            </span>
            <span className="brand-text">
              <span className="brand-name">{site.name}</span>
              <span className="brand-role">{site.role}</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Page sections">
            {site.nav.map((link) => (
              <a
                key={link.href}
                className="nav-link"
                href={link.href}
                data-active={active === link.href.slice(1)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <Button href="#contact" variant="primary" size="sm">
              Get in touch
            </Button>
            <button
              className="nav-toggle"
              type="button"
              data-open={open}
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="nav-panel"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="nav-panel"
            className="nav-panel"
            aria-label="Page sections"
            {...panelMotion}
          >
            {site.nav.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <div className="nav-panel-socials">
              {site.socials.map((social) => (
                <a key={social.label} href={social.href} onClick={closeMenu}>
                  {social.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
