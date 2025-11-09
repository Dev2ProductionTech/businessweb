import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, X, CheckCircle, Mail } from 'lucide-react';

const CookiePolicy = () => {
  const lastUpdated = 'January 2025';

  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      required: true,
      description: 'These cookies are strictly necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.',
      examples: [
        'Session identifiers for form submissions',
        'Security tokens to prevent CSRF attacks',
        'Load balancing cookies for server optimization',
        'User preference settings (dark mode, language)'
      ],
      duration: 'Session or up to 30 days',
      thirdParty: false
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      required: false,
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve user experience and site performance.',
      examples: [
        'Page view tracking and navigation patterns',
        'Time spent on pages and bounce rates',
        'Device type, browser, and screen resolution',
        'Traffic source and referral information'
      ],
      duration: 'Up to 2 years',
      thirdParty: false
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      required: false,
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices. They may be set by us or third-party providers.',
      examples: [
        'Chat widget state (open/closed)',
        'Contact form auto-fill (with consent)',
        'Recently viewed services or pages',
        'Notification preferences'
      ],
      duration: 'Up to 1 year',
      thirdParty: true
    }
  ];

  const sections = [
    {
      icon: Cookie,
      title: '1. What Are Cookies?',
      content: [
        {
          subtitle: '1.1 Definition',
          text: 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.'
        },
        {
          subtitle: '1.2 How We Use Cookies',
          text: 'Dev2Production.Tech uses cookies to improve your browsing experience, remember your preferences, analyze site traffic, and ensure website security. We use both first-party cookies (set by us) and third-party cookies (set by external services).'
        }
      ]
    },
    {
      icon: Settings,
      title: '2. Managing Cookie Preferences',
      content: [
        {
          subtitle: '2.1 Browser Settings',
          text: 'Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all or some cookies, or to alert you when cookies are being sent. Note that blocking all cookies may impact your ability to use certain features of our website.'
        },
        {
          subtitle: '2.2 How to Control Cookies',
          text: 'Browser-specific instructions: Chrome: Settings > Privacy and Security > Cookies. Firefox: Settings > Privacy & Security > Cookies and Site Data. Safari: Preferences > Privacy > Manage Website Data. Edge: Settings > Privacy > Cookies and site permissions.'
        },
        {
          subtitle: '2.3 Opt-Out Links',
          text: 'For analytics cookies, you can opt out using the following methods: Browser "Do Not Track" settings (we honor DNT signals), Google Analytics Opt-out Browser Add-on, or by contacting us at info@dev2production.tech to request cookie blocking.'
        }
      ]
    },
    {
      icon: Shield,
      title: '3. Third-Party Cookies',
      content: [
        {
          subtitle: '3.1 External Services',
          text: 'We may use third-party services that set their own cookies. These services include analytics providers, email service providers (Zoho), and infrastructure monitoring tools. Third-party cookies are governed by the respective third party\'s privacy policy.'
        },
        {
          subtitle: '3.2 Data Sharing',
          text: 'We do not sell cookie data to third parties. Cookies are used solely to improve your experience and understand site usage. Any data shared with third-party services is anonymized and aggregated whenever possible.'
        }
      ]
    },
    {
      icon: Eye,
      title: '4. Cookie Duration and Storage',
      content: [
        {
          subtitle: '4.1 Session Cookies',
          text: 'Session cookies are temporary and are deleted when you close your browser. They are used for essential functions like form submissions and navigation state.'
        },
        {
          subtitle: '4.2 Persistent Cookies',
          text: 'Persistent cookies remain on your device for a set period (ranging from 30 days to 2 years) or until you delete them. They are used to remember your preferences and provide analytics insights.'
        },
        {
          subtitle: '4.3 Cookie Deletion',
          text: 'You can delete cookies at any time through your browser settings. Instructions are available in your browser\'s help documentation. Deleting cookies will remove your preferences and may require you to re-enter information on future visits.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-dark-100">
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
              <Cookie className="w-4 h-4 text-brand-cyan" />
              <span className="text-sm text-dark-200">Transparency First</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-orange via-brand-orange-warm to-brand-cyan bg-clip-text text-transparent">
              Cookie Policy
            </h1>

            <p className="text-xl text-dark-200 mb-4">
              Understanding how we use cookies to enhance your browsing experience.
            </p>

            <p className="text-dark-300">
              Last Updated: <span className="text-brand-cyan font-medium">{lastUpdated}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types Cards */}
      <section className="py-20 bg-dark-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-dark-100 mb-4">Types of Cookies We Use</h2>
              <p className="text-dark-200 max-w-2xl mx-auto">
                We categorize cookies based on their purpose and necessity. You have control over non-essential cookies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-900/50 border border-dark-800 rounded-xl p-6 hover:border-brand-orange/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      type.required 
                        ? 'bg-gradient-to-br from-brand-cyan to-brand-cyan/70 shadow-glow-cyan' 
                        : 'bg-gradient-to-br from-brand-orange to-brand-orange-warm shadow-glow-orange'
                    }`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    {type.required ? (
                      <span className="px-3 py-1 bg-brand-cyan/20 text-brand-cyan text-xs font-medium rounded-full border border-brand-cyan/30">
                        Required
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-dark-800 text-dark-300 text-xs font-medium rounded-full border border-dark-700">
                        Optional
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-dark-100 mb-3">{type.title}</h3>
                  <p className="text-dark-200 text-sm mb-4 leading-relaxed">{type.description}</p>

                  <div className="space-y-3 mb-4">
                    <p className="text-xs font-semibold text-brand-cyan uppercase tracking-wide">Examples:</p>
                    <ul className="space-y-2">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-dark-300">
                          <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-dark-800 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-dark-300">Duration:</span>
                      <span className="text-dark-100 font-medium">{type.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-dark-300">Third-Party:</span>
                      <span className="text-dark-100 font-medium">{type.thirdParty ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
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
                      <p className="text-dark-200 leading-relaxed whitespace-pre-line">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* GDPR Compliance Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 p-8 bg-dark-900/50 border border-brand-cyan/30 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-brand-cyan flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-dark-100 mb-4">GDPR Compliance</h2>
                  <p className="text-dark-200 leading-relaxed mb-4">
                    In accordance with the General Data Protection Regulation (GDPR) and other privacy laws, we obtain your consent before setting non-essential cookies. You have the right to:
                  </p>
                  <ul className="space-y-2 text-dark-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Accept or reject non-essential cookies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Withdraw consent at any time through browser settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Request information about cookies stored on your device</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Delete cookies and associated data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-8 bg-gradient-to-br from-dark-900 to-dark-800 border border-brand-orange/30 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-dark-100 mb-4">Questions About Cookies?</h2>
                  <p className="text-dark-200 leading-relaxed mb-4">
                    If you have questions about our use of cookies or need assistance managing your preferences, contact us:
                  </p>
                  <div className="space-y-2 text-dark-200">
                    <p>
                      <span className="font-medium text-dark-100">Email:</span>{' '}
                      <a href="mailto:info@dev2production.tech" className="text-brand-orange hover:text-brand-orange-warm transition-colors">
                        info@dev2production.tech
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-dark-100">Subject:</span> Cookie Policy Inquiry
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Policy Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-6 bg-dark-900/30 border border-dark-800 rounded-lg"
            >
              <p className="text-dark-300 text-sm leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. The "Last Updated" date at the top of this page indicates when the policy was last revised. We encourage you to review this policy periodically.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
