import React, { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ProjectInquiry from './pages/ProjectInquiry'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import { useSEO } from './utils/useSEO'

// Scroll to top component using useLayoutEffect for synchronous execution
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  
  // Update SEO meta tags on route change
  useSEO()

  useLayoutEffect(() => {
    // Prefer scrolling to the shared top anchor so fixed navbar doesn't overlap
    const anchor = document.getElementById('page-top-anchor')
    if (anchor && typeof anchor.scrollIntoView === 'function') {
      try {
        anchor.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' })
        return
      } catch (_) {
        // Fallback below
      }
    }
    // Fallback: set scroll on window and document roots
    window.scrollTo(0, 0)
    if (document?.documentElement) document.documentElement.scrollTop = 0
    if (document?.body) document.body.scrollTop = 0
  }, [pathname, hash])

  return null
}

// Shared page layout that injects a top-of-page anchor for reliable scroll targets
function PageLayout({ children }) {
  return (
    <div>
      {/* Invisible anchor to scroll to; scroll-mt guards against fixed navbar overlap */}
      <div id="page-top-anchor" aria-hidden="true" className="h-0 w-0 overflow-hidden scroll-mt-24" />
      {children}
    </div>
  )
}

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<PageLayout><Home/></PageLayout>} />
          <Route path="/about" element={<PageLayout><About/></PageLayout>} />
          <Route path="/services" element={<PageLayout><Services/></PageLayout>} />
          <Route path="/contact" element={<PageLayout><Contact/></PageLayout>} />
          <Route path="/project-inquiry" element={<PageLayout><ProjectInquiry/></PageLayout>} />
          <Route path="/privacy-policy" element={<PageLayout><PrivacyPolicy/></PageLayout>} />
          <Route path="/terms-of-service" element={<PageLayout><TermsOfService/></PageLayout>} />
          <Route path="/cookie-policy" element={<PageLayout><CookiePolicy/></PageLayout>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
