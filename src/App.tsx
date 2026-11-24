import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Stack } from './components/sections/Stack'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
