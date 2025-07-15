import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, X, Eye } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext'; // We need this for authentication

// Helper function to create URL-friendly slugs
const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .normalize('NFD') // Normalize diacritics (e.g., é -> e)
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .toLowerCase() // Convert to lowercase
    .trim() // Trim leading/trailing whitespace
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove all non-word chars except hyphens
    .replace(/--+/g, '-'); // Replace multiple hyphens with single
};

const BlogEditor = ({ post, onClose, onSave }) => {
  const { session } = useAuth();

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Exit Planning',
    author: 'Admin User',
    featured_image: '', // Changed from 'image' to 'featured_image'
    featured: false,
    status: 'draft',
    readTime: '5 min read',
  });
  const [isPreview, setIsPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const categories = ['Exit Planning', 'AI Solutions', 'Business Growth', 'Thought Leadership'];

  useEffect(() => {
    if (post) {
      setFormData({
        ...post,
        // Ensure slug is properly set from existing post if available
        slug: post.slug || slugify(post.title || ''),
        status: post.published ? 'published' : 'draft', // Adapt to new status field
        featured_image: post.featured_image || '', // Ensure featured_image is set
      });
    } else {
      setFormData(prev => ({ ...prev, author: session?.user?.email || 'Admin User' }));
    }
  }, [post, session]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => {
      const newState = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      };

      // Automatically generate slug if title changes and slug hasn't been manually set
      if (name === 'title' && !post) { // Only auto-generate for new posts or if not explicitly set
        newState.slug = slugify(value);
      }
      return newState;
    });
  };

  const handleSave = async (newStatus) => {
    setIsSaving(true);

    const token = session?.access_token;
    if (!token) {
      alert('Authentication error. Please log in again.');
      setIsSaving(false);
      return;
    }

    // Ensure slug is generated/cleaned before saving if it's empty or needs updating
    const finalSlug = formData.slug || slugify(formData.title); // Fallback to title slugify
    const postData = {
        ...formData,
        slug: finalSlug, // Use the generated/manual slug
        status: newStatus,
        published: newStatus === 'published' // Ensure 'published' boolean is also set for backend
    };

    try {
      let response;
      const apiUrl = 'https://blog-norivane.vercel.app/api/blog';

      if (post) {
        // Update an existing post (using original post's slug for the URL)
        // Ensure you use the original slug from 'post' prop, not the 'formData.slug' which might have changed
        response = await fetch(`${apiUrl}/posts/${post.slug}`, { // Corrected URL to include /posts/
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        });
      } else {
        // Create a new post
        response = await fetch(`${apiUrl}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save post.');
      }

      alert(`Post saved successfully as ${newStatus}!`);
      onSave();
    } catch (error) {
      console.error('Error saving post:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const formatContentForPreview = (content) => {
    if (!content) return '';
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
      .replace(/(<li class="mb-2 ml-4[^>]*>.*?<\/li>\s*)+/g, (match) => `<ul class="mb-6 space-y-2">${match}</ul>`)
      .replace(/(<li class="mb-2 ml-4 list-decimal">.*?<\/li>\s*)+/g, (match) => `<ol class="mb-6 space-y-2 list-decimal list-inside">${match}</ol>`);
    return formattedContent;
  };

  // Use featured_image from formData
  const getImageWithFallback = () => formData.featured_image?.trim() || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop';

  const renderPreview = () => (
    <div className="prose prose-lg max-w-none">
      <img src={getImageWithFallback()} alt={formData.title} className="w-full h-64 object-cover rounded-lg mb-6" onError={(e) => { e.target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'; }} />
      <div className="flex items-center space-x-4 text-sm text-medium-grey mb-4">
        <span>{formData.category}</span>
        {/* Use a placeholder date for new posts, or actual date for existing */}
        <span>{post?.created_at ? new Date(post.created_at).toLocaleDateString() : new Date().toLocaleDateString()}</span>
        <span>{formData.readTime}</span>
      </div>
      <h1 className="text-4xl font-bold text-dark-blue mb-4">{formData.title}</h1>
      <p className="text-xl text-medium-grey mb-6">{formData.excerpt}</p>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: formatContentForPreview(formData.content) }} />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-dark-blue">{post ? 'Edit Post' : 'New Post'}</h1>
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsPreview(!isPreview)} className="flex items-center space-x-2 text-medium-grey hover:text-dark-blue transition-colors duration-200"><Eye size={20} /><span>{isPreview ? 'Edit' : 'Preview'}</span></button>
              <button onClick={() => handleSave('draft')} disabled={isSaving} className="bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50">{isSaving ? 'Saving...' : 'Save Draft'}</button>
              <button onClick={() => handleSave('published')} disabled={isSaving} className="bg-teal text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal/90 transition-colors duration-200 disabled:opacity-50 flex items-center space-x-2"><Save size={20} /><span>{isSaving ? 'Publishing...' : 'Publish'}</span></button>
              <button onClick={onClose} className="text-medium-grey hover:text-dark-blue transition-colors duration-200"><X size={24} /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isPreview ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-lg shadow-sm p-8">{renderPreview()}</motion.div> : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-lg shadow-sm p-6">
                <div className="space-y-6">
                  <div><label className="block text-sm font-medium text-dark-blue mb-2">Title</label><input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-lg" placeholder="Enter post title..." /></div>
                  {/* Added slug input */}
                  <div><label className="block text-sm font-medium text-dark-blue mb-2">Slug</label><input type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-sm" placeholder="unique-post-slug-goes-here" /></div>
                  <div><label className="block text-sm font-medium text-dark-blue mb-2">Excerpt</label><textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" placeholder="Brief description of the post..." /></div>
                  <div><label className="block text-sm font-medium text-dark-blue mb-2">Content</label><textarea name="content" value={formData.content} onChange={handleChange} rows={20} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent font-mono text-sm" placeholder="Write your post content here... You can use markdown formatting..." /><div className="text-sm text-medium-grey mt-2 space-y-1"><p><strong>Markdown formatting supported:</strong></p><p># ## ### for headings, **bold**, *italic*, * - for lists, &gt; for quotes</p></div></div>
                </div>
              </motion.div>
            </div>
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-dark-blue mb-4">Post Settings</h3>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-dark-blue mb-2">Category</label><select name="category" value={formData.category} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent">{categories.map(category => (<option key={category} value={category}>{category}</option>))}</select></div>
                  <div><label className="block text-sm font-medium text-dark-blue mb-2">Author</label><input type="text" name="author" value={formData.author} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" /></div>
                  <div><label className="block text-sm font-medium text-dark-blue mb-2">Read Time</label><input type="text" name="readTime" value={formData.readTime} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" placeholder="e.g., 5 min read" /></div>
                  <div><label className="block text-sm font-medium text-dark-blue mb-2">Featured Image URL</label><input type="url" name="featured_image" value={formData.featured_image} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" placeholder="https://images.pexels.com/..." /><p className="text-xs text-medium-grey mt-1">Use high-quality images from Pexels or similar sources</p></div>
                  <div className="flex items-center space-x-3"><input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} className="w-4 h-4 text-teal border-gray-300 rounded focus:ring-teal" /><label className="text-sm font-medium text-dark-blue">Featured Post</label></div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-dark-blue mb-4">Image Preview</h3>
                <img src={getImageWithFallback()} alt="Preview" className="w-full h-32 object-cover rounded-lg" onError={(e) => { e.target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'; }} />
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogEditor;