import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { CodeBlock3D } from './BusinessIcons'

export default function CodeScene() {
  return (
    <div className="w-full h-64">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={1} />
          
          <CodeBlock3D position={[0, 0, 0]} />
          
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  )
}
