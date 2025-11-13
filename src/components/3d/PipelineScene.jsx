import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import CICDPipeline from './CICDPipeline'

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#8b5cf6" />
      <pointLight position={[5, -5, 5]} intensity={0.4} color="#0ea5e9" />
      
      <CICDPipeline position={[0, 0, 0]} />
      
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      <Environment preset="city" />
    </>
  )
}

export default function PipelineScene() {
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
      <div className="w-full h-80 md:h-96 bg-gradient-to-br from-brand-cyan/10 to-purple-500/10 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔄</div>
          <div className="text-brand-cyan text-lg font-semibold">CI/CD Pipeline</div>
          <div className="text-gray-400 text-sm mt-2">Code → Build → Test → Deploy</div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-80 md:h-96">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
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
