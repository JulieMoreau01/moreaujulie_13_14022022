import React from 'react'
import { useSelector } from 'react-redux'

export function DisplayError() {
  const errorLoginConst = useSelector((state) => state.errorLogin)
  return <p>{errorLoginConst ? 'Mot de passe ou Email Incorrect' : "c'est good !!!!!"}</p>
}

export const isLogSelector = (state) => state.isLog

export const errorLoginSelector = (state) => state.errorLogin

export const dataProfilSelector = (state) => state.dataProfil
