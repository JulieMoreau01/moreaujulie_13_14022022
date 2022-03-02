import React from 'react'
import ProfilContent from '../components/Profil'
import '../styles/index.css'
import { isLogSelector } from '../utils/selector'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

function Profil() {
  const isLogStatus = useSelector(isLogSelector)
  if (isLogStatus === false) {
    return <Navigate to="/" />
  } else {
    return <ProfilContent />
  }
}

export default Profil
