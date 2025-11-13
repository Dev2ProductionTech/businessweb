import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Text, Cylinder, Cone } from '@react-three/drei'
import * as THREE from 'three'

/**
 * CI/CD Pipeline 3D Visualization
 * Represents the continuous integration and deployment workflow
 * with animated data flow through pipeline stages
 */
export function PipelineStage({ position, label, color, index, isActive }) {
  const meshRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    if (meshRef.current && isActive) {
      // Pulse effect for active stage
      const pulse = Math.sin(state.clock.elapsedTime * 2 + index) * 0.1 + 1
      meshRef.current.scale.setScalar(pulse)
    }
    
    if (glowRef.current && isActive) {
      // Glow intensity animation
      glowRef.current.material.emissiveIntensity = 
        Math.sin(state.clock.elapsedTime * 3 + index) * 0.3 + 0.5
    }
  })

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[0.8, 1, 0.3]}
        radius={0.08}
        smoothness={4}
        castShadow
      >
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={isActive ? 0.5 : 0.1}
        />
      </RoundedBox>

      {/* Glow effect for active stages */}
      {isActive && (
        <RoundedBox
          ref={glowRef}
          args={[0.9, 1.1, 0.4]}
          radius={0.1}
          smoothness={4}
        >
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.2}
            emissive={color}
            emissiveIntensity={0.5}
          />
        </RoundedBox>
      )}

      {/* Stage label */}
      <Text
        position={[0, -0.8, 0.2]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        {label}
      </Text>
    </group>
  )
}

export function DataFlowParticle({ start, end, delay, color }) {
  const particleRef = useRef()

  useFrame((state) => {
    if (particleRef.current) {
      // Animate particle from start to end
      const progress = ((state.clock.elapsedTime + delay) % 3) / 3
      particleRef.current.position.lerpVectors(
        new THREE.Vector3(...start),
        new THREE.Vector3(...end),
        progress
      )
      
      // Fade in/out at edges
      const fadeIn = Math.min(progress * 5, 1)
      const fadeOut = Math.min((1 - progress) * 5, 1)
      particleRef.current.material.opacity = fadeIn * fadeOut
    }
  })

  return (
    <mesh ref={particleRef}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        transparent
        opacity={1}
      />
    </mesh>
  )
}

export function ConnectionArrow({ start, end, color }) {
  const direction = useMemo(() => {
    const vec = new THREE.Vector3(...end).sub(new THREE.Vector3(...start))
    return vec
  }, [start, end])

  const midpoint = useMemo(() => {
    return [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2,
      (start[2] + end[2]) / 2
    ]
  }, [start, end])

  const length = useMemo(() => direction.length(), [direction])
  const rotation = useMemo(() => {
    const axis = new THREE.Vector3(1, 0, 0)
    return new THREE.Quaternion().setFromUnitVectors(axis, direction.normalize())
  }, [direction])

  return (
    <group position={midpoint} quaternion={rotation}>
      {/* Arrow cylinder */}
      <Cylinder
        args={[0.03, 0.03, length - 0.3, 16]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </Cylinder>

      {/* Arrow head */}
      <Cone
        args={[0.08, 0.15, 16]}
        position={[length / 2, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Cone>
    </group>
  )
}

export default function CICDPipeline({ position = [0, 0, 0] }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation to show depth
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
    }
  })

  const stages = [
    { pos: [-2.5, 0, 0], label: 'Code', color: '#3b82f6', active: true },
    { pos: [-0.8, 0, 0], label: 'Build', color: '#8b5cf6', active: true },
    { pos: [0.8, 0, 0], label: 'Test', color: '#ec4899', active: true },
    { pos: [2.5, 0, 0], label: 'Deploy', color: '#10b981', active: true }
  ]

  return (
    <group ref={groupRef} position={position}>
      {/* Pipeline stages */}
      {stages.map((stage, i) => (
        <PipelineStage
          key={i}
          position={stage.pos}
          label={stage.label}
          color={stage.color}
          index={i}
          isActive={stage.active}
        />
      ))}

      {/* Connection arrows */}
      {stages.slice(0, -1).map((stage, i) => (
        <ConnectionArrow
          key={`arrow-${i}`}
          start={[stage.pos[0] + 0.4, stage.pos[1], stage.pos[2]]}
          end={[stages[i + 1].pos[0] - 0.4, stages[i + 1].pos[1], stages[i + 1].pos[2]]}
          color="#0ea5e9"
        />
      ))}

      {/* Animated data flow particles */}
      {stages.slice(0, -1).map((stage, i) => (
        <React.Fragment key={`particles-${i}`}>
          <DataFlowParticle
            start={[stage.pos[0] + 0.4, stage.pos[1], stage.pos[2]]}
            end={[stages[i + 1].pos[0] - 0.4, stages[i + 1].pos[1], stages[i + 1].pos[2]]}
            delay={i * 0.5}
            color="#0ea5e9"
          />
          <DataFlowParticle
            start={[stage.pos[0] + 0.4, stage.pos[1], stage.pos[2]]}
            end={[stages[i + 1].pos[0] - 0.4, stages[i + 1].pos[1], stages[i + 1].pos[2]]}
            delay={i * 0.5 + 1.5}
            color="#06b6d4"
          />
        </React.Fragment>
      ))}
    </group>
  )
}
