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
  const [loading, setLoading] = useState(true); // New state for loading status
  const [error, setError] = useState(null);     // New state for error messages

  const getBlogPostBySlug = async (slug) => {
    try {
      const response = await fetch(`${BLOG_API_BASE_URL}/${slug}`); // Notice no '/posts' here!
      if (!response.ok) {
        if (response.status === 404) {
          return null; // Post not found
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data; // This should be the single post object
    } catch (err) {
      console.error(`Failed to fetch blog post with slug ${slug}:`, err);
      return null; // Return null on error
    }
  };

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true); // Start loading
        setError(null);   // Clear any previous errors

        // Construct the full URL for fetching all posts
        const response = await fetch(`${BLOG_API_BASE_URL}/posts`);
        
        if (!response.ok) {
          // If the HTTP response status is not 2xx
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Assuming your API returns data in the format { posts: [...] }
        // Adjust 'data.posts' if your API returns the array directly
        setBlogPosts(data.posts || []); 
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
        setError("Failed to load blog posts. Please try again later."); // Set an error message
        setBlogPosts([]); // Clear posts on error
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchBlogPosts();
  }, []); // Empty dependency array means this runs once on mount

  // This function now just returns the posts fetched from the API
  const getPublishedPosts = () => {
    // We assume the API only returns published posts, or handles filtering on the backend
    return blogPosts;
  };

  // The value provided by the context now includes loading and error states
  const value = {
    blogPosts, // This now holds the fetched posts
    loading,   // Let components know if data is still loading
    error,     // Let components know if there was an error
    getPublishedPosts, // Still available, but now returns fetched data
    getBlogPostBySlug // <-- This now has a comma before it!
    // Removed addPost, updatePost, deletePost, savePosts as these will be handled by your CMS API
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};