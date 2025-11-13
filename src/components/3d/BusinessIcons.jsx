import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Text3D, Center, Float } from '@react-three/drei'
import * as THREE from 'three'

export function FloatingServiceIcon({ position, icon, color, index }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float floatIntensity={0.5} speed={2}>
      <RoundedBox
        ref={meshRef}
        args={[1.2, 1.2, 0.3]}
        position={position}
        radius={0.1}
        smoothness={4}
        castShadow
      >
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </RoundedBox>
    </Float>
  )
}

export function NetworkGlobe({ position = [0, 0, 0] }) {
  const groupRef = useRef()
  const particlesRef = useRef()
  
  const particleCount = 150
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360)
    const phi = THREE.MathUtils.randFloatSpread(360)
    const radius = 2
    
    positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi)
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
    positions[i * 3 + 2] = radius * Math.cos(theta)
  }
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          color="#0ea5e9"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#0ea5e9"
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>
    </group>
  )
}

export function CodeBlock3D({ position = [0, 0, 0] }) {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <RoundedBox args={[2, 1.2, 0.1]} radius={0.05}>
        <meshStandardMaterial color="#1e293b" metalness={0.3} roughness={0.7} />
      </RoundedBox>
      
      {/* Simulate code lines */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[-0.7, 0.4 - i * 0.25, 0.06]}>
          <boxGeometry args={[1.2, 0.08, 0.02]} />
          <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  )
}
