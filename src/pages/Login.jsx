import React from 'react'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import { isLogSelector } from '../redux/selector'
import Form from '../components/Login/Form'
import styles from '../styles/login.module.css'
import '../styles/index.css'

/**
 * LOGIN PAGE
 * @returns {JSX}
 */
function Login() {
  // GET LOG OR NOT from redux
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
