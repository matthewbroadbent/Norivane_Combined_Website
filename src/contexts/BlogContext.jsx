import React, { createContext, useContext, useState, useEffect } from 'react'

const BlogContext = createContext()

export const useBlog = () => {
  const context = useContext(BlogContext)
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider')
  }
  return context
}

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([
    'AI & Technology',
    'Business Strategy',
    'Exit Planning',
    'Digital Transformation',
    'Industry Insights'
  ])

  // Mock blog posts data
  const mockPosts = [
    {
      id: '1',
      title: 'The Future of AI in Business Exit Planning',
      slug: 'future-ai-business-exit-planning',
      excerpt: 'How artificial intelligence is revolutionizing the way businesses plan and execute their exit strategies.',
      content: `
        <p>Artificial intelligence is transforming every aspect of business operations, and exit planning is no exception. As we move into 2024, AI-powered tools are becoming essential for business owners looking to maximize their exit value.</p>
        
        <h2>AI-Driven Valuation Models</h2>
        <p>Traditional business valuation methods are being enhanced with machine learning algorithms that can analyze vast amounts of market data, financial trends, and industry-specific metrics to provide more accurate valuations.</p>
        
        <h2>Predictive Analytics for Market Timing</h2>
        <p>AI can help identify optimal timing for exits by analyzing market conditions, industry trends, and economic indicators to predict the best windows for maximum value realization.</p>
        
        <h2>Automated Due Diligence</h2>
        <p>Machine learning tools can streamline the due diligence process by automatically organizing financial documents, identifying potential red flags, and preparing comprehensive data rooms.</p>
      `,
      author: 'Sarah Johnson',
      publishedAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
      category: 'AI & Technology',
      tags: ['AI', 'Exit Planning', 'Business Valuation', 'Technology'],
      featured: true,
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      readTime: 8,
      status: 'published'
    },
    {
      id: '2',
      title: 'Maximizing Business Value Before Exit',
      slug: 'maximizing-business-value-before-exit',
      excerpt: 'Strategic steps to increase your business value in the 12-24 months before selling.',
      content: `
        <p>Preparing your business for sale requires strategic planning and execution. Here are the key areas to focus on to maximize your business value.</p>
        
        <h2>Financial Optimization</h2>
        <p>Clean up your financial statements, improve profit margins, and establish predictable revenue streams. Buyers pay premium for businesses with clear, growing financials.</p>
        
        <h2>Operational Excellence</h2>
        <p>Streamline operations, document processes, and reduce owner dependency. A business that runs without you is worth significantly more.</p>
        
        <h2>Market Position Strengthening</h2>
        <p>Solidify your competitive advantages, expand market share, and build strong customer relationships that will transfer to new ownership.</p>
      `,
      author: 'Michael Chen',
      publishedAt: '2024-01-10T14:30:00Z',
      updatedAt: '2024-01-10T14:30:00Z',
      category: 'Exit Planning',
      tags: ['Business Value', 'Exit Strategy', 'Business Optimization'],
      featured: false,
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      readTime: 6,
      status: 'published'
    },
    {
      id: '3',
      title: 'Digital Transformation ROI: Measuring Success',
      slug: 'digital-transformation-roi-measuring-success',
      excerpt: 'How to measure and maximize the return on investment from your digital transformation initiatives.',
      content: `
        <p>Digital transformation is essential for modern businesses, but measuring its ROI can be challenging. Here's how to track and optimize your digital investments.</p>
        
        <h2>Key Performance Indicators</h2>
        <p>Establish clear KPIs that align with your business objectives, including efficiency gains, cost reductions, and revenue improvements.</p>
        
        <h2>Long-term Value Creation</h2>
        <p>Consider both immediate returns and long-term strategic value, including improved customer experience and competitive positioning.</p>
        
        <h2>Continuous Optimization</h2>
        <p>Implement feedback loops and continuous improvement processes to maximize the ongoing value of your digital investments.</p>
      `,
      author: 'Emily Rodriguez',
      publishedAt: '2024-01-05T09:15:00Z',
      updatedAt: '2024-01-05T09:15:00Z',
      category: 'Digital Transformation',
      tags: ['Digital Transformation', 'ROI', 'Business Strategy'],
      featured: false,
      imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      readTime: 7,
      status: 'published'
    }
  ]

  // Initialize with mock data
  useEffect(() => {
    setPosts(mockPosts)
  }, [])

  const getAllPosts = () => {
    return posts.filter(post => post.status === 'published')
  }

  const getFeaturedPosts = () => {
    return posts.filter(post => post.featured && post.status === 'published')
  }

  const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug && post.status === 'published')
  }

  const getPostsByCategory = (category) => {
    return posts.filter(post => 
      post.category === category && post.status === 'published'
    )
  }

  const getPostsByTag = (tag) => {
    return posts.filter(post => 
      post.tags.includes(tag) && post.status === 'published'
    )
  }

  const searchPosts = (query) => {
    const lowercaseQuery = query.toLowerCase()
    return posts.filter(post => 
      post.status === 'published' && (
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      )
    )
  }

  const createPost = (postData) => {
    try {
      setLoading(true)
      const newPost = {
        id: Date.now().toString(),
        slug: postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'published',
        featured: false,
        readTime: Math.ceil(postData.content.split(' ').length / 200),
        ...postData
      }
      
      setPosts(prevPosts => [newPost, ...prevPosts])
      return { success: true, post: newPost }
    } catch (error) {
      console.error('Create post error:', error)
      setError('Failed to create post')
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const updatePost = (postId, postData) => {
    try {
      setLoading(true)
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === postId 
            ? { 
                ...post, 
                ...postData, 
                updatedAt: new Date().toISOString(),
                readTime: Math.ceil(postData.content?.split(' ').length / 200) || post.readTime
              }
            : post
        )
      )
      
      const updatedPost = posts.find(post => post.id === postId)
      return { success: true, post: updatedPost }
    } catch (error) {
      console.error('Update post error:', error)
      setError('Failed to update post')
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const deletePost = (postId) => {
    try {
      setLoading(true)
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId))
      return { success: true }
    } catch (error) {
      console.error('Delete post error:', error)
      setError('Failed to delete post')
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const value = {
    // State
    posts: getAllPosts(),
    loading,
    error,
    categories,
    
    // Methods
    getAllPosts,
    getFeaturedPosts,
    getPostBySlug,
    getPostsByCategory,
    getPostsByTag,
    searchPosts,
    createPost,
    updatePost,
    deletePost,
    
    // Admin methods (require authentication)
    getAllPostsIncludingDrafts: () => posts,
    
    // Computed values
    totalPosts: posts.filter(post => post.status === 'published').length,
    featuredPostsCount: posts.filter(post => post.featured && post.status === 'published').length
  }

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext
