import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className={`${isScrolled ? 'text-dark-blue' : 'text-white'}`} style={{ fontWeight: 600 }}>nor</span>
              <span className={`${isScrolled ? 'text-teal' : 'text-teal'}`} style={{ fontStyle: 'italic', fontWeight: 400 }}>i</span>
              <span className={`${isScrolled ? 'text-dark-blue' : 'text-white'}`} style={{ fontWeight: 600 }}>vane</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? (isScrolled ? 'text-teal' : 'text-teal') 
                  : (isScrolled ? 'text-dark-blue hover:text-teal' : 'text-white hover:text-teal')
              }`}
            >
              Home
            </Link>
            <Link 
              to="/ai" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/ai') 
                  ? (isScrolled ? 'text-teal' : 'text-teal') 
                  : (isScrolled ? 'text-dark-blue hover:text-teal' : 'text-white hover:text-teal')
              }`}
            >
              AI Implementation
            </Link>
            <Link 
              to="/exit-planning" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/exit-planning') 
                  ? (isScrolled ? 'text-teal' : 'text-teal') 
                  : (isScrolled ? 'text-dark-blue hover:text-teal' : 'text-white hover:text-teal')
              }`}
            >
              Exit Planning
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? (isScrolled ? 'text-teal' : 'text-teal') 
                  : (isScrolled ? 'text-dark-blue hover:text-teal' : 'text-white hover:text-teal')
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-dark-blue' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive('/') ? 'text-teal bg-gray-50' : 'text-dark-blue hover:text-teal hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/ai" 
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive('/ai') ? 'text-teal bg-gray-50' : 'text-dark-blue hover:text-teal hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                AI Implementation
              </Link>
              <Link 
                to="/exit-planning" 
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive('/exit-planning') ? 'text-teal bg-gray-50' : 'text-dark-blue hover:text-teal hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Exit Planning
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive('/about') ? 'text-teal bg-gray-50' : 'text-dark-blue hover:text-teal hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
