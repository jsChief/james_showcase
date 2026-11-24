import { site } from '../../data/site'
import { ProjectCard } from '../ui/ProjectCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Products built end to end"
          lead="Three projects that show how I work: close to the product, responsible for the result, and obsessive about the details nobody was asked to notice."
        />

        <div className="project-list">
          {site.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
