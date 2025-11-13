import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { getFeaturedPosts } from '../blog/blogData'

export default function FeaturedArticles() {
  const featuredPosts = getFeaturedPosts(3)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert articles on DevOps, cloud engineering, and modern software delivery
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover:shadow-glow-cyan transition-all group"
            >
              {/* Post Image */}
              <Link to={`/articles/${post.slug}`} className="block">
                <div className="h-40 bg-gradient-to-br from-brand-cyan/20 to-brand-orange/20 relative overflow-hidden">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-brand-cyan/20', 'to-brand-orange/20')
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-brand-orange/10 group-hover:scale-110 transition-transform duration-500" />
                  )}
                </div>
              </Link>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <Link to={`/articles/${post.slug}`}>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  to={`/articles/${post.slug}`}
                  className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-cyan/80 transition-colors text-sm group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-cyan/10 to-brand-orange/10 border border-brand-cyan/30 rounded-xl hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all text-white font-semibold"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
