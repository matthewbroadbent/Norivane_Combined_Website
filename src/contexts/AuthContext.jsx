import React, { createContext, useContext, useState } from 'react'

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
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (credentials) => {
    // Demo login - in production, this would validate against a real backend
    if (credentials.email === 'admin@norivane.com' && credentials.password === 'admin123') {
      const userData = {
        id: 1,
        email: 'admin@norivane.com',
        name: 'Admin User',
        role: 'admin'
      }
      setUser(userData)
      setIsAuthenticated(true)
      localStorage.setItem('auth_token', 'demo_token')
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('auth_token')
  }

  // Check for existing session on mount
  React.useEffect(() => {
    const token = localStorage.getItem('auth_token')
    if (token === 'demo_token') {
      setUser({
        id: 1,
        email: 'admin@norivane.com',
        name: 'Admin User',
        role: 'admin'
      })
      setIsAuthenticated(true)
    }
  }, [])

  const value = {
    user,
    isAuthenticated,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
