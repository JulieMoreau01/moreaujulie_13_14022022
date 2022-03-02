import React, { useState } from 'react'
import styles from '../styles/signIn.module.css'
import '../styles/index.css'
import getToken from '../services/ApiToken'
import { DisplayError } from '../utils/selector'

function Form() {
  const [signInData, setSignInData] = useState({ email: '', password: '' })

  const inputForm = (e) => {
    e.persist()
    const { name, value } = e.target
    setSignInData((state) => ({
      ...state,
      [name]: value
    }))
  }

  const submitForm = (e) => {
    e.preventDefault()
    getToken(signInData.email, signInData.password)
  }
  return (
    <form onSubmit={submitForm}>
      <div className={styles.input_wrapper}>
        <label htmlFor="username">Username</label>
        <input type="email" name="email" id="username" autoComplete="username" required placeholder="Username" value={signInData.email} onChange={inputForm} />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" autoComplete="current-password" required placeholder="Password" value={signInData.password} onChange={inputForm} />
      </div>
      <div className={styles.input_remember}>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button type="submit" className={styles.sign_in_button}>
        Sign In
      </button>
      <DisplayError />
    </form>
  )
}

export default Form
