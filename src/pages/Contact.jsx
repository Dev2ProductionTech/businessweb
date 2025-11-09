import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, CheckCircle2, Zap, Target, Shield, Headphones } from 'lucide-react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  const contactInfo = [
    { Icon: Mail, label: 'Email', value: 'info@dev2production.tech', href: 'mailto:info@dev2production.tech' },
    { Icon: MapPin, label: 'Location', value: 'Remote-first, Global reach', href: null },
    { Icon: Clock, label: 'Response Time', value: 'Within 4 business hours', href: null }
  ]

  const benefits = [
    { Icon: Zap, text: 'Fast iteration cycles with weekly demos' },
    { Icon: Target, text: 'Clear project milestones and deliverables' },
    { Icon: Headphones, text: 'Dedicated technical point of contact' },
    { Icon: Shield, text: 'NDA and intellectual property protection' },
    { Icon: CheckCircle2, text: 'Quality assurance and code review process' }
  ]

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Helmet>
        <title>Contact Us  Dev2Production.Tech</title>
        <meta name="description" content="Get in touch with Dev2Production.Tech for custom software development, technical consulting, or partnership opportunities. Response within 4 business hours." />
        <meta name="keywords" content="contact software development, custom application inquiry, technical consulting" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Build Something Great</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your project? Schedule a free technical consultation to explore how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <h2 className="text-2xl font-bold mb-2 gradient-text">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you within 4 business hours.
              </p>
              <ContactForm />
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const IconComponent = info.Icon
                  return (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-white font-medium hover:text-brand-cyan transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 gradient-text">What to Expect</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => {
                  const IconComponent = benefit.Icon
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">{benefit.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="glass-card p-8 rounded-3xl bg-gradient-to-br from-brand-orange/10 to-brand-cyan/10 border-2 border-brand-orange/30">
              <h3 className="text-lg font-bold mb-3 text-white">Business Hours</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We operate across multiple time zones to ensure responsive communication with our global clients.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-brand-cyan">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Weekend</span>
                  <span className="font-semibold text-gray-400">Emergency support only</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-10 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Prefer a Direct Call?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Schedule a free 30-minute technical consultation to discuss your project requirements, timeline, and how we can help.
            </p>
            <a
              href="mailto:info@dev2production.tech?subject=Schedule Consultation"
              className="inline-block bg-gradient-to-r from-brand-orange to-brand-orange-warm text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform shadow-glow-orange"
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
