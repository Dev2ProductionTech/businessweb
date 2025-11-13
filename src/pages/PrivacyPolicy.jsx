import { motion } from 'framer-motion';
import { Shield, Mail, Lock, Eye, Database, UserCheck, Globe, FileText } from 'lucide-react';
import Seo from '../components/Seo';

const PrivacyPolicy = () => {
  const lastUpdated = 'January 2025';

  const sections = [
    {
      icon: Database,
      title: '1. Information We Collect',
      content: [
        {
          subtitle: '1.1 Information You Provide',
          text: 'When you use our website or contact us, we may collect: Name, email address, company name, phone number, project details, and any other information you voluntarily provide through our contact forms or project inquiry submissions.'
        },
        {
          subtitle: '1.2 Automatically Collected Information',
          text: 'We may automatically collect certain information about your device and usage patterns, including: IP address, browser type, operating system, referring URLs, pages viewed, and access times. This data helps us improve our services and user experience.'
        },
        {
          subtitle: '1.3 Cookies and Tracking Technologies',
          text: 'We use cookies and similar technologies to enhance functionality, analyze site usage, and personalize your experience. You can control cookies through your browser settings. See our Cookie Policy for detailed information.'
        }
      ]
    },
    {
      icon: Eye,
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: '2.1 Primary Uses',
          text: 'We use your information to: Respond to your inquiries and project requests; provide DevOps consulting and engineering services; communicate about projects, updates, and service-related matters; improve our website and services; send you relevant business communications (with your consent).'
        },
        {
          subtitle: '2.2 Email Communications',
          text: 'When you submit a form on our website, we use Zoho Mail services to send confirmation emails and internal notifications. Your email address and form data are processed through secure SMTP connections. We do not sell or share your email with third parties for marketing purposes.'
        },
        {
          subtitle: '2.3 Analytics and Improvement',
          text: 'We analyze aggregated, non-personal data to understand usage patterns, optimize our website performance, and enhance user experience. This analysis never identifies individual users.'
        }
      ]
    },
    {
      icon: Lock,
      title: '3. Data Security and Protection',
      content: [
        {
          subtitle: '3.1 Security Measures',
          text: 'We implement industry-standard security measures to protect your personal information: SSL/TLS encryption for data transmission, secure server infrastructure, access controls and authentication, regular security audits, and rate limiting to prevent abuse.'
        },
        {
          subtitle: '3.2 Data Retention',
          text: 'We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Contact form submissions are retained for business correspondence purposes. You may request deletion of your data at any time.'
        },
        {
          subtitle: '3.3 Third-Party Services',
          text: 'We use Zoho Mail for email delivery. Zoho is bound by their own privacy policy and security standards. We select third-party services that maintain high security and privacy standards consistent with our commitment to data protection.'
        }
      ]
    },
    {
      icon: UserCheck,
      title: '4. Your Rights and Choices',
      content: [
        {
          subtitle: '4.1 Access and Correction',
          text: 'You have the right to access, correct, or update your personal information. Contact us at info@dev2production.tech to review or modify your data.'
        },
        {
          subtitle: '4.2 Data Deletion',
          text: 'You may request deletion of your personal information at any time, subject to legal obligations. We will respond to deletion requests within 30 days.'
        },
        {
          subtitle: '4.3 Opt-Out',
          text: 'You can opt out of marketing communications by clicking the unsubscribe link in any email or contacting us directly. Note that transactional emails (e.g., project-related communications) cannot be opted out of during active engagements.'
        },
        {
          subtitle: '4.4 GDPR and International Rights',
          text: 'If you are located in the European Economic Area (EEA), you have additional rights under GDPR, including: right to data portability, right to object to processing, right to lodge a complaint with supervisory authorities, and right to withdraw consent.'
        }
      ]
    },
    {
      icon: Globe,
      title: '5. International Data Transfers',
      content: [
        {
          subtitle: '5.1 Cross-Border Processing',
          text: 'Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers, consistent with applicable data protection laws.'
        },
        {
          subtitle: '5.2 Compliance',
          text: 'We comply with applicable data protection regulations, including GDPR (EU), CCPA (California), and other regional privacy laws. We adapt our practices to meet the highest standards of data protection.'
        }
      ]
    },
    {
      icon: FileText,
      title: '6. Data Sharing and Disclosure',
      content: [
        {
          subtitle: '6.1 No Sale of Data',
          text: 'We do not sell, rent, or trade your personal information to third parties for marketing purposes. Your data is used exclusively for providing and improving our services.'
        },
        {
          subtitle: '6.2 Limited Disclosure',
          text: 'We may share information only in these limited circumstances: With your explicit consent; to comply with legal obligations or valid legal requests; to protect our rights, property, or safety, or that of our users; with service providers who assist in our operations (under strict confidentiality agreements).'
        },
        {
          subtitle: '6.3 Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred. You will be notified of any such change in ownership or control of your personal information.'
        }
      ]
    },
    {
      icon: Shield,
      title: '7. Children\'s Privacy',
      content: [
        {
          subtitle: '7.1 Age Restriction',
          text: 'Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.'
        }
      ]
    },
    {
      icon: Mail,
      title: '8. Changes to This Policy',
      content: [
        {
          subtitle: '8.1 Updates',
          text: 'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The "Last Updated" date at the top indicates the most recent revision. We encourage you to review this policy regularly.'
        },
        {
          subtitle: '8.2 Notification of Changes',
          text: 'For material changes to this policy, we will provide notice through our website or via email to users who have provided contact information.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-dark-100">
      <Seo 
        title="Privacy Policy | Dev2Production.Tech"
        description="Learn how Dev2Production.Tech collects, uses, and protects your personal information. Our commitment to data privacy and security."
        keywords="privacy policy, data protection, GDPR compliance, security policy"
        url="/privacy"
        image="/meta/og-image.png"
        type="website"
      />
      
      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden border-b border-dark-800">
        <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-900/80 border border-brand-cyan/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-brand-cyan" />
              <span className="text-sm text-dark-200">Your Privacy Matters</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-orange via-brand-orange-warm to-brand-cyan bg-clip-text text-transparent">
              Privacy Policy
            </h1>

            <p className="text-xl text-dark-200 mb-4">
              At Dev2Production.Tech, we are committed to protecting your personal information and your right to privacy.
            </p>

            <p className="text-dark-300">
              Last Updated: <span className="text-brand-cyan font-medium">{lastUpdated}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 p-8 bg-dark-900/50 border border-dark-800 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-brand-orange mb-4">Introduction</h2>
              <p className="text-dark-200 leading-relaxed mb-4">
                This Privacy Policy describes how Dev2Production.Tech ("we," "us," or "our") collects, uses, and protects your personal information when you visit our website or use our services. By using our website, you consent to the data practices described in this policy.
              </p>
              <p className="text-dark-200 leading-relaxed">
                We are a DevOps consulting and engineering firm committed to transparency and data protection. This policy applies to all information collected through our website, email communications, and related services.
              </p>
            </motion.div>

            {/* Policy Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-warm rounded-lg flex items-center justify-center shadow-glow-orange">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-100 mb-2">{section.title}</h2>
                  </div>
                </div>

                <div className="ml-16 space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="pb-6 border-b border-dark-800 last:border-0">
                      <h3 className="text-lg font-semibold text-brand-cyan mb-3">{item.subtitle}</h3>
                      <p className="text-dark-200 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 p-8 bg-gradient-to-br from-dark-900 to-dark-800 border border-brand-cyan/30 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-brand-cyan flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-dark-100 mb-4">Contact Us</h2>
                  <p className="text-dark-200 leading-relaxed mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-dark-200">
                    <p>
                      <span className="font-medium text-dark-100">Email:</span>{' '}
                      <a href="mailto:info@dev2production.tech" className="text-brand-cyan hover:text-brand-cyan-success transition-colors">
                        info@dev2production.tech
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-dark-100">Response Time:</span> We aim to respond to all privacy inquiries within 48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Consent Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-6 bg-dark-900/30 border border-dark-800 rounded-lg"
            >
              <p className="text-dark-300 text-sm leading-relaxed">
                By using Dev2Production.Tech website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of our website and services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
