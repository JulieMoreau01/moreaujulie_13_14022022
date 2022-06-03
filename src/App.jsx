import { Routes, Route, HashRouter } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Index from './pages/Index'
import Profil from './pages/Profil'
import Error from './pages/Error'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
