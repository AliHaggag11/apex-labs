'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaRocket, FaBrain, FaCheckCircle, FaArrowRight,
  FaIndustry, FaGlobe, FaCogs, FaDatabase
} from 'react-icons/fa';

const services = [
  {
    id: 'digitalization',
    icon: FaRocket,
    title: 'Business Digitalization',
    description: 'Transform your business with comprehensive digital solutions and infrastructure.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Cloud Infrastructure Setup (AWS, Azure, GCP)',
      'ERP & CRM Implementation',
      'Business Process Automation',
      'E-Commerce Solutions',
      'Digital Marketing Automation',
      'Business Intelligence Tools'
    ],
    benefits: [
      'Streamlined Operations',
      'Enhanced Efficiency',
      'Improved Customer Experience',
      'Data-Driven Decision Making'
    ],
    subServices: [
      {
        title: 'IT Infrastructure & Cloud',
        items: [
          'Cloud Migration & Strategy',
          'Hybrid Cloud Deployment',
          'Secure Remote Work Setup',
          'Cybersecurity Implementation'
        ]
      },
      {
        title: 'Business Software',
        items: [
          'ERP Systems (SAP, Odoo)',
          'CRM Solutions (Salesforce, HubSpot)',
          'HR & Payroll Automation',
          'Financial Management Systems'
        ]
      }
    ]
  },
  {
    id: 'ai-automation',
    icon: FaBrain,
    title: 'AI & Automation',
    description: 'Enhance your operations with cutting-edge AI and automation solutions.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    features: [
      'AI-Powered Process Automation',
      'Predictive Analytics',
      'Computer Vision Solutions',
      'Natural Language Processing',
      'Machine Learning Integration',
      'AI-Driven Decision Support'
    ],
    benefits: [
      'Increased Productivity',
      'Reduced Operational Costs',
      'Better Resource Allocation',
      'Competitive Advantage'
    ],
    subServices: [
      {
        title: 'Process Automation',
        items: [
          'Robotic Process Automation (RPA)',
          'AI Workflow Automation',
          'Document Processing',
          'Chatbots & Virtual Assistants'
        ]
      },
      {
        title: 'Advanced Analytics',
        items: [
          'Predictive Analytics',
          'Real-time Monitoring',
          'AI-Based Forecasting',
          'Business Intelligence'
        ]
      }
    ]
  },
  {
    id: 'industry',
    icon: FaIndustry,
    title: 'Industry Solutions',
    description: 'Specialized solutions tailored for specific industries and business needs.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Retail & E-Commerce Solutions',
      'Healthcare Systems',
      'Financial Services',
      'Education Technology',
      'Manufacturing & Logistics',
      'Legal & Compliance'
    ],
    benefits: [
      'Industry-Specific Optimization',
      'Regulatory Compliance',
      'Specialized Automation',
      'Vertical Integration'
    ],
    subServices: [
      {
        title: 'Key Industries',
        items: [
          'Retail & E-Commerce',
          'Healthcare & Medical',
          'Banking & Finance',
          'Education & Training'
        ]
      },
      {
        title: 'Specialized Systems',
        items: [
          'Inventory Management',
          'Patient Care Systems',
          'Financial Analytics',
          'Learning Management'
        ]
      }
    ]
  },
  {
    id: 'digital-transformation',
    icon: FaGlobe,
    title: 'Digital Transformation',
    description: 'Complete digital transformation solutions for modern businesses.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    features: [
      'E-Commerce Development',
      'Digital Payment Integration',
      'Online Business Enablement',
      'Digital Marketing Solutions',
      'Customer Engagement Tools',
      'Data Management Systems'
    ],
    benefits: [
      'Digital Market Presence',
      'Enhanced Customer Reach',
      'Automated Operations',
      'Scalable Growth'
    ],
    subServices: [
      {
        title: 'E-Commerce & Payments',
        items: [
          'Custom E-Commerce Platforms',
          'Payment Gateway Integration',
          'POS Systems',
          'Subscription Management'
        ]
      },
      {
        title: 'Digital Marketing',
        items: [
          'SEO & Content Strategy',
          'Social Media Automation',
          'Email Marketing',
          'Analytics & Tracking'
        ]
      }
    ]
  }
];

