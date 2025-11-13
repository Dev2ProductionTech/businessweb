import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, ArrowLeft, Share2, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import { getPostBySlug, getFeaturedPosts, loadMarkdownContent } from '../blog/blogData'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPostBySlug(slug)
  const relatedPosts = getFeaturedPosts(3).filter(p => p.slug !== slug)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [headings, setHeadings] = useState([])
  const [activeHeading, setActiveHeading] = useState('')
  const contentRef = React.useRef(null)
  const observerRef = React.useRef(null)

  // Helper function to generate slug-style IDs from text
  const generateHeadingId = (text) => {
    if (!text) return ''
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '')             // Trim - from end of text
  }

  // Helper to extract text from React children
  const getTextContent = (children) => {
    if (typeof children === 'string') return children
    if (Array.isArray(children)) {
      return children.map(child => getTextContent(child)).join('')
    }
    if (children?.props?.children) {
      return getTextContent(children.props.children)
    }
    return ''
  }

  useEffect(() => {
    if (!post) {
      navigate('/articles')
      return
    }

    // Load markdown content
    const loadContent = async () => {
      setLoading(true)
      const markdownContent = await loadMarkdownContent(post.markdownFile)
      setContent(markdownContent)
      setLoading(false)
    }

    loadContent()
  }, [post, navigate])

  // Extract headings from DOM after content is rendered (Docusaurus approach)
  useEffect(() => {
    if (!contentRef.current || loading) return

    const extractHeadingsFromDOM = () => {
      // Wait a bit for ReactMarkdown to finish rendering
      setTimeout(() => {
        const articleContent = contentRef.current
        if (!articleContent) return

        // Query all H2 headings from the rendered content
        const h2Elements = articleContent.querySelectorAll('h2')
        
        const extractedHeadings = Array.from(h2Elements)
          .filter(heading => heading.id) // Only include headings with IDs
          .map((heading) => {
            return {
              id: heading.id,
              text: (heading.textContent || heading.innerText).trim(),
              element: heading
            }
          })

        console.log('📚 Extracted headings from DOM:', extractedHeadings)
        setHeadings(extractedHeadings)
      }, 100)
    }

    extractHeadingsFromDOM()
  }, [content, loading])

  // Intersection Observer for active heading detection (Docusaurus approach)
  useEffect(() => {
    if (headings.length === 0) return

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    const observerOptions = {
      rootMargin: '-80px 0px -80% 0px',
      threshold: [0, 1]
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          setActiveHeading(id)
          
          // Update URL hash without scrolling
          if (window.history.replaceState) {
            window.history.replaceState(null, null, `#${id}`)
          }
        }
      })
    }

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all heading elements
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observerRef.current.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [headings])

  // Handle initial scroll to hash on page load
  useEffect(() => {
    if (headings.length === 0) return
    
    // Check if there's a hash in the URL
    const hash = window.location.hash.split('#').pop() // Get last part after #
    if (hash && hash !== slug && !hash.startsWith('/')) {
      console.log('🔗 Found hash in URL, scrolling to:', hash)
      // Delay to ensure content is rendered
      setTimeout(() => {
        scrollToHeading(hash)
      }, 500)
    }
  }, [headings, slug])

  if (!post) {
    return null
  }

  const scrollToHeading = (id) => {
    console.log('📍 Attempting to scroll to heading ID:', id)
    
    // Give a small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(id)
      console.log('🎯 Element found:', element)
      
      if (element) {
        // Find the scroll container - it's #root, not window
        const scrollContainer = document.getElementById('root')
        
        if (scrollContainer) {
          const navbarHeight = 100
          const elementPosition = element.offsetTop
          const offsetPosition = elementPosition - navbarHeight

          console.log('📐 Element position:', elementPosition)
          console.log('✅ Scrolling container to position:', offsetPosition)

          // Scroll the #root container, not window
          scrollContainer.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        } else {
          // Fallback to window scroll if #root not found
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          })
        }
        
        // Update active heading immediately
        setActiveHeading(id)
        
        console.log('✔️ Scroll complete, active heading set to:', id)
      } else {
        console.error('❌ Element not found with ID:', id)
        console.log('🔍 Available heading IDs:', 
          Array.from(document.querySelectorAll('h2[id]')).map(h => h.id)
        )
      }
    }, 50)
  }

  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url
        })
      } catch (err) {
        console.log('Share cancelled')
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    }
  }

  // Create structured data for the article
  const articleStructuredData = post ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? `https://dev2production.tech${post.image}` : "https://dev2production.tech/meta/og-image.png",
    "datePublished": post.date,
    "dateModified": post.updatedDate || post.date,
    "author": {
      "@type": "Organization",
      "name": "Dev2Production Team",
      "url": "https://dev2production.tech/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dev2Production.Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dev2production.tech/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://dev2production.tech/#/articles/${post.slug}`
    },
    "keywords": post.tags.join(', '),
    "articleSection": "DevOps",
    "url": `https://dev2production.tech/#/articles/${post.slug}`
  } : null

  // Breadcrumb structured data for better indexing/navigation
  const breadcrumbStructuredData = post ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dev2production.tech/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Articles",
        "item": "https://dev2production.tech/#/articles"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://dev2production.tech/#/articles/${post.slug}`
      }
    ]
  } : null

  return (
    <div className="min-h-screen pt-24 pb-20">
      {post && (
        <Seo 
          title={`${post.title} | Dev2Production.Tech Blog`}
          description={post.excerpt}
          keywords={post.tags.join(', ')}
          url={`/articles/${post.slug}`}
          image={post.image || '/meta/og-image.png'}
          type="article"
          author="Dev2Production Team"
          publishedTime={post.date}
          modifiedTime={post.updatedDate || post.date}
          // Pass both article and breadcrumb structured data as an array
          structuredData={[articleStructuredData, breadcrumbStructuredData].filter(Boolean)}
        />
      )}
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-cyan/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Article Content */}
          <article className="flex-1 w-full lg:max-w-4xl">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 lg:mb-12"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs sm:text-sm rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <Link to={`/articles/${slug}`}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 hover:text-brand-orange transition-colors cursor-pointer">
                  {post.title}
                </h1>
              </Link>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
                  <span className="text-xs sm:text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
                  <span className="text-xs sm:text-sm">{post.readTime}</span>
                </span>
                <span className="text-xs sm:text-sm text-gray-400">
                  By {post.author}
                </span>
              </div>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm glass border border-brand-cyan/30 rounded-lg hover:border-brand-cyan/50 transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share Article</span>
                <span className="sm:hidden">Share</span>
              </button>
            </motion.header>

            {/* Featured Image */}
            {post.image && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8 lg:mb-12"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto rounded-xl lg:rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </motion.div>
            )}

            {/* Article Content */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none mb-12 lg:mb-16"
            >
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="text-brand-cyan text-xl">Loading article...</div>
                </div>
              ) : (
                <div className="blog-content">
                  <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h2: ({node, children, ...props}) => {
                      const text = getTextContent(children)
                      const id = generateHeadingId(text)
                      return (
                        <h2 
                          id={id} 
                          className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 mt-8 sm:mt-10 text-brand-cyan scroll-mt-24" 
                          {...props}
                        >
                          {children}
                        </h2>
                      )
                    },
                    h3: ({node, children, ...props}) => {
                      const text = getTextContent(children)
                      const id = generateHeadingId(text)
                      return (
                        <h3 
                          id={id} 
                          className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 mt-6 sm:mt-8 text-brand-orange scroll-mt-24" 
                          {...props}
                        >
                          {children}
                        </h3>
                      )
                    },
                    p: ({node, ...props}) => <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base" {...props} />,
                    li: ({node, ...props}) => <li className="text-gray-300 ml-2 sm:ml-4 text-sm sm:text-base" {...props} />,
                    a: ({node, ...props}) => <a className="text-brand-cyan hover:text-brand-cyan/80 underline text-sm sm:text-base" {...props} />,
                    blockquote: ({node, ...props}) => (
                      <blockquote className="border-l-4 border-brand-orange pl-4 sm:pl-6 py-2 sm:py-3 my-4 sm:my-6 italic text-gray-400 text-sm sm:text-base" {...props} />
                    ),
                    code({node, inline, className, children, ...props}) {
                      const match = /language-(\w+)/.exec(className || '')
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-xl my-6"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className="bg-brand-cyan/10 text-brand-cyan px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm" {...props}>
                          {children}
                        </code>
                      )
                    },
                    strong: ({node, ...props}) => <strong className="text-white font-semibold text-sm sm:text-base" {...props} />,
                  }}
                >
                  {content}
                </ReactMarkdown>
                </div>
              )}
            </motion.div>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-4 sm:p-6 lg:p-8 mb-12 lg:mb-16"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-brand-orange to-brand-cyan flex items-center justify-center text-lg sm:text-2xl font-bold">
                  D2P
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{post.author}</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    Expert DevOps engineers, cloud architects, and full-stack developers dedicated to delivering production-ready solutions.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-warm transition-colors text-sm sm:text-base"
                  >
                    Get in Touch
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link
                      key={relatedPost.id}
                      to={`/articles/${relatedPost.slug}`}
                      className="glass rounded-xl p-4 sm:p-6 hover:shadow-glow-orange transition-all group"
                    >
                      <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-brand-orange transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <span className="text-brand-cyan text-xs sm:text-sm flex items-center gap-1">
                        Read More
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}
          </article>

          {/* Table of Contents Sidebar with Progress & Scrolling */}
          {headings.length > 0 && (
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-28 max-h-[calc(100vh-8rem)]">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-card overflow-hidden flex flex-col max-h-[calc(100vh-8rem)]"
                >
                  {/* TOC Header with Progress */}
                  <div className="p-6 pb-4 border-b border-gray-700/50">
                    <h3 className="text-lg font-bold mb-3 text-brand-cyan flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      On This Page
                    </h3>
                    
                    {/* Reading Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>Reading Progress</span>
                        <span>{Math.round((headings.findIndex(h => h.id === activeHeading) + 1) / headings.length * 100)}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-brand-cyan to-brand-orange transition-all duration-300"
                          style={{ 
                            width: `${((headings.findIndex(h => h.id === activeHeading) + 1) / headings.length) * 100}%` 
                          }}
                        />
                      </div>
                      <div className="text-xs text-gray-500">
                        {headings.findIndex(h => h.id === activeHeading) + 1} of {headings.length} sections
                      </div>
                    </div>
                  </div>

                  {/* TOC Navigation - Scrollable */}
                  <nav className="overflow-y-auto flex-1 p-6 pt-4 space-y-2 custom-scrollbar">
                    {headings.map((heading, index) => {
                      const isActive = activeHeading === heading.id
                      const currentIndex = headings.findIndex(h => h.id === activeHeading)
                      const isPassed = index < currentIndex
                      
                      return (
                        <button
                          key={heading.id}
                          onClick={() => scrollToHeading(heading.id)}
                          type="button"
                          className={`
                            block w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 relative
                            ${isActive 
                              ? 'text-brand-orange bg-brand-orange/10 font-semibold border-l-2 border-brand-orange' 
                              : isPassed
                                ? 'text-gray-500 hover:text-brand-cyan hover:bg-brand-cyan/5 border-l-2 border-gray-700'
                                : 'text-gray-400 hover:text-brand-cyan hover:bg-brand-cyan/5 border-l-2 border-transparent hover:border-brand-cyan/30'
                            }
                          `}
                        >
                          <span className="line-clamp-2 flex items-center gap-2">
                            {isPassed && <span className="text-brand-cyan">✓</span>}
                            {heading.text}
                          </span>
                        </button>
                      )
                    })}
                  </nav>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-6 mt-4"
                >
                  <h4 className="text-sm font-bold mb-3 text-gray-400">Quick Actions</h4>
                  <div className="space-y-2">
                    <button
                      onClick={handleShare}
                      type="button"
                      className="w-full flex items-center gap-2 text-sm text-gray-400 hover:text-brand-cyan transition-colors py-2 px-3 rounded-lg hover:bg-brand-cyan/5"
                    >
                      <Share2 className="w-4 h-4" />
                      Share Article
                    </button>
                    <Link
                      to="/contact"
                      className="w-full flex items-center gap-2 text-sm text-gray-400 hover:text-brand-orange transition-colors py-2 px-3 rounded-lg hover:bg-brand-orange/5"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Get in Touch
                    </Link>
                  </div>
                </motion.div>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Ready to Optimize Your <span className="gradient-text">Infrastructure?</span>
          </h2>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
            Let's discuss how we can help you implement these best practices in your organization.
          </p>
          <Link
            to="/project-inquiry"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-brand-orange to-brand-orange-warm text-white font-semibold rounded-xl hover:shadow-glow-orange transition-all text-sm sm:text-base"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
