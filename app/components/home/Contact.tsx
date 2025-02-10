'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaRocket, FaCogs, FaUsers, FaShieldAlt } from 'react-icons/fa';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const whyChoosePoints = [
  {
    icon: FaRocket,
    title: 'Innovation First',
    description: 'Cutting-edge AI and automation solutions'
  },
  {
    icon: FaCogs,
    title: 'Custom Solutions',
    description: 'Tailored to your specific business needs'
  },
  {
    icon: FaUsers,
    title: 'Expert Team',
    description: 'Seasoned professionals in AI and cloud'
  },
  {
    icon: FaShieldAlt,
    title: 'Proven Track Record',
    description: 'Trusted by leading enterprises worldwide'
  }
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'general'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formState.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
        service: 'general'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1 mb-6 text-sm font-semibold rounded-full text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 ring-1 ring-primary-600/10 dark:ring-primary-400/20"
          >
            Contact Us
          </motion.span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl">
            Get Started Today
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-dark-muted">
            Schedule your free consultation and discover how we can transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg shadow-gray-200/50 dark:shadow-dark-border/10 ring-1 ring-gray-200/50 dark:ring-dark-border/10"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6 sm:mb-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-dark-text">
                Why Choose Apex Labs?
              </h3>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {whyChoosePoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col items-center justify-between h-[180px] p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:border-primary-500/20 dark:hover:border-primary-400/20 transition-colors">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-12 h-12 flex items-center justify-center text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 rounded-xl">
                        <point.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                        {point.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-dark-muted text-center">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <a href="/about" className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                Learn more about our approach
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm rounded-3xl shadow-lg shadow-gray-200/50 dark:shadow-dark-border/10 ring-1 ring-gray-200/50 dark:ring-dark-border/10 p-8"
                >
                  <FaCheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 dark:text-dark-muted text-center mb-6">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-xl hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg shadow-gray-200/50 dark:shadow-dark-border/10 ring-1 ring-gray-200/50 dark:ring-dark-border/10"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-text">
                      Full Name
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 rounded-xl border ${
                          errors.name 
                            ? 'border-red-500 dark:border-red-500' 
                            : 'border-gray-300 dark:border-dark-border'
                        } bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text shadow-sm focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
                      />
                      {errors.name && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <FaExclamationCircle className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-text">
                      Email
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 rounded-xl border ${
                          errors.email 
                            ? 'border-red-500 dark:border-red-500' 
                            : 'border-gray-300 dark:border-dark-border'
                        } bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text shadow-sm focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
                      />
                      {errors.email && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <FaExclamationCircle className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-dark-text">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text shadow-sm focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-dark-text">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      id="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text shadow-sm focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="cloud">Cloud & Infrastructure</option>
                      <option value="automation">Business Automation</option>
                      <option value="ai">AI Solutions</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dark-text">
                      Message
                    </label>
                    <div className="mt-1 relative">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 rounded-xl border ${
                          errors.message 
                            ? 'border-red-500 dark:border-red-500' 
                            : 'border-gray-300 dark:border-dark-border'
                        } bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text shadow-sm focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
                      />
                      {errors.message && (
                        <div className="absolute top-3 right-3">
                          <FaExclamationCircle className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-base font-medium text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 dark:from-primary-500 dark:to-blue-500 dark:hover:from-primary-600 dark:hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-dark-bg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      'Get Free Consultation'
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 