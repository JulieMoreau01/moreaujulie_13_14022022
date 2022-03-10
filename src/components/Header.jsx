import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'
import logo from '../assets/argentBankLogo.png'
import '../styles/index.css'
import { useSelector } from 'react-redux'
import { dataProfilSelector, isLogSelector } from '../redux/selector'
import { store } from '../redux/store'
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

  function logOut() {
    store.dispatch(isLogAction())
  }

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
            {user.data.firstName} {user.data.lastName}
          </Link>
          <Link to="/" className={styles.main_nav_item} onClick={logOut}>
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
