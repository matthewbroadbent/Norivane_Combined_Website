import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Provides the shared layout (navigation + footer) for public facing routes.
 */
function MainLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <a
        href="#main-content"
        className="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-full transform rounded-b-lg bg-dark-blue px-4 py-2 text-sm font-semibold text-white transition-all focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
