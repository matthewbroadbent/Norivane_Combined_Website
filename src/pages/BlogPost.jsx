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

  // Get featured image with fallback
  const getFeaturedImage = () => {
    // FIX 1: Look for 'featured_image' instead of 'image'
    if (post.featured_image && post.featured_image.trim()) {
      return post.featured_image
    }
    // Default fallback image
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
                        // FIX 2: Look for 'featured_image' here as well
                        src={relatedPost.featured_image || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'}
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

const generateSampleContent = (post) => {
  const sampleContent = {
    'Exit Planning': `...`, // Content hidden for brevity
    'AI Solutions': `...`, // Content hidden for brevity
    'Business Growth': `...`, // Content hidden for brevity
    'Thought Leadership': `...` // Content hidden for brevity
  }
  
  return sampleContent[post.category] || `
    <h2 class="text-2xl font-bold text-dark-blue mb-4 mt-8">${post.title}</h2>
    <p class="mb-4 leading-relaxed text-gray-700">${post.excerpt}</p>
    <p class="mb-4 leading-relaxed text-gray-700">This is a sample article demonstrating the blog post functionality. In a real implementation, this content would be stored in your content management system and could include rich text, images, videos, and other media.</p>
    <h3 class="text-xl font-semibold text-dark-blue mb-3 mt-6">Key Takeaways</h3>
    <ul class="mb-6 space-y-2">
      <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Understanding the importance of ${post.category?.toLowerCase() || 'this topic'}</li>
      <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Implementing best practices in your business</li>
      <li class="mb-2 ml-4 relative before:content-['•'] before:absolute before:-left-4 before:text-teal before:font-bold">Measuring success and continuous improvement</li>
    </ul>
  `
}

export default BlogPost
