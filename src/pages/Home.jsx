import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Layers, Zap, Shield } from 'lucide-react'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import CodeScene from '../components/3d/CodeScene'
import { testimonials, stats } from '../data/testimonials'

export default function Home(){
  const features = [
    { 
      Icon: Code2,
      title: "Custom Software Development", 
      desc: "Tailored applications built to your exact specifications. We handle complexity so you can focus on your business, delivering solutions that scale with your growth." 
    },
    { 
      Icon: Layers,
      title: "System Integration", 
      desc: "Seamlessly connect your existing tools and platforms. We build bridges between systems, automate workflows, and create unified experiences across your technology stack." 
    },
    { 
      Icon: Zap,
      title: "Performance & Reliability", 
      desc: "Applications engineered for speed and uptime. Through careful architecture and rigorous testing, we ensure your systems perform under pressure and recover gracefully from failures." 
    }
  ]

  return (
    <div className="pt-16">
      <Helmet>
        <title>Dev2Production.Tech — Enterprise Software Development</title>
        <meta name="description" content="Professional software development firm building production-grade applications for growing companies. Specializing in web applications, mobile solutions, and cloud infrastructure." />
        <meta name="keywords" content="software development, application development, web development, mobile apps, cloud infrastructure" />
      </Helmet>
      
      <Hero />
      
      {/* Value Proposition Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-brand-orange/5 to-dark-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">What We Do</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              We build software that works in production. Not prototypes, not demos — complete, tested, deployed applications that your business depends on.
            </p>
          </motion.div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-16">
            {features.map((feature, i) => {
              const IconComponent = feature.Icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-warm flex items-center justify-center mb-6 shadow-glow-orange">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* 3D Code Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Suspense fallback={<div className="h-64 glass rounded-2xl animate-pulse" />}>
              <CodeScene />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-brand-cyan/20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Track Record
            </h2>
            <p className="text-gray-400 text-lg">
              Numbers that reflect our commitment to client success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-xl text-center hover:scale-105 transition-transform"
              >
                <div className="text-5xl font-bold gradient-text mb-3">{stat.value}</div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* Approach Overview */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              How We Approach Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A systematic process that reduces risk and delivers predictable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                step: "01", 
                title: "Understand", 
                desc: "We start by deeply understanding your business context, user needs, and technical environment. This discovery phase ensures we're solving the right problems before writing any code.",
                Icon: Shield
              },
              { 
                step: "02", 
                title: "Design", 
                desc: "Architecture and interface design happen in parallel. We create technical blueprints and user-facing prototypes, validating both with your team before moving forward.",
                Icon: Layers
              },
              { 
                step: "03", 
                title: "Build", 
                desc: "Development happens in focused sprints with regular demonstrations. You see progress continuously and provide feedback that shapes the final product.",
                Icon: Code2
              },
              { 
                step: "04", 
                title: "Deploy", 
                desc: "Launch isn't the end — it's the beginning. We handle deployment, monitoring setup, team training, and remain available for ongoing optimization and support.",
                Icon: Zap
              }
            ].map((item, i) => {
              const IconComponent = item.Icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 relative overflow-hidden group"
                >
                  <div className="text-6xl font-bold text-brand-cyan/20 absolute top-2 right-4">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 rounded-3xl border-2 border-brand-orange/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-cyan/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Start Building?
              </h2>
              <p className="text-gray-300 text-xl mb-4">
                Let's discuss your project requirements and explore how we can help you achieve your goals.
              </p>
              <p className="text-brand-cyan font-semibold mb-8">
                Free technical consultation and project assessment
              </p>
              <motion.a
                href="/#/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-brand-orange-warm text-white px-10 py-5 rounded-xl font-bold text-lg shadow-glow-orange hover:shadow-glow-orange-lg transition-all"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <p className="text-gray-500 text-sm mt-6">
                Typical response time: within 4 business hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
