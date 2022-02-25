import React, { useEffect, useState } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { Link } from 'react-router-dom'
import { yesClick } from '../features/yesClickReducer'
import styles from '../styles/signIn.module.css'
import DisplayTestButton from '../utils/selector'
import '../styles/index.css'
import login from '../services/CallApi'
import fetchOrUpdateData from '../features/formReducer'

function SignIn() {
  console.log('bidulle1')
  const dispatch = useDispatch()
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
    login(signInData.email, signInData.password)
  }

  const store = useStore()
  useEffect(() => {}, [store])

  return (
    <main className="main bg-dark">
      <section className={styles.sign_in_content}>
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
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

          <button
            type="submit"
            className={styles.sign_in_button}
            onClick={() => {
              dispatch(yesClick())
            }}
          >
            Sign In
          </button>
          <DisplayTestButton />
        </form>
        <Link to="/user">Sign In</Link>
      </section>
    </main>
  )
}

export default SignIn
