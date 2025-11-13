// Blog post metadata - articles stored in /public/blog/posts/*.md files

const posts = [
  {
    id: 'devops-transforms-startups-continuous-delivery',
    slug: 'devops-transforms-startups-continuous-delivery',
    title: 'How DevOps Transforms Startups from Chaos to Continuous Delivery',
    excerpt: 'Discover how implementing DevOps practices can transform your startup from chaotic deployments to seamless continuous delivery, reducing time-to-market by up to 60%.',
    author: 'Dev2Production Team',
    date: '2025-11-12',
    readTime: '9 min read',
    tags: ['DevOps', 'Startups', 'Continuous Delivery', 'Automation', 'CI/CD'],
    image: '/images/devops-transformation.jpg',
    published: true,
    markdownFile: 'devops-transforms-startups-continuous-delivery.md'
  },
  {
    id: 'production-ready-cicd-pipeline-2025',
    slug: 'production-ready-cicd-pipeline-2025',
    title: 'The Ultimate Guide to Setting Up a Production-Ready CI/CD Pipeline in 2025',
    excerpt: 'Build a bulletproof CI/CD pipeline from scratch with GitHub Actions, automated testing, deployment strategies, and security best practices for modern development teams.',
    author: 'Dev2Production Team',
    date: '2025-11-12',
    readTime: '11 min read',
    tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'Automation', 'Pipeline'],
    image: '/images/cicd-pipeline-2025.jpg',
    published: true,
    markdownFile: 'production-ready-cicd-pipeline-2025.md'
  },
  {
    id: 'cloud-automation-mistakes-cost-startups',
    slug: 'cloud-automation-mistakes-cost-startups',
    title: 'Top 5 Cloud Automation Mistakes That Cost Startups Thousands — and How to Fix Them',
    excerpt: 'Avoid the costliest cloud automation mistakes that drain startup budgets. Learn from real failures and implement proven solutions to reduce cloud costs by 40-70%.',
    author: 'Dev2Production Team',
    date: '2025-11-12',
    readTime: '10 min read',
    tags: ['Cloud Automation', 'Cost Optimization', 'FinOps', 'AWS', 'DevOps'],
    image: '/images/cloud-automation-mistakes.jpg',
    published: true,
    markdownFile: 'cloud-automation-mistakes-cost-startups.md'
  },
  {
    id: 'getting-started-with-cicd',
    slug: 'getting-started-with-cicd',
    title: 'Getting Started with CI/CD: A Comprehensive Guide',
    excerpt: 'Learn how to implement Continuous Integration and Continuous Deployment pipelines to accelerate your software delivery and improve code quality.',
    author: 'Dev2Production Team',
    date: '2025-11-09',
    readTime: '8 min read',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Best Practices'],
    image: '/images/cicd-pipeline.jpg',
    published: true,
    markdownFile: 'getting-started-with-cicd.md'
  },
  {
    id: 'kubernetes-best-practices',
    slug: 'kubernetes-best-practices',
    title: 'Kubernetes Best Practices for Production',
    excerpt: 'Essential best practices for running Kubernetes clusters in production environments, from resource management to security and monitoring.',
    author: 'Dev2Production Team',
    date: '2025-11-08',
    readTime: '10 min read',
    tags: ['Kubernetes', 'DevOps', 'Cloud', 'Best Practices', 'Security'],
    image: '/images/kubernetes.jpg',
    published: true,
    markdownFile: 'kubernetes-best-practices.md'
  },
  {
    id: 'infrastructure-as-code-terraform',
    slug: 'infrastructure-as-code-terraform',
    title: 'Infrastructure as Code with Terraform: Complete Guide',
    excerpt: 'Master Infrastructure as Code using Terraform. Learn how to manage cloud resources efficiently, maintain consistency, and scale your infrastructure.',
    author: 'Dev2Production Team',
    date: '2025-11-07',
    readTime: '12 min read',
    tags: ['Terraform', 'IaC', 'DevOps', 'Cloud', 'AWS', 'Infrastructure'],
    image: '/images/terraform.jpg',
    published: true,
    markdownFile: 'infrastructure-as-code-terraform.md'
  }
]

// Cache for loaded markdown content
const contentCache = {}

// Function to load markdown content dynamically
export async function loadMarkdownContent(markdownFile) {
  if (contentCache[markdownFile]) {
    return contentCache[markdownFile]
  }

  try {
    const response = await fetch(`/blog/posts/${markdownFile}`)
    const text = await response.text()
    
    // Extract content after frontmatter
    const contentMatch = text.match(/---[\s\S]*?---\s*([\s\S]*)/)
    const content = contentMatch ? contentMatch[1] : text
    
    contentCache[markdownFile] = content
    return content
  } catch (error) {
    console.error(`Failed to load ${markdownFile}:`, error)
    return ''
  }
}

export const blogPosts = posts

// Utility functions
export const getAllPosts = () => {
  return blogPosts.filter(post => post.published)
}

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug && post.published)
}

export const getPostsByTag = (tag) => {
  return blogPosts.filter(post => 
    post.published && post.tags.includes(tag)
  )
}

export const getAllTags = () => {
  const tags = new Set()
  blogPosts.forEach(post => {
    if (post.published) {
      post.tags.forEach(tag => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
}

export const getFeaturedPosts = (limit = 3) => {
  return blogPosts
    .filter(post => post.published)
    .slice(0, limit)
}
