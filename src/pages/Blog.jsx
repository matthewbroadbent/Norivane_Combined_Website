import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useBlog } from '../contexts/BlogContext'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'

const CATEGORIES = ['All', 'Exit Planning', 'AI Solutions', 'Business Growth', 'Thought Leadership']

const Blog = () => {
  const { blogPosts: publishedPosts, loading, error } = useBlog()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = useMemo(() => {
    return publishedPosts.filter((post) => {
      const titleMatch = post.title?.toLowerCase().includes(searchTerm.toLowerCase())
      const excerptMatch = post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory
      return (titleMatch || excerptMatch) && categoryMatch
    })
  }, [publishedPosts, searchTerm, selectedCategory])

  const featuredPost = filteredPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => (featuredPost ? post.id !== featuredPost.id : true))

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

  const getImageWithFallback = (imageUrl) => {
    if (imageUrl && imageUrl.trim()) {
      return imageUrl
    }
    return 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
  }

  const breadcrumbs = [
    { label: 'Blog', url: null }
  ]

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Business Insights Blog | AI, Exit Planning & Growth Strategies | Norivane"
        description="Expert insights on business value acceleration, AI implementation, exit planning, and growth strategies. Practical advice from experienced consultants."
        keywords="business blog, AI insights, exit planning advice, business growth, value acceleration, business strategy, consulting insights"
        canonicalUrl="/blog"
      />

      <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} />

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

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
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

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
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

      {loading && (
        <section className="py-16 text-center text-dark-blue">
          <p className="text-xl">Loading blog posts... please wait.</p>
        </section>
      )}

      {error && (
        <section className="py-16 text-center text-red-600">
          <p className="text-xl">Error: {error}</p>
          <p className="text-lg">Could not load blog posts. Please check your internet connection or try again later.</p>
        </section>
      )}

      {!loading && !error && (
        <>
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
                        src={getImageWithFallback(featuredPost.featured_image)}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
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
                          <span>{featuredPost.category || 'Uncategorised'}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{featuredPost.published_at ? new Date(featuredPost.published_at).toLocaleDateString() : '—'}</span>
                        </span>
                        <span>{featuredPost.read_time || '5 min read'}</span>
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
                          <span className="font-semibold text-dark-blue">{featuredPost.author || 'Norivane Team'}</span>
                        </div>
                        <Link
                          to={`/blog/${featuredPost.slug}`}
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

          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
              >
                {regularPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={getImageWithFallback(post.featured_image)}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
                        }}
                      />
                      {post.featured && (
                        <span className="absolute top-4 left-4 bg-teal text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-xs text-medium-grey space-x-4 mb-3">
                        <span className="inline-flex items-center space-x-1">
                          <Tag size={14} />
                          <span>{post.category || 'Uncategorised'}</span>
                        </span>
                        <span className="inline-flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : '—'}</span>
                        </span>
                        <span>{post.read_time || '5 min read'}</span>
                      </div>
                      <h3 className="text-lg font-bold text-dark-blue mb-3 group-hover:text-teal transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-medium-grey mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-teal font-semibold hover:text-teal/80 transition-colors duration-200"
                      >
                        <span>Read Article</span>
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default Blog
