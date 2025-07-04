import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, Clock, ArrowRight, Tag, User, TrendingUp, BookOpen, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useBlog } from '../contexts/BlogContext'
import SEOHelmet from '../components/SEOHelmet'

const Blog = () => {
  const { posts, getPostsByCategory } = useBlog()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredPosts, setFilteredPosts] = useState(posts)

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

  const categories = [
    { value: 'all', label: 'All Posts', count: posts.length },
    { value: 'AI Implementation', label: 'AI Implementation', count: getPostsByCategory('AI Implementation').length },
    { value: 'Exit Planning', label: 'Exit Planning', count: getPostsByCategory('Exit Planning').length },
    { value: 'Strategic Consulting', label: 'Strategic Consulting', count: getPostsByCategory('Strategic Consulting').length }
  ]

  // Filter posts based on search and category
  React.useEffect(() => {
    let filtered = posts

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [posts, searchTerm, selectedCategory])

  const featuredPost = posts.find(post => post.featured) || posts[0]
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id)

  return (
    <div className="min-h-screen">
      <SEOHelmet 
        title="Business Insights Blog | Norivane Consulting"
        description="Expert insights on AI implementation, strategic consulting, and exit planning. Practical advice and industry trends to help grow your business."
        keywords="business blog, AI implementation, strategic consulting, exit planning, business growth, industry insights"
        canonicalUrl="/blog"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark-blue to-dark-blue/90 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl mb-6">
              Business Insights & <span className="text-teal">Expert Advice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Discover actionable strategies, industry trends, and expert insights to 
              accelerate your business growth and transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full text-dark-blue placeholder-gray-500 focus:ring-2 focus:ring-teal focus:outline-none"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="heading-lg mb-4">Featured Article</h2>
                <p className="text-xl text-medium-grey">Our latest insights and expert analysis</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-teal/10 text-teal px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-medium-grey text-sm">
                      <Calendar size={16} className="mr-2" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>

                  <h3 className="heading-lg mb-4">{featuredPost.title}</h3>
                  <p className="text-body mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-medium-grey text-sm">
                        <User size={16} className="mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center text-medium-grey text-sm">
                        <Clock size={16} className="mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <Link 
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center bg-teal text-white px-6 py-3 rounded-full font-semibold hover:bg-teal/90 transition-colors"
                    >
                      Read Article <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-medium-grey" />
              <span className="font-semibold text-dark-blue">Filter by Category:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-teal text-white'
                      : 'bg-white text-medium-grey hover:bg-teal/10 hover:text-teal'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen size={64} className="mx-auto text-medium-grey mb-4" />
              <h3 className="heading-sm mb-2">No articles found</h3>
              <p className="text-medium-grey">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
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
                  className="card hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-dark-blue px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center text-medium-grey text-sm">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center text-medium-grey text-sm">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="heading-sm mb-3 group-hover:text-teal transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-body mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-medium-grey text-sm">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>

                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-teal font-semibold hover:text-teal/80 transition-colors text-sm"
                    >
                      Read More <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="inline-flex items-center text-xs text-medium-grey bg-gray-100 px-2 py-1 rounded-full"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="card">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-teal" />
              </div>
              
              <h3 className="heading-lg mb-4">Stay Updated with Business Insights</h3>
              <p className="text-body mb-8 max-w-2xl mx-auto">
                Get the latest articles, expert tips, and industry trends delivered directly to your inbox. 
                Join thousands of business leaders who trust our insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                />
                <button className="bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>

              <p className="text-sm text-medium-grey mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Don't just read about success—achieve it. Schedule your free consultation 
              and start implementing these strategies in your business.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link 
                to="/contact"
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2 shadow-xl"
              >
                <span>Get Expert Guidance</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
