import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import MonitoringDashboard from './MonitoringDashboard'

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 3]} intensity={1} />
      <pointLight position={[-3, -3, -3]} intensity={0.4} color="#0ea5e9" />
      
      <MonitoringDashboard position={[0, 0, 0]} />
      
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.3}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
      <Environment preset="night" />
    </>
  )
}

export default function MonitoringScene() {
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
      <div className="w-full h-80 md:h-96 bg-gradient-to-br from-brand-cyan/10 to-green-500/10 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📊</div>
          <div className="text-brand-cyan text-lg font-semibold">System Monitoring</div>
          <div className="text-gray-400 text-sm mt-2">Real-time metrics • Alerts • Logs</div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-80 md:h-96">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 45 }}
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
