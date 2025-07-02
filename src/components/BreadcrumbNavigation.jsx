import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const BreadcrumbNavigation = ({ customBreadcrumbs = null }) => {
  const location = useLocation()
  
  if (customBreadcrumbs) {
    return (
      <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link 
                to="/" 
                className="text-medium-grey hover:text-teal transition-colors duration-200 flex items-center"
                aria-label="Home"
              >
                <Home size={16} />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {customBreadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight size={16} className="text-light-grey mx-2" />
                {crumb.url ? (
                  <Link 
                    to={crumb.url} 
                    className="text-medium-grey hover:text-teal transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-dark-grey font-medium">{crumb.label}</span>
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
    <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-medium-grey hover:text-teal transition-colors duration-200 flex items-center"
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
                <ChevronRight size={16} className="text-light-grey mx-2" />
                {isLast ? (
                  <span className="text-dark-grey font-medium">{label}</span>
                ) : (
                  <Link 
                    to={routeTo} 
                    className="text-medium-grey hover:text-teal transition-colors duration-200"
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
