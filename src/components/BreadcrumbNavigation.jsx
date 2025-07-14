import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const BreadcrumbNavigation = ({ customBreadcrumbs = null }) => {
  const location = useLocation()
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/') return null
  
  if (customBreadcrumbs) {
    return (
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 py-4 shadow-sm sticky top-16 z-40" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li className="flex items-center">
              <Link 
                to="/" 
                className="text-medium-grey hover:text-teal transition-colors duration-200 flex items-center p-2 rounded-md hover:bg-gray-50"
                aria-label="Home"
              >
                <Home size={16} />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {customBreadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight size={14} className="text-light-grey mx-1 flex-shrink-0" />
                {crumb.url ? (
                  <Link 
                    to={crumb.url} 
                    className="text-medium-grey hover:text-teal transition-colors duration-200 px-2 py-1 rounded-md hover:bg-gray-50 whitespace-nowrap text-sm font-medium"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-dark-blue font-semibold px-2 py-1 whitespace-nowrap text-sm">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    )
  }

  // Auto-generate breadcrumbs from URL
  const pathnames = location.pathname.split('/').filter(x => x)
  
  if (pathnames.length === 0) return null

  const breadcrumbMap = {
    'ai': 'AI Solutions',
    'exit': 'Exit Planning',
    'blog': 'Blog',
    'contact': 'Contact',
    'admin': 'Admin'
  }

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 py-4 shadow-sm sticky top-16 z-40" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li className="flex items-center">
            <Link 
              to="/" 
              className="text-medium-grey hover:text-teal transition-colors duration-200 flex items-center p-2 rounded-md hover:bg-gray-50"
              aria-label="Home"
            >
              <Home size={16} />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            const label = breadcrumbMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1)

            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight size={14} className="text-light-grey mx-1 flex-shrink-0" />
                {isLast ? (
                  <span className="text-dark-blue font-semibold px-2 py-1 whitespace-nowrap text-sm">{label}</span>
                ) : (
                  <Link 
                    to={routeTo} 
                    className="text-medium-grey hover:text-teal transition-colors duration-200 px-2 py-1 rounded-md hover:bg-gray-50 whitespace-nowrap text-sm font-medium"
                  >
                    {label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

export default BreadcrumbNavigation
