import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BlogProvider } from './contexts/BlogContext';
import MainLayout from './components/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import SitemapGenerator from './components/SitemapGenerator';
import PageLoader from './components/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const Exit = lazy(() => import('./pages/Exit'));
const AI = lazy(() => import('./pages/AI'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const AuthCallback = lazy(() => import('./pages/AuthCallback'));
const UpdatePassword = lazy(() => import('./pages/UpdatePassword'));

const PUBLIC_ROUTES = Object.freeze([
  { key: 'home', index: true, Component: Home },
  { key: 'exit', path: 'exit', Component: Exit },
  { key: 'ai', path: 'ai', Component: AI },
  { key: 'blog', path: 'blog', Component: Blog },
  { key: 'blog-post', path: 'blog/:slug', Component: BlogPost },
  { key: 'contact', path: 'contact', Component: Contact },
  { key: 'update-password', path: 'update-password', Component: UpdatePassword },
  { key: 'auth-callback', path: 'auth/callback', Component: AuthCallback },
  { key: 'admin-login', path: 'admin/login', Component: AdminLogin }
]);

const renderLazy = (Component, fallbackProps) => (
  <Suspense fallback={<PageLoader {...fallbackProps} />}>
    <Component />
  </Suspense>
);

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
              <Route path="/sitemap.xml" element={renderLazy(Sitemap, { fullscreen: true })} />

              {/* --- Admin & Auth Routes --- */}
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    {renderLazy(AdminDashboard, { fullscreen: true })}
                  </ProtectedRoute>
                }
              />

              {/* --- Public Routes --- */}
              <Route path="/" element={<MainLayout />}>
                {PUBLIC_ROUTES.map(({ key, index, path, Component }) => (
                  <Route
                    key={key}
                    {...(index ? { index: true } : { path })}
                    element={renderLazy(Component)}
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
