import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, PerformanceMonitor, Preload } from '@react-three/drei'
import { useReducedMotion } from 'motion/react'
import { CoreObject } from './CoreObject'
import { Particles } from './Particles'

export function HeroScene() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(true)
  const [dpr, setDpr] = useState<[number, number]>([1, 1.75])
  const reduced = useReducedMotion() ?? false
  const [particleCount] = useState(() => (window.innerWidth < 860 ? 500 : 1400))

  useEffect(() => {
    const element = wrapperRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const frameloop = reduced ? 'demand' : inView ? 'always' : 'never'

  return (
    <div className="hero-canvas" ref={wrapperRef} aria-hidden="true">
      <Canvas
        dpr={dpr}
        frameloop={frameloop}
        camera={{ position: [0, 0, 6.4], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <PerformanceMonitor onDecline={() => setDpr([1, 1])} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <Environment resolution={128}>
            <Lightformer form="rect" intensity={3} position={[0, 4, 3]} scale={[9, 3, 1]} />
            <Lightformer
              form="circle"
              intensity={7}
              position={[-6, 1, -2]}
              scale={3.5}
              color="#b8ff2e"
            />
            <Lightformer
              form="circle"
              intensity={4}
              position={[6, -1, -3]}
              scale={4.5}
              color="#7b6cff"
            />
            <Lightformer
              form="rect"
              intensity={1.6}
              position={[0, -5, 1]}
              scale={[7, 2, 1]}
              color="#2b3040"
            />
          </Environment>
          <CoreObject reduced={reduced} />
          <Particles count={particleCount} reduced={reduced} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
