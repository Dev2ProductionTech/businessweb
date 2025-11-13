// Generate sitemap.xml for static deployment
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseUrl = 'https://dev2production.tech'

// Blog post slugs
const blogSlugs = [
  'devops-transforms-startups-continuous-delivery',
  'production-ready-cicd-pipeline-2025',
  'cloud-automation-mistakes-cost-startups',
  'getting-started-with-cicd',
  'kubernetes-best-practices',
  'infrastructure-as-code-terraform'
]

// Static routes
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.8', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/project-inquiry', priority: '0.8', changefreq: 'monthly' },
  { path: '/articles', priority: '0.9', changefreq: 'daily' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookie-policy', priority: '0.3', changefreq: 'yearly' }
]

// Blog routes
const blogRoutes = blogSlugs.map(slug => ({
  path: `/articles/${slug}`,
  priority: '0.7',
  changefreq: 'monthly'
}))

const allRoutes = [...staticRoutes, ...blogRoutes]

// Get current date in ISO format
const lastmod = new Date().toISOString().split('T')[0]

// Generate sitemap XML
const generateSitemap = () => {
  const urls = allRoutes.map(route => `
  <url>
    <loc>${baseUrl}/#${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`
}

// Write sitemap to dist and public folders
const writeSitemap = () => {
  const sitemap = generateSitemap()
  
  // Write to public folder (for dev server)
  const publicPath = path.join(__dirname, '../public/sitemap.xml')
  fs.writeFileSync(publicPath, sitemap)
  console.log('✅ Sitemap generated: public/sitemap.xml')
  
  // Write to dist folder (for production build)
  const distPath = path.join(__dirname, '../dist/sitemap.xml')
  if (fs.existsSync(path.dirname(distPath))) {
    fs.writeFileSync(distPath, sitemap)
    console.log('✅ Sitemap generated: dist/sitemap.xml')
  }
  
  console.log(`📄 Generated sitemap with ${allRoutes.length} URLs`)
}

writeSitemap()
