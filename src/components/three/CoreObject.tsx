import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const DAMPING = 3

export function CoreObject({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null)
  const knot = useRef<THREE.Mesh>(null)
  const shell = useRef<THREE.Mesh>(null)
  const ring = useRef<THREE.Mesh>(null)
  const pointer = useRef({ x: 0, y: 0 })

  const width = useThree((state) => state.size.width)
  const offsetX = width >= 980 ? 1.9 : 0
  const scale = width >= 980 ? 1 : 0.72

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  useFrame((_, delta) => {
    const root = group.current
    if (!root || reduced) return

    const scroll = THREE.MathUtils.clamp(window.scrollY / window.innerHeight, 0, 1)
    const { x, y } = pointer.current

    root.position.x = THREE.MathUtils.damp(root.position.x, offsetX + x * 0.45, DAMPING, delta)
    root.position.y = THREE.MathUtils.damp(root.position.y, -y * 0.3 - scroll * 1.15, DAMPING, delta)
    root.rotation.x = THREE.MathUtils.damp(root.rotation.x, y * 0.2 + scroll * 0.28, DAMPING, delta)
    root.rotation.y += delta * 0.14

    if (knot.current) knot.current.rotation.z += delta * 0.07
    if (shell.current) shell.current.rotation.y -= delta * 0.045
    if (ring.current) ring.current.rotation.z += delta * 0.1
  })

  return (
    <group ref={group} position={[offsetX, 0, 0]} scale={scale}>
      <pointLight color="#b8ff2e" intensity={3} distance={7} decay={2} />

      <mesh ref={knot}>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <meshStandardMaterial
          color="#c7cbd4"
          metalness={0.95}
          roughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.38, 48, 32]} />
        <meshBasicMaterial color="#b8ff2e" toneMapped={false} />
      </mesh>

      <mesh ref={shell}>
        <icosahedronGeometry args={[2.05, 1]} />
        <meshBasicMaterial
          color="#b8ff2e"
          wireframe
          transparent
          opacity={0.12}
          toneMapped={false}
        />
      </mesh>

      <mesh ref={ring} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[2.6, 0.006, 8, 220]} />
        <meshBasicMaterial color="#b8ff2e" transparent opacity={0.4} toneMapped={false} />
      </mesh>

      <mesh rotation={[Math.PI / 1.7, 0.4, 0]}>
        <torusGeometry args={[3, 0.004, 8, 220]} />
        <meshBasicMaterial color="#7b6cff" transparent opacity={0.32} toneMapped={false} />
      </mesh>
    </group>
  )
}
