import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase.ts';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      // This event fires once the user is signed in after clicking the link
      if (event === 'SIGNED_IN') {
        // If the user needs to set a password (e.g., after an invite)
        if (session.user.user_metadata?.is_new_user) {
            // You could redirect to a specific /set-password page
            // For now, we'll just go to the dashboard
            navigate('/admin/dashboard');
        } else {
            // For regular logins or password resets
            navigate('/admin/dashboard');
        }
      }
    });

    // Cleanup subscription on component unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Please wait...</h1>
        <p className="text-gray-600 mt-2">Finalizing your authentication.</p>
      </div>
    </div>
  );
};

export default AuthCallback;