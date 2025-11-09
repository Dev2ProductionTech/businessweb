import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ClientLogos({ logos }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-16 px-6 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-400 mb-8">
            Trusted by innovative companies worldwide
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {logos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center glass-card rounded-xl p-6 hover:scale-110 transition-transform duration-300"
              >
                <span className="text-4xl mb-2">{client.logo}</span>
                <span className="text-sm text-gray-400 font-medium">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">✅</div>
            <h4 className="text-white font-semibold mb-1">Money-Back Guarantee</h4>
            <p className="text-gray-400 text-sm">30-day refund policy</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🏆</div>
            <h4 className="text-white font-semibold mb-1">Award Winning</h4>
            <p className="text-gray-400 text-sm">Top-rated on Upwork</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="text-white font-semibold mb-1">Secure & Private</h4>
            <p className="text-gray-400 text-sm">NDA protected</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-white font-semibold mb-1">Fast Delivery</h4>
            <p className="text-gray-400 text-sm">On-time, every time</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
