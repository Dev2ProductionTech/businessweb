import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavItem = ({to, children}) => (
  <NavLink
    to={to}
    className={({isActive}) =>
      `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
        isActive 
          ? 'text-white bg-gradient-to-r from-brand-orange to-brand-orange-warm shadow-glow-orange' 
          : 'text-gray-300 hover:text-brand-cyan hover:bg-white/10'
      }`
    }
  >
    {children}
  </NavLink>
)

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark shadow-lg shadow-black/20' : 'glass-dark/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="Dev2Production.Tech" 
                className="h-16 w-auto"
              />
            </Link>
          </motion.div>
          <nav className="hidden md:flex space-x-2">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
          <div className="md:hidden">
            <button 
              onClick={()=>setOpen(v=>!v)} 
              aria-label="Toggle menu" 
              className="p-2 rounded-md text-gray-300 hover:text-brand-cyan hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-dark border-t border-white/10"
        >
          <nav className="px-4 py-4 space-y-2">
            <Link to="/" onClick={()=>setOpen(false)} className="block px-4 py-2 rounded-lg text-gray-300 hover:text-brand-cyan hover:bg-white/10 transition-colors">Home</Link>
            <Link to="/services" onClick={()=>setOpen(false)} className="block px-4 py-2 rounded-lg text-gray-300 hover:text-brand-cyan hover:bg-white/10 transition-colors">Services</Link>
            <Link to="/about" onClick={()=>setOpen(false)} className="block px-4 py-2 rounded-lg text-gray-300 hover:text-brand-cyan hover:bg-white/10 transition-colors">About</Link>
            <Link to="/contact" onClick={()=>setOpen(false)} className="block px-4 py-2 rounded-lg text-gray-300 hover:text-brand-cyan hover:bg-white/10 transition-colors">Contact</Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
