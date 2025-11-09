import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { FloatingServiceIcon } from './BusinessIcons'

export default function ServicesScene() {
  const services = [
    { pos: [-2.5, 0, 0], color: '#0ea5e9', icon: '💻' },
    { pos: [0, 0, 0], color: '#8b5cf6', icon: '📱' },
    { pos: [2.5, 0, 0], color: '#ec4899', icon: '☁️' },
  ]

  return (
    <div className="w-full h-64 md:h-96">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <pointLight position={[-5, 5, -5]} intensity={0.5} color="#8b5cf6" />
          
          {services.map((service, i) => (
            <FloatingServiceIcon
              key={i}
              position={service.pos}
              color={service.color}
              icon={service.icon}
              index={i}
            />
          ))}
          
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
