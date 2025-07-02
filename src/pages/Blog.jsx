import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Calendar, Clock, User, Tag, ArrowRight, Filter } from 'lucide-react'
import { useBlog } from '../contexts/BlogContext'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import SEOHelmet from '../components/SEOHelmet'

const Blog = () => {
  const { getAllPosts, getFeaturedPosts, getPostsByCategory, categories } = useBlog()
  const [posts, setPosts] = useState([])
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredPosts, setFilteredPosts] = useState([])

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ]

  useEffect(() => {
    const allPosts = getAllPosts()
    const featured = getFeaturedPosts()
    setPosts(allPosts)
    setFeaturedPosts(featured)
    setFilteredPosts(allPosts)
  }, [])

  useEffect(() => {
    let filtered = posts

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = getPostsByCategory(selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [searchQuery, selectedCategory, posts])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

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

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="Business Insights Blog | AI & Exit Planning Expertise | Norivane"
        description="Expert insights on AI implementation, business exit planning, and strategic growth. Stay ahead with actionable advice from industry professionals."
        keywords="business blog, AI insights, exit planning advice, business strategy, digital transformation, business growth"
        canonicalUrl="/blog"
      />
      
      <BreadcrumbNavigation breadcrumbs={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-gradient-to-br from-dark-blue via-dark-blue to-teal overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Business Insights & <span className="text-teal">Expert Advice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Stay ahead with actionable insights on AI implementation, exit planning, 
              and strategic business growth from industry experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-medium-grey" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition-all duration-200 bg-white"
              >
                <option value="All">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-dark-blue mb-12 text-center">
                Featured Articles
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-medium-grey mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-dark-blue mb-3 group-hover:text-teal transition-colors duration-200">
                        {post.title}
                      </h3>

                      <p className="text-medium-grey mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User size={16} className="text-medium-grey" />
                          <span className="text-sm text-medium-grey">{post.author}</span>
                        </div>

                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-teal font-semibold hover:text-teal/80 transition-colors duration-200"
                        >
                          Read More
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
                {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
              </h2>
              <div className="text-medium-grey">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </div>
            </motion.div>

            {filteredPosts.length > 0 ? (
              <div className="grid gap-8">
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 relative overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="md:w-2/3 p-6 md:p-8">
                        <div className="flex items-center space-x-4 text-sm text-medium-grey mb-3">
                          <span className="bg-teal/10 text-teal px-3 py-1 rounded-full font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={14} />
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-dark-blue mb-4 group-hover:text-teal transition-colors duration-200">
                          {post.title}
                        </h3>

                        <p className="text-medium-grey mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <User size={16} className="text-medium-grey" />
                              <span className="text-sm text-medium-grey">{post.author}</span>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Tag size={16} className="text-medium-grey" />
                              <div className="flex space-x-2">
                                {post.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-xs bg-gray-100 text-dark-grey px-2 py-1 rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <Link
                            to={`/blog/${post.slug}`}
                            className="inline-flex items-center bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal/90 transition-all duration-200 transform hover:scale-105"
                          >
                            Read Article
                            <ArrowRight size={16} className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div variants={fadeInUp} className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={32} className="text-medium-grey" />
                </div>
                <h3 className="text-2xl font-bold text-dark-blue mb-4">No Articles Found</h3>
                <p className="text-medium-grey mb-6">
                  Try adjusting your search terms or category filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                  className="bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal/90 transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Business Insights
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 text-gray-200">
              Get the latest articles on AI implementation, exit planning, and business strategy 
              delivered straight to your inbox.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-dark-blue focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-dark-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
