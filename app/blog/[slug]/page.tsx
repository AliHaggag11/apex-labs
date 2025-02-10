'use client';

import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaTags, FaClock, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// Import the same blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: Trends and Predictions for 2024",
    slug: "future-of-ai-enterprise-2024",
    excerpt: "Explore the emerging trends and transformative potential of AI in enterprise environments, from automated decision-making to intelligent process optimization.",
    content: `
Artificial Intelligence continues to reshape the enterprise landscape in profound ways. As we move through 2024, several key trends are emerging that will define the future of AI in business:

# 1. Automated Decision Making
Enterprise AI is increasingly being used to automate complex decision-making processes. From resource allocation to risk assessment, AI systems are becoming more sophisticated in their ability to analyze data and make informed decisions.

# 2. Enhanced Customer Experience
AI-powered personalization and customer service solutions are becoming more advanced, offering highly tailored experiences and predictive support.

# 3. Operational Efficiency
Machine learning algorithms are optimizing everything from supply chain management to energy consumption, leading to significant cost savings and improved efficiency.

# 4. Ethical AI Implementation
As AI becomes more prevalent, organizations are focusing on implementing ethical AI frameworks to ensure responsible development and deployment.

# Looking Ahead
The future of enterprise AI is bright, with continued innovations in natural language processing, computer vision, and predictive analytics leading the way.
    `,
    author: "Dr. Sarah Chen",
    authorBio: "AI Research Director at Apex Labs with over 15 years of experience in enterprise AI solutions.",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Enterprise", "Digital Transformation"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&amp;fit=crop&amp;q=80",
    featured: true
  },
  {
    id: 2,
    title: "Building Resilient Digital Infrastructure: A Complete Guide",
    slug: "building-resilient-digital-infrastructure",
    excerpt: "Learn the key principles and best practices for creating robust, scalable digital infrastructure that can withstand modern challenges.",
    content: `
# Building for Scale and Resilience

In today&apos;s digital-first world, building resilient infrastructure is more critical than ever. Here&apos;s a comprehensive guide to creating systems that can withstand modern challenges:

# 1. Distributed Systems Architecture
Modern infrastructure needs to be distributed across multiple regions and availability zones to ensure high availability and fault tolerance.

# 2. Automated Recovery Systems
Implementing automated failover and recovery mechanisms is crucial for maintaining system reliability and minimizing downtime.

# 3. Security by Design
Security should be built into every layer of your infrastructure, from network architecture to application deployment.

# 4. Performance Optimization
Utilizing CDNs, caching strategies, and optimized database queries to ensure optimal performance under varying loads.

# 5. Monitoring and Observability
Implementing comprehensive monitoring solutions to detect and respond to issues before they impact users.
    `,
    author: "Michael Rodriguez",
    authorBio: "Infrastructure Architect at Apex Labs specializing in cloud-native solutions and distributed systems.",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80",
    date: "2024-03-10",
    readTime: "12 min read",
    category: "Infrastructure",
    tags: ["Cloud Computing", "DevOps", "Security"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&amp;fit=crop&amp;q=80",
    featured: true
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Modern Businesses",
    slug: "cybersecurity-best-practices-2024",
    excerpt: "Discover essential cybersecurity strategies and tools to protect your business in an increasingly complex threat landscape.",
    content: `
# Protecting Your Digital Assets

As cyber threats continue to evolve, organizations must adapt their security practices. Here&apos;s what you need to know:

# 1. Zero Trust Architecture
Implementing a zero trust security model where nothing is automatically trusted, and everything must be verified.

# 2. Employee Training
Regular security awareness training for all employees to prevent social engineering attacks and maintain security protocols.

# 3. Incident Response Planning
Developing and regularly testing incident response plans to ensure quick and effective responses to security breaches.

# 4. Data Encryption
Implementing end-to-end encryption for sensitive data both at rest and in transit.

# 5. Regular Security Audits
Conducting regular security assessments and penetration testing to identify and address vulnerabilities.
    `,
    author: "Alex Thompson",
    authorBio: "Senior Security Consultant at Apex Labs with expertise in cybersecurity and risk management.",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80",
    date: "2024-03-05",
    readTime: "10 min read",
    category: "Cybersecurity",
    tags: ["Security", "Risk Management", "Compliance"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&amp;fit=crop&amp;q=80"
  },
  {
    id: 4,
    title: "Digital Transformation Success Stories: Lessons Learned",
    slug: "digital-transformation-success-stories",
    excerpt: "Real-world examples of successful digital transformation initiatives and key insights for your own journey.",
    content: `
# Learning from Success

Digital transformation has become essential for business survival. Here&apos;s key lessons from successful transformations:

# 1. Cultural Change
Successful digital transformation starts with a culture that embraces change and innovation.

# 2. Customer-Centric Approach
Focusing on customer needs and experiences drives successful digital initiatives.

# 3. Data-Driven Decision Making
Leveraging data analytics to inform strategic decisions and measure transformation success.

# 4. Agile Implementation
Using agile methodologies to quickly adapt and iterate on digital initiatives.

# 5. Technology Selection
Choosing the right technology stack that aligns with business goals and scalability needs.
    `,
    author: "Emma Davis",
    authorBio: "Digital Transformation Lead at Apex Labs helping organizations navigate their digital journey.",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80",
    date: "2024-03-01",
    readTime: "15 min read",
    category: "Digital Transformation",
    tags: ["Case Studies", "Innovation", "Strategy"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80"
  }
];

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-dark-muted mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg/50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/10 dark:text-primary-400">
                {post.category}
              </span>
              <span className="flex items-center text-sm text-gray-500 dark:text-dark-muted">
                <FaCalendar className="mr-2" />
                {post.date}
              </span>
              <span className="flex items-center text-sm text-gray-500 dark:text-dark-muted">
                <FaClock className="mr-2" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-dark-text text-center sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-dark-text">
                    {post.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-dark-muted">
                    {post.category} Expert
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto aspect-[21/9] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-img:rounded-xl prose-img:shadow-lg mx-auto"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-3">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-dark-card dark:text-dark-text"
              >
                <FaTags className="mr-2" />
                {tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="mt-12 border-t border-gray-200 dark:border-dark-card pt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
              Share this article
            </h3>
            <div className="flex gap-4">
              <button className="p-2 rounded-full bg-[#0077b5] text-white hover:bg-[#0077b5]/90">
                <FaLinkedin className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90">
                <FaTwitter className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-[#4267B2] text-white hover:bg-[#4267B2]/90">
                <FaFacebook className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 border-t border-gray-200 dark:border-dark-card pt-8">
            <div className="flex items-start">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-6">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                  About {post.author}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-dark-muted">
                  {post.authorBio}
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Related Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-card/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
              .slice(0, 3)
              .map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-3">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 dark:text-dark-muted line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
} 