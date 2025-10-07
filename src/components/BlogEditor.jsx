import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Image as ImageIcon, Loader2, Save, Upload, X } from 'lucide-react';
import { useBlog } from '../contexts/BlogContext';
import { renderMarkdown, estimateReadTime } from '../utils/markdown';
import { slugify } from '../utils/slugify';

const CATEGORIES = ['Exit Planning', 'AI Solutions', 'Business Growth', 'Thought Leadership'];

const BlogEditor = ({ post = null, onClose, onSave }) => {
  const { createPost, updatePost, uploadImage, loadAdminPosts } = useBlog();
  const [formState, setFormState] = useState(() => ({
    title: post?.title || '',
    slug: post?.slug || '',
    category: post?.category || '',
    tagsInput: Array.isArray(post?.tags) ? post.tags.join(', ') : post?.tags || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    status: post?.status || 'draft',
    featured: Boolean(post?.featured),
    featured_image: post?.featured_image || '',
    featured_image_alt: post?.featured_image_alt || '',
    author: post?.author || 'Norivane Team',
    read_time: post?.read_time || '',
    meta_title: post?.meta_title || '',
    meta_description: post?.meta_description || '',
    published_at: post?.published_at || null
  }));
  const [slugEditedManually, setSlugEditedManually] = useState(Boolean(post?.slug));
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isUploadingFeatured, setIsUploadingFeatured] = useState(false);
  const [isUploadingInline, setIsUploadingInline] = useState(false);
  const inlineImageInputRef = useRef(null);
  const featuredImageInputRef = useRef(null);

  useEffect(() => {
    setFormState({
      title: post?.title || '',
      slug: post?.slug || '',
      category: post?.category || '',
      tagsInput: Array.isArray(post?.tags) ? post.tags.join(', ') : post?.tags || '',
      excerpt: post?.excerpt || '',
      content: post?.content || '',
      status: post?.status || 'draft',
      featured: Boolean(post?.featured),
      featured_image: post?.featured_image || '',
      featured_image_alt: post?.featured_image_alt || '',
      author: post?.author || 'Norivane Team',
      read_time: post?.read_time || '',
      meta_title: post?.meta_title || '',
      meta_description: post?.meta_description || '',
      published_at: post?.published_at || null
    });
    setSlugEditedManually(Boolean(post?.slug));
    setSuccessMessage('');
    setError('');
  }, [post]);

  const computedReadTime = useMemo(() => estimateReadTime(formState.content || ''), [formState.content]);
  const previewHtml = useMemo(() => renderMarkdown(formState.content || ''), [formState.content]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setFormState((prev) => ({
      ...prev,
      title: value,
      slug: slugEditedManually ? prev.slug : slugify(value)
    }));
  };

  const handleSlugChange = (event) => {
    const { value } = event.target;
    setSlugEditedManually(true);
    setFormState((prev) => ({ ...prev, slug: slugify(value) }));
  };

  const handleToggleFeatured = () => {
    setFormState((prev) => ({ ...prev, featured: !prev.featured }));
  };

  const handleStatusChange = (event) => {
    setFormState((prev) => ({
      ...prev,
      status: event.target.value,
      published_at: event.target.value === 'published' ? prev.published_at || new Date().toISOString() : null
    }));
  };

  const uploadFeaturedImage = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setIsUploadingFeatured(true);
    setError('');

    try {
      const publicUrl = await uploadImage(file);
      setFormState((prev) => ({ ...prev, featured_image: publicUrl }));
      setSuccessMessage('Featured image uploaded successfully.');
    } catch (err) {
      setError(err.message || 'Unable to upload the featured image.');
    } finally {
      setIsUploadingFeatured(false);
      if (featuredImageInputRef.current) {
        featuredImageInputRef.current.value = '';
      }
    }
  };

  const uploadInlineImage = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setIsUploadingInline(true);
    setError('');

    try {
      const publicUrl = await uploadImage(file);
      const altText = slugify(file.name.replace(/\.[^/.]+$/, '')) || 'blog-image';
      setFormState((prev) => ({
        ...prev,
        content: `${prev.content}\n\n![${altText}](${publicUrl})\n`
      }));
      setSuccessMessage('Image uploaded and added to the article.');
    } catch (err) {
      setError(err.message || 'Unable to upload the image.');
    } finally {
      setIsUploadingInline(false);
      if (inlineImageInputRef.current) {
        inlineImageInputRef.current.value = '';
      }
    }
  };

  const handleSubmit = async (statusOverride) => {
    setIsSaving(true);
    setError('');
    setSuccessMessage('');

    try {
      const payload = {
        ...formState,
        status: statusOverride,
        tags: formState.tagsInput,
        read_time: formState.read_time || computedReadTime
      };

      let savedPost;

      if (post?.id) {
        savedPost = await updatePost(post.id, payload);
      } else {
        savedPost = await createPost(payload);
      }

      await loadAdminPosts();

      setFormState((prev) => ({
        ...prev,
        ...savedPost,
        tagsInput: Array.isArray(savedPost.tags) ? savedPost.tags.join(', ') : ''
      }));
      setSuccessMessage(statusOverride === 'published' ? 'Post published successfully.' : 'Draft saved successfully.');

      if (onSave) {
        onSave(savedPost);
      }
    } catch (err) {
      setError(err.message || 'Unable to save the blog post.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-blue via-white to-light-teal p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-10"
        >
          <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark-blue">
                {post ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h1>
              <p className="text-medium-grey mt-2 max-w-2xl">
                Craft rich, media-ready articles for the Norivane blog. Upload images, use markdown, and control SEO metadata in one place.
              </p>
            </div>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-gray-200 p-3 text-medium-grey hover:text-dark-blue hover:border-dark-blue transition-colors"
                aria-label="Close editor"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {(error || successMessage) && (
            <div className="space-y-3 mb-6">
              {error && (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                  <AlertCircle className="mt-0.5" size={20} />
                  <p className="text-sm md:text-base">{error}</p>
                </div>
              )}
              {successMessage && (
                <div className="rounded-xl border border-teal/30 bg-teal/10 p-4 text-teal">
                  <p className="text-sm md:text-base font-medium">{successMessage}</p>
                </div>
              )}
            </div>
          )}

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
            <form className="space-y-8">
              <section className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark-blue">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formState.title}
                      onChange={handleTitleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70"
                      placeholder="Enter your blog post title"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark-blue">Slug</label>
                    <input
                      type="text"
                      name="slug"
                      value={formState.slug}
                      onChange={handleSlugChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70 text-sm"
                      placeholder="auto-generated-from-title"
                    />
                    <p className="text-xs text-medium-grey">Used for the URL. Only lowercase letters, numbers, and hyphens are kept.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark-blue">Category</label>
                    <select
                      name="category"
                      value={formState.category}
                      onChange={handleFieldChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70"
                    >
                      <option value="">Select a category</option>
                      {CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark-blue">Tags</label>
                    <input
                      type="text"
                      name="tagsInput"
                      value={formState.tagsInput}
                      onChange={handleFieldChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70"
                      placeholder="ai, transformation, innovation"
                    />
                    <p className="text-xs text-medium-grey">Separate tags with commas to help organise related posts.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark-blue">Author</label>
                    <input
                      type="text"
                      name="author"
                      value={formState.author}
                      onChange={handleFieldChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70"
                      placeholder="Norivane Team"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark-blue">Estimated read time</label>
                    <input
                      type="text"
                      name="read_time"
                      value={formState.read_time || computedReadTime}
                      onChange={handleFieldChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70"
                    />
                    <p className="text-xs text-medium-grey">Automatically calculated from content but you can override it.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark-blue">Publish status</label>
                    <select
                      name="status"
                      value={formState.status}
                      onChange={handleStatusChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                    <p className="text-xs text-medium-grey">Draft posts remain private until you publish them.</p>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark-blue">Featured post</label>
                    <button
                      type="button"
                      onClick={handleToggleFeatured}
                      className={`w-full rounded-xl border px-4 py-3 text-sm font-medium transition ${
                        formState.featured ? 'border-teal bg-teal/10 text-teal' : 'border-gray-200 text-medium-grey hover:border-dark-blue'
                      }`}
                    >
                      {formState.featured ? 'Featured on the blog landing page' : 'Mark as featured'}
                    </button>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-dark-blue">Featured image</label>
                  {formState.featured_image && (
                    <div className="relative overflow-hidden rounded-2xl border border-gray-200">
                      <img
                        src={formState.featured_image}
                        alt={formState.featured_image_alt || formState.title || 'Featured image'}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="text"
                      name="featured_image"
                      value={formState.featured_image}
                      onChange={handleFieldChange}
                      className="flex-1 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70"
                      placeholder="https://..."
                    />
                    <label className="inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 px-4 py-3 text-sm font-medium text-dark-blue hover:border-teal hover:text-teal transition-colors cursor-pointer">
                      <Upload size={18} />
                      Upload
                      <input
                        ref={featuredImageInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={uploadFeaturedImage}
                      />
                    </label>
                  </div>
                  {isUploadingFeatured && (
                    <p className="flex items-center gap-2 text-sm text-medium-grey"><Loader2 className="animate-spin" size={16} /> Uploading image...</p>
                  )}
                  <input
                    type="text"
                    name="featured_image_alt"
                    value={formState.featured_image_alt}
                    onChange={handleFieldChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70"
                    placeholder="Describe the featured image for accessibility"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-dark-blue">Excerpt</label>
                  <textarea
                    name="excerpt"
                    value={formState.excerpt}
                    onChange={handleFieldChange}
                    rows={3}
                    maxLength={220}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70"
                    placeholder="Summarise the article in 2-3 sentences"
                  />
                  <p className="text-xs text-medium-grey text-right">{(formState.excerpt || '').length}/220 characters</p>
                </div>
              </section>

              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-semibold text-dark-blue">Article content</label>
                  <div className="flex items-center gap-3 text-xs text-medium-grey">
                    <button
                      type="button"
                      onClick={() => inlineImageInputRef.current?.click()}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-medium-grey hover:border-teal hover:text-teal transition"
                    >
                      <ImageIcon size={14} />
                      Add image
                    </button>
                    <input
                      ref={inlineImageInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={uploadInlineImage}
                    />
                    {isUploadingInline && <Loader2 className="animate-spin text-teal" size={16} />}
                  </div>
                </div>
                <textarea
                  name="content"
                  value={formState.content}
                  onChange={handleFieldChange}
                  rows={18}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-4 font-mono text-sm leading-6 focus:outline-none focus:ring-2 focus:ring-teal/70"
                  placeholder="Use markdown to format your content. Headings (#), bold (**text**), italics (*text*), lists (- item), quotes (> text), code (`code`)."
                />
                <p className="text-xs text-medium-grey">Supports markdown including headings, lists, code blocks, links, and embedded images.</p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold text-dark-blue">SEO metadata</h2>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-dark-blue">Meta title</label>
                  <input
                    type="text"
                    name="meta_title"
                    value={formState.meta_title}
                    onChange={handleFieldChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70"
                    placeholder="Title shown in search results"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-dark-blue">Meta description</label>
                  <textarea
                    name="meta_description"
                    value={formState.meta_description}
                    onChange={handleFieldChange}
                    rows={3}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/70"
                    placeholder="A concise summary for search engines"
                  />
                </div>
              </section>

              <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
                <button
                  type="button"
                  onClick={() => handleSubmit('draft')}
                  disabled={isSaving}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-semibold text-dark-blue hover:bg-gray-50 transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                  Save draft
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmit('published')}
                  disabled={isSaving}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal to-dark-blue px-6 py-3 font-semibold text-white shadow-lg transition hover:from-teal/90 hover:to-dark-blue/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                  {formState.status === 'published' ? 'Update publication' : 'Publish post'}
                </button>
              </div>
            </form>

            <aside className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-dark-blue">Live preview</h2>
                <span className="text-xs font-medium uppercase tracking-widest text-medium-grey">Reader view</span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-teal">{formState.category || 'Category'}</span>
                    <h3 className="text-2xl font-bold text-dark-blue">{formState.title || 'Post title will appear here'}</h3>
                    <p className="text-sm text-medium-grey">{formState.excerpt || 'Use the excerpt to entice readers with a quick summary of the article.'}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-medium-grey">
                      <span>{formState.author || 'Norivane Team'}</span>
                      <span>•</span>
                      <span>{formState.status === 'published' ? 'Published' : 'Draft'} {formState.status === 'published' && formState.published_at ? `· ${new Date(formState.published_at).toLocaleDateString()}` : ''}</span>
                      <span>•</span>
                      <span>{formState.read_time || computedReadTime}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-inner">
                  {formState.featured_image && (
                    <img
                      src={formState.featured_image}
                      alt={formState.featured_image_alt || formState.title || 'Preview image'}
                      className="mb-6 h-48 w-full rounded-2xl object-cover"
                    />
                  )}
                  <article
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: previewHtml || '<p class="text-medium-grey">Start writing to see a formatted preview of your article.</p>'
                    }}
                  />
                </div>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogEditor;
