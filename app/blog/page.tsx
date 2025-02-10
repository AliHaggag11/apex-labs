'use client';

import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaTags, FaClock, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: Trends and Predictions for 2024",
    slug: "future-of-ai-enterprise-2024",
    excerpt: "Explore the emerging trends and transformative potential of AI in enterprise environments, from automated decision-making to intelligent process optimization.",
    content: "Artificial Intelligence continues to reshape the enterprise landscape...",
    author: "Dr. Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Enterprise", "Digital Transformation"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Building Resilient Digital Infrastructure: A Complete Guide",
    slug: "building-resilient-digital-infrastructure",
    excerpt: "Learn the key principles and best practices for creating robust, scalable digital infrastructure that can withstand modern challenges.",
    content: "In today's rapidly evolving digital landscape...",
    author: "Michael Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    date: "2024-03-10",
    readTime: "12 min read",
    category: "Infrastructure",
    tags: ["Cloud Computing", "DevOps", "Security"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Modern Businesses",
    slug: "cybersecurity-best-practices-2024",
    excerpt: "Discover essential cybersecurity strategies and tools to protect your business in an increasingly complex threat landscape.",
    content: "As cyber threats continue to evolve...",
    author: "Alex Thompson",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    date: "2024-03-05",
    readTime: "10 min read",
    category: "Cybersecurity",
    tags: ["Security", "Risk Management", "Compliance"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Digital Transformation Success Stories: Lessons Learned",
    slug: "digital-transformation-success-stories",
    excerpt: "Real-world examples of successful digital transformation initiatives and key insights for your own journey.",
    content: "Digital transformation has become...",
    author: "Emma Davis",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    date: "2024-03-01",
    readTime: "15 min read",
    category: "Digital Transformation",
    tags: ["Case Studies", "Innovation", "Strategy"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  }
];

const categories = [
  "All",
  "Artificial Intelligence",
  "Digital Transformation",
  "Cybersecurity",
  "Infrastructure",
  "Cloud Computing",
  "Innovation"
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory || post.tags.includes(selectedCategory));

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg/50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl lg:text-6xl">
              Insights & 
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                Perspectives
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-dark-muted max-w-2xl mx-auto">
              Expert insights on AI, digital transformation, and the future of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium 
                  ${category === selectedCategory
                    ? 'bg-primary-600 text-white dark:bg-primary-500' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-card dark:text-dark-text dark:hover:bg-dark-card/80'
                  } transition-all duration-200`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-8">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-dark-card rounded-2xl shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-64">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="flex items-center text-sm text-gray-500 dark:text-dark-muted">
                          <FaCalendar className="mr-2" />
                          {post.date}
                        </span>
                        <span className="flex items-center text-sm text-gray-500 dark:text-dark-muted">
                          <FaClock className="mr-2" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-dark-muted mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                            <Image
                              src={post.authorImage}
                              alt={post.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-dark-text">
                            {post.author}
                          </span>
                        </div>
                        <span className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                          Read more
                          <FaArrowRight className="ml-2" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      {regularPosts.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-8">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm text-gray-500 dark:text-dark-muted">
                          {post.date}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-dark-muted">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-dark-muted mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                        Read more
                        <FaArrowRight className="ml-2" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white dark:bg-dark-card rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 dark:from-primary-400/5 dark:to-blue-400/5" />
            <div className="relative px-6 py-12 sm:px-12 lg:px-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 dark:text-dark-muted mb-8">
                Subscribe to our newsletter for the latest insights and articles.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-card/50 bg-white dark:bg-dark-card focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-xl hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 