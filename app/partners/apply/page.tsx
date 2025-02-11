'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandshake } from 'react-icons/fa';

type FormData = {
  companyName: string;
  website: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  companySize: string;
  annualRevenue: string;
  partnerType: string;
  existingCustomers: string;
  businessModel: string;
  motivation: string;
};

const initialFormData: FormData = {
  companyName: '',
  website: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  jobTitle: '',
  companySize: '',
  annualRevenue: '',
  partnerType: '',
  existingCustomers: '',
  businessModel: '',
  motivation: '',
};

export default function PartnerApplication() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your API
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen py-20 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-8 text-center"
          >
            <FaHandshake className="w-16 h-16 mx-auto text-primary-600 dark:text-primary-400 mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-4">
              Application Submitted Successfully!
            </h2>
            <p className="text-gray-600 dark:text-dark-muted mb-8">
              Thank you for your interest in partnering with Apex Labs. Our team will review your application and contact you within 48 hours.
            </p>
            <a
              href="/partners"
              className="inline-block px-8 py-3 text-base font-medium rounded-xl bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
            >
              Return to Partner Program
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-dark-text"
          >
            Partner Application
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 dark:text-dark-muted"
          >
            Complete the form below to apply for the Apex Labs Partner Program
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-8 space-y-8"
        >
          {/* Company Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Website *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
              </div>
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Job Title *
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text">Business Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Company Size *
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  required
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                >
                  <option value="">Select...</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>
              <div>
                <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Annual Revenue *
                </label>
                <select
                  id="annualRevenue"
                  name="annualRevenue"
                  required
                  value={formData.annualRevenue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                >
                  <option value="">Select...</option>
                  <option value="<1M">Less than $1M</option>
                  <option value="1M-5M">$1M - $5M</option>
                  <option value="5M-20M">$5M - $20M</option>
                  <option value="20M-50M">$20M - $50M</option>
                  <option value="50M+">$50M+</option>
                </select>
              </div>
              <div>
                <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Partner Type *
                </label>
                <select
                  id="partnerType"
                  name="partnerType"
                  required
                  value={formData.partnerType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                >
                  <option value="">Select...</option>
                  <option value="reseller">Reseller</option>
                  <option value="systemIntegrator">System Integrator</option>
                  <option value="consultant">Consultant</option>
                  <option value="technology">Technology Partner</option>
                </select>
              </div>
              <div>
                <label htmlFor="existingCustomers" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Number of Customers *
                </label>
                <input
                  type="text"
                  id="existingCustomers"
                  name="existingCustomers"
                  required
                  value={formData.existingCustomers}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text">Additional Information</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="businessModel" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Business Model *
                </label>
                <textarea
                  id="businessModel"
                  name="businessModel"
                  required
                  value={formData.businessModel}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your business model and how you plan to integrate Apex Labs solutions..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
              </div>
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-1">
                  Partnership Motivation *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Why do you want to become an Apex Labs partner?"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-3 text-base font-medium rounded-xl bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
} 