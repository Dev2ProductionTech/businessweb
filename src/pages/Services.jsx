import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Globe, Code, Smartphone, Cloud, Palette, Lightbulb, Zap, Shield, Headphones, Target, CheckCircle } from 'lucide-react'
import Seo from '../components/Seo'
import CloudScene from '../components/3d/CloudScene'
import MonitoringScene from '../components/3d/MonitoringScene'

export default function Services(){
  const services = [
    {
      title: 'Interactive Web Experiences', 
      Icon: Globe,
      desc: 'We design and build immersive web applications that engage users through interactive 3D visualizations, smooth animations, and intuitive interfaces. Perfect for product configurators, virtual showrooms, and data visualization platforms.',
      capabilities: [
        'Real-time 3D product visualization and configuration',
        'Interactive data dashboards with spatial interfaces',
        'Virtual tours and immersive brand experiences',
        'High-performance rendering optimized for all devices'
      ],
      deliverables: ['Custom 3D interface components', 'Cross-browser compatible solutions', 'Performance monitoring and optimization', 'Comprehensive technical documentation']
    },
    {
      title: 'Enterprise Application Development', 
      Icon: Code,
      desc: 'Build scalable, secure applications designed to handle your business complexity. We specialize in creating robust systems that integrate seamlessly with your existing infrastructure while providing room for future growth.',
      capabilities: [
        'Complex business logic and workflow automation',
        'Multi-tenant architecture with role-based access',
        'Real-time collaboration and notification systems',
        'Enterprise-grade security and compliance standards'
      ],
      deliverables: ['Scalable application architecture', 'Secure API infrastructure', 'Administrative control panels', 'Automated testing and deployment pipelines']
    },
    {
      title: 'Mobile Application Development', 
      Icon: Smartphone,
      desc: 'Native-quality mobile applications for iOS and Android that your customers will love. We focus on creating intuitive experiences with offline capabilities, smooth performance, and seamless synchronization.',
      capabilities: [
        'Native iOS and Android feature integration',
        'Offline-first architecture with smart sync',
        'Push notifications and background processing',
        'Biometric authentication and secure storage'
      ],
      deliverables: ['Production-ready mobile applications', 'App store optimization and submission', 'Analytics and crash reporting integration', 'Post-launch monitoring and updates']
    },
    {
      title: 'Cloud Infrastructure & DevOps', 
      Icon: Cloud,
      desc: 'Modern cloud infrastructure that scales with your business. We implement automated deployment pipelines, monitoring systems, and infrastructure that reduces costs while improving reliability and performance.',
      capabilities: [
        'Zero-downtime deployment strategies',
        'Auto-scaling infrastructure that optimizes costs',
        'Comprehensive monitoring and alerting systems',
        'Disaster recovery and backup automation'
      ],
      deliverables: ['Fully automated CI/CD pipelines', 'Infrastructure as code implementation', 'Monitoring and logging dashboards', 'Incident response procedures and documentation']
    },
    {
      title: 'Product Design & UX Strategy', 
      Icon: Palette,
      desc: 'User-centered design that drives business results. Through research, prototyping, and iterative testing, we create interfaces that users intuitively understand and enjoy using, leading to higher engagement and conversion.',
      capabilities: [
        'User research and behavioral analysis',
        'Information architecture and user flows',
        'High-fidelity interactive prototypes',
        'Accessibility compliance and inclusive design'
      ],
      deliverables: ['Complete design system and guidelines', 'Interactive prototypes for user testing', 'Comprehensive style guides', 'Design-to-development handoff documentation']
    },
    {
      title: 'Technical Strategy & Advisory', 
      Icon: Lightbulb,
      desc: 'Strategic technical guidance for critical business decisions. We help you evaluate technology options, plan migrations, audit existing systems, and build technical roadmaps aligned with your business objectives.',
      capabilities: [
        'Technology stack evaluation and selection',
        'Architecture review and optimization recommendations',
        'Legacy system modernization strategies',
        'Team capability assessment and training plans'
      ],
      deliverables: ['Detailed technical roadmaps', 'Architecture decision records', 'Risk assessment and mitigation strategies', 'Executive-level technical presentations']
    }
  ]

  const whyChooseUs = [
    { 
      Icon: Zap, 
      title: 'Efficient Execution', 
      desc: 'We eliminate waste and focus on what matters. Our streamlined processes and deep technical expertise mean faster delivery without compromising quality.'
    },
    { 
      Icon: Shield, 
      title: 'Quality Assurance', 
      desc: 'Every line of code is reviewed, every feature is tested, and every deployment is monitored. We stand behind our work with comprehensive quality guarantees.'
    },
    { 
      Icon: Headphones, 
      title: 'Ongoing Partnership', 
      desc: 'We don\'t disappear after launch. Receive dedicated support throughout development and extended post-launch assistance to ensure long-term success.'
    },
    { 
      Icon: Target, 
      title: 'Business-First Approach', 
      desc: 'Technology serves your business goals, not the other way around. We measure our success by your ROI, user satisfaction, and operational efficiency.'
    }
  ]

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Seo 
        title="DevOps & Cloud Engineering Services | Dev2Production.Tech"
        description="Comprehensive DevOps automation, CI/CD pipelines, cloud infrastructure, Kubernetes orchestration, monitoring solutions, and Infrastructure as Code services for modern enterprises."
        keywords="DevOps services, CI/CD pipelines, Cloud infrastructure, Kubernetes, Docker, Terraform, Infrastructure as Code, DevSecOps, Monitoring, Site Reliability Engineering"
        url="/services"
        image="/meta/og-image.png"
        type="website"
      />
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Services That Drive Results</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From concept to launch, we deliver <strong className="text-brand-orange">production-ready solutions</strong> that help your business grow.
          </p>
          <motion.a
            href="/#/project-inquiry"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-brand-orange-warm text-white px-8 py-4 rounded-xl font-bold text-lg shadow-glow-orange hover:shadow-glow-orange-lg transition-all"
          >
            <Lightbulb className="w-5 h-5" />
            Start Your Project
          </motion.a>
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
            <h2 className="text-3xl font-bold text-white mb-2">Cloud Infrastructure Architecture</h2>
            <p className="text-gray-400">Scalable, resilient systems built for modern workloads</p>
          </div>
          <Suspense fallback={<div className="h-96 rounded-xl animate-pulse bg-dark-800/50" />}>
            <CloudScene />
          </Suspense>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {services.map((service, i) => {
            const IconComponent = service.Icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full"
              >
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-warm flex items-center justify-center mb-6 shadow-glow-orange">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="mb-6 text-gray-300 leading-relaxed">{service.desc}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-brand-cyan mb-3 uppercase tracking-wide">Key Capabilities</h4>
                    <ul className="space-y-2">
                      {service.capabilities.map((cap, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-brand-orange mt-1 flex-shrink-0">▪</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-6 mt-6">
                    <h4 className="text-sm font-semibold text-white mb-3">What You Receive</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.a
                  href="/#/project-inquiry"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 block text-center bg-gradient-to-r from-brand-orange to-brand-orange-warm text-white px-6 py-3 rounded-lg font-semibold shadow-glow-orange hover:shadow-glow-orange-lg transition-all"
                >
                  Get Started →
                </motion.a>
              </motion.div>
            )
          })}
        </div>

        {/* 3D Monitoring Dashboard Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 mb-20"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Real-Time System Monitoring</h2>
            <p className="text-gray-400">Comprehensive observability for production systems</p>
          </div>
          <Suspense fallback={<div className="h-96 rounded-xl animate-pulse bg-dark-800/50" />}>
            <MonitoringScene />
          </Suspense>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Why Choose Dev2Production?
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            We combine technical excellence with business understanding to deliver solutions that work in the real world.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => {
              const IconComponent = item.Icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center hover:border-brand-cyan/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 rounded-3xl border-2 border-brand-cyan/30 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Our Proven Methodology</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A structured approach refined through hundreds of successful projects
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Discovery & Planning', 
                desc: 'We start by understanding your business objectives, user needs, and technical constraints. This phase includes stakeholder interviews, competitive analysis, and requirement documentation.'
              },
              { 
                step: '02', 
                title: 'Design & Prototyping', 
                desc: 'Our design team creates wireframes, user flows, and high-fidelity prototypes. You\'ll see and interact with the solution before development begins, ensuring alignment with your vision.'
              },
              { 
                step: '03', 
                title: 'Iterative Development', 
                desc: 'We build in short cycles with regular demonstrations. This agile approach allows for feedback incorporation and ensures the final product matches your evolving requirements.'
              },
              { 
                step: '04', 
                title: 'Launch & Optimization', 
                desc: 'Deployment includes thorough testing, performance optimization, and monitoring setup. We provide training and remain available for ongoing support and enhancements.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-brand-cyan/20 mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get a free technical assessment and project roadmap. Let's discuss how we can help achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/#/project-inquiry"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-brand-orange to-brand-orange-warm text-white px-10 py-5 rounded-xl font-bold text-lg shadow-glow-orange hover:shadow-glow-orange-lg transition-all"
            >
              Start Your Project →
            </motion.a>
            <motion.a
              href="/#/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-brand-cyan/50 text-white px-10 py-5 rounded-xl font-bold text-lg hover:border-brand-cyan hover:shadow-glow-cyan transition-all"
            >
              Quick Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
