import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedVideos from './components/FeaturedVideos'
import LatestArticles from './components/LatestArticles'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import { UserProvider } from './contexts/UserContext'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Router>
      <UserProvider>
        <div className="min-h-screen bg-background text-text">
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <FeaturedVideos searchTerm={searchTerm} />
                <LatestArticles searchTerm={searchTerm} />
              </main>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </UserProvider>
    </Router>
  )
}

export default App