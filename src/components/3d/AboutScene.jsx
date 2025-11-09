import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { NetworkGlobe } from './BusinessIcons'

export default function AboutScene() {
  return (
    <div className="w-full h-80 md:h-96">
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8b5cf6" />
          
          <NetworkGlobe position={[0, 0, 0]} />
          
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}
