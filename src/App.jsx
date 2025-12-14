import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Exit from './pages/Exit';
import AI from './pages/AI';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';
import Footer from './components/Footer';
import SitemapGenerator from './components/SitemapGenerator';

function App() {
  return (
    // Router should be the outermost component
    <Router>
      <div className="min-h-screen bg-white">
        <SitemapGenerator />
        <Routes>
          {/* Sitemap Route */}
          <Route path="/sitemap.xml" element={<Sitemap />} />

          {/* --- Public Routes --- */}
          <Route path="/*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exit" element={<Exit />} />
                <Route path="/ai" element={<AI />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
