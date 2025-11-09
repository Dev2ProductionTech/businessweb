import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO_CONFIG = {
  '/': {
    title: 'Dev2Production.Tech | DevOps, Cloud Engineering & Software Development Services',
    description: 'Expert DevOps automation, cloud engineering, CI/CD pipelines, monitoring solutions, and full-stack development. Transform your software delivery with Dev2Production.Tech — from idea to production.',
    keywords: 'DevOps, Cloud Engineering, CI/CD, AWS, Azure, GCP, Kubernetes, Docker, Terraform, Infrastructure as Code, Monitoring, Web Development, Mobile Development, UI/UX Design',
    canonical: 'https://dev2production.tech/'
  },
  '/services': {
    title: 'Our Services | DevOps, Cloud & Development Solutions | Dev2Production.Tech',
    description: 'Comprehensive DevOps automation, cloud engineering, CI/CD pipelines, infrastructure as code, monitoring, web/mobile development, and UI/UX design services.',
    keywords: 'DevOps Services, Cloud Engineering Services, CI/CD Pipeline, Kubernetes Consulting, AWS Services, Azure Services, GCP Services, Terraform Consulting, Web Development Services, Mobile App Development',
    canonical: 'https://dev2production.tech/#/services'
  },
  '/about': {
    title: 'About Us | Expert DevOps & Cloud Engineering Team | Dev2Production.Tech',
    description: 'Meet the Dev2Production.Tech team — expert DevOps engineers, cloud architects, and full-stack developers dedicated to delivering production-ready solutions.',
    keywords: 'DevOps Team, Cloud Engineering Experts, Software Development Team, DevOps Consultants, Cloud Architects',
    canonical: 'https://dev2production.tech/#/about'
  },
  '/contact': {
    title: 'Contact Us | Get Your Free DevOps Assessment | Dev2Production.Tech',
    description: 'Contact Dev2Production.Tech for a free DevOps assessment. Let\'s discuss how we can optimize your software delivery pipeline and cloud infrastructure.',
    keywords: 'Contact DevOps Consultants, Free DevOps Assessment, Cloud Engineering Consultation, Software Development Inquiry',
    canonical: 'https://dev2production.tech/#/contact'
  },
  '/project-inquiry': {
    title: 'Start Your Project | DevOps & Cloud Engineering Consultation | Dev2Production.Tech',
    description: 'Start your DevOps or cloud engineering project with Dev2Production.Tech. Request a detailed consultation for CI/CD, cloud migration, or infrastructure optimization.',
    keywords: 'DevOps Project, Cloud Migration, CI/CD Implementation, Infrastructure as Code Project, Kubernetes Migration',
    canonical: 'https://dev2production.tech/#/project-inquiry'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Dev2Production.Tech',
    description: 'Privacy policy for Dev2Production.Tech — learn how we protect your data and respect your privacy.',
    keywords: 'Privacy Policy, Data Protection, GDPR',
    canonical: 'https://dev2production.tech/#/privacy-policy'
  },
  '/terms-of-service': {
    title: 'Terms of Service | Dev2Production.Tech',
    description: 'Terms of service and conditions for using Dev2Production.Tech services.',
    keywords: 'Terms of Service, Service Agreement, Legal Terms',
    canonical: 'https://dev2production.tech/#/terms-of-service'
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Dev2Production.Tech',
    description: 'Cookie policy for Dev2Production.Tech — learn about cookies and tracking technologies we use.',
    keywords: 'Cookie Policy, Cookies, Tracking',
    canonical: 'https://dev2production.tech/#/cookie-policy'
  }
}

export function useSEO() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const config = SEO_CONFIG[path] || SEO_CONFIG['/']

    // Update title
    document.title = config.title

    // Update or create meta tags
    updateMetaTag('name', 'description', config.description)
    updateMetaTag('name', 'keywords', config.keywords)
    updateMetaTag('property', 'og:title', config.title)
    updateMetaTag('property', 'og:description', config.description)
    updateMetaTag('property', 'og:url', config.canonical)
    updateMetaTag('name', 'twitter:title', config.title)
    updateMetaTag('name', 'twitter:description', config.description)

    // Update canonical link
    updateCanonical(config.canonical)
  }, [location])
}

function updateMetaTag(attribute, key, content) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`)
  
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  
  element.setAttribute('content', content)
}

function updateCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]')
  
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  
  link.setAttribute('href', url)
}

export default useSEO
