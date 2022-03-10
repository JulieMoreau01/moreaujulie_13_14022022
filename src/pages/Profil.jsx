import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfilContent from '../components/Profil/ProfilContent'
import '../styles/index.css'
import { isLogSelector } from '../redux/selector'

/**
 * PROFIL PAGE
 * @returns {JSX}
 */
function Profil() {
  // GET LOG OR NOT from redux
  const isLog = useSelector(isLogSelector)
  if (isLog === false) {
    return <Navigate to="/" />
  }
  return (
    <main className="main bg-dark">
      <ProfilContent />
    </main>
  )
}

export default Profil