const technologies = [
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'Azure', 'Google Cloud', 'Private Cloud', 'Hybrid Solutions', 'VMware', 'Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'Business Software',
    items: ['SAP', 'Salesforce', 'Microsoft Dynamics', 'Odoo', 'HubSpot', 'Oracle', 'Zoho', 'NetSuite'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Computer Vision', 'NLP', 'Azure AI', 'Google AI', 'IBM Watson'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'E-Commerce & Payments',
    items: ['Shopify', 'WooCommerce', 'Fawry', 'Paymob', 'Stripe', 'PayPal', 'Square', 'Magento'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'Development & DevOps',
    items: ['React', 'Node.js', 'Python', 'Java', 'Jenkins', 'GitLab', 'GitHub Actions', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'Security & Compliance',
    items: ['Cloudflare', 'Auth0', 'Okta', 'Fortinet', 'Palo Alto', 'ISO 27001', 'GDPR', 'SOC 2'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'Analytics & BI',
    items: ['Power BI', 'Tableau', 'Looker', 'Snowflake', 'BigQuery', 'Redshift', 'MongoDB', 'Elasticsearch'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'Marketing & CRM',
    items: ['Marketo', 'Mailchimp', 'Zendesk', 'Intercom', 'Adobe Marketing', 'Google Analytics', 'Mixpanel', 'Segment'],
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg/50">
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
            alt="Digital Transformation"
            fill
            className="object-cover opacity-10 dark:opacity-5"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white dark:from-dark-bg/80 dark:to-dark-bg" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 text-sm font-semibold rounded-full text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 ring-1 ring-primary-600/10 dark:ring-primary-400/20"
            >
              Comprehensive Solutions
            </motion.span>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Business</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                From Digital to AI-Powered
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-dark-muted sm:text-xl">
              Start with digitalization, then evolve to full AI automation. Our modular approach ensures a smooth transition at your own pace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Visualization Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary-500/5 dark:bg-primary-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 ring-1 ring-primary-600/10 dark:ring-primary-400/20"
            >
              Digital Evolution
            </motion.span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
              Your Journey to Digital Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-dark-muted max-w-2xl mx-auto">
              A proven path from traditional operations to AI-powered innovation
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 h-full w-0.5">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-primary-500 to-primary-600 dark:from-blue-400 dark:via-primary-400 dark:to-primary-400 blur-[0.5px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-primary-500 to-primary-600 dark:from-blue-400 dark:via-primary-400 dark:to-primary-400" />
            </div>

            <div className="space-y-16">
              {[
                {
                  icon: FaRocket,
                  title: 'Digital Foundation',
                  description: 'Launch your digital transformation with modern infrastructure',
                  features: ['Cloud Migration', 'Digital Workflows', 'Basic Automation']
                },
                {
                  icon: FaCogs,
                  title: 'Process Automation',
                  description: 'Streamline and automate your core business processes',
                  features: ['Smart Workflows', 'Integration Hub', 'Process Mining']
                },
                {
                  icon: FaDatabase,
                  title: 'Data Integration',
                  description: 'Unify your data sources for powerful insights',
                  features: ['Data Lake', 'Real-time Analytics', 'BI Dashboard']
                },
                {
                  icon: FaBrain,
                  title: 'AI Enhancement',
                  description: 'Leverage AI to transform your business operations',
                  features: ['Machine Learning', 'Predictive AI', 'Automation']
                }
              ].map((step, index) => (
                <div key={step.title} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    <div className="absolute left-8 lg:left-1/2 top-8 -translate-x-1/2 flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-primary-600 dark:from-blue-400 dark:to-primary-400 rounded-full opacity-75 blur-[2px] animate-pulse" />
                        <div className="w-16 h-16 rounded-full border-4 border-white dark:border-dark-card bg-gradient-to-br from-blue-500 to-primary-600 dark:from-blue-400 dark:to-primary-400 shadow-xl flex items-center justify-center relative">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="mt-2 px-3 py-1 rounded-full bg-white dark:bg-dark-card shadow-md"
                      >
                        <span className="text-sm font-bold bg-gradient-to-r from-blue-500 to-primary-600 dark:from-blue-400 dark:to-primary-400 bg-clip-text text-transparent">
                          Phase {index + 1}
                        </span>
                      </motion.div>
                    </div>

                    <div className={`w-full lg:w-[calc(50%-3rem)] ml-24 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="group bg-white dark:bg-dark-card rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-primary-600 dark:from-blue-400 dark:to-primary-400 bg-clip-text text-transparent mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-dark-muted mb-4">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.features.map((feature, idx) => (
                            <motion.span 
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.2, delay: idx * 0.1 }}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors cursor-default group-hover:translate-x-1"
                            >
                              <div className="w-1 h-1 rounded-full bg-current mr-2" />
                              {feature}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mt-20"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-primary-600 dark:from-blue-400 dark:to-primary-400 text-white font-medium hover:from-blue-600 hover:to-primary-700 dark:hover:from-blue-500 dark:hover:to-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Your Journey
                <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-dark-card rounded-3xl shadow-lg shadow-gray-200/50 dark:shadow-dark-border/10 ring-1 ring-gray-200/50 dark:ring-dark-border/10 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 dark:text-dark-muted mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 dark:text-dark-muted">
                            <FaRocket className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-3">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 dark:text-dark-muted">
                            <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {service.subServices.map((subService, idx) => (
                      <div key={idx} className="bg-gray-50 dark:bg-dark-card/50 rounded-xl p-4">
                        <h4 className="text-base font-semibold text-gray-900 dark:text-dark-text mb-3">
                          {subService.title}
                        </h4>
                        <ul className="space-y-2">
                          {subService.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-center text-gray-600 dark:text-dark-muted">
                              <div className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full mr-2" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors duration-200"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-dark-card/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
              Technologies & Platforms
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
              We integrate with leading technologies and local payment solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-dark-border/10"
              >
                <div className="relative h-32">
                  <Image
                    src={tech.image}
                    alt={tech.category}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                  <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-semibold text-white">
                    {tech.category}
                  </h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {tech.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-dark-muted flex items-center">
                        <div className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full mr-2" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-500/90 to-blue-600/90 dark:from-primary-600/90 dark:to-blue-700/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Book a consultation with our experts to discuss your business needs and discover the perfect solution.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-primary-600 bg-white hover:bg-gray-50 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 