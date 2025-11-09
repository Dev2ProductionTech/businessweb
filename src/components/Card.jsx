import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Card({title, children, className='', icon, delay = 0}){
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group relative p-8 glass rounded-2xl border border-brand-orange/20 hover:border-brand-cyan/50 transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-cyan rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-4xl">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold mb-3 gradient-text-blue group-hover:text-white transition-all">{title}</h3>
        <div className="text-gray-400 group-hover:text-gray-300 transition-colors">{children}</div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}
