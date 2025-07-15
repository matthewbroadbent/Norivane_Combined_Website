import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user's auth token exists in local storage
    const token = localStorage.getItem('supabase_token');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // This is the API call to your backend
      const response = await fetch('https://blog-norivane.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the actual token from Supabase for security
        localStorage.setItem('supabase_token', data.session.access_token);
        setIsAuthenticated(true);
        return true; // Indicate success
      } else {
        // Login failed on the server
        return false; // Indicate failure
      }
    } catch (error) {
      console.error('Login request failed:', error);
      return false; // Indicate failure
    }
  };

  const logout = () => {
    // Remove the specific token on logout
    localStorage.removeItem('supabase_token');
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};