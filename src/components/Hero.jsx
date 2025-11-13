import React, { Suspense, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei'

function AnimatedSphere3D() {
  return (
    <Sphere args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#00E8FF"
        attach="material"
        distort={0.6}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  )
}

function Scene3DContent() {
  return (
    <>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#FF6A00" intensity={0.5} />
      <AnimatedSphere3D />
      <Environment preset="night" />
    </>
  )
}

export default function Hero(){
  const [show3D, setShow3D] = useState(false)

  useEffect(() => {
    // Only show 3D on devices that can handle it
    const isDesktop = window.innerWidth > 768
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement('canvas')
        return !!(window.WebGLRenderingContext && 
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
      } catch (e) {
        return false
      }
    })()
    
    setShow3D(isDesktop && hasWebGL)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      {/* 3D Background */}
      {show3D && (
        <div className="absolute inset-0 opacity-40">
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
          >
            <Suspense fallback={null}>
              <Scene3DContent />
            </Suspense>
          </Canvas>
        </div>
      )}
      
      {/* Fallback gradient for non-3D */}
      {!show3D && (
        <div className="absolute inset-0 bg-gradient-radial from-brand-cyan/20 via-transparent to-transparent opacity-40" />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-950" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-brand-orange via-brand-orange-warm to-brand-cyan bg-clip-text text-transparent">Ship Quality Products</span>
            <br />
            <span className="text-white">Faster Than Ever</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We transform ideas into production-ready applications using cutting-edge 3D web technologies, modern frameworks, and DevOps excellence.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/services" 
                className="inline-block bg-gradient-to-r from-brand-orange to-brand-orange-warm text-white px-8 py-4 rounded-xl font-semibold shadow-glow-orange hover:shadow-glow-orange-lg transition-all"
              >
                Explore Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="inline-block glass border-2 border-brand-cyan/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-brand-cyan transition-all"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {['Interactive 3D Experiences', 'Cloud Infrastructure', 'Enterprise Security', 'Production Grade'].map((feature, i) => (
              <span 
                key={i} 
                className="glass px-4 py-2 rounded-full text-sm text-gray-300 border border-brand-cyan/30"
              >
                {feature}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-brand-cyan/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-brand-cyan rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
