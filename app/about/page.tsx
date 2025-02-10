'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaLightbulb, FaRocket, FaHandshake, FaChartLine,
  FaCogs, FaUsers, FaCheckCircle, FaStar
} from 'react-icons/fa';

const missionVision = {
  mission: {
    title: "Our Mission",
    description: "To empower businesses through innovative digital solutions that drive growth, efficiency, and sustainable success in the digital age.",
    points: [
      "Delivering cutting-edge technology solutions",
      "Fostering digital innovation and transformation",
      "Creating lasting value for our clients",
      "Building strong, collaborative partnerships"
    ]
  },
  vision: {
    title: "Our Vision",
    description: "To be the leading force in digital transformation, recognized globally for our innovative solutions and commitment to client success.",
    points: [
      "Setting industry standards for excellence",
      "Pioneering technological advancement",
      "Driving sustainable digital growth",
      "Creating positive global impact"
    ]
  }
};

const whyApexLabs = [
  {
    icon: FaLightbulb,
    title: "Innovation First",
    description: "We stay ahead of technological trends to provide cutting-edge solutions that give our clients a competitive edge."
  },
  {
    icon: FaHandshake,
    title: "Client Partnership",
    description: "We build lasting relationships with our clients, understanding their unique needs and growing together."
  },
  {
    icon: FaChartLine,
    title: "Proven Results",
    description: "Our track record speaks for itself, with successful implementations across various industries and scales."
  },
  {
    icon: FaCogs,
    title: "Technical Excellence",
    description: "Our team of experts brings deep technical knowledge and industry best practices to every project."
  }
];

const ourApproach = [
  {
    title: "Discovery & Strategy",
    description: "We begin by understanding your business goals, challenges, and vision to create a tailored digital strategy.",
    steps: [
      "In-depth business analysis",
      "Market research and positioning",
      "Technology stack assessment",
      "Strategic roadmap development"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Innovation & Development",
    description: "Our team employs cutting-edge technologies and methodologies to bring your digital vision to life.",
    steps: [
      "Agile development process",
      "Continuous integration/deployment",
      "Quality assurance testing",
      "Performance optimization"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Implementation & Support",
    description: "We ensure smooth deployment and provide ongoing support to maintain optimal performance.",
    steps: [
      "Seamless integration",
      "Team training and onboarding",
      "24/7 technical support",
      "Regular maintenance and updates"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg/50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
            alt="About Apex Labs"
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
              About Us
            </motion.span>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl lg:text-6xl">
              Driving Digital 
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-dark-muted max-w-2xl mx-auto">
              We are a team of passionate technologists committed to transforming businesses through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[missionVision.mission, missionVision.vision].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-dark-muted mb-6">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-3" />
                      <span className="text-gray-700 dark:text-dark-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Apex Labs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
              Why Apex Labs?
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-dark-muted">
              What sets us apart in the digital transformation landscape
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyApexLabs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/10">
                  <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-dark-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
              Our Approach
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-dark-muted">
              A systematic methodology for delivering exceptional results
            </p>
          </div>
          <div className="space-y-12">
            {ourApproach.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col lg:flex-row gap-8 items-center"
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                    <Image
                      src={phase.image}
                      alt={phase.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-dark-muted mb-6">
                    {phase.description}
                  </p>
                  <ul className="space-y-3">
                    {phase.steps.map((step, i) => (
                      <li key={i} className="flex items-start">
                        <FaStar className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-3" />
                        <span className="text-gray-700 dark:text-dark-text">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: FaUsers, value: "50+", label: "Team Members" },
              { icon: FaRocket, value: "200+", label: "Projects Delivered" },
              { icon: FaHandshake, value: "95%", label: "Client Satisfaction" },
              { icon: FaLightbulb, value: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/10">
                  <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-dark-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
} 