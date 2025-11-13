import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, Users, Clock, Target } from 'lucide-react';
import Seo from '../components/Seo';
import ProjectInquiryForm from '../components/ProjectInquiryForm';

export default function ProjectInquiry() {
  const benefits = [
    { Icon: CheckCircle2, title: 'Free Consultation', desc: 'No-obligation initial assessment of your project requirements' },
    { Icon: Users, title: 'Dedicated Team', desc: 'Work with experienced developers and designers assigned to your project' },
    { Icon: Clock, title: 'Quick Response', desc: 'Get detailed proposal and timeline within 24-48 hours of consultation' },
    { Icon: Target, title: 'Clear Milestones', desc: 'Structured development process with regular demos and updates' }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Seo 
        title="Start Your DevOps Project | Dev2Production.Tech"
        description="Ready to transform your deployment process? Fill out our project inquiry form and get a free DevOps assessment within 4 business hours."
        keywords="DevOps project inquiry, CI/CD consultation, Cloud infrastructure project, DevOps transformation, Infrastructure automation"
        url="/project-inquiry"
        image="/meta/og-image.png"
        type="website"
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-warm mb-6 shadow-glow-orange">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Start Your Project</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tell us about your project and let's discuss how we can bring your vision to life. Fill out the form below to get started with a free consultation.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, i) => {
            const IconComponent = benefit.Icon;
            return (
              <div key={i} className="glass-card p-6 rounded-xl text-center">
                <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Form Section */}
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-2 gradient-text">Project Details</h2>
              <p className="text-gray-400 mb-8">
                Please provide as much detail as possible to help us understand your requirements and prepare an accurate proposal.
              </p>
              <ProjectInquiryForm />
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Process Timeline */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 text-white">Our Process</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Submit Inquiry', desc: 'Fill out the project form with your requirements' },
                  { step: '2', title: 'Initial Review', desc: 'Our team reviews and analyzes your project (4 hours)' },
                  { step: '3', title: 'Consultation Call', desc: 'Free 30-minute call to discuss details and ask questions' },
                  { step: '4', title: 'Proposal', desc: 'Receive detailed proposal with timeline and cost (24-48 hours)' },
                  { step: '5', title: 'Kickoff', desc: 'Sign agreement and start development immediately' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-card p-8 rounded-3xl bg-gradient-to-br from-brand-orange/10 to-brand-cyan/10 border-2 border-brand-orange/30">
              <h3 className="text-lg font-bold mb-4 text-white">Need Help?</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Not sure how to fill out the form? Have questions about the process? We're here to help!
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-gray-400 mb-1">Email us directly</div>
                  <a href="mailto:sajjadali@dev2production.tech" className="text-brand-cyan hover:text-brand-cyan/80 font-semibold transition-colors">
                    sajjadali@dev2production.tech
                  </a>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Or use our simple contact form</div>
                  <a href="/#/contact" className="text-brand-cyan hover:text-brand-cyan/80 font-semibold transition-colors">
                    Quick Contact Form →
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="glass-card p-6 rounded-3xl">
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">NDA & IP protection guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Flexible payment terms available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Dedicated project manager assigned</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Post-launch support included</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
