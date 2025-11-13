import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', Icon: Github, url: 'https://github.com/dev2productiontech', ariaLabel: 'Visit our GitHub' },
    { name: 'LinkedIn', Icon: Linkedin, url: 'https://www.linkedin.com/company/dev2production', ariaLabel: 'Connect on LinkedIn' },
  ]

  const quickLinks = [
    { name: 'Services', href: '/#/services' },
    { name: 'About Us', href: '/#/about' },
    { name: 'Articles', href: '/#/articles' },
    { name: 'Contact', href: '/#/contact' },
    { name: 'Project Inquiry', href: '/#/project-inquiry' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/#/privacy-policy' },
    { name: 'Terms of Service', href: '/#/terms-of-service' },
    { name: 'Cookie Policy', href: '/#/cookie-policy' },
  ]

  const services = [
    'DevOps Automation',
    'Cloud Engineering',
    'CI/CD Pipelines',
    'Infrastructure as Code'
  ]

  return (
    <footer className="glass-dark border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img 
                src="/logo.svg" 
                alt="Dev2Production.Tech" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional software development firm delivering production-grade applications for growing businesses.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-orange" />
                <a href="mailto:info@dev2production.tech" className="hover:text-brand-orange transition-colors">
                  info@dev2production.tech
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5" />
                <span>Remote-first, Global reach</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-brand-cyan transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map(service => (
                <li key={service} className="flex items-start gap-2">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {legalLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-brand-orange transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold text-white text-sm mb-3">Connect</h5>
              <div className="flex gap-3">
                {socialLinks.map(link => {
                  const IconComponent = link.Icon
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-brand-orange/20 hover:border-brand-orange/50 border border-white/10 transition-all group"
                      aria-label={link.ariaLabel}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Dev2Production.Tech. All Rights Reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="/#/privacy-policy" className="hover:text-brand-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="/#/terms-of-service" className="hover:text-brand-cyan transition-colors">
                Terms of Service
              </a>
              <a href="/#/cookie-policy" className="hover:text-brand-cyan transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
