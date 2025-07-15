import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the base URL for your new blog CMS API
// Use an environment variable for production, with a fallback for local development
const BLOG_API_BASE_URL = import.meta.env.VITE_BLOG_API_URL || 'https://blog-norivane.vercel.app/api/blog';

const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBlogPostBySlug = async (slug) => {
    try {
      const response = await fetch(`${BLOG_API_BASE_URL}/${slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // FIX: Instead of returning the whole wrapper, return the 'post' object inside it.
      return data.post; 
    } catch (err) {
      console.error(`Failed to fetch blog post with slug ${slug}:`, err);
      return null;
    }
  };

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${BLOG_API_BASE_URL}/posts`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        setBlogPosts(data.posts || []); 
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const getPublishedPosts = () => {
    return blogPosts;
  };

  const value = {
    blogPosts,
    loading,
    error,
    getPublishedPosts,
    getBlogPostBySlug
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};