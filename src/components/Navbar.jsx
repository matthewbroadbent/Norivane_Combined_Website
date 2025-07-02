import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Zap, TrendingUp, Phone, BookOpen } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const location = useLocation()
  const { isAuthenticated, user, logout } = useAuth()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setShowServicesDropdown(false)
  }, [location])

  const handleLogout = () => {
    logout()
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Home', path: '/', icon: null },
    { 
      name: 'Services', 
      path: null, 
      icon: ChevronDown,
      dropdown: [
        { name: 'AI Implementation', path: '/ai', icon: Zap, description: 'Transform operations with AI' },
        { name: 'Exit Planning', path: '/exit', icon: TrendingUp, description: 'Maximize business value' }
      ]
    },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'Contact', path: '/contact', icon: Phone }
  ]

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-teal to-dark-blue rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-200 ${
              isScrolled ? 'text-dark-blue' : 'text-white'
            }`}>
              Norivane
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowServicesDropdown(true)}
                    onMouseLeave={() => setShowServicesDropdown(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                        isScrolled
                          ? 'text-dark-grey hover:text-teal hover:bg-teal/5'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{link.name}</span>
                      <link.icon size={16} className={`transition-transform duration-200 ${
                        showServicesDropdown ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {showServicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="flex items-center space-x-4 px-6 py-4 hover:bg-gray-50 transition-colors duration-200 group"
                            >
                              <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center group-hover:bg-teal/20 transition-colors duration-200">
                                <item.icon size={20} className="text-teal" />
                              </div>
                              <div>
                                <div className="font-semibold text-dark-blue group-hover:text-teal transition-colors duration-200">
                                  {item.name}
                                </div>
                                <div className="text-sm text-medium-grey">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActivePath(link.path)
                        ? isScrolled
                          ? 'text-teal bg-teal/10'
                          : 'text-teal bg-white/20'
                        : isScrolled
                          ? 'text-dark-grey hover:text-teal hover:bg-teal/5'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.icon && <link.icon size={16} />}
                    <span>{link.name}</span>
                  </Link>
                )}
              </div>
            ))}

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/admin/dashboard"
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isScrolled
                      ? 'text-dark-blue hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isScrolled
                      ? 'text-medium-grey hover:text-dark-blue hover:bg-gray-100'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/admin/login"
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  isScrolled
                    ? 'bg-teal text-white hover:bg-teal/90'
                    : 'bg-white text-dark-blue hover:bg-white/90'
                } shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                Admin Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? 'text-dark-blue hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <div className="text-lg font-semibold text-dark-blue mb-3">
                        {link.name}
                      </div>
                      <div className="space-y-2 ml-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center space-x-3 py-3 text-medium-grey hover:text-teal transition-colors duration-200"
                          >
                            <item.icon size={20} className="text-teal" />
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-light-grey">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center space-x-3 py-3 text-lg font-medium transition-colors duration-200 ${
                        isActivePath(link.path)
                          ? 'text-teal'
                          : 'text-dark-grey hover:text-teal'
                      }`}
                    >
                      {link.icon && <link.icon size={20} />}
                      <span>{link.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <Link
                      to="/admin/dashboard"
                      className="block py-3 text-lg font-medium text-dark-blue hover:text-teal transition-colors duration-200"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block py-3 text-lg font-medium text-medium-grey hover:text-dark-blue transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/admin/login"
                    className="block w-full text-center bg-teal text-white py-3 rounded-lg font-semibold hover:bg-teal/90 transition-colors duration-200"
                  >
                    Admin Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
