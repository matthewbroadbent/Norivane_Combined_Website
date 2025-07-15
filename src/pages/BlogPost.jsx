import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Tag, Clock } from 'lucide-react'
import { useBlog } from '../contexts/BlogContext'

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getPublishedPosts, getBlogPostBySlug } = useBlog();
  const [allPublishedPosts, setAllPublishedPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const posts = await getPublishedPosts();
        setAllPublishedPosts(posts);
      } catch (err) {
        // console.error("Failed to load all published posts:", err);
      }
    };

    const fetchSinglePost = async () => {
      if (!slug) {
        setLoading(false);
        setError("No slug provided for blog post.");
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const fetchedPost = await getBlogPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError("Blog post not found.");
          setPost(null);
        }
      } catch (err) {
        setError("Failed to load blog post.");
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSinglePost();
    fetchAllPosts();
  }, [slug, getBlogPostBySlug, getPublishedPosts]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <p className="text-xl text-gray-700">Loading blog post, please wait...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-16">
        <p className="text-xl text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-teal text-white rounded-full font-semibold hover:bg-darker-teal transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const formatContent = (content) => {
    if (!content) return generateSampleContent(post)
    
    let formattedContent = content
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-dark-blue mb-4 mt-8">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-dark-blue mb-6 mt-8">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-dark-blue">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/^\* (.*$)/gm, '<li class="mb-2 ml-4 relative before:content-[\'•\'] before:absolute before:-left-4 before:text-teal before:font-bold">$1</li>')
      .replace(/^- (.*$)/gm, '<li class="mb-2 ml-4 relative before:content-[\'•\'] before:absolute before:-left-4 before:text-teal before:font-bold">$1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="mb-2 ml-4 list-decimal">$1</li>')
      .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-teal bg-gray-50 p-6 my-8 italic text-gray-600"><p class="mb-0">$1</p></blockquote>')
      .replace(/^(?!<[h|l|b])(.*\S.*$)/gm, '<p class="mb-4 leading-relaxed text-gray-700">$1</p>')
      .replace(/<p class="mb-4 leading-relaxed text-gray-700"><\/p>/g, '')
      .replace(/(<li class="mb-2 ml-4[^>]*>.*?<\/li>\s*)+/g, (match) => {
        return `<ul class="mb-6 space-y-2">${match}</ul>`
      })
      .replace(/(<li class="mb-2 ml-4 list-decimal">.*?<\/li>\s*)+/g, (match) => {
        return `<ol class="mb-6 space-y-2 list-decimal list-inside">${match}</ol>`
      })

    return formattedContent
  }

  const getFeaturedImage = () => {
    if (post.image && post.image.trim()) {
      return post.image
    }
    return 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
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
              src={getFeaturedImage()}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              onError={(e) => {
                e.target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
              }}
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
              className="article-content text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-blue mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPublishedPosts
              // FIX 1: Ensure category exists on both posts before comparing
              .filter(p => p.id !== post.id && p.category && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link to={`/blog/${relatedPost.slug}`} className="block" key={relatedPost.id}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
                        }}
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
                </Link>
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
      <h2 class="text-2xl font-bold text-dark-blue mb-4 mt-8">Understanding Exit Planning</h2>
      <p class="mb-4 leading-relaxed text-gray-700">Exit planning is a comprehensive strategy that helps business owners prepare for the eventual transition out of their business. Whether you're planning to sell, transfer to family members, or pursue other exit strategies, proper planning is essential for maximizing value and ensuring a smooth transition.</p>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">Key Components of Exit Planning</h3>
      <p class="mb-4 leading-relaxed text-gray-700">A successful exit plan involves several critical elements:</p>
      <ul class="mb-6 space-y-2">
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Business Valuation:</strong> Understanding your company's current worth and identifying value drivers</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Tax Strategy:</strong> Minimizing tax implications of your exit</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Succession Planning:</strong> Identifying and preparing successors</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Financial Planning:</strong> Ensuring your post-exit financial security</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">When to Start Planning</h3>
      <p class="mb-4 leading-relaxed text-gray-700">The best time to start exit planning is now, regardless of when you plan to exit. Most successful exits require 3-5 years of preparation to maximize value and ensure all stakeholders are aligned.</p>
      
      <blockquote class="border-l-4 border-teal bg-gray-50 p-6 my-8 italic text-gray-600">
        <p class="mb-0">"The best exit strategies are built over years, not months. Start planning today to maximize your options tomorrow."</p>
      </blockquote>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">Common Exit Strategies</h3>
      <p class="mb-4 leading-relaxed text-gray-700">There are several paths you can take when exiting your business:</p>
      <ul class="mb-6 space-y-2">
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Strategic sale to a competitor or industry player</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Financial sale to private equity or investment groups</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Management buyout (MBO) or employee stock ownership plan (ESOP)</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Family succession or gifting strategies</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Initial public offering (IPO) for larger companies</li>
      </ul>
    `,
    'AI Solutions': `
      <h2 class="text-2xl font-bold text-dark-blue mb-4 mt-8">Transforming Business with AI</h2>
      <p class="mb-4 leading-relaxed text-gray-700">Artificial Intelligence is no longer a futuristic concept—it's a present-day reality that's transforming how businesses operate, compete, and create value. From automating routine tasks to providing deep insights from data, AI solutions are becoming essential for business growth and efficiency.</p>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">Practical AI Applications</h3>
      <p class="mb-4 leading-relaxed text-gray-700">AI can be implemented across various business functions:</p>
      <ul class="mb-6 space-y-2">
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Customer Service:</strong> Chatbots and virtual assistants for 24/7 support</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Sales & Marketing:</strong> Predictive analytics and personalized recommendations</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Operations:</strong> Process automation and predictive maintenance</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Finance:</strong> Fraud detection and automated reporting</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">Getting Started with AI</h3>
      <p class="mb-4 leading-relaxed text-gray-700">Implementing AI doesn't have to be overwhelming. Start with these steps:</p>
      <ol class="mb-6 space-y-2 list-decimal list-inside">
        <li class="mb-2 text-gray-700">Identify repetitive tasks that consume significant time</li>
        <li class="mb-2 text-gray-700">Evaluate your data quality and availability</li>
        <li class="mb-2 text-gray-700">Start with pilot projects to prove value</li>
        <li class="mb-2 text-gray-700">Scale successful implementations across the organization</li>
      </ol>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">ROI of AI Implementation</h3>
      <p class="mb-4 leading-relaxed text-gray-700">Companies that successfully implement AI solutions typically see:</p>
      <ul class="mb-6 space-y-2">
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">20-30% reduction in operational costs</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">15-25% increase in productivity</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Improved customer satisfaction scores</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Better decision-making through data insights</li>
      </ul>
      
      <blockquote class="border-l-4 border-teal bg-gray-50 p-6 my-8 italic text-gray-600">
        <p class="mb-0">"AI is not about replacing humans—it's about augmenting human capabilities and freeing up time for strategic, creative work."</p>
      </blockquote>
    `,
    'Business Growth': `
      <h2 class="text-2xl font-bold text-dark-blue mb-4 mt-8">Sustainable Business Growth Strategies</h2>
      <p class="mb-4 leading-relaxed text-gray-700">Growing a business sustainably requires more than just increasing revenue—it demands strategic planning, operational excellence, and a focus on long-term value creation. Let's explore proven strategies that drive meaningful growth.</p>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">The Growth Framework</h3>
      <p class="mb-4 leading-relaxed text-gray-700">Successful business growth follows a structured approach:</p>
      <ul class="mb-6 space-y-2">
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Market Analysis:</strong> Understanding your market size and opportunities</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Competitive Positioning:</strong> Differentiating your value proposition</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Operational Scaling:</strong> Building systems that support growth</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Financial Management:</strong> Maintaining healthy cash flow during expansion</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">Key Growth Drivers</h3>
      <p class="mb-4 leading-relaxed text-gray-700">Focus on these critical areas to accelerate growth:</p>
      <ol class="mb-6 space-y-2 list-decimal list-inside">
        <li class="mb-2 text-gray-700"><strong class="font-semibold text-dark-blue">Customer Retention:</strong> It's 5x cheaper to retain customers than acquire new ones</li>
        <li class="mb-2 text-gray-700"><strong class="font-semibold text-dark-blue">Product Innovation:</strong> Continuously improve and expand your offerings</li>
        <li class="mb-2 text-gray-700"><strong class="font-semibold text-dark-blue">Market Expansion:</strong> Enter new geographic or demographic markets</li>
        <li class="mb-2 text-gray-700"><strong class="font-semibold text-dark-blue">Strategic Partnerships:</strong> Leverage relationships for mutual growth</li>
      </ol>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">Measuring Growth Success</h3>
      <p class="mb-4 leading-relaxed text-gray-700">Track these key metrics to ensure healthy growth:</p>
      <ul class="mb-6 space-y-2">
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Customer Acquisition Cost (CAC)</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Customer Lifetime Value (CLV)</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Monthly Recurring Revenue (MRR)</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Net Promoter Score (NPS)</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Gross and net profit margins</li>
      </ul>
      
      <blockquote class="border-l-4 border-teal bg-gray-50 p-6 my-8 italic text-gray-600">
        <p class="mb-0">"Growth without profitability is just expensive. Focus on sustainable growth that creates long-term value."</p>
      </blockquote>
    `,
    'Thought Leadership': `
      <h2 class="text-2xl font-bold text-dark-blue mb-4 mt-8">Building Thought Leadership in Your Industry</h2>
      <p class="mb-4 leading-relaxed text-gray-700">Thought leadership is about more than just sharing opinions—it's about providing valuable insights that help others solve problems and make better decisions. When done right, thought leadership can significantly impact your business growth and industry influence.</p>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">What Makes a Thought Leader</h3>
      <p class="mb-4 leading-relaxed text-gray-700">True thought leaders share these characteristics:</p>
      <ul class="mb-6 space-y-2">
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Deep Expertise:</strong> Comprehensive knowledge in their field</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Unique Perspective:</strong> Fresh insights on industry challenges</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Consistent Communication:</strong> Regular sharing of valuable content</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold"><strong class="font-semibold text-dark-blue">Community Building:</strong> Engaging with and helping others</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">Building Your Thought Leadership Platform</h3>
      <p class="mb-4 leading-relaxed text-gray-700">Develop your influence through these channels:</p>
      <ol class="mb-6 space-y-2 list-decimal list-inside">
        <li class="mb-2 text-gray-700"><strong class="font-semibold text-dark-blue">Content Creation:</strong> Write articles, create videos, host podcasts</li>
        <li class="mb-2 text-gray-700"><strong class="font-semibold text-dark-blue">Speaking Engagements:</strong> Present at conferences and industry events</li>
        <li class="mb-2 text-gray-700"><strong class="font-semibold text-dark-blue">Social Media:</strong> Share insights and engage in industry discussions</li>
        <li class="mb-2 text-gray-700"><strong class="font-semibold text-dark-blue">Networking:</strong> Build relationships with other industry leaders</li>
      </ol>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">The Business Impact</h3>
      <p class="mb-4 leading-relaxed text-gray-700">Thought leadership delivers tangible business benefits:</p>
      <ul class="mb-6 space-y-2">
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Increased brand recognition and credibility</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Higher quality leads and customer inquiries</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Premium pricing opportunities</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Attraction of top talent</li>
        <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Strategic partnership opportunities</li>
      </ul>
      
      <blockquote class="border-l-4 border-teal bg-gray-50 p-6 my-8 italic text-gray-600">
        <p class="mb-0">"Thought leadership is not about being the loudest voice in the room—it's about being the most helpful one."</p>
      </blockquote>
      
      <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">Getting Started</h3>
      <p class="mb-4 leading-relaxed text-gray-700">Begin your thought leadership journey by:</p>
      <ol class="mb-6 space-y-2 list-decimal list-inside">
        <li class="mb-2 text-gray-700">Identifying your unique expertise and perspective</li>
        <li class="mb-2 text-gray-700">Choosing 2-3 content channels to focus on initially</li>
        <li class="mb-2 text-gray-700">Creating a consistent publishing schedule</li>
        <li class="mb-2 text-gray-700">Engaging authentically with your audience</li>
        <li class="mb-2 text-gray-700">Measuring and refining your approach based on feedback</li>
      </ol>
    `
  }
  
  return sampleContent[post.category] || `
    <h2 class="text-2xl font-bold text-dark-blue mb-4 mt-8">${post.title}</h2>
    <p class="mb-4 leading-relaxed text-gray-700">${post.excerpt}</p>
    <p class="mb-4 leading-relaxed text-gray-700">This is a sample article demonstrating the blog post functionality. In a real implementation, this content would be stored in your content management system and could include rich text, images, videos, and other media.</p>
    <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">Key Takeaways</h3>
    <ul class="mb-6 space-y-2">
      {/* FIX 2: Safely access category to prevent crash */}
      <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Understanding the importance of ${post.category?.toLowerCase() || 'this topic'}</li>
      <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Implementing best practices in your business</li>
      <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Measuring success and continuous improvement</li>
    </ul>
  `
}

export default BlogPost