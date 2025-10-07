import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BlogProvider } from './contexts/BlogContext';
import MainLayout from './components/MainLayout';
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
import SitemapGenerator from './components/SitemapGenerator';
import AuthCallback from './pages/AuthCallback';
import UpdatePassword from './pages/UpdatePassword';

const PUBLIC_ROUTES = [
  { key: 'home', index: true, Component: Home },
  { key: 'exit', path: 'exit', Component: Exit },
  { key: 'ai', path: 'ai', Component: AI },
  { key: 'blog', path: 'blog', Component: Blog },
  { key: 'blog-post', path: 'blog/:slug', Component: BlogPost },
  { key: 'contact', path: 'contact', Component: Contact },
  { key: 'update-password', path: 'update-password', Component: UpdatePassword },
  { key: 'auth-callback', path: 'auth/callback', Component: AuthCallback },
  { key: 'admin-login', path: 'admin/login', Component: AdminLogin }
];

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
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* --- Public Routes --- */}
              <Route path="/" element={<MainLayout />}>
                {PUBLIC_ROUTES.map(({ key, index, path, Component }) => (
                  <Route
                    key={key}
                    {...(index ? { index: true } : { path })}
                    element={<Component />}
                  />
                ))}
              </Route>
            </Routes>
          </div>
        </BlogProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
