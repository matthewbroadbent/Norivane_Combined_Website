import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BlogProvider } from './contexts/BlogContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Exit from './pages/Exit';
import AI from './pages/AI';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Sitemap from './pages/Sitemap';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import SitemapGenerator from './components/SitemapGenerator';
import AuthCallback from './pages/AuthCallback';

function App() {
  return (
    // Router should be the outermost component
    <Router>
      <AuthProvider>
        <BlogProvider>
          <div className="min-h-screen bg-white">
            <SitemapGenerator />
            <Routes>
              {/* Sitemap Route */}
              <Route path="/sitemap.xml" element={<Sitemap />} />
              
              {/* --- Admin & Auth Routes --- */}
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route 
                path="/admin/dashboard" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              
              {/* --- Public Routes --- */}
              <Route path="/*" element={
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exit" element={<Exit />} />
                    <Route path="/ai" element={<AI />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                  <Footer />
                </>
              } />
            </Routes>
          </div>
        </BlogProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;