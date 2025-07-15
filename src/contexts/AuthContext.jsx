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
    // Check for an existing session when the app loads
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setIsLoading(false);
    };
    getSession();

    // Listen for authentication state changes (SIGNED_IN, SIGNED_OUT)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (_event === 'SIGNED_IN') {
        // After any sign-in event (login form, invite link), redirect to dashboard
        navigate('/admin/dashboard');
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const login = async (credentials) => {
    try {
      const { error } = await supabase.auth.signInWithPassword(credentials);
      if (error) {
        console.error('Login failed:', error);
        return false;
      }
      return true;
    } catch (error) {
      console.error('Login request failed:', error);
      return false;
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate('/'); // Redirect to homepage on logout
  };

  // Note: We use !!session to convert the session object (or null) to a boolean
  const value = {
    isAuthenticated: !!session, 
    isLoading,
    session,
    login,
    logout,
  };

  // We don't render anything until the initial session check is complete
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};