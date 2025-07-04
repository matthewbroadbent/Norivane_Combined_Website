import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, MessageCircle, Heart, Eye, ArrowRight } from 'lucide-react'
import { useBlog } from '../contexts/BlogContext'
import SEOHelmet from '../components/SEOHelmet'

const BlogPost = () => {
  const { slug } = useParams()
  const { getPostBySlug, posts } = useBlog()
  
  const post = getPostBySlug(slug)
  
  if (!post) {
    return <Navigate to="/blog" replace />
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen">
      <SEOHelmet 
        title={`${post.title} | Norivane Consulting Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonicalUrl={`/blog/${post.slug}`}
        type="article"
        image={post.image}
      />

      {/* Breadcrumb Navigation */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-medium-grey hover:text-teal transition-colors">
              Home
            </Link>
            <span className="text-medium-grey">/</span>
            <Link to="/blog" className="text-medium-grey hover:text-teal transition-colors">
              Blog
            </Link>
            <span className="text-medium-grey">/</span>
            <span className="text-dark-blue font-semibold truncate">
              {post.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {/* Back Button */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Link 
              to="/blog"
              className="inline-flex items-center text-teal hover:text-teal/80 transition-colors font-semibold"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Category Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={fadeInUp} className="heading-xl mb-6">
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p variants={fadeInUp} className="text-xl text-medium-grey mb-8 leading-relaxed">
            {post.excerpt}
          </motion.p>

          {/* Meta Information */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center text-medium-grey">
              <User size={18} className="mr-2" />
              <span className="font-semibold">{post.author}</span>
            </div>
            
            <div className="flex items-center text-medium-grey">
              <Calendar size={18} className="mr-2" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <div className="flex items-center text-medium-grey">
              <Clock size={18} className="mr-2" />
              <span>{post.readTime}</span>
            </div>

            <div className="flex items-center text-medium-grey">
              <Eye size={18} className="mr-2" />
              <span>{post.views || '1,234'} views</span>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center text-teal hover:text-teal/80 transition-colors font-semibold ml-auto"
            >
              <Share2 size={18} className="mr-2" />
              Share
            </button>
          </motion.div>

          {/* Featured Image */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div variants={fadeInUp} className="prose prose-lg max-w-none mb-12">
            <div className="text-body leading-relaxed space-y-6">
              {/* Introduction */}
              <p>
                In today's rapidly evolving business landscape, companies are constantly seeking innovative ways to stay competitive and drive growth. This comprehensive guide explores the latest strategies and insights that successful businesses are implementing to achieve sustainable success.
              </p>

              <h2 className="heading-lg mt-12 mb-6">Key Strategies for Success</h2>
              
              <p>
                The foundation of any successful business transformation lies in understanding your current position and having a clear vision of where you want to go. This involves conducting thorough market analysis, identifying opportunities for improvement, and developing actionable strategies.
              </p>

              <h3 className="heading-md mt-8 mb-4">1. Digital Transformation</h3>
              
              <p>
                Digital transformation is no longer optional—it's essential for survival in the modern marketplace. Companies that embrace technology and integrate it into their core operations are seeing significant improvements in efficiency, customer satisfaction, and profitability.
              </p>

              <ul className="list-disc pl-6 space-y-2 my-6">
                <li>Implement cloud-based solutions for better scalability</li>
                <li>Automate repetitive processes to increase efficiency</li>
                <li>Use data analytics to make informed decisions</li>
                <li>Enhance customer experience through digital channels</li>
              </ul>

              <h3 className="heading-md mt-8 mb-4">2. Strategic Planning and Execution</h3>
              
              <p>
                Having a well-defined strategy is crucial, but execution is where many businesses fall short. Successful companies focus on creating detailed implementation plans, setting measurable goals, and regularly monitoring progress.
              </p>

              <blockquote className="border-l-4 border-teal pl-6 italic text-lg my-8 bg-gray-50 p-6 rounded-r-lg">
                "Strategy without execution is hallucination. Execution without strategy is chaos." - This principle guides our approach to helping businesses achieve their goals.
              </blockquote>

              <h3 className="heading-md mt-8 mb-4">3. Building Strong Teams</h3>
              
              <p>
                Your team is your most valuable asset. Investing in employee development, creating a positive work culture, and ensuring clear communication channels are essential for long-term success.
              </p>

              <h2 className="heading-lg mt-12 mb-6">Implementation Best Practices</h2>
              
              <p>
                When implementing new strategies, it's important to take a systematic approach. Start with small pilot programs, measure results, and scale successful initiatives across the organization.
              </p>

              <ol className="list-decimal pl-6 space-y-2 my-6">
                <li>Assess your current situation and identify areas for improvement</li>
                <li>Develop a comprehensive strategy with clear objectives</li>
                <li>Create detailed implementation plans with timelines</li>
                <li>Allocate necessary resources and assign responsibilities</li>
                <li>Monitor progress and adjust strategies as needed</li>
              </ol>

              <h2 className="heading-lg mt-12 mb-6">Measuring Success</h2>
              
              <p>
                Success metrics should be defined early in the process and regularly monitored. Key performance indicators (KPIs) should align with your business objectives and provide actionable insights.
              </p>

              <p>
                Remember that transformation is an ongoing process, not a one-time event. Continuous improvement and adaptation are essential for maintaining competitive advantage in today's dynamic business environment.
              </p>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="heading-sm mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center bg-gray-100 text-medium-grey px-3 py-2 rounded-full text-sm hover:bg-teal/10 hover:text-teal transition-colors cursor-pointer"
                >
                  <Tag size={14} className="mr-2" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Engagement Actions */}
          <motion.div variants={fadeInUp} className="flex items-center justify-between py-8 border-y border-gray-200 mb-12">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-medium-grey hover:text-red-500 transition-colors">
                <Heart size={20} />
                <span>Like</span>
              </button>
              
              <button className="flex items-center space-x-2 text-medium-grey hover:text-teal transition-colors">
                <MessageCircle size={20} />
                <span>Comment</span>
              </button>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 text-teal hover:text-teal/80 transition-colors font-semibold"
            >
              <Share2 size={20} />
              <span>Share Article</span>
            </button>
          </motion.div>

          {/* Author Bio */}
          <motion.div variants={fadeInUp} className="card mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                <User size={24} className="text-teal" />
              </div>
              
              <div className="flex-1">
                <h3 className="heading-sm mb-2">About {post.author}</h3>
                <p className="text-body mb-4">
                  {post.author} is a senior consultant at Norivane with over 15 years of experience in strategic business consulting. 
                  Specializing in digital transformation and operational excellence, they have helped numerous organizations 
                  achieve sustainable growth and competitive advantage.
                </p>
                
                <Link 
                  to="/about"
                  className="text-teal hover:text-teal/80 transition-colors font-semibold"
                >
                  Learn more about our team →
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="heading-lg mb-8">Related Articles</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="card group">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-teal/10 text-teal px-2 py-1 rounded-full text-xs font-semibold">
                        {relatedPost.category}
                      </span>
                      <div className="flex items-center text-medium-grey text-xs">
                        <Clock size={12} className="mr-1" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                    
                    <h4 className="heading-sm mb-3 group-hover:text-teal transition-colors">
                      <Link to={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h4>
                    
                    <p className="text-body text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link 
                      to={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-teal font-semibold hover:text-teal/80 transition-colors text-sm"
                    >
                      Read More <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Newsletter CTA */}
          <motion.div variants={fadeInUp} className="card text-center">
            <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen size={32} className="text-teal" />
            </div>
            
            <h3 className="heading-lg mb-4">Get More Insights Like This</h3>
            <p className="text-body mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive expert business insights, 
              practical tips, and industry trends delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
              />
              <button className="bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-medium-grey">
              Join 5,000+ business leaders. No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </motion.div>
      </article>

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
              Ready to Implement These Strategies?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Don't let great insights go to waste. Schedule a consultation with our experts 
              and start transforming your business today.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link 
                to="/contact"
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2 shadow-xl"
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
