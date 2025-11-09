import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei'

export default function AnimatedSphere({ position = [0, 0, 0], color = "#0ea5e9" }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      // slow rotation for a realistic, organic feel
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25
    }
  })

  return (
    <Float floatIntensity={0.6} rotationIntensity={0.4} speed={1}>
      <Sphere ref={meshRef} args={[1, 128, 128]} position={position} scale={2} castShadow receiveShadow>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.45}
          speed={1.8}
          roughness={0.05}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  )
}
