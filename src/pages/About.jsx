import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Globe2, CheckCircle2, Rocket } from 'lucide-react'
import Seo from '../components/Seo'
import CloudScene from '../components/3d/CloudScene'

export default function About(){
  const values = [
    { 
      Icon: CheckCircle2, 
      title: 'Technical Excellence', 
      desc: 'We maintain the highest standards in software craftsmanship, applying proven engineering principles and rigorous quality control to every project.'
    },
    { 
      Icon: Users, 
      title: 'Client Partnership', 
      desc: 'Your success is our success. We work as an extension of your team, providing transparent communication and collaborative problem-solving throughout the journey.'
    },
    { 
      Icon: TrendingUp, 
      title: 'Continuous Innovation', 
      desc: 'The technology landscape evolves rapidly. We stay ahead by continuously learning, experimenting with emerging tools, and applying what works to deliver better solutions.'
    },
    { 
      Icon: Rocket, 
      title: 'Pragmatic Delivery', 
      desc: 'We balance ambition with practicality. Our focus is on shipping working software that delivers value, not chasing trends or over-engineering solutions.'
    }
  ]

  const achievements = [
    { Icon: Award, title: 'Industry Recognition', desc: 'Consistently rated among top development partners' },
    { Icon: Users, title: '200+ Projects', desc: 'Successfully delivered across industries' },
    { Icon: TrendingUp, title: '95% Client Retention', desc: 'Long-term partnerships built on trust' },
    { Icon: Globe2, title: 'Global Reach', desc: 'Serving clients across four continents' }
  ]

  const expertise = [
    {
      area: 'Financial Services',
      desc: 'Payment processing systems, trading platforms, regulatory compliance solutions, and secure financial data management.'
    },
    {
      area: 'Healthcare & Life Sciences',
      desc: 'Patient portals, telemedicine platforms, medical device integration, and HIPAA-compliant application development.'
    },
    {
      area: 'E-commerce & Retail',
      desc: 'Omnichannel commerce platforms, inventory management systems, personalization engines, and fulfillment automation.'
    },
    {
      area: 'SaaS & Enterprise',
      desc: 'Multi-tenant applications, workflow automation, analytics dashboards, and API-first architecture for scalable platforms.'
    }
  ]

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Seo 
        title="About Us | Dev2Production.Tech - Expert DevOps & Cloud Engineering Team"
        description="Meet the Dev2Production.Tech team specializing in DevOps automation, cloud infrastructure, and continuous delivery solutions for startups and enterprises worldwide."
        keywords="DevOps team, Cloud Engineering experts, DevOps consulting, Infrastructure as Code specialists, CI/CD experts"
        url="/about"
        image="/meta/og-image.png"
        type="website"
      />
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Dev2Production</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We build software that businesses rely on every day — from initial concept through production deployment and beyond.
          </p>
        </motion.div>

        {/* 3D Cloud Infrastructure Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 mb-20"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Global Cloud Infrastructure</h2>
            <p className="text-gray-400">Serving clients worldwide with scalable solutions</p>
          </div>
          <Suspense fallback={<div className="h-96 rounded-xl animate-pulse bg-dark-800/50" />}>
            <CloudScene />
          </Suspense>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((item, i) => {
              const IconComponent = item.Icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 rounded-3xl border-2 border-brand-cyan/30 mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Approach</h2>
          <div className="text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              Founded in 2020, Dev2Production was established to address a gap we observed in the software development industry: the disconnect between promising demos and production-ready solutions.
            </p>
            <p>
              Too many projects fail not because of poor coding, but because of inadequate planning, unrealistic architectures, or insufficient consideration for operations and maintenance. We set out to do things differently.
            </p>
            <p>
              Our team brings experience from companies where uptime and performance aren't negotiable — financial services, healthcare, and high-traffic consumer applications. We apply the same discipline and rigor to every project, regardless of size.
            </p>
            <p>
              We believe in transparent communication, realistic estimates, and delivering working software incrementally. No surprises, no vaporware — just solid engineering that stands the test of production use.
            </p>
          </div>
        </motion.div>

        {/* Industry Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Industry Expertise
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Deep domain knowledge across the industries we serve
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.area}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Our Core Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => {
              const IconComponent = value.Icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl border-2 border-brand-orange/20 hover:border-brand-cyan/50 transition-all flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-brand-orange" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl mb-3">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Team Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-3xl border-2 border-brand-cyan/30">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Team</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We're a distributed team of senior engineers, architects, and designers who have worked at companies you know — from Silicon Valley startups to Fortune 500 enterprises.
              </p>
              <p className="text-gray-300 leading-relaxed">
                What brings us together is a shared commitment to craft and a belief that software should be built to last, not just to ship.
              </p>
            </div>

            <div className="glass-card p-10 rounded-3xl border-2 border-brand-cyan/30">
              <h3 className="text-2xl font-bold mb-4 gradient-text">How We Work</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We integrate directly with your team, adapting to your processes while bringing our own best practices. Whether you need an embedded team member or a complete product squad, we flex to fit your needs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Communication is primarily asynchronous with regular synchronous checkpoints, optimized for productivity across time zones.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 rounded-3xl border-2 border-brand-orange/50 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-cyan/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Let's Talk About Your Project
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We're selective about the projects we take on, ensuring we can deliver exceptional results. If you're building something meaningful and need a technical partner you can trust, let's connect.
            </p>
            <motion.a
              href="/#/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-brand-orange to-brand-orange-warm text-white px-10 py-5 rounded-xl font-bold text-lg shadow-glow-orange hover:shadow-glow-orange-lg transition-all"
            >
              Start a Conversation →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
