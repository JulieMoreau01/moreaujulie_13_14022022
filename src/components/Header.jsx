import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'
import logo from '../assets/argentBankLogo.png'
import '../styles/index.css'

function Header() {
  return (
    <nav className={styles.main_nav}>
      <Link to="/" className="main_nav_logo">
        <img className={styles.main_nav_logo_image} src={logo} alt="Argent Bank Logo" />
        <h1 className="srOnly">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/sign-in" class={styles.main_nav_item}>
          <i className="fa fa-user-circle" />
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Header
