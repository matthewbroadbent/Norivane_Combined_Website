import React, { createContext, useContext, useState } from 'react'

const AdminContext = createContext()

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}

export const AdminProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'How AI is Transforming Small Business Operations',
      slug: 'ai-transforming-small-business',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way small businesses operate, from customer service to inventory management.',
      content: 'Full blog post content would go here...',
      author: 'Sarah Chen',
      publishedAt: '2024-01-15',
      status: 'published',
      tags: ['AI', 'Small Business', 'Technology'],
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Strategic Exit Planning: Maximizing Your Business Value',
      slug: 'strategic-exit-planning-guide',
      excerpt: 'A comprehensive guide to preparing your business for a successful exit and maximizing valuation.',
      content: 'Full blog post content would go here...',
      author: 'Michael Rodriguez',
      publishedAt: '2024-01-10',
      status: 'published',
      tags: ['Exit Planning', 'Business Valuation', 'Strategy'],
      readTime: '8 min read'
    }
  ])

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      company: 'Tech Solutions Ltd',
      message: 'Interested in AI implementation for our customer service.',
      submittedAt: '2024-01-20',
      status: 'new'
    },
    {
      id: 2,
      name: 'Emma Johnson',
      email: 'emma@manufacturing.com',
      company: 'Johnson Manufacturing',
      message: 'Looking for exit planning consultation.',
      submittedAt: '2024-01-18',
      status: 'contacted'
    }
  ])

  const addBlogPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(),
      publishedAt: new Date().toISOString().split('T')[0]
    }
    setBlogPosts(prev => [newPost, ...prev])
  }

  const updateBlogPost = (id, updates) => {
    setBlogPosts(prev => prev.map(post => 
      post.id === id ? { ...post, ...updates } : post
    ))
  }

  const deleteBlogPost = (id) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id))
  }

  const updateContactStatus = (id, status) => {
    setContacts(prev => prev.map(contact =>
      contact.id === id ? { ...contact, status } : contact
    ))
  }

  const value = {
    blogPosts,
    contacts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    updateContactStatus
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}
