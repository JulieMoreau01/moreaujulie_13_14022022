import React from 'react'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import { isLogSelector } from '../utils/selector'
import Form from '../components/Form'
import styles from '../styles/signIn.module.css'
import '../styles/index.css'

function Login() {
  const isLog = useSelector(isLogSelector)
  if (isLog) {
    return <Navigate to="/Profil" />
  } else {
    return (
      <main className="main bg-dark">
        <section className={styles.sign_in_content}>
          <i className="fa fa-user-circle sign-in-icon" />
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
    )
  }
}

export default Login
