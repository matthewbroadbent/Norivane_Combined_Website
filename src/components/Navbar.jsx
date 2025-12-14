import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  const navItems = [
    { name: 'AI Solutions', path: '/ai' },
    { name: 'Exit Planning', path: '/exit' },
    { name: 'Free Assessment', path: '/assessment' }, // [NEW]
    { name: 'Contact', path: '/contact' }
  ]

  const isHomePage = location.pathname === '/'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage
      ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <Logo
              currentPath={location.pathname}
              variant={isScrolled || !isHomePage ? 'default' : 'white'}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isScrolled || !isHomePage
                      ? 'text-dark-blue hover:text-teal hover:bg-gray-50'
                      : 'text-white hover:text-teal hover:bg-white/10'
                      }`}>
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                            >
                              <div className="font-medium text-dark-blue group-hover:text-teal">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-medium-grey">
                                {dropdownItem.description}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                      ? (isScrolled || !isHomePage ? 'text-teal bg-teal/10' : 'text-teal bg-white/20')
                      : (isScrolled || !isHomePage
                        ? 'text-dark-blue hover:text-teal hover:bg-gray-50'
                        : 'text-white hover:text-teal hover:bg-white/10')
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${isScrolled || !isHomePage
                ? 'bg-teal text-white hover:bg-teal/90 hover:shadow-lg'
                : 'bg-white text-dark-blue hover:bg-gray-100 hover:shadow-lg'
                }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-200 ${isScrolled || !isHomePage
              ? 'text-dark-blue hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
              }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-dark-blue hover:text-teal hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 space-y-1"
                            >
                              {item.dropdownItems.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.path}
                                  className="block px-3 py-2 rounded-md text-sm text-medium-grey hover:text-teal hover:bg-gray-50 transition-colors duration-200"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === item.path
                          ? 'text-teal bg-teal/10'
                          : 'text-dark-blue hover:text-teal hover:bg-gray-50'
                          }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="block w-full text-center px-3 py-2 mt-4 bg-teal text-white rounded-full font-semibold hover:bg-teal/90 transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
