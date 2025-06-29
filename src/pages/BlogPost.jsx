import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Tag, Clock } from 'lucide-react'
import { useBlog } from '../contexts/BlogContext'

const BlogPost = () => {
  const { id } = useParams()
  const { getPublishedPosts } = useBlog()
  
  const blogPosts = getPublishedPosts()
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </button>
            
            <div className="flex items-center space-x-4 text-sm text-gray-200 mb-6">
              <span className="flex items-center space-x-1">
                <Tag size={16} />
                <span>{post.category}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">{post.author}</p>
                <p className="text-gray-300 text-sm">Business Strategist</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative -mt-20 mb-16"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="prose prose-lg max-w-none"
          >
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content || generateSampleContent(post) }}
            />
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-blue mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => window.location.href = `/blog/${relatedPost.id}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark-blue mb-2 group-hover:text-teal transition-colors duration-200">
                      {relatedPost.title}
                    </h3>
                    <p className="text-medium-grey text-sm">
                      {relatedPost.excerpt.substring(0, 100)}...
                    </p>
                  </div>
                </motion.article>
              ))}
          </div>
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
              Enjoyed This Article?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Get more insights like this delivered to your inbox weekly.
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Generate sample content for blog posts that don't have full content
const generateSampleContent = (post) => {
  const sampleContent = {
    'Exit Planning': `
      <h2>Understanding Exit Planning</h2>
      <p>Exit planning is a comprehensive strategy that helps business owners prepare for the eventual transition out of their business. Whether you're planning to sell, transfer to family members, or pursue other exit strategies, proper planning is essential for maximizing value and ensuring a smooth transition.</p>
      
      <h3>Key Components of Exit Planning</h3>
      <p>A successful exit plan involves several critical elements:</p>
      <ul>
        <li><strong>Business Valuation:</strong> Understanding your company's current worth and identifying value drivers</li>
        <li><strong>Tax Strategy:</strong> Minimizing tax implications of your exit</li>
        <li><strong>Succession Planning:</strong> Identifying and preparing successors</li>
        <li><strong>Financial Planning:</strong> Ensuring your post-exit financial security</li>
      </ul>
      
      <h3>When to Start Planning</h3>
      <p>The best time to start exit planning is now, regardless of when you plan to exit. Most successful exits require 3-5 years of preparation to maximize value and ensure all stakeholders are aligned.</p>
      
      <blockquote>
        <p>"The best exit strategies are built over years, not months. Start planning today to maximize your options tomorrow."</p>
      </blockquote>
      
      <h3>Common Exit Strategies</h3>
      <p>There are several paths you can take when exiting your business:</p>
      <ul>
        <li>Strategic sale to a competitor or industry player</li>
        <li>Financial sale to private equity or investment groups</li>
        <li>Management buyout (MBO) or employee stock ownership plan (ESOP)</li>
        <li>Family succession or gifting strategies</li>
        <li>Initial public offering (IPO) for larger companies</li>
      </ul>
    `,
    'AI Solutions': `
      <h2>Transforming Business with AI</h2>
      <p>Artificial Intelligence is no longer a futuristic concept—it's a present-day reality that's transforming how businesses operate, compete, and create value. From automating routine tasks to providing deep insights from data, AI solutions are becoming essential for business growth and efficiency.</p>
      
      <h3>Practical AI Applications</h3>
      <p>AI can be implemented across various business functions:</p>
      <ul>
        <li><strong>Customer Service:</strong> Chatbots and virtual assistants for 24/7 support</li>
        <li><strong>Sales & Marketing:</strong> Predictive analytics and personalized recommendations</li>
        <li><strong>Operations:</strong> Process automation and predictive maintenance</li>
        <li><strong>Finance:</strong> Fraud detection and automated reporting</li>
      </ul>
      
      <h3>Getting Started with AI</h3>
      <p>Implementing AI doesn't have to be overwhelming. Start with these steps:</p>
      <ol>
        <li>Identify repetitive tasks that consume significant time</li>
        <li>Evaluate your data quality and availability</li>
        <li>Start with pilot projects to prove value</li>
        <li>Scale successful implementations across the organization</li>
      </ol>
      
      <h3>ROI of AI Implementation</h3>
      <p>Companies that successfully implement AI solutions typically see:</p>
      <ul>
        <li>20-30% reduction in operational costs</li>
        <li>15-25% increase in productivity</li>
        <li>Improved customer satisfaction scores</li>
        <li>Better decision-making through data insights</li>
      </ul>
      
      <blockquote>
        <p>"AI is not about replacing humans—it's about augmenting human capabilities and freeing up time for strategic, creative work."</p>
      </blockquote>
    `,
    'Business Growth': `
      <h2>Sustainable Business Growth Strategies</h2>
      <p>Growing a business sustainably requires more than just increasing revenue—it demands strategic planning, operational excellence, and a focus on long-term value creation. Let's explore proven strategies that drive meaningful growth.</p>
      
      <h3>The Growth Framework</h3>
      <p>Successful business growth follows a structured approach:</p>
      <ul>
        <li><strong>Market Analysis:</strong> Understanding your market size and opportunities</li>
        <li><strong>Competitive Positioning:</strong> Differentiating your value proposition</li>
        <li><strong>Operational Scaling:</strong> Building systems that support growth</li>
        <li><strong>Financial Management:</strong> Maintaining healthy cash flow during expansion</li>
      </ul>
      
      <h3>Key Growth Drivers</h3>
      <p>Focus on these critical areas to accelerate growth:</p>
      <ol>
        <li><strong>Customer Retention:</strong> It's 5x cheaper to retain customers than acquire new ones</li>
        <li><strong>Product Innovation:</strong> Continuously improve and expand your offerings</li>
        <li><strong>Market Expansion:</strong> Enter new geographic or demographic markets</li>
        <li><strong>Strategic Partnerships:</strong> Leverage relationships for mutual growth</li>
      </ol>
      
      <h3>Measuring Growth Success</h3>
      <p>Track these key metrics to ensure healthy growth:</p>
      <ul>
        <li>Customer Acquisition Cost (CAC)</li>
        <li>Customer Lifetime Value (CLV)</li>
        <li>Monthly Recurring Revenue (MRR)</li>
        <li>Net Promoter Score (NPS)</li>
        <li>Gross and net profit margins</li>
      </ul>
      
      <blockquote>
        <p>"Growth without profitability is just expensive. Focus on sustainable growth that creates long-term value."</p>
      </blockquote>
    `,
    'Thought Leadership': `
      <h2>Building Thought Leadership in Your Industry</h2>
      <p>Thought leadership is about more than just sharing opinions—it's about providing valuable insights that help others solve problems and make better decisions. When done right, thought leadership can significantly impact your business growth and industry influence.</p>
      
      <h3>What Makes a Thought Leader</h3>
      <p>True thought leaders share these characteristics:</p>
      <ul>
        <li><strong>Deep Expertise:</strong> Comprehensive knowledge in their field</li>
        <li><strong>Unique Perspective:</strong> Fresh insights on industry challenges</li>
        <li><strong>Consistent Communication:</strong> Regular sharing of valuable content</li>
        <li><strong>Community Building:</strong> Engaging with and helping others</li>
      </ul>
      
      <h3>Building Your Thought Leadership Platform</h3>
      <p>Develop your influence through these channels:</p>
      <ol>
        <li><strong>Content Creation:</strong> Write articles, create videos, host podcasts</li>
        <li><strong>Speaking Engagements:</strong> Present at conferences and industry events</li>
        <li><strong>Social Media:</strong> Share insights and engage in industry discussions</li>
        <li><strong>Networking:</strong> Build relationships with other industry leaders</li>
      </ol>
      
      <h3>The Business Impact</h3>
      <p>Thought leadership delivers tangible business benefits:</p>
      <ul>
        <li>Increased brand recognition and credibility</li>
        <li>Higher quality leads and customer inquiries</li>
        <li>Premium pricing opportunities</li>
        <li>Attraction of top talent</li>
        <li>Strategic partnership opportunities</li>
      </ul>
      
      <blockquote>
        <p>"Thought leadership is not about being the loudest voice in the room—it's about being the most helpful one."</p>
      </blockquote>
      
      <h3>Getting Started</h3>
      <p>Begin your thought leadership journey by:</p>
      <ol>
        <li>Identifying your unique expertise and perspective</li>
        <li>Choosing 2-3 content channels to focus on initially</li>
        <li>Creating a consistent publishing schedule</li>
        <li>Engaging authentically with your audience</li>
        <li>Measuring and refining your approach based on feedback</li>
      </ol>
    `
  }
  
  return sampleContent[post.category] || `
    <h2>${post.title}</h2>
    <p>${post.excerpt}</p>
    <p>This is a sample article demonstrating the blog post functionality. In a real implementation, this content would be stored in your content management system and could include rich text, images, videos, and other media.</p>
    <h3>Key Takeaways</h3>
    <ul>
      <li>Understanding the importance of ${post.category.toLowerCase()}</li>
      <li>Implementing best practices in your business</li>
      <li>Measuring success and continuous improvement</li>
    </ul>
  `
}

export default BlogPost
