import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Torus, Octahedron } from '@react-three/drei'

export function FloatingBox({ position, color }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
    ref.current.rotation.y += 0.01
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3
  })

  return (
    <Box ref={ref} position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </Box>
  )
}

export function FloatingTorus({ position, color }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5
    ref.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.7) * 0.2
  })

  return (
    <Torus ref={ref} position={position} args={[0.4, 0.15, 16, 100]}>
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
    </Torus>
  )
}

export function FloatingOctahedron({ position, color }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x += 0.005
    ref.current.rotation.y += 0.008
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.25
  })

  return (
    <Octahedron ref={ref} position={position} args={[0.6]}>
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
    </Octahedron>
  )
}
