import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Accueil from './pages/Accueil'
import Profil from './pages/Profil'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
