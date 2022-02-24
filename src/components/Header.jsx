import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/header.module.css'
import logo from '../assets/argentBankLogo.png'
import '../styles/index.css'

function Header() {
  const location = useLocation()
  const pageName = location.pathname

  return (
    <nav className={styles.main_nav}>
      <Link to="/" className="main_nav_logo">
        <img className={styles.main_nav_logo_image} src={logo} alt="Argent Bank Logo" />
        <h1 className="srOnly">Argent Bank</h1>
      </Link>
      {pageName === '/user' ? (
        <div>
          <Link to="/sign-in" className={styles.main_nav_item}>
            <i className="fa fa-user-circle" />
            Name
          </Link>
          <Link to="/" className={styles.main_nav_item}>
            <i className="fa fa-sign-out" />
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/sign-in" className={styles.main_nav_item}>
            <i className="fa fa-user-circle" />
            Sign In
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Header
