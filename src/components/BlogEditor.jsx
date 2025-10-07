import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogEditor = () => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    tags: '',
    category: '',
    featured: false,
    published: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Blog post data:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-blue via-white to-light-teal p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-dark-blue mb-2">Create New Blog Post</h1>
            <p className="text-medium-grey">Write and publish your latest thoughts and insights.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-dark-blue mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="Enter your blog post title..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-blue mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="technology">Technology</option>
                  <option value="business">Business</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="travel">Travel</option>
                  <option value="food">Food</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-blue mb-2">Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="Enter tags separated by commas..."
                />
              </div>

              <div className="flex items-center space-x-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-4 h-4 text-teal bg-gray-100 border-gray-300 rounded focus:ring-teal focus:ring-2"
                  />
                  <span className="ml-2 text-sm font-medium text-dark-blue">Featured Post</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleChange}
                    className="w-4 h-4 text-teal bg-gray-100 border-gray-300 rounded focus:ring-teal focus:ring-2"
                  />
                  <span className="ml-2 text-sm font-medium text-dark-blue">Publish Now</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-blue mb-2">Slug</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-sm"
                placeholder="unique-post-slug-goes-here"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-blue mb-2">Excerpt</label>
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
              <label className="block text-sm font-medium text-dark-blue mb-2">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={20}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent font-mono text-sm"
                placeholder="Write your post content here... You can use markdown formatting..."
              />
              <div className="text-sm text-medium-grey mt-2 space-y-1">
                <p><strong>Markdown formatting supported:</strong></p>
                <p># ## ### for headings, **bold**, *italic*, * - for lists, &gt; for quotes</p>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 rounded-lg text-dark-blue hover:bg-gray-50 transition-colors duration-200"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-teal to-dark-blue text-white rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {formData.published ? 'Publish Post' : 'Save Post'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogEditor;
