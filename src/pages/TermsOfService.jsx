import { motion } from 'framer-motion';
import { FileCheck, Scale, AlertCircle, Shield, Handshake, Ban, Globe, Mail } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = 'January 2025';

  const sections = [
    {
      icon: FileCheck,
      title: '1. Acceptance of Terms',
      content: [
        {
          subtitle: '1.1 Agreement to Terms',
          text: 'By accessing or using Dev2Production.Tech website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not access our website or use our services.'
        },
        {
          subtitle: '1.2 Modifications',
          text: 'We reserve the right to modify these terms at any time. Changes become effective immediately upon posting. Your continued use of our services after any modifications constitutes acceptance of those changes. We will notify users of material changes via email or website notice.'
        },
        {
          subtitle: '1.3 Eligibility',
          text: 'You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our services. By using our services, you represent and warrant that you meet these eligibility requirements.'
        }
      ]
    },
    {
      icon: Handshake,
      title: '2. Services Description',
      content: [
        {
          subtitle: '2.1 DevOps Consulting Services',
          text: 'Dev2Production.Tech provides DevOps consulting, cloud engineering, CI/CD automation, infrastructure optimization, security hardening (DevSecOps), monitoring and observability solutions, and FinOps cost optimization services. Specific service scope will be defined in individual project agreements.'
        },
        {
          subtitle: '2.2 Service Availability',
          text: 'We strive to maintain high availability of our website and services but do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. We will provide advance notice of scheduled maintenance when possible.'
        },
        {
          subtitle: '2.3 Project Engagement',
          text: 'All consulting engagements are subject to separate project agreements or statements of work (SOW). These agreements will specify deliverables, timelines, payment terms, and project-specific terms. In case of conflict, the project-specific agreement takes precedence over these general terms.'
        }
      ]
    },
    {
      icon: Scale,
      title: '3. User Obligations and Conduct',
      content: [
        {
          subtitle: '3.1 Acceptable Use',
          text: 'You agree to use our website and services only for lawful purposes and in accordance with these terms. You must not: attempt to gain unauthorized access to our systems or networks, transmit malicious code or interfere with service operation, collect user data without authorization, or impersonate any person or entity.'
        },
        {
          subtitle: '3.2 Account Security',
          text: 'If you create an account or access protected areas, you are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized access or security breaches.'
        },
        {
          subtitle: '3.3 Accurate Information',
          text: 'You agree to provide accurate, current, and complete information when submitting forms or communicating with us. Providing false or misleading information may result in termination of services.'
        }
      ]
    },
    {
      icon: Shield,
      title: '4. Intellectual Property Rights',
      content: [
        {
          subtitle: '4.1 Our Content',
          text: 'All content on Dev2Production.Tech, including text, graphics, logos, code, designs, and documentation, is owned by Dev2Production.Tech or licensed to us and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our explicit written permission.'
        },
        {
          subtitle: '4.2 Client Materials',
          text: 'During project engagements, clients retain ownership of their proprietary materials, data, and intellectual property. We will not use, disclose, or retain client materials beyond the scope required to deliver services, except as specified in project agreements.'
        },
        {
          subtitle: '4.3 Deliverables',
          text: 'Unless otherwise specified in a project agreement, deliverables created specifically for a client project (such as custom scripts, configurations, or documentation) will be owned by the client upon full payment. Pre-existing tools, frameworks, and methodologies remain our property.'
        },
        {
          subtitle: '4.4 Trademarks',
          text: 'Dev2Production.Tech, our logo, and related marks are trademarks of Dev2Production.Tech. You may not use our trademarks without our prior written consent. Third-party trademarks mentioned on our website are the property of their respective owners.'
        }
      ]
    },
    {
      icon: AlertCircle,
      title: '5. Disclaimers and Limitations of Liability',
      content: [
        {
          subtitle: '5.1 "As Is" Basis',
          text: 'Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that our services will be error-free or uninterrupted.'
        },
        {
          subtitle: '5.2 Limitation of Liability',
          text: 'To the maximum extent permitted by law, Dev2Production.Tech and its directors, employees, partners, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from: (a) your use or inability to use our services; (b) unauthorized access to or alteration of your data; (c) any third-party conduct or content on our services.'
        },
        {
          subtitle: '5.3 Maximum Liability Cap',
          text: 'In no event shall our total liability to you for all damages, losses, and causes of action exceed the amount paid by you, if any, for accessing our services during the twelve (12) months preceding the claim, or $1,000 USD, whichever is greater.'
        },
        {
          subtitle: '5.4 Professional Services Disclaimer',
          text: 'While we strive to provide expert consulting services, we do not guarantee specific outcomes or results. DevOps implementations depend on many factors, including client infrastructure, cooperation, and external variables beyond our control.'
        }
      ]
    },
    {
      icon: Ban,
      title: '6. Indemnification',
      content: [
        {
          subtitle: '6.1 Your Indemnification',
          text: 'You agree to indemnify, defend, and hold harmless Dev2Production.Tech, its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) arising out of or related to: (a) your violation of these terms; (b) your use of our services; (c) your violation of any third-party rights, including intellectual property, privacy, or other proprietary rights; (d) any claim that your content caused damage to a third party.'
        }
      ]
    },
    {
      icon: Globe,
      title: '7. Payment Terms (For Consulting Services)',
      content: [
        {
          subtitle: '7.1 Fees and Invoicing',
          text: 'Consulting fees, payment schedules, and milestones will be specified in individual project agreements or SOWs. Invoices are typically issued based on agreed milestones or monthly retainers. Payment is due within the timeframe specified on the invoice (commonly Net 30 days).'
        },
        {
          subtitle: '7.2 Late Payments',
          text: 'Late payments may incur interest charges at the rate of 1.5% per month (or the maximum allowed by law, whichever is lower). We reserve the right to suspend services for accounts with overdue balances exceeding 30 days.'
        },
        {
          subtitle: '7.3 Refunds and Cancellations',
          text: 'Refund and cancellation policies vary by service type and will be outlined in project agreements. Generally, deposits are non-refundable. For cancellations after work has commenced, clients are responsible for payment for services rendered up to the cancellation date. See our Refund Policy for detailed information.'
        },
        {
          subtitle: '7.4 Expenses',
          text: 'Unless otherwise agreed, clients are responsible for reimbursing reasonable out-of-pocket expenses incurred on their behalf, such as third-party tools, licenses, or cloud infrastructure costs. Expenses exceeding an agreed threshold will require prior client approval.'
        }
      ]
    },
    {
      icon: Shield,
      title: '8. Confidentiality',
      content: [
        {
          subtitle: '8.1 Confidential Information',
          text: 'During the course of our engagement, both parties may share confidential information. Each party agrees to: maintain confidentiality of the other party\'s proprietary information, use confidential information only for the purposes of the engagement, protect confidential information with the same care used to protect its own sensitive data (but no less than reasonable care).'
        },
        {
          subtitle: '8.2 Exceptions',
          text: 'Confidentiality obligations do not apply to information that: (a) is or becomes publicly available without breach of this agreement; (b) is independently developed without use of confidential information; (c) is rightfully obtained from a third party without confidentiality restrictions; (d) must be disclosed by law or court order (with prior notice to the disclosing party when legally permissible).'
        },
        {
          subtitle: '8.3 Return of Materials',
          text: 'Upon termination of services or upon request, each party will return or destroy all confidential information of the other party, except for copies retained for legal compliance purposes or archived backups.'
        }
      ]
    },
    {
      icon: AlertCircle,
      title: '9. Termination',
      content: [
        {
          subtitle: '9.1 Termination by Either Party',
          text: 'Either party may terminate an ongoing service engagement with written notice as specified in the project agreement (typically 30 days). Termination does not relieve either party of obligations incurred prior to termination.'
        },
        {
          subtitle: '9.2 Immediate Termination',
          text: 'We reserve the right to immediately terminate or suspend your access to our services without prior notice if you breach these terms, engage in fraudulent or illegal activity, or pose a security risk to our systems or other users.'
        },
        {
          subtitle: '9.3 Effect of Termination',
          text: 'Upon termination: you must cease all use of our services and materials, payment obligations for services rendered remain in effect, confidentiality and intellectual property provisions survive, and we may delete or archive your data according to our data retention policies.'
        }
      ]
    },
    {
      icon: Scale,
      title: '10. Dispute Resolution and Governing Law',
      content: [
        {
          subtitle: '10.1 Governing Law',
          text: 'These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of courts in [Your Jurisdiction].'
        },
        {
          subtitle: '10.2 Informal Resolution',
          text: 'Before initiating formal legal proceedings, parties agree to attempt informal resolution by contacting us at info@dev2production.tech. We will make good-faith efforts to resolve disputes amicably within 30 days.'
        },
        {
          subtitle: '10.3 Arbitration (Optional)',
          text: 'If a dispute cannot be resolved informally, parties may agree to binding arbitration under the rules of [Arbitration Body] rather than litigation. Arbitration decisions are final and enforceable in any court of competent jurisdiction.'
        },
        {
          subtitle: '10.4 Class Action Waiver',
          text: 'You agree to resolve disputes on an individual basis only. You waive any right to participate in class action lawsuits or class-wide arbitration against Dev2Production.Tech.'
        }
      ]
    },
    {
      icon: FileCheck,
      title: '11. Miscellaneous',
      content: [
        {
          subtitle: '11.1 Entire Agreement',
          text: 'These terms, together with any project-specific agreements and our Privacy Policy, constitute the entire agreement between you and Dev2Production.Tech regarding use of our services and supersede all prior agreements and understandings.'
        },
        {
          subtitle: '11.2 Severability',
          text: 'If any provision of these terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions will remain in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.'
        },
        {
          subtitle: '11.3 Waiver',
          text: 'Our failure to enforce any right or provision of these terms will not constitute a waiver of such right or provision. Any waiver of any provision will be effective only if in writing and signed by us.'
        },
        {
          subtitle: '11.4 Assignment',
          text: 'You may not assign or transfer these terms or your rights and obligations hereunder without our prior written consent. We may assign these terms or our rights at any time without restriction, including in connection with a merger, acquisition, or sale of assets.'
        },
        {
          subtitle: '11.5 Force Majeure',
          text: 'Neither party shall be liable for failure or delay in performance due to causes beyond their reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, government actions, or internet/telecommunications failures.'
        },
        {
          subtitle: '11.6 Third-Party Links',
          text: 'Our website may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or terms of service of any third-party sites. Your interactions with third parties are solely between you and the third party.'
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
          <div className="absolute top-20 right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-900/80 border border-brand-orange/30 rounded-full mb-6">
              <Scale className="w-4 h-4 text-brand-orange" />
              <span className="text-sm text-dark-200">Legal Agreement</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-orange via-brand-orange-warm to-brand-cyan bg-clip-text text-transparent">
              Terms of Service
            </h1>

            <p className="text-xl text-dark-200 mb-4">
              Please read these terms carefully before using our services.
            </p>

            <p className="text-dark-300">
              Last Updated: <span className="text-brand-orange font-medium">{lastUpdated}</span>
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
              <h2 className="text-2xl font-bold text-brand-orange mb-4">Welcome to Dev2Production.Tech</h2>
              <p className="text-dark-200 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your access to and use of the Dev2Production.Tech website and consulting services. These Terms constitute a legally binding agreement between you ("Client," "you," or "your") and Dev2Production.Tech ("we," "us," or "our").
              </p>
              <p className="text-dark-200 leading-relaxed">
                We provide enterprise DevOps consulting, cloud engineering, and automation services. By engaging with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
              </p>
            </motion.div>

            {/* Terms Sections */}
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-cyan to-brand-cyan/70 rounded-lg flex items-center justify-center shadow-glow-cyan">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-100 mb-2">{section.title}</h2>
                  </div>
                </div>

                <div className="ml-16 space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="pb-6 border-b border-dark-800 last:border-0">
                      <h3 className="text-lg font-semibold text-brand-orange mb-3">{item.subtitle}</h3>
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
              className="mt-16 p-8 bg-gradient-to-br from-dark-900 to-dark-800 border border-brand-orange/30 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-dark-100 mb-4">Questions About These Terms?</h2>
                  <p className="text-dark-200 leading-relaxed mb-4">
                    If you have any questions or concerns about these Terms of Service, please contact our legal team:
                  </p>
                  <div className="space-y-2 text-dark-200">
                    <p>
                      <span className="font-medium text-dark-100">Email:</span>{' '}
                      <a href="mailto:info@dev2production.tech" className="text-brand-orange hover:text-brand-orange-warm transition-colors">
                        info@dev2production.tech
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-dark-100">Subject Line:</span> Terms of Service Inquiry
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Acknowledgment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-6 bg-dark-900/30 border border-dark-800 rounded-lg"
            >
              <p className="text-dark-300 text-sm leading-relaxed">
                By using Dev2Production.Tech services, you acknowledge that you have read these Terms of Service, understand them, and agree to be legally bound by them. If you do not agree to these terms, you must immediately discontinue use of our services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
