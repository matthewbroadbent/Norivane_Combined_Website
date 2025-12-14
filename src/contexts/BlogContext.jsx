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
      const response = await fetch(`${BLOG_API_BASE_URL}/posts/${slug}`); // Added /posts/ to the URL
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // FIX: Instead of returning the whole wrapper, return the 'post' object inside it.
      // Confirm the structure the backend sends for a single post.
      // If it's `{"post": {...}}`, then `data.post` is correct.
      // If it's `{...}` directly, then just `data` is correct.
      // Based on your `/api/blog/posts` response, it's likely just `data`.
      return data; // Assuming single post endpoint returns the post object directly
    } catch (err) {
      console.error(`Failed to fetch blog post with slug ${slug}:`, err);
      return null;
    }
  };

  const [blogConfig, setBlogConfig] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/js/content.json');
        if (response.ok) {
          const config = await response.json();
          setBlogConfig(config);
        }
      } catch (err) {
        console.error("Failed to load site config:", err);
      }
    };
    fetchConfig();
  }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Only fetch posts if blog is NOT explicitly disabled
        // (Optional optimization: if we have config ready and it says disabled, we could skip.
        // But to keep it simple and ensure we have data if it gets enabled logically client-side, 
        // we can still fetch or check config inside if desired. 
        // For now, let's just leave the fetch as is, but maybe use the config downstream.)

        const response = await fetch(`${BLOG_API_BASE_URL}/posts`); // Make sure this is the correct endpoint for ALL posts

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // --- THE FIX IS HERE ---
        // Your API returns the array directly, not inside a 'posts' property.
        setBlogPosts(data); // Changed from data.posts || [] to data
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

  // getPublishedPosts is now redundant as blogPosts already holds all posts.
  // You can filter blogPosts directly in AdminDashboard if needed,
  // or keep this if you want a dedicated function for published ones.
  const getPublishedPosts = () => {
    // If you always want to return only published posts from this function:
    // return blogPosts.filter(post => post.published);
    // Otherwise, if you want all posts (as it was before):
    return blogPosts;
  };

  const value = {
    blogPosts,
    loading,
    error,
    getPublishedPosts, // Note: This now returns all posts from `blogPosts` state.
    getBlogPostBySlug,
    blogConfig
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};
