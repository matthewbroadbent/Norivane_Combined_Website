import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useBlog } from '../contexts/BlogContext'

const Blog = () => {
  const { getPublishedPosts } = useBlog()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Exit Planning', 'AI Solutions', 'Business Growth', 'Thought Leadership']
  const blogPosts = getPublishedPosts()

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = filteredPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Get image with fallback
  const getImageWithFallback = (imageUrl) => {
    if (imageUrl && imageUrl.trim()) {
      return imageUrl
    }
    return 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
              The Value Accelerator <span className="text-teal">Blog</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Insights, tips, and stories on business value, exit planning, AI in practice, 
              and the future of business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-teal text-white'
                      : 'bg-gray-100 text-medium-grey hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Email Signup */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Get blog updates"
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
              />
              <button className="bg-teal text-white px-6 py-2 rounded-full font-semibold hover:bg-teal/90 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src={getImageWithFallback(featuredPost.image)}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Featured image failed to load:', e.target.src)
                      e.target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-medium-grey mb-4">
                    <span className="flex items-center space-x-1">
                      <Tag size={16} />
                      <span>{featuredPost.category}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-medium-grey mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center">
                        <User size={20} className="text-teal" />
                      </div>
                      <span className="font-semibold text-dark-blue">{featuredPost.author}</span>
                    </div>
                    <Link 
                      to={`/blog/${featuredPost.id}`}
                      className="flex items-center space-x-2 text-teal font-semibold hover:text-teal/80 transition-colors duration-200"
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getImageWithFallback(post.image)}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.log('Post image failed to load:', e.target.src)
                        e.target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-dark-blue/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-medium-grey mb-3">
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark-blue mb-3 group-hover:text-teal transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-medium-grey mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-teal/10 rounded-full flex items-center justify-center">
                          <User size={16} className="text-teal" />
                        </div>
                        <span className="text-sm font-semibold text-dark-blue">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-teal font-semibold hover:text-teal/80 transition-colors duration-200">
                        <span className="text-sm">Read</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-medium-grey">
                No articles found matching your criteria. Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss an Insight
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Get the latest articles on business value, AI implementation, and exit planning 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-dark-blue px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-300 mt-4">
              Weekly insights, no spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
