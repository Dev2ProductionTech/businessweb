import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PresentationControls, ContactShadows } from '@react-three/drei'
import AnimatedSphere from './AnimatedSphere'
import ParticleField from './ParticleField'
import { FloatingBox, FloatingTorus, FloatingOctahedron } from './FloatingGeometry'

function Scene3DContent({ showGeometry }) {
  return (
    <PresentationControls
      global
      rotation={[0, 0.3, 0]}
      polar={[-0.2, Math.PI / 2]}
      azimuth={[-Math.PI / 4, Math.PI / 4]}
      config={{ mass: 2, tension: 400 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight 
        castShadow 
        position={[5, 10, 5]} 
        intensity={1.2}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight position={[-10, 10, -10]} intensity={0.4} penumbra={0.5} />

      {/* Main hero sphere */}
      <AnimatedSphere position={[0, 0.2, 0]} color="#0ea5e9" />

      {showGeometry && (
        <>
          <FloatingBox position={[-2.2, 0.8, -1.5]} color="#8b5cf6" />
          <FloatingTorus position={[2.2, -0.6, -1]} color="#ec4899" />
          <FloatingOctahedron position={[1.5, 1.2, -2.5]} color="#06b6d4" />
        </>
      )}

      {/* Subtle particle field for depth */}
      <ParticleField count={500} />

      {/* Ground contact shadow for realism */}
      <ContactShadows position={[0, -1.2, 0]} opacity={0.6} scale={10} blur={1.5} far={2.5} />

      {/* Environment provides reflections and lighting */}
      <Environment preset="studio" />
    </PresentationControls>
  )
}

export default function Scene3D({ showGeometry = true }) {
  const [canLoad, setCanLoad] = useState(false)

  useEffect(() => {
    // Check if device can handle 3D
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement('canvas')
        return !!(window.WebGLRenderingContext && 
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
      } catch (e) {
        return false
      }
    })()
    
    setCanLoad(hasWebGL)
  }, [])

  if (!canLoad) {
    return (
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-brand-cyan/10 via-transparent to-transparent" />
    )
  }

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas 
        shadows 
        dpr={[1, 1.5]} 
        camera={{ position: [0, 0, 6], fov: 50 }} 
        gl={{ antialias: true, alpha: true }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Scene3DContent showGeometry={showGeometry} />
        </Suspense>
      </Canvas>
    </div>
  )
}
