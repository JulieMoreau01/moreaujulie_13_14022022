import React from 'react'
import ProfilContent from '../components/Profil/ProfilContent'
import '../styles/index.css'
import { isLogSelector } from '../redux/selector'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

/**
 * PROFIL PAGE
 * @returns {JSX}
 */
function Profil() {
  // GET LOG OR NOT from redux
  const isLog = useSelector(isLogSelector)
  if (isLog === false) {
    return <Navigate to="/" />
  } else {
    return (
      <main className="main bg-dark">
        <ProfilContent />
      </main>
    )
  }
}

export default Profil
