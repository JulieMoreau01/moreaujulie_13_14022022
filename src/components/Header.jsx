import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/header.module.css'
import logo from '../assets/argentBankLogo.png'
import '../styles/index.css'
import { useSelector } from 'react-redux'
import { dataProfilSelector } from '../utils/selector'

function Header() {
  const lePrenom = 'lapin'
  const leNom = 'chou'
  //const lePrenom = useSelector(firstNameSelector)
  // const leNom = useSelector(lastNameSelector)
  // console.log(lePrenom)
  // console.log(leNom)
  // const location = useLocation()
  // const pageName = location.pathname
  const user = useSelector(dataProfilSelector)
  console.log(user)
  // if (user.data != null) {
  //   const firstName = user.data.firstName
  //   const lastName = user.data.lastName
  // }

  // const LogOut = (event) => {
  //   event.preventDefault()
  //   dispatch(logOut())
  // }

  return (
    <nav className={styles.main_nav}>
      <Link to="/" className="main_nav_logo">
        <img className={styles.main_nav_logo_image} src={logo} alt="Argent Bank Logo" />
        <h1 className="srOnly">Argent Bank</h1>
      </Link>
      {user.data != null ? (
        <div>
          <Link to="/Login" className={styles.main_nav_item}>
            <i className="fa fa-user-circle" />
            {user.data.firstName} {user.data.lastName}
          </Link>
          <Link to="/" className={styles.main_nav_item}>
            <i className="fa fa-sign-out" />
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          {/* onClick={LogOut} */}
          <Link to="/Login" className={styles.main_nav_item}>
            <i className="fa fa-user-circle" />
            Sign In
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Header
