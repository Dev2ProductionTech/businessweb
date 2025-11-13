import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import CloudInfrastructure from './CloudInfrastructure'

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#0ea5e9" />
      <pointLight position={[5, -5, 5]} intensity={0.5} color="#8b5cf6" />
      
      <CloudInfrastructure position={[0, 0, 0]} />
      
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.8}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
      />
      <Environment preset="sunset" />
    </>
  )
}

export default function CloudScene() {
  const [canLoad, setCanLoad] = useState(false)

  useEffect(() => {
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
      <div className="w-full h-80 md:h-96 bg-gradient-to-br from-brand-cyan/10 to-brand-orange/10 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">☁️</div>
          <div className="text-brand-cyan text-lg font-semibold">Cloud Infrastructure</div>
          <div className="text-gray-400 text-sm mt-2">Scalable • Resilient • Optimized</div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-80 md:h-96">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}
