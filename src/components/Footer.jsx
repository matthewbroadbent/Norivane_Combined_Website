import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The strategic partner for ambitious business owners. Whether you're scaling with AI or planning your exit, we unlock hidden value and make your business unstoppable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-teal transition-colors duration-200">Home</Link></li>
              <li><Link to="/exit" className="text-gray-300 hover:text-teal transition-colors duration-200">Exit Planning</Link></li>
              <li><Link to="/ai" className="text-gray-300 hover:text-teal transition-colors duration-200">AI Solutions</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-teal transition-colors duration-200">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-teal transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-teal" />
                <span className="text-gray-300">us@norivane.co.uk</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-teal" />
                <span className="text-gray-300">+44 (0) 7356 224125</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-teal" />
                <span className="text-gray-300">Swansea, Wales, UK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Norivane. All rights reserved. | 
            <Link to="/privacy" className="text-teal hover:underline ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="text-teal hover:underline ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
