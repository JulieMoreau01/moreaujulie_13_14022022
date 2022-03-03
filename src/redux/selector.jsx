import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/error.module.css'

export function DisplayError() {
  const errorLoginConst = useSelector((state) => state.errorLogin)
  return <p className={styles.loginError}>{errorLoginConst ? ' !! Mot de passe ou Email Incorrect' : ''}</p>
}

export const isLogSelector = (state) => state.isLog

export const errorLoginSelector = (state) => state.errorLogin

export const dataProfilSelector = (state) => state.dataProfil
