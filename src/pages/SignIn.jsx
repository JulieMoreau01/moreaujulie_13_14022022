import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../styles/signIn.module.css'
import DisplayTestButton from '../utils/selector'
import '../styles/index.css'

function SignIn() {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   // POST request using fetch inside useEffect React hook
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  //   }
  //   fetch('http://localhost:3001/api/v1/user/login', requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => setPostId(data.id))

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, [])
  return (
    <main className="main bg-dark">
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

          <button
            type="button"
            className={styles.sign_in_button}
            onClick={() => {
              dispatch({ type: 'yesClick' })
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
