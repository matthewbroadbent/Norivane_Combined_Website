import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Eye, EyeOff, Calendar, User, Tag, LogOut } from 'lucide-react'
import { useBlog } from '../contexts/BlogContext'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import BlogEditor from '../components/BlogEditor'

const AdminDashboard = () => {
  const { blogPosts, deletePost, updatePost } = useBlog()
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [showEditor, setShowEditor] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [filter, setFilter] = useState('all')

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const handleEdit = (post) => {
    setEditingPost(post)
    setShowEditor(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(id)
    }
  }

  const handleTogglePublish = (post) => {
    updatePost(post.id, { ...post, published: !post.published })
  }

  const handleNewPost = () => {
    setEditingPost(null)
    setShowEditor(true)
  }

  const filteredPosts = blogPosts.filter(post => {
    if (filter === 'published') return post.published
    if (filter === 'draft') return !post.published
    return true
  })

  const stats = {
    total: blogPosts.length,
    published: blogPosts.filter(p => p.published).length,
    drafts: blogPosts.filter(p => !p.published).length
  }

  if (showEditor) {
    return (
      <BlogEditor
        post={editingPost}
        onClose={() => setShowEditor(false)}
        onSave={() => setShowEditor(false)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-dark-blue">Blog Management</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleNewPost}
                className="bg-teal text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal/90 transition-colors duration-200 flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>New Post</span>
              </button>
              <button
                onClick={handleLogout}
                className="text-medium-grey hover:text-dark-blue transition-colors duration-200 flex items-center space-x-2"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-medium-grey">Total Posts</p>
                <p className="text-3xl font-bold text-dark-blue">{stats.total}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Tag className="text-blue-600" size={24} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-medium-grey">Published</p>
                <p className="text-3xl font-bold text-green-600">{stats.published}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Eye className="text-green-600" size={24} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-medium-grey">Drafts</p>
                <p className="text-3xl font-bold text-orange-600">{stats.drafts}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <EyeOff className="text-orange-600" size={24} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                filter === 'all' ? 'bg-teal text-white' : 'bg-gray-100 text-medium-grey hover:bg-gray-200'
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setFilter('published')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                filter === 'published' ? 'bg-teal text-white' : 'bg-gray-100 text-medium-grey hover:bg-gray-200'
              }`}
            >
              Published
            </button>
            <button
              onClick={() => setFilter('draft')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                filter === 'draft' ? 'bg-teal text-white' : 'bg-gray-100 text-medium-grey hover:bg-gray-200'
              }`}
            >
              Drafts
            </button>
          </div>
        </div>

        {/* Posts List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Post
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <motion.tr
                    key={post.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-12 h-12 rounded-lg object-cover mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-dark-blue">
                            {post.title}
                          </div>
                          <div className="text-sm text-medium-grey">
                            {post.excerpt.substring(0, 60)}...
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User size={16} className="text-medium-grey mr-2" />
                        <span className="text-sm text-dark-blue">{post.author}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Calendar size={16} className="text-medium-grey mr-2" />
                        <span className="text-sm text-dark-blue">
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleTogglePublish(post)}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {post.published ? (
                          <>
                            <Eye size={12} className="mr-1" />
                            Published
                          </>
                        ) : (
                          <>
                            <EyeOff size={12} className="mr-1" />
                            Draft
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(post)}
                          className="text-teal hover:text-teal/80 transition-colors duration-200"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-red-600 hover:text-red-800 transition-colors duration-200"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-medium-grey">No posts found matching your filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
