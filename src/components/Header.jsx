import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../styles/header.module.css'
import logo from '../assets/argentBankLogo.png'
import '../styles/index.css'
import { dataProfilSelector, isLogSelector } from '../redux/selector'
import store from '../redux/store'
import { isLogAction } from '../redux/features/isLog'

/**
 * HEADER COMPONENT
 * @returns {JSX}
 */
function Header() {
  // Get User FirstName and LastName From redux
  const user = useSelector(dataProfilSelector)
  // GET LOG OR NOT from redux
  const isLog = useSelector(isLogSelector)
  const space = ' '

  return (
    <nav className={styles.main_nav}>
      <Link to="/" className="main_nav_logo">
        <img className={styles.main_nav_logo_image} src={logo} alt="Argent Bank Logo" />
        <h1 className="srOnly">Argent Bank</h1>
      </Link>
      {user.data != null && isLog === true ? (
        <div>
          <Link to="/Profil" className={styles.main_nav_item}>
            <i className="fa fa-user-circle" />
            {user.data.firstName}
            {space}
            {user.data.lastName}
          </Link>
          <Link to="/" className={styles.main_nav_item} onClick={() => store.dispatch(isLogAction())}>
            <i className="fa fa-sign-out" />
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login" className={styles.main_nav_item}>
            <i className="fa fa-user-circle" />
            Sign In
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Header
