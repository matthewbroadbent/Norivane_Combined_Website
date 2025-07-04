import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const BreadcrumbNavigation = ({ breadcrumbs = [] }) => {
  return (
    <nav className="bg-gray-50 py-4 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight size={16} className="text-gray-400 mx-2" />
              )}
              {index === 0 && (
                <Home size={16} className="text-gray-400 mr-2" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-medium-grey font-medium" aria-current="page">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  to={breadcrumb.url}
                  className="text-teal hover:text-teal/80 font-medium transition-colors duration-200"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default BreadcrumbNavigation
