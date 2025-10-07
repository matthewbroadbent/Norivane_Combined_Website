import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Eye, EyeOff, Calendar, User, Tag, LogOut, Loader2, AlertTriangle, CheckCircle } from 'lucide-react'
import { useBlog } from '../contexts/BlogContext'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import BlogEditor from '../components/BlogEditor'

const AdminDashboard = () => {
  const { adminPosts, adminLoading, loadAdminPosts, deletePost, updatePost } = useBlog()
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [showEditor, setShowEditor] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [filter, setFilter] = useState('all')
  const [bannerMessage, setBannerMessage] = useState('')
  const [bannerError, setBannerError] = useState('')

  useEffect(() => {
    loadAdminPosts().catch((err) => {
      console.error('Failed to initialise posts:', err)
      setBannerError('Unable to load blog posts. Please refresh the page.')
    })
  }, [loadAdminPosts])

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const handleEdit = (post) => {
    setEditingPost(post)
    setShowEditor(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return
    try {
      setBannerError('')
      setBannerMessage('')
      await deletePost(id)
      setBannerMessage('Post deleted successfully.')
    } catch (err) {
      console.error('Failed to delete post:', err)
      setBannerError(err.message || 'Unable to delete the selected post.')
    }
  }

  const handleTogglePublish = async (post) => {
    const nextStatus = post.status === 'published' ? 'draft' : 'published'
    try {
      setBannerError('')
      setBannerMessage('')
      await updatePost(post.id, {
        ...post,
        status: nextStatus,
        published_at: nextStatus === 'published' ? post.published_at || new Date().toISOString() : null
      })
      setBannerMessage(nextStatus === 'published' ? 'Post published successfully.' : 'Post moved to drafts.')
    } catch (err) {
      console.error('Failed to toggle publish state:', err)
      setBannerError(err.message || 'Unable to update the post status.')
    }
  }

  const handleNewPost = () => {
    setEditingPost(null)
    setShowEditor(true)
  }

  const filteredPosts = useMemo(() => {
    return adminPosts.filter((post) => {
      if (filter === 'published') return post.status === 'published'
      if (filter === 'draft') return post.status !== 'published'
      return true
    })
  }, [adminPosts, filter])

  const stats = useMemo(() => ({
    total: adminPosts.length,
    published: adminPosts.filter((p) => p.status === 'published').length,
    drafts: adminPosts.filter((p) => p.status !== 'published').length
  }), [adminPosts])

  if (showEditor) {
    return (
      <BlogEditor
        post={editingPost}
        onClose={() => setShowEditor(false)}
        onSave={() => setShowEditor(false)}
      />
    )
  }

  const renderBanner = () => {
    if (bannerError) {
      return (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          <AlertTriangle size={18} className="mt-0.5" />
          <p className="text-sm md:text-base">{bannerError}</p>
        </div>
      )
    }

    if (bannerMessage) {
      return (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-teal/30 bg-teal/10 p-4 text-teal">
          <CheckCircle size={18} className="mt-0.5" />
          <p className="text-sm md:text-base">{bannerMessage}</p>
        </div>
      )
    }

    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
        {renderBanner()}

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

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-wrap gap-3">
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
                {filteredPosts.map((post) => {
                  const displayDate = post.published_at || post.created_at
                  const isPublished = post.status === 'published'
                  const excerpt = post.excerpt || ''

                  return (
                    <motion.tr
                      key={post.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={post.featured_image || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'}
                            alt={post.title}
                            className="w-12 h-12 rounded-lg object-cover mr-4"
                            onError={(event) => {
                              event.currentTarget.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
                            }}
                          />
                          <div>
                            <div className="text-sm font-medium text-dark-blue">
                              {post.title}
                            </div>
                            <div className="text-sm text-medium-grey">
                              {excerpt ? `${excerpt.slice(0, 60)}${excerpt.length > 60 ? '…' : ''}` : 'No excerpt available'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {post.category || 'Uncategorised'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <User size={16} className="text-medium-grey mr-2" />
                          <span className="text-sm text-dark-blue">{post.author || 'Norivane Team'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Calendar size={16} className="text-medium-grey mr-2" />
                          <span className="text-sm text-dark-blue">
                            {displayDate ? new Date(displayDate).toLocaleDateString() : '—'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleTogglePublish(post)}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            isPublished ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                          }`}
                        >
                          {isPublished ? (
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
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {adminLoading && (
          <div className="flex items-center justify-center gap-2 py-6 text-medium-grey">
            <Loader2 className="animate-spin" size={18} />
            <span>Loading posts…</span>
          </div>
        )}

        {!adminLoading && filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-medium-grey">No posts found matching your filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
