import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SitemapGenerator = () => {
  const location = useLocation()

  useEffect(() => {
    // This component helps with SEO by tracking route changes
    // In a real application, you might want to send this data to your analytics
    console.log('Route changed:', location.pathname)
  }, [location])

  return null
}

export default SitemapGenerator
