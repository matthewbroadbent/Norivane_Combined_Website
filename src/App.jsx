import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Exit from './pages/Exit';
import AI from './pages/AI';
import Assessment from './pages/Assessment';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';
import SitemapGenerator from './components/SitemapGenerator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <SitemapGenerator />
        <Routes>
          {/* Sitemap Route */}
          <Route path="/sitemap.xml" element={<Sitemap />} />

          {/* Main Layout Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/exit" element={<Exit />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
