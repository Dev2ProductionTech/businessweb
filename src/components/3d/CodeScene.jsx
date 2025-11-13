import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { CodeBlock3D } from './BusinessIcons'

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <CodeBlock3D position={[0, 0, 0]} />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={2}
        enablePan={false}
      />
      <Environment preset="sunset" />
    </>
  )
}

export default function CodeScene() {
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
      <div className="w-full h-64 bg-gradient-to-br from-brand-cyan/10 to-brand-orange/10 rounded-xl flex items-center justify-center">
        <div className="text-brand-cyan text-6xl">{'</>'}</div>
      </div>
    )
  }

  return (
    <div className="w-full h-64">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
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
