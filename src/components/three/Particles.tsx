import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type ParticlesProps = {
  count?: number
  reduced?: boolean
}

export function Particles({ count = 1400, reduced = false }: ParticlesProps) {
  const points = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const radius = 3.2 + Math.random() * 8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.55
      array[i * 3 + 2] = radius * Math.cos(phi)
    }
    return array
  }, [count])

  useFrame((_, delta) => {
    if (reduced || !points.current) return
    points.current.rotation.y += delta * 0.018
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#b8ff2e"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </points>
  )
}
