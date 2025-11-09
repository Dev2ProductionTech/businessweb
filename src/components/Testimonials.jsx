import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
    >
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full border-2 border-brand-orange"
        />
        <div>
          <h4 className="text-white font-semibold">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
          <p className="text-brand-cyan text-sm font-medium">{testimonial.company}</p>
        </div>
      </div>

      {/* Project Badge */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <span className="text-xs text-gray-400">Project: </span>
        <span className="text-xs text-brand-cyan font-medium">{testimonial.project}</span>
      </div>
    </motion.div>
  )
}

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
