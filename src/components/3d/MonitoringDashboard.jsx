import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Text, Sphere, Line } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Monitoring Dashboard 3D Visualization
 * Represents system monitoring with metrics, alerts, and real-time data visualization
 */
export function MetricGraph({ position, label, color, values }) {
  const groupRef = useRef()
  const lineRef = useRef()

  const points = useMemo(() => {
    return values.map((val, i) => {
      const x = (i / (values.length - 1)) * 1.2 - 0.6
      const y = val * 0.5
      const z = 0
      return new THREE.Vector3(x, y, z)
    })
  }, [values])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.02
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Background panel */}
      <RoundedBox
        args={[1.4, 0.8, 0.1]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.3}
          roughness={0.7}
          transparent
          opacity={0.9}
        />
      </RoundedBox>

      {/* Metric line */}
      <Line
        ref={lineRef}
        points={points}
        color={color}
        lineWidth={3}
        position={[0, -0.2, 0.06]}
      />

      {/* Data points */}
      {points.map((point, i) => (
        <Sphere
          key={i}
          args={[0.04, 8, 8]}
          position={[point.x, point.y - 0.2, 0.08]}
        >
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.8}
          />
        </Sphere>
      ))}

      {/* Label */}
      <Text
        position={[0, 0.5, 0.06]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.ttf"
      >
        {label}
      </Text>

      {/* Current value */}
      <Text
        position={[0, -0.45, 0.06]}
        fontSize={0.15}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.ttf"
      >
        {(values[values.length - 1] * 100).toFixed(0)}%
      </Text>
    </group>
  )
}

export function AlertIndicator({ position, severity, label, active }) {
  const meshRef = useRef()
  const glowRef = useRef()

  const colorMap = {
    critical: '#ef4444',
    warning: '#f59e0b',
    info: '#0ea5e9',
    success: '#10b981'
  }

  const color = colorMap[severity] || colorMap.info

  useFrame((state) => {
    if (meshRef.current && active) {
      // Pulse animation for active alerts
      const pulse = Math.sin(state.clock.elapsedTime * 4) * 0.15 + 1
      meshRef.current.scale.setScalar(pulse)
    }

    if (glowRef.current && active) {
      glowRef.current.material.opacity = Math.sin(state.clock.elapsedTime * 4) * 0.3 + 0.4
    }
  })

  return (
    <group position={position}>
      {/* Alert box */}
      <RoundedBox
        ref={meshRef}
        args={[0.6, 0.6, 0.15]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.3}
          emissive={color}
          emissiveIntensity={active ? 0.6 : 0.2}
        />
      </RoundedBox>

      {/* Glow for active alerts */}
      {active && (
        <Sphere ref={glowRef} args={[0.4, 16, 16]}>
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.4}
          />
        </Sphere>
      )}

      {/* Icon */}
      <Text
        position={[0, 0.1, 0.08]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {severity === 'critical' ? '⚠️' : severity === 'warning' ? '⚡' : severity === 'success' ? '✓' : 'ℹ️'}
      </Text>

      {/* Label */}
      <Text
        position={[0, -0.15, 0.08]}
        fontSize={0.08}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={0.5}
      >
        {label}
      </Text>
    </group>
  )
}

export function LogStream({ position, lines, color }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle scroll effect
      const scroll = (state.clock.elapsedTime * 0.1) % 1
      groupRef.current.position.y = position[1] + scroll * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Log panel */}
      <RoundedBox
        args={[2, 1, 0.1]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.2}
          roughness={0.8}
          transparent
          opacity={0.95}
        />
      </RoundedBox>

      {/* Log lines */}
      {lines.map((line, i) => (
        <Text
          key={i}
          position={[-0.9, 0.35 - i * 0.15, 0.06]}
          fontSize={0.07}
          color={color}
          anchorX="left"
          anchorY="middle"
          maxWidth={1.8}
          font="/fonts/JetBrainsMono-Regular.ttf"
        >
          {line}
        </Text>
      ))}

      {/* Title */}
      <Text
        position={[0, 0.6, 0.06]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.ttf"
      >
        SYSTEM LOGS
      </Text>
    </group>
  )
}

export default function MonitoringDashboard({ position = [0, 0, 0] }) {
  const groupRef = useRef()
  const [time, setTime] = React.useState(0)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
    setTime(state.clock.elapsedTime)
  })

  // Generate realistic metric data
  const cpuValues = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => 
      0.3 + Math.sin(i * 0.5 + time * 0.5) * 0.2 + Math.random() * 0.1
    )
  }, [time])

  const memoryValues = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => 
      0.5 + Math.sin(i * 0.3 + time * 0.3) * 0.15 + Math.random() * 0.1
    )
  }, [time])

  const networkValues = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => 
      0.4 + Math.sin(i * 0.7 + time * 0.7) * 0.25 + Math.random() * 0.15
    )
  }, [time])

  // Sample log lines
  const logLines = [
    '[INFO] Service started',
    '[OK] Health check passed',
    '[WARN] High memory usage',
    '[INFO] Request processed',
    '[OK] Cache hit ratio: 94%',
    '[INFO] DB query: 23ms'
  ]

  // Alerts
  const alerts = [
    { pos: [-2.2, -1.8, 0], severity: 'success', label: 'All Systems', active: false },
    { pos: [-0.7, -1.8, 0], severity: 'warning', label: 'High CPU', active: true },
    { pos: [0.7, -1.8, 0], severity: 'info', label: 'Update Available', active: false },
    { pos: [2.2, -1.8, 0], severity: 'critical', label: 'Service Down', active: Math.sin(time * 2) > 0.5 }
  ]

  return (
    <group ref={groupRef} position={position}>
      {/* Metric graphs */}
      <MetricGraph
        position={[-2, 1, 0]}
        label="CPU Usage"
        color="#0ea5e9"
        values={cpuValues}
      />
      
      <MetricGraph
        position={[0, 1, 0]}
        label="Memory"
        color="#8b5cf6"
        values={memoryValues}
      />
      
      <MetricGraph
        position={[2, 1, 0]}
        label="Network"
        color="#10b981"
        values={networkValues}
      />

      {/* Log stream */}
      <LogStream
        position={[0, -0.5, 0]}
        lines={logLines}
        color="#06b6d4"
      />

      {/* Alert indicators */}
      {alerts.map((alert, i) => (
        <AlertIndicator
          key={i}
          position={alert.pos}
          severity={alert.severity}
          label={alert.label}
          active={alert.active}
        />
      ))}
    </group>
  )
}
