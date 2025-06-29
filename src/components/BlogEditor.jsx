import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Save, X, Eye, Upload, Calendar, User, Tag } from 'lucide-react'
import { useBlog } from '../contexts/BlogContext'

const BlogEditor = ({ post, onClose, onSave }) => {
  const { addPost, updatePost } = useBlog()
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Exit Planning',
    author: 'Admin User',
    image: '',
    featured: false,
    published: false,
    readTime: '5 min read'
  })
  const [isPreview, setIsPreview] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const categories = ['Exit Planning', 'AI Solutions', 'Business Growth', 'Thought Leadership']

  useEffect(() => {
    if (post) {
      setFormData(post)
    }
  }, [post])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSave = async (publish = false) => {
    setIsSaving(true)
    
    const postData = {
      ...formData,
      published: publish || formData.published
    }

    try {
      if (post) {
        updatePost(post.id, postData)
      } else {
        addPost(postData)
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate save delay
      onSave()
    } catch (error) {
      console.error('Error saving post:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const renderPreview = () => (
    <div className="prose prose-lg max-w-none">
      <img
        src={formData.image || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'}
        alt={formData.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="flex items-center space-x-4 text-sm text-medium-grey mb-4">
        <span className="flex items-center space-x-1">
          <Tag size={16} />
          <span>{formData.category}</span>
        </span>
        <span className="flex items-center space-x-1">
          <Calendar size={16} />
          <span>{new Date().toLocaleDateString()}</span>
        </span>
        <span>{formData.readTime}</span>
      </div>
      <h1 className="text-4xl font-bold text-dark-blue mb-4">{formData.title}</h1>
      <p className="text-xl text-medium-grey mb-6">{formData.excerpt}</p>
      <div className="whitespace-pre-wrap">{formData.content}</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-dark-blue">
              {post ? 'Edit Post' : 'New Post'}
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPreview(!isPreview)}
                className="flex items-center space-x-2 text-medium-grey hover:text-dark-blue transition-colors duration-200"
              >
                <Eye size={20} />
                <span>{isPreview ? 'Edit' : 'Preview'}</span>
              </button>
              <button
                onClick={() => handleSave(false)}
                disabled={isSaving}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Draft'}
              </button>
              <button
                onClick={() => handleSave(true)}
                disabled={isSaving}
                className="bg-teal text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal/90 transition-colors duration-200 disabled:opacity-50 flex items-center space-x-2"
              >
                <Save size={20} />
                <span>{isSaving ? 'Publishing...' : 'Publish'}</span>
              </button>
              <button
                onClick={onClose}
                className="text-medium-grey hover:text-dark-blue transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isPreview ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            {renderPreview()}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Editor */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-blue mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-lg"
                      placeholder="Enter post title..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-blue mb-2">
                      Excerpt
                    </label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                      placeholder="Brief description of the post..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-blue mb-2">
                      Content
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      rows={20}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent font-mono text-sm"
                      placeholder="Write your post content here... You can use markdown formatting."
                    />
                    <p className="text-sm text-medium-grey mt-2">
                      Tip: Use markdown formatting for headers (#), lists (-), and emphasis (*text*)
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Post Settings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-dark-blue mb-4">Post Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-blue mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-blue mb-2">
                      Author
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-blue mb-2">
                      Read Time
                    </label>
                    <input
                      type="text"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                      placeholder="e.g., 5 min read"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-blue mb-2">
                      Featured Image URL
                    </label>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                      placeholder="https://images.pexels.com/..."
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleChange}
                      className="w-4 h-4 text-teal border-gray-300 rounded focus:ring-teal"
                    />
                    <label className="text-sm font-medium text-dark-blue">
                      Featured Post
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="published"
                      checked={formData.published}
                      onChange={handleChange}
                      className="w-4 h-4 text-teal border-gray-300 rounded focus:ring-teal"
                    />
                    <label className="text-sm font-medium text-dark-blue">
                      Published
                    </label>
                  </div>
                </div>
              </motion.div>

              {/* Image Preview */}
              {formData.image && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <h3 className="text-lg font-semibold text-dark-blue mb-4">Image Preview</h3>
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
                    }}
                  />
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogEditor
