import React from 'react'
import styles from '../styles/signIn.module.css'
import '../styles/index.css'

function SignIn() {
  return (
    <section className={styles.sign_in_content}>
      <i className="fa fa-user-circle sign-in-icon" />
      <h1>Sign In</h1>
      <form>
        <div className={styles.input_wrapper}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.input_remember}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
      </form>
    </section>
  )
}

export default SignIn
