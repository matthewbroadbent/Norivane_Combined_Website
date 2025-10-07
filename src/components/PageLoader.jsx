import React from 'react';

function PageLoader({ fullscreen = false, className = '' }) {
  const sizingClasses = fullscreen ? 'min-h-screen bg-white' : 'min-h-[50vh]';

  return (
    <div
      className={`flex items-center justify-center ${sizingClasses} ${className}`.trim()}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading content</span>
      <div
        className="ml-0 h-12 w-12 animate-spin rounded-full border-4 border-teal border-t-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

export default PageLoader;
