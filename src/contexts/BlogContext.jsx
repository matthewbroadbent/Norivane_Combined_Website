import React, { createContext, useContext, useState } from 'react'

const BlogContext = createContext()

export const useBlog = () => {
  const context = useContext(BlogContext)
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider')
  }
  return context
}

// Mock blog posts data
const initialPosts = [
  {
    id: '1',
    title: 'How AI Can Transform Your Customer Service in 30 Days',
    slug: 'ai-transform-customer-service-30-days',
    excerpt: 'Discover how implementing AI chatbots and automation can revolutionize your customer service operations and improve satisfaction scores.',
    content: `
      <p>Customer service is often the first point of contact between your business and your customers. In today's fast-paced world, customers expect instant responses and 24/7 availability. This is where AI can make a transformative difference.</p>
      
      <h2>The Challenge with Traditional Customer Service</h2>
      <p>Most businesses struggle with:</p>
      <ul>
        <li>Limited operating hours</li>
        <li>High staff costs</li>
        <li>Inconsistent response quality</li>
        <li>Long wait times during peak periods</li>
      </ul>
      
      <h2>How AI Solves These Problems</h2>
      <p>AI-powered customer service solutions can:</p>
      <ul>
        <li>Provide 24/7 instant responses</li>
        <li>Handle multiple inquiries simultaneously</li>
        <li>Maintain consistent service quality</li>
        <li>Reduce operational costs by up to 60%</li>
      </ul>
      
      <h2>Implementation Strategy</h2>
      <p>Our 30-day implementation process includes:</p>
      <ol>
        <li><strong>Week 1:</strong> Analysis and setup</li>
        <li><strong>Week 2:</strong> AI training and customization</li>
        <li><strong>Week 3:</strong> Testing and refinement</li>
        <li><strong>Week 4:</strong> Launch and optimization</li>
      </ol>
      
      <p>The results speak for themselves: our clients typically see a 45% improvement in customer satisfaction and 60% reduction in response times within the first month.</p>
    `,
    author: 'Norivane Team',
    publishedAt: '2024-01-15',
    category: 'AI Implementation',
    tags: ['AI', 'Customer Service', 'Automation', 'Business Growth'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '5 min read',
    featured: true
  },
  {
    id: '2',
    title: 'Exit Planning: When to Start and What to Expect',
    slug: 'exit-planning-when-start-what-expect',
    excerpt: 'Learn the optimal timing for exit planning and understand the key steps involved in maximizing your business valuation.',
    content: `
      <p>Exit planning is one of the most critical decisions a business owner will make. Yet many entrepreneurs wait too long to start the process, leaving significant value on the table.</p>
      
      <h2>When Should You Start Exit Planning?</h2>
      <p>The ideal time to begin exit planning is 3-5 years before you intend to sell. This timeline allows for:</p>
      <ul>
        <li>Comprehensive business optimization</li>
        <li>Financial performance improvement</li>
        <li>Market positioning enhancement</li>
        <li>Buyer relationship development</li>
      </ul>
      
      <h2>The Exit Planning Process</h2>
      <h3>Phase 1: Business Assessment (Months 1-3)</h3>
      <p>We conduct a thorough evaluation of your business, including:</p>
      <ul>
        <li>Financial analysis and valuation</li>
        <li>Operational efficiency review</li>
        <li>Market position assessment</li>
        <li>Risk factor identification</li>
      </ul>
      
      <h3>Phase 2: Value Optimization (Months 4-18)</h3>
      <p>This phase focuses on maximizing your business value through:</p>
      <ul>
        <li>Revenue growth strategies</li>
        <li>Cost optimization</li>
        <li>Process systematization</li>
        <li>Team development</li>
      </ul>
      
      <h3>Phase 3: Market Preparation (Months 19-24)</h3>
      <p>Preparing for the market involves:</p>
      <ul>
        <li>Buyer identification and qualification</li>
        <li>Marketing material preparation</li>
        <li>Due diligence preparation</li>
        <li>Negotiation strategy development</li>
      </ul>
      
      <h2>Expected Outcomes</h2>
      <p>Our clients typically achieve:</p>
      <ul>
        <li>2-3x higher valuations than initial estimates</li>
        <li>Faster sale processes (6-12 months vs. 18-24 months)</li>
        <li>Better deal terms and structures</li>
        <li>Smoother transitions</li>
      </ul>
      
      <p>Remember, exit planning isn't just about selling your business—it's about maximizing the value of your life's work and ensuring a successful transition to the next chapter.</p>
    `,
    author: 'Norivane Team',
    publishedAt: '2024-01-10',
    category: 'Exit Planning',
    tags: ['Exit Planning', 'Business Valuation', 'M&A', 'Strategy'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '7 min read',
    featured: true
  },
  {
    id: '3',
    title: '5 AI Tools Every Business Should Consider in 2024',
    slug: '5-ai-tools-every-business-should-consider-2024',
    excerpt: 'Explore the most impactful AI tools that can drive immediate results for businesses of all sizes.',
    content: `
      <p>Artificial Intelligence is no longer a luxury for large corporations. Today's AI tools are accessible, affordable, and can deliver immediate ROI for businesses of all sizes.</p>
      
      <h2>1. Customer Service Chatbots</h2>
      <p>Modern chatbots can handle 80% of routine customer inquiries, providing:</p>
      <ul>
        <li>24/7 customer support</li>
        <li>Instant response times</li>
        <li>Consistent service quality</li>
        <li>Multilingual support</li>
      </ul>
      <p><strong>ROI:</strong> 300-500% within the first year</p>
      
      <h2>2. Predictive Analytics Platforms</h2>
      <p>These tools analyze historical data to predict future trends:</p>
      <ul>
        <li>Sales forecasting</li>
        <li>Inventory optimization</li>
        <li>Customer behavior prediction</li>
        <li>Risk assessment</li>
      </ul>
      <p><strong>ROI:</strong> 200-400% through improved decision making</p>
      
      <h2>3. Marketing Automation with AI</h2>
      <p>AI-powered marketing tools can:</p>
      <ul>
        <li>Personalize customer experiences</li>
        <li>Optimize ad spending</li>
        <li>Automate email campaigns</li>
        <li>Score and nurture leads</li>
      </ul>
      <p><strong>ROI:</strong> 150-300% through improved conversion rates</p>
      
      <h2>4. Process Automation Tools</h2>
      <p>Robotic Process Automation (RPA) can handle:</p>
      <ul>
        <li>Data entry and processing</li>
        <li>Invoice processing</li>
        <li>Report generation</li>
        <li>Compliance monitoring</li>
      </ul>
      <p><strong>ROI:</strong> 200-600% through labor cost savings</p>
      
      <h2>5. AI-Powered Business Intelligence</h2>
      <p>Modern BI tools with AI capabilities offer:</p>
      <ul>
        <li>Automated insights generation</li>
        <li>Natural language queries</li>
        <li>Anomaly detection</li>
        <li>Real-time dashboards</li>
      </ul>
      <p><strong>ROI:</strong> 250-450% through better strategic decisions</p>
      
      <h2>Getting Started</h2>
      <p>The key to successful AI implementation is starting small and scaling gradually. Focus on one area where you can achieve quick wins, then expand to other areas once you've proven the value.</p>
      
      <p>Remember, the goal isn't to replace your team—it's to augment their capabilities and free them up for higher-value activities that drive business growth.</p>
    `,
    author: 'Norivane Team',
    publishedAt: '2024-01-05',
    category: 'AI Implementation',
    tags: ['AI Tools', 'Business Technology', 'Automation', 'ROI'],
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '6 min read',
    featured: false
  }
]

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts)

  const addPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now().toString(),
      publishedAt: new Date().toISOString().split('T')[0]
    }
    setPosts([newPost, ...posts])
  }

  const updatePost = (id, updatedPost) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, ...updatedPost } : post
    ))
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug)
  }

  const getFeaturedPosts = () => {
    return posts.filter(post => post.featured)
  }

  const getPostsByCategory = (category) => {
    return posts.filter(post => post.category === category)
  }

  const value = {
    posts,
    addPost,
    updatePost,
    deletePost,
    getPostBySlug,
    getFeaturedPosts,
    getPostsByCategory
  }

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  )
}
