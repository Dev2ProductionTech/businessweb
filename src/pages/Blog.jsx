import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Tag, Search, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import { getAllPosts, getAllTags } from '../blog/blogData'

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  const allPosts = getAllPosts()
  const allTags = getAllTags()
  
  // Filter posts by tag and search
  const filteredPosts = allPosts.filter(post => {
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag)
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen pt-24 pb-20">
      <Seo 
        title="DevOps & Cloud Engineering Blog | Dev2Production.Tech"
        description="Expert articles on DevOps automation, CI/CD pipelines, cloud infrastructure, Kubernetes, Docker, Terraform, and modern software delivery practices."
        keywords="DevOps blog, CI/CD tutorials, Cloud engineering articles, Kubernetes guides, Infrastructure as Code, DevOps best practices"
        url="/articles"
        image="/meta/og-image.png"
        type="website"
      />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">DevOps & Cloud Engineering</span> Articles
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Expert insights, best practices, and guides to help you master DevOps, cloud engineering, and modern software delivery.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-brand-cyan/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 text-white placeholder-gray-400"
            />
          </div>
        </motion.div>
      </section>

      {/* Tag Filter */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedTag('all')}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedTag === 'all'
                ? 'bg-brand-orange text-white'
                : 'glass border border-white/10 hover:border-brand-orange/50'
            }`}
          >
            All Articles
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedTag === tag
                  ? 'bg-brand-orange text-white'
                  : 'glass border border-white/10 hover:border-brand-orange/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden hover:shadow-glow-orange transition-all group"
              >
              {/* Post Image Placeholder */}
              <Link to={`/articles/${post.slug}`} className="block">
                <div className="h-48 bg-gradient-to-br from-brand-orange/20 to-brand-cyan/20 relative overflow-hidden">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-brand-orange/20', 'to-brand-cyan/20')
                      }}
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-cyan/10 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Tag className="w-16 h-16 text-brand-cyan/30" />
                      </div>
                    </>
                  )}
                </div>
              </Link>                {/* Post Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                {/* Title */}
                <Link to={`/articles/${post.slug}`}>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h2>
                </Link>                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <Link
                    to={`/articles/${post.slug}`}
                    className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-warm transition-colors group/link"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Need Expert <span className="gradient-text">DevOps Guidance?</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Get a free consultation to discuss your infrastructure challenges and optimization opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-warm text-white font-semibold rounded-xl hover:shadow-glow-orange transition-all"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
