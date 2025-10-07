import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase.ts';
import { slugify } from '../utils/slugify';
import { estimateReadTime } from '../utils/markdown';

const STORAGE_BUCKET = import.meta.env.VITE_SUPABASE_STORAGE_BUCKET || 'blog-media';

const BlogContext = createContext();

const POST_FIELDS =
  'id, title, slug, excerpt, content, category, tags, featured, featured_image, featured_image_alt, author, read_time, status, published_at, created_at, updated_at, meta_title, meta_description';

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [adminPosts, setAdminPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPublishedPosts = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error: supabaseError } = await supabase
        .from('posts')
        .select(POST_FIELDS)
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw supabaseError;
      }

      setBlogPosts(data || []);
      setError(null);
    } catch (err) {
      console.error('Failed to load published blog posts:', err);
      setBlogPosts([]);
      setError('Failed to load blog posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPublishedPosts();
  }, [fetchPublishedPosts]);

  const loadAdminPosts = useCallback(async () => {
    try {
      setAdminLoading(true);
      const { data, error: supabaseError } = await supabase
        .from('posts')
        .select(POST_FIELDS)
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw supabaseError;
      }

      setAdminPosts(data || []);
      return data || [];
    } catch (err) {
      console.error('Failed to load posts for admin:', err);
      throw err;
    } finally {
      setAdminLoading(false);
    }
  }, []);

  const normaliseTags = (tags) => {
    if (Array.isArray(tags)) {
      return tags.map((tag) => tag.trim()).filter(Boolean);
    }

    if (typeof tags === 'string') {
      return tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);
    }

    return [];
  };

  const normalisePostPayload = useCallback(
    (post, { preservePublishedAt = false } = {}) => {
      const content = post.content || '';
      const status = post.status || 'draft';
      const incomingPublishedAt = post.published_at || null;
      const published_at =
        status === 'published'
          ? preservePublishedAt && incomingPublishedAt
            ? incomingPublishedAt
            : new Date().toISOString()
          : null;

      const excerptSource = post.excerpt && post.excerpt.trim().length > 0 ? post.excerpt.trim() : content.replace(/\s+/g, ' ').trim();
      const truncatedExcerpt = excerptSource.length > 220 ? `${excerptSource.slice(0, 217).trim()}...` : excerptSource;

      let slugValue = slugify(post.slug || post.title || '');
      if (!slugValue) {
        slugValue = `post-${Date.now()}`;
      }

      return {
        title: post.title?.trim() || 'Untitled Post',
        slug: slugValue,
        excerpt: truncatedExcerpt,
        content,
        category: post.category || null,
        tags: normaliseTags(post.tags),
        featured: Boolean(post.featured),
        featured_image: post.featured_image || null,
        featured_image_alt: post.featured_image_alt || null,
        author: post.author?.trim() || 'Norivane Team',
        read_time: post.read_time || estimateReadTime(content),
        status,
        published_at,
        meta_title: post.meta_title?.trim() || null,
        meta_description: post.meta_description?.trim() || null
      };
    },
    []
  );

  const createPost = useCallback(
    async (post) => {
      try {
        const payload = normalisePostPayload(post, { preservePublishedAt: false });
        const { data, error: supabaseError } = await supabase
          .from('posts')
          .insert(payload)
          .select(POST_FIELDS)
          .single();

        if (supabaseError) {
          throw supabaseError;
        }

        setAdminPosts((prev) => [data, ...prev]);

        if (data.status === 'published') {
          await fetchPublishedPosts();
        }

        return data;
      } catch (err) {
        console.error('Failed to create blog post:', err);
        throw err;
      }
    },
    [fetchPublishedPosts, normalisePostPayload]
  );

  const updatePost = useCallback(
    async (id, post) => {
      try {
        const payload = normalisePostPayload(post, { preservePublishedAt: true });
        const { data, error: supabaseError } = await supabase
          .from('posts')
          .update(payload)
          .eq('id', id)
          .select(POST_FIELDS)
          .single();

        if (supabaseError) {
          throw supabaseError;
        }

        setAdminPosts((prev) => prev.map((existing) => (existing.id === id ? data : existing)));

        if (data.status === 'published') {
          await fetchPublishedPosts();
        } else {
          setBlogPosts((prev) => prev.filter((existing) => existing.id !== id));
        }

        return data;
      } catch (err) {
        console.error(`Failed to update blog post ${id}:`, err);
        throw err;
      }
    },
    [fetchPublishedPosts, normalisePostPayload]
  );

  const deletePost = useCallback(
    async (id) => {
      try {
        const { error: supabaseError } = await supabase.from('posts').delete().eq('id', id);
        if (supabaseError) {
          throw supabaseError;
        }

        setAdminPosts((prev) => prev.filter((post) => post.id !== id));
        setBlogPosts((prev) => prev.filter((post) => post.id !== id));
      } catch (err) {
        console.error(`Failed to delete blog post ${id}:`, err);
        throw err;
      }
    },
    []
  );

  const getPublishedPosts = useCallback(() => blogPosts, [blogPosts]);

  const getBlogPostBySlug = useCallback(
    async (slug) => {
      const normalisedSlug = slug?.toString().toLowerCase();

      if (!normalisedSlug) {
        return null;
      }

      const cached = [...adminPosts, ...blogPosts].find((post) => post.slug === normalisedSlug);
      if (cached) {
        return cached;
      }

      const { data, error: supabaseError } = await supabase
        .from('posts')
        .select(POST_FIELDS)
        .eq('slug', normalisedSlug)
        .maybeSingle();

      if (supabaseError) {
        console.error(`Failed to fetch blog post with slug ${slug}:`, supabaseError);
        return null;
      }

      return data || null;
    },
    [adminPosts, blogPosts]
  );

  const uploadImage = useCallback(async (file) => {
    if (!file) {
      throw new Error('No file provided');
    }

    const extension = file.name?.split('.').pop() || 'jpg';
    const baseName = slugify(file.name?.replace(`.${extension}`, '') || 'blog-image');
    const uniqueSuffix = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const filePath = `${uniqueSuffix}-${baseName}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type || undefined
      });

    if (uploadError) {
      console.error('Failed to upload image:', uploadError);
      throw uploadError;
    }

    const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(filePath);
    return data?.publicUrl || null;
  }, []);

  const value = {
    blogPosts,
    adminPosts,
    loading,
    adminLoading,
    error,
    fetchPublishedPosts,
    loadAdminPosts,
    getPublishedPosts,
    getBlogPostBySlug,
    createPost,
    updatePost,
    deletePost,
    uploadImage
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
