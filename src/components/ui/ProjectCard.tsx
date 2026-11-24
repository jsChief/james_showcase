import { useRef, type PointerEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import type { Project } from '../../data/site'
import { Tag } from './Tag'

const MAX_TILT = 6
const SPRING = { stiffness: 160, damping: 18, mass: 0.5 }

function tiltSupported() {
  if (typeof window === 'undefined') return false
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
  return fine.matches && !reduce.matches
}

function isExternal(href: string) {
  return href.startsWith('http')
}

export function ProjectCard({ project }: { project: Project }) {
  const tiltRef = useRef(tiltSupported())
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, SPRING)
  const springY = useSpring(rotateY, SPRING)
  const transform = useTransform(
    [springX, springY],
    ([x, y]) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg)`,
  )

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!tiltRef.current) return

    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    rotateY.set((px - 0.5) * MAX_TILT * 2)
    rotateX.set((0.5 - py) * MAX_TILT * 2)
  }

  const handlePointerLeave = () => {
    if (!tiltRef.current) return
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.article
      className="card project-card"
      style={{ transform }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <header className="project-head">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-meta">
          <span>{project.kind}</span>
          <span>{project.year}</span>
        </div>
      </header>

      <p className="project-summary">{project.summary}</p>
      <p className="project-detail">{project.detail}</p>

      <div className="chip-grid">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <footer className="project-foot">
        <div className="project-links chip-grid">
          {project.links.map((link) => (
            <a
              key={link.label}
              className="text-link"
              href={link.href}
              target={isExternal(link.href) ? '_blank' : undefined}
              rel={isExternal(link.href) ? 'noreferrer noopener' : undefined}
            >
              {link.label}
              <span className="link-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </footer>
    </motion.article>
  )
}
