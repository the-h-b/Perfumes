import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Pages
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  
  // Check if user is authenticated
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setIsAuthenticated(true)
      const userData = JSON.parse(user)
      setIsAdmin(userData.email === 'admin@theblemdco.com')
    }
  }, [])

  // Authentication handler
  const handleLogin = (email: string, password: string) => {
    if (
      (email === 'user@theblendco.com' && password === 'user123') || 
      (email === 'admin@theblemdco.com' && password === 'admin123')
    ) {
      const userData = { email }
      localStorage.setItem('user', JSON.stringify(userData))
      setIsAuthenticated(true)
      setIsAdmin(email === 'admin@theblemdco.com')
      return true
    }
    return false
  }

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('user')
    setIsAuthenticated(false)
    setIsAdmin(false)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
              <Navigate to={isAdmin ? "/admin" : "/dashboard"} /> : 
              <LoginPage onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? 
              <UserDashboard onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
        <Route 
          path="/admin" 
          element={
            isAuthenticated && isAdmin ? 
              <AdminDashboard onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
