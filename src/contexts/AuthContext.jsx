import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase.ts';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setIsLoading(false);
    };
    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (_event === 'SIGNED_IN') {
        navigate('/admin/dashboard');
      }
      // This is the new part to handle password recovery
      if (_event === 'PASSWORD_RECOVERY') {
        navigate('/update-password');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const login = async (credentials) => {
    const { error } = await supabase.auth.signInWithPassword(credentials);
    return !error;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  // New function to update the user's password
  const updatePassword = async (newPassword) => {
    const { data, error } = await supabase.auth.updateUser({ password: newPassword });
    return { data, error };
  };

  const value = {
    isAuthenticated: !!session,
    isLoading,
    session,
    login,
    logout,
    updatePassword, // Expose the new function
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </Auth-Context.Provider>
  );
};