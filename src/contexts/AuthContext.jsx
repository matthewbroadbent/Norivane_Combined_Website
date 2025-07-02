import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check for existing session on mount
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const storedUser = localStorage.getItem('norivane_user')
        const storedToken = localStorage.getItem('norivane_token')
        
        if (storedUser && storedToken) {
          const userData = JSON.parse(storedUser)
          setUser(userData)
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error('Error checking auth status:', error)
        // Clear invalid data
        localStorage.removeItem('norivane_user')
        localStorage.removeItem('norivane_token')
      } finally {
        setLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  const login = async (email, password) => {
    try {
      setLoading(true)
      
      // Simulate API call - replace with actual authentication logic
      if (email === 'admin@norivane.com' && password === 'admin123') {
        const userData = {
          id: '1',
          email: email,
          name: 'Admin User',
          role: 'admin',
          loginTime: new Date().toISOString()
        }
        
        const token = 'mock-jwt-token-' + Date.now()
        
        // Store in localStorage
        localStorage.setItem('norivane_user', JSON.stringify(userData))
        localStorage.setItem('norivane_token', token)
        
        setUser(userData)
        setIsAuthenticated(true)
        
        return { success: true, user: userData }
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
      return { 
        success: false, 
        error: error.message || 'Login failed. Please check your credentials.' 
      }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    try {
      // Clear localStorage
      localStorage.removeItem('norivane_user')
      localStorage.removeItem('norivane_token')
      
      // Reset state
      setUser(null)
      setIsAuthenticated(false)
      
      return { success: true }
    } catch (error) {
      console.error('Logout error:', error)
      return { success: false, error: 'Logout failed' }
    }
  }

  const updateUser = (userData) => {
    try {
      const updatedUser = { ...user, ...userData }
      localStorage.setItem('norivane_user', JSON.stringify(updatedUser))
      setUser(updatedUser)
      return { success: true, user: updatedUser }
    } catch (error) {
      console.error('Update user error:', error)
      return { success: false, error: 'Failed to update user data' }
    }
  }

  const getToken = () => {
    return localStorage.getItem('norivane_token')
  }

  const isTokenValid = () => {
    const token = getToken()
    if (!token) return false
    
    try {
      // In a real app, you'd validate the JWT token here
      // For now, just check if it exists and user is authenticated
      return isAuthenticated && user !== null
    } catch (error) {
      console.error('Token validation error:', error)
      return false
    }
  }

  const refreshAuth = async () => {
    try {
      setLoading(true)
      
      // In a real app, you'd refresh the token here
      const token = getToken()
      if (!token || !isTokenValid()) {
        logout()
        return { success: false, error: 'Session expired' }
      }
      
      return { success: true }
    } catch (error) {
      console.error('Auth refresh error:', error)
      logout()
      return { success: false, error: 'Failed to refresh authentication' }
    } finally {
      setLoading(false)
    }
  }

  const value = {
    // State
    user,
    loading,
    isAuthenticated,
    
    // Methods
    login,
    logout,
    updateUser,
    getToken,
    isTokenValid,
    refreshAuth,
    
    // Computed values
    isAdmin: user?.role === 'admin',
    userName: user?.name || user?.email || 'User'
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
