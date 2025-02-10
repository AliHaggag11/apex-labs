'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email Us',
    details: 'contact@apexlabs.eg',
    description: 'Response within 24 hours'
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    details: '+20 (2) 1234-5678',
    description: 'Sun-Thu, 9am to 5pm'
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Visit Our Office',
    details: 'New Cairo, Cairo',
    description: 'Fifth Settlement, Street 90'
  },
  {
    icon: FaClock,
    title: 'Business Hours',
    details: 'Sunday - Thursday',
    description: '9:00 AM - 5:00 PM EET'
  }
];

export default function Contact() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg/50">
      {/* Hero Section with Background Pattern */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 text-sm font-semibold rounded-full text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 ring-1 ring-primary-600/10 dark:ring-primary-400/20"
            >
              Get in Touch
            </motion.span>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl lg:text-6xl">
              Let's Build Something
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-dark-muted max-w-2xl mx-auto">
              Transform your business with cutting-edge technology solutions. Our team of experts is ready to help you achieve your digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/10 to-blue-500/10 dark:from-primary-400/10 dark:to-blue-400/10 text-primary-600 dark:text-primary-400 group-hover:from-primary-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                      {info.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-dark-muted mt-1">
                      {info.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white dark:bg-dark-card rounded-3xl shadow-xl p-8 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
              <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-center" />
            </div>

            {/* Form Content */}
            <div className="relative">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-gray-600 dark:text-dark-muted">
                  Fill out the form below and we'll get back to you shortly
                </p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <FaCheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 dark:text-dark-muted mb-8">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-500 dark:to-blue-500 text-white rounded-xl hover:shadow-lg hover:shadow-primary-600/20 dark:hover:shadow-primary-500/20 transition-all"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          } bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text shadow-sm focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200`}
                          placeholder="John Doe"
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
                          } bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text shadow-sm focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200`}
                          placeholder="john@example.com"
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        placeholder="Your Company Name"
                        className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text shadow-sm focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200"
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
                        className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text shadow-sm focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="cloud">Cloud & Infrastructure</option>
                        <option value="automation">Business Automation</option>
                        <option value="ai">AI Solutions</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
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
                        placeholder="Tell us about your project..."
                        className={`block w-full px-4 py-3 rounded-xl border ${
                          errors.message 
                            ? 'border-red-500 dark:border-red-500' 
                            : 'border-gray-300 dark:border-dark-border'
                        } bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text shadow-sm focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200`}
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
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 