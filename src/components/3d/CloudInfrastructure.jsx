import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Text, Sphere, Torus } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Cloud Infrastructure 3D Visualization
 * Represents cloud services, servers, databases, and networking
 * with animated connections showing data flow
 */
export function CloudNode({ position, label, icon, color, size = 0.6, type = 'compute' }) {
  const meshRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.15
    }
    
    if (glowRef.current) {
      // Subtle glow pulse
      glowRef.current.material.opacity = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.15
    }
  })

  return (
    <group position={position}>
      {/* Main node */}
      <RoundedBox
        ref={meshRef}
        args={[size, size, size]}
        radius={0.08}
        smoothness={4}
        castShadow
      >
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </RoundedBox>

      {/* Glow effect */}
      <Sphere ref={glowRef} args={[size * 0.8, 16, 16]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Label */}
      <Text
        position={[0, size * 0.8, 0]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="bottom"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        {label}
      </Text>

      {/* Icon representation */}
      <Text
        position={[0, 0, size * 0.5 + 0.05]}
        fontSize={0.25}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>
    </group>
  )
}

export function NetworkConnection({ start, end, color, animated = true }) {
  const lineRef = useRef()
  
  const points = useMemo(() => {
    return [new THREE.Vector3(...start), new THREE.Vector3(...end)]
  }, [start, end])

  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [points])

  useFrame((state) => {
    if (lineRef.current && animated) {
      // Animated dash effect
      lineRef.current.material.dashOffset = -state.clock.elapsedTime * 0.5
    }
  })

  return (
    <line ref={lineRef} geometry={geometry}>
      <lineDashedMaterial
        color={color}
        linewidth={2}
        dashSize={0.1}
        gapSize={0.1}
        transparent
        opacity={0.6}
      />
    </line>
  )
}

export function DataPacket({ path, delay, color }) {
  const packetRef = useRef()

  useFrame((state) => {
    if (packetRef.current && path.length >= 2) {
      // Animate packet along path
      const progress = ((state.clock.elapsedTime * 0.5 + delay) % 2) / 2
      const segmentCount = path.length - 1
      const segmentIndex = Math.floor(progress * segmentCount)
      const segmentProgress = (progress * segmentCount) % 1

      if (segmentIndex < path.length - 1) {
        packetRef.current.position.lerpVectors(
          new THREE.Vector3(...path[segmentIndex]),
          new THREE.Vector3(...path[segmentIndex + 1]),
          segmentProgress
        )
      }

      // Fade effect
      const fadeIn = Math.min(progress * 3, 1)
      const fadeOut = Math.min((1 - progress) * 3, 1)
      packetRef.current.material.opacity = fadeIn * fadeOut * 0.8
    }
  })

  return (
    <mesh ref={packetRef}>
      <boxGeometry args={[0.08, 0.08, 0.08]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

export function LoadBalancerRing({ position, radius = 1.5 }) {
  const ringRef = useRef()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group position={position}>
      <Torus
        ref={ringRef}
        args={[radius, 0.04, 16, 32]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </Torus>
    </group>
  )
}

export default function CloudInfrastructure({ position = [0, 0, 0] }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation to show all angles
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  // Infrastructure layout
  const nodes = [
    // Top tier - Load Balancer
    { pos: [0, 1.5, 0], label: 'LB', icon: '⚖️', color: '#0ea5e9', size: 0.5, type: 'loadbalancer' },
    
    // Middle tier - Application Servers
    { pos: [-1.5, 0, 0], label: 'App-1', icon: '🖥️', color: '#8b5cf6', size: 0.6, type: 'compute' },
    { pos: [0, 0, 0], label: 'App-2', icon: '🖥️', color: '#8b5cf6', size: 0.6, type: 'compute' },
    { pos: [1.5, 0, 0], label: 'App-3', icon: '🖥️', color: '#8b5cf6', size: 0.6, type: 'compute' },
    
    // Bottom tier - Data Layer
    { pos: [-1, -1.5, 0], label: 'DB', icon: '🗄️', color: '#10b981', size: 0.7, type: 'database' },
    { pos: [1, -1.5, 0], label: 'Cache', icon: '⚡', color: '#f59e0b', size: 0.5, type: 'cache' },
  ]

  // Connection paths
  const connections = [
    // Load balancer to app servers
    { start: [0, 1.5, 0], end: [-1.5, 0, 0], color: '#0ea5e9' },
    { start: [0, 1.5, 0], end: [0, 0, 0], color: '#0ea5e9' },
    { start: [0, 1.5, 0], end: [1.5, 0, 0], color: '#0ea5e9' },
    
    // App servers to database
    { start: [-1.5, 0, 0], end: [-1, -1.5, 0], color: '#8b5cf6' },
    { start: [0, 0, 0], end: [-1, -1.5, 0], color: '#8b5cf6' },
    { start: [1.5, 0, 0], end: [-1, -1.5, 0], color: '#8b5cf6' },
    
    // App servers to cache
    { start: [-1.5, 0, 0], end: [1, -1.5, 0], color: '#f59e0b' },
    { start: [0, 0, 0], end: [1, -1.5, 0], color: '#f59e0b' },
    { start: [1.5, 0, 0], end: [1, -1.5, 0], color: '#f59e0b' },
  ]

  // Data flow paths (for packets)
  const dataFlows = [
    { path: [[0, 1.5, 0], [-1.5, 0, 0], [-1, -1.5, 0]], delay: 0, color: '#0ea5e9' },
    { path: [[0, 1.5, 0], [0, 0, 0], [1, -1.5, 0]], delay: 0.7, color: '#8b5cf6' },
    { path: [[0, 1.5, 0], [1.5, 0, 0], [-1, -1.5, 0]], delay: 1.4, color: '#10b981' },
  ]

  return (
    <group ref={groupRef} position={position}>
      {/* Load balancer ring effect */}
      <LoadBalancerRing position={[0, 1.5, 0]} radius={0.8} />

      {/* Infrastructure nodes */}
      {nodes.map((node, i) => (
        <CloudNode
          key={i}
          position={node.pos}
          label={node.label}
          icon={node.icon}
          color={node.color}
          size={node.size}
          type={node.type}
        />
      ))}

      {/* Network connections */}
      {connections.map((conn, i) => (
        <NetworkConnection
          key={i}
          start={conn.start}
          end={conn.end}
          color={conn.color}
          animated={true}
        />
      ))}

      {/* Animated data packets */}
      {dataFlows.map((flow, i) => (
        <DataPacket
          key={i}
          path={flow.path}
          delay={flow.delay}
          color={flow.color}
        />
      ))}
    </group>
  )
}
