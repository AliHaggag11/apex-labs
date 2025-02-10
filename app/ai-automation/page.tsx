'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaRobot, FaBrain, FaChartLine, FaUserCog, 
  FaIndustry, FaCode, FaDatabase, FaEye,
  FaComments, FaShieldAlt, FaChartBar, FaUserFriends
} from 'react-icons/fa';

const aiSolutions = [
  {
    title: 'AI-Powered Process Automation',
    description: 'Transform your business operations with intelligent automation powered by advanced AI.',
    icon: FaRobot,
    features: [
      'Robotic Process Automation (RPA)',
      'AI-driven Workflow Automation',
      'Intelligent Document Processing',
      'Smart Task Management',
      'Process Mining & Optimization',
      'Automated Quality Control'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Business Intelligence & Analytics',
    description: 'Leverage AI-powered analytics to gain actionable insights and make data-driven decisions.',
    icon: FaChartLine,
    features: [
      'Predictive Analytics',
      'Real-time Data Analysis',
      'Fraud Detection Systems',
      'Sentiment Analysis',
      'Market Trend Prediction',
      'Performance Monitoring'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Implement advanced computer vision systems for automated visual analysis and monitoring.',
    icon: FaEye,
    features: [
      'AI Surveillance Systems',
      'Quality Control & Defect Detection',
      'OCR & Document Processing',
      'Object Recognition',
      'Visual Search',
      'Face Recognition'
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Customer Engagement & Personalization',
    description: 'Enhance customer experience with AI-driven personalization and engagement solutions.',
    icon: FaUserFriends,
    features: [
      'AI Product Recommendations',
      'Dynamic Pricing Optimization',
      'Customer Behavior Analysis',
      'Loyalty Program Management',
      'Personalized Marketing',
      'Customer Journey Mapping'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
  }
];

const technologies = [
  {
    name: 'TensorFlow',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg'
  },
  {
    name: 'PyTorch',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg'
  },
  {
    name: 'OpenAI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'
  },
  {
    name: 'Azure AI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg'
  },
  {
    name: 'Google Cloud AI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  {
    name: 'IBM Watson',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
  },
  {
    name: 'Amazon SageMaker',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
  },
  {
    name: 'Scikit-learn',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'
  },
  {
    name: 'NVIDIA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg'
  },
  {
    name: 'DeepSeek',
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHZpZXdCb3g9IjAgMCA1MTIgNTA5LjY0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTE1LjYxMiAwaC0yODAuNzc1QzQ1OS45NzQgMCA1MTIgNTIuMDI2IDUxMiAxMTUuNjEydjI3OC40MTVjMCA2My41ODctNTIuMDI2IDExNS42MTMtMTE1LjYxMyAxMTUuNjEzSDExNS42MTJDNTIuMDI2IDUwOS42NCAwIDQ1Ny42MTQgMCAzOTQuMDI3VjExNS42MTJDMCA1Mi4wMjYgNTIuMDI2IDAgMTE1LjYxMiAweiIvPjxwYXRoIGZpbGw9IiM0RDZCRkUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQ0MC44OTggMTM5LjE2N2MtNC4wMDEtMS45NjEtNS43MjMgMS43NzYtOC4wNjIgMy42NzMtLjgwMS42MTItMS40NzkgMS40MDctMi4xNTQgMi4xNDEtNS44NDggNi4yNDYtMTIuNjgxIDEwLjM0OS0yMS42MDcgOS44NTktMTMuMDQ4LS43MzQtMjQuMTkyIDMuMzY4LTM0LjA0IDEzLjM0OC0yLjA5My0xMi4zMDctOS4wNDgtMTkuNjU4LTE5LjYzNS0yNC4zNy01LjU0LTIuNDQ5LTExLjE0MS00LjktMTUuMDItMTAuMjI3LTIuNzA4LTMuNzk1LTMuNDQ3LTguMDIxLTQuODAxLTEyLjE4NS0uODYxLTIuNTA5LTEuNzI1LTUuMDgyLTQuNjE4LTUuNTEyLTMuMTM5LS40OS00LjM3MiAyLjE0Mi01LjYwMSA0LjM0OS00LjkyNSA5LjAwMi02LjgzMyAxOC45MjEtNi42NDcgMjguOTYyLjQzMiAyMi41OTcgOS45NzIgNDAuNTk3IDI4LjkzMiA1My4zOTcgMi4xNTQgMS40NyAyLjcwNyAyLjkzOSAyLjAzMiA1LjA4Mi0xLjI5MyA0LjQxLTIuODMyIDguNjk1LTQuMTg2IDEzLjEwNS0uODYyIDIuODE3LTIuMTU3IDMuNDI5LTUuMTcyIDIuMjA1LTEwLjQwMi00LjM0Ni0xOS4zOTEtMTAuNzc4LTI3LjMzMi0xOC41NTMtMTMuNDgxLTEzLjA0NC0yNS42NjgtMjcuNDM0LTQwLjg3My0zOC43MDJhMTc3LjYxNCAxNzcuNjE0IDAgMDAtMTAuODM0LTcuNDA5Yy0xNS41MTItMTUuMDYzIDIuMDMyLTI3LjQzNCA2LjA5NC0yOC45MDIgNC4yNDctMS41MzIgMS40NzgtNi43OTctMTIuMjUxLTYuNzM2LTEzLjcyNy4wNjEtMjYuMjg1IDQuNjUzLTQyLjI4OCAxMC43NzctMi4zNC45Mi00LjgwMSAxLjU5My03LjMyNiAyLjE0Mi0xNC41MjctMi43NTYtMjkuNjA4LTMuMzY4LTQ1LjM2Ny0xLjU5My0yOS42NzEgMy4zMDUtNTMuMzY4IDE3LjMyOS03MC43ODggNDEuMjcyLTIwLjkyOCAyOC43ODUtMjUuODU0IDYxLjQ4Mi0xOS44MjEgOTUuNTkgNi4zNCAzNS45NDMgMjQuNjgzIDY1LjcwNCA1Mi44NzYgODguOTc0IDI5LjIzOSAyNC4xMjMgNjIuOTExIDM1Ljk0MyAxMDEuMzIgMzMuNjc3IDIzLjMyOS0xLjM0NiA0OS4zMDctNC40NjggNzguNjA3LTI5LjI3IDcuMzg3IDMuNjczIDE1LjE0MiA1LjE0NCAyOC4wMDggNi4yNDYgOS45MTEuOTIgMTkuNDUyLS40OSAyNi44MzktMi4wMTkgMTEuNTczLTIuNDQ5IDEwLjc3My0xMy4xNjYgNi41ODYtMTUuMTI0LTMzLjkxNS0xNS43OTctMjYuNDctOS4zNjgtMzMuMjQtMTQuNTczIDE3LjIzNS0yMC4zOSA0My4yMTMtNDEuNTc3IDUzLjM2OS0xMTAuMjIyLjgtNS40NDguMTIxLTguODc3IDAtMTMuMjg3LS4wNjEtMi42OTIuNTUzLTMuNzM0IDMuNjMyLTQuMDQxIDguNDk0LS45ODEgMTYuNzQyLTMuMzA1IDI0LjMxNC03LjQ3MSAyMS45NzUtMTIuMDAyIDMwLjg0LTMxLjcxOSAzMi45MzMtNTUuMzU1LjMwNy0zLjYxMi0uMDYxLTcuMzQ4LTMuODc5LTkuMjQ1di0uMDAzek0yNDkuNCAzNTEuODljLTMyLjg3Mi0yNS44MzgtNDguODE0LTM0LjM1Mi01NS40LTMzLjk4NC02LjE1NS4zNjgtNS4wNDggNy40MS0zLjY5NCAxMi4wMDIgMS40MTUgNC41MzIgMy4yNjQgNy42NTQgNS44NDggMTEuNjM0IDEuNzg1IDIuNjM0IDMuMDE3IDYuNTUxLTEuNzg0IDkuNDkzLTEwLjU4NyA2LjU1LTI4Ljk5My0yLjIwNS0yOS44NTYtMi42MzUtMjEuNDIxLTEyLjYxNC0zOS4zMzQtMjkuMjY5LTUxLjk1NC01Mi4wNDctMTIuMTg3LTIxLjkyNC0xOS4yNjctNDUuNDM1LTIwLjQzNS03MC41NDItLjMwOC02LjA2MSAxLjQ3OC04LjIwNyA3LjUwOS05LjMwNyA3Ljk0LTEuNDcxIDE2LjEyNy0xLjc3OCAyNC4wNjgtLjYxNSAzMy41NDcgNC45IDYyLjEwOCAxOS45MDIgODYuMDU0IDQzLjY2IDEzLjY2NiAxMy41MzEgMjQuMDA3IDI5LjY5OSAzNC42NTggNDUuNDk2IDExLjMyNiAxNi43NzggMjMuNTE0IDMyLjc2MSAzOS4wMjYgNDUuODY1IDUuNDc5IDQuNTkyIDkuODQ4IDguMDgzIDE0LjAzNSAxMC42NTYtMTIuNjIgMS40MDctMzMuNjczIDEuNzE0LTQ4LjA3NS05LjY3NnptMTUuODk5LTEwMi41MTljLjUyMS0yLjExMSAyLjQyMS0zLjY1OCA0LjcyMi0zLjY1OGE0Ljc0IDQuNzQgMCAwMTEuNjYxLjMwNWMuNjc4LjI0NiAxLjI5My42MTQgMS43ODYgMS4xNjMuODYxLjg1OSAxLjM1NCAyLjA4MyAxLjM1NCAzLjM2OCAwIDIuNjk1LTIuMTU0IDQuODM3LTQuODYyIDQuODM3YTQuNzQ4IDQuNzQ4IDAgMDEtNC43MzgtNC4wMzQgNS4wMSA1LjAxIDAgMDEuMDc3LTEuOTgxem00Ny4yMDggMjYuOTE1Yy0yLjYwNi45OTYtNS4yIDEuNzc4LTcuNzA3IDEuODgtNC42NzkuMjQ0LTkuNzg3LTEuNjU0LTEyLjU1Ni0zLjk4MS00LjMwOC0zLjYxMi03LjM4Ni01LjYzMS04LjY3OS0xMS45NDEtLjU1NC0yLjY5NS0uMjQ3LTYuODU4LjI0Ni05LjI0NiAxLjEwOC01LjE0NC0uMTI0LTguNDUxLTMuNzU0LTExLjQ1MS0yLjk1NC0yLjQ0OS02LjcxMS0zLjEyMi0xMC44MzQtMy4xMjItMS41MzkgMC0yLjk1NC0uNjczLTQuMDAxLTEuMjI0LTEuNzI0LS44NTYtMy4xMzktMy0xLjc4NS01LjYzNC40MzItLjg1NiAyLjUyNS0yLjkzOSAzLjAxOC0zLjMwNSA1LjYtMy4xODUgMTIuMDY1LTIuMTQ0IDE4LjAzNC4yNDQgNS41NCAyLjI2NiA5LjcyNyA2LjQyOSAxNS43NTkgMTIuMzA3IDYuMTU1IDcuMTAyIDcuMjYzIDkuMDYzIDEwLjc3MyAxNC4zOSAyLjc3MSA0LjE2MyA1LjI5NCA4LjQ1MSA3LjAxOCAxMy4zNDguODc3IDIuNTYxLjA3MSA0Ljc0LTIuMzQxIDYuMjc3LS45ODEuNjI1LTIuMTA5IDEuMDQ0LTMuMTkxIDEuNDU4eiIvPjwvc3ZnPg=='
  },
  {
    name: 'Hugging Face',
    logo: 'https://huggingface.co/front/assets/huggingface_logo.svg'
  },
  {
    name: 'Meta AI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
  }
];

const industryApplications = [
  {
    industry: 'Healthcare',
    icon: FaUserCog,
    applications: [
      'Disease Prediction',
      'Medical Image Analysis',
      'Patient Care Optimization',
      'Drug Discovery'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop'
  },
  {
    industry: 'Finance',
    icon: FaChartBar,
    applications: [
      'Risk Assessment',
      'Fraud Detection',
      'Algorithmic Trading',
      'Credit Scoring'
    ],
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2000&auto=format&fit=crop'
  },
  {
    industry: 'Manufacturing',
    icon: FaIndustry,
    applications: [
      'Predictive Maintenance',
      'Quality Control',
      'Supply Chain Optimization',
      'Production Planning'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop'
  },
  {
    industry: 'Retail',
    icon: FaDatabase,
    applications: [
      'Inventory Management',
      'Price Optimization',
      'Customer Analytics',
      'Supply Chain'
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop'
  },
  {
    industry: 'Cybersecurity',
    icon: FaShieldAlt,
    applications: [
      'Threat Detection',
      'Anomaly Detection',
      'Security Analytics',
      'Risk Management'
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop'
  },
  {
    industry: 'Customer Service',
    icon: FaComments,
    applications: [
      'AI Chatbots',
      'Sentiment Analysis',
      'Support Automation',
      'Query Resolution'
    ],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop'
  }
];

export default function AIAutomation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg/50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop"
            alt="AI Automation"
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
              AI Solutions
            </motion.span>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Business</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                With AI Automation
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-dark-muted">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group bg-white dark:bg-dark-card rounded-3xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 dark:text-dark-muted mb-6">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {solution.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400" />
                        <span className="text-sm text-gray-600 dark:text-dark-muted">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-dark-card/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
              Industry-Specific AI Applications
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-dark-muted">
              Tailored AI solutions for various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryApplications.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={industry.image}
                    alt={industry.industry}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400">
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text">
                      {industry.industry}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {industry.applications.map((app, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <FaCode className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                        <span className="text-gray-600 dark:text-dark-muted">
                          {app}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
              AI Technologies We Use
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-dark-muted">
              Leading AI frameworks and platforms powering our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white dark:bg-dark-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-12 mb-3">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm text-gray-900 dark:text-dark-text font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-primary-600 to-blue-600 dark:from-primary-500 dark:to-blue-500 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-center opacity-10" />
            </div>
            <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get started with our AI solutions and stay ahead of the competition
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-primary-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 