import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../styles/header.module.css'
import logo from './../assets/argentBankLogo.png'

function Header() {
  return (
    <nav className={styles.main_nav}>
      <Link to="/" className="main_nav_logo">
        <img className={styles.main_nav_logo_image} src={logo} alt="Argent Bank Logo" />
        <h1 className={styles.sr_only}>Argent Bank</h1>
      </Link>
      <div>
        <Link to="/sign-in" class={styles.main_nav_item}>
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Header
