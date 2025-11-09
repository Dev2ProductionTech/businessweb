import React, { useRef, useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ProjectInquiryForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timelineType, setTimelineType] = useState('select'); // 'select' or 'custom'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

    try {
      const form = formRef.current;
      const formData = {
        name: form.name.value,
        email: form.email.value,
        company: form.company.value,
        phone: form.phone.value,
        projectType: form.projectType.value,
        budget: form.budget.value,
        timeline: timelineType === 'custom' ? form.customTimeline.value : form.timeline.value,
        description: form.description.value,
        additionalInfo: form.additionalInfo.value
      };

      const response = await fetch(`${apiUrl}/api/project-inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all"
            placeholder="Your Company Inc."
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all"
          >
            <option value="" className="bg-dark-900">Select project type</option>
            <option value="Web Application" className="bg-dark-900">Web Application</option>
            <option value="Mobile App" className="bg-dark-900">Mobile Application</option>
            <option value="Enterprise Software" className="bg-dark-900">Enterprise Software</option>
            <option value="E-commerce Platform" className="bg-dark-900">E-commerce Platform</option>
            <option value="Cloud Infrastructure" className="bg-dark-900">Cloud Infrastructure</option>
            <option value="DevOps & CI/CD" className="bg-dark-900">DevOps & CI/CD</option>
            <option value="API Development" className="bg-dark-900">API Development</option>
            <option value="UI/UX Design" className="bg-dark-900">UI/UX Design</option>
            <option value="Technical Consulting" className="bg-dark-900">Technical Consulting</option>
            <option value="Other" className="bg-dark-900">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
            Budget
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            placeholder="e.g., $15,000 or €20K-30K or $50K-$100K"
            className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
          Desired Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={timelineType === 'custom' ? 'custom' : undefined}
          onChange={(e) => {
            if (e.target.value === 'custom') {
              setTimelineType('custom');
            } else {
              setTimelineType('select');
            }
          }}
          className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all"
        >
          <option value="" className="bg-dark-900">Select timeline</option>
          <option value="ASAP (1-2 months)" className="bg-dark-900">ASAP (1-2 months)</option>
          <option value="3-4 months" className="bg-dark-900">3-4 months</option>
          <option value="5-6 months" className="bg-dark-900">5-6 months</option>
          <option value="6+ months" className="bg-dark-900">6+ months</option>
          <option value="Flexible" className="bg-dark-900">Flexible</option>
          <option value="custom" className="bg-dark-900">💬 Enter custom timeline</option>
        </select>
        
        {timelineType === 'custom' && (
          <input
            type="text"
            id="customTimeline"
            name="customTimeline"
            placeholder="e.g., Starting January 2026 or 8-10 weeks"
            className="w-full mt-3 bg-white/5 border border-brand-orange/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/50 transition-all"
          />
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows="6"
          className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all resize-none"
          placeholder="Please describe your project requirements, goals, target audience, key features, and any specific technologies you'd like us to use..."
        />
      </div>

      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
          Additional Information
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows="4"
          className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all resize-none"
          placeholder="Any other details, references, competitor sites, or specific requirements..."
        />
      </div>

      <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-lg p-4">
        <p className="text-sm text-gray-300 leading-relaxed">
          <strong className="text-brand-cyan">What happens next?</strong> After submission, you'll receive an email confirmation. Our team will review your requirements and reach out within 4 business hours to schedule a free consultation call.
        </p>
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-brand-orange to-brand-orange-warm text-white px-6 py-4 rounded-lg font-semibold shadow-glow-orange hover:shadow-glow-orange-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <span>Submit Project Inquiry</span>
          )}
        </button>
      </div>

      {status && (
        <div
          className={`text-sm p-4 rounded-lg flex items-center gap-2 ${
            status === 'success'
              ? 'bg-green-500/10 text-green-400 border border-green-500/30'
              : 'bg-red-500/10 text-red-400 border border-red-500/30'
          }`}
        >
          {status === 'success' ? (
            <>
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span>
                Project inquiry submitted successfully! Check your email for confirmation and next steps. We'll contact you within 4 business hours.
              </span>
            </>
          ) : (
            <>
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>
                Failed to submit inquiry. Please try again or email us directly at sajjadali@dev2production.tech
              </span>
            </>
          )}
        </div>
      )}
    </form>
  );
}
