import React, { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import styles from '../styles/user.module.css'
// import Profil from '../services/ApiLogin'
import '../styles/index.css'

function User() {
  // const store = useStore()
  // useEffect(() => {
  //   Profil()
  // }, [store])
  return (
    <main className="main bg-dark">
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className={styles.edit_button} type="button">
          Edit Name
        </button>
      </div>
      <h2 className={styles.srOnly}>Accounts</h2>
      <section className={styles.account}>
        <div className={styles.account_content_wrapper}>
          <h3 className={styles.account_title}>Argent Bank Checking (x8349)</h3>
          <p className={styles.account_amount}>$2,082.79</p>
          <p className={styles.account_amount_description}>Available Balance</p>
        </div>
        <div className={`${styles.account_content_wrapper} ${styles.cta}`}>
          <button className={styles.transaction_button} type="button">
            View transactions
          </button>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.account_content_wrapper}>
          <h3 className={styles.account_title}>Argent Bank Savings (x6712)</h3>
          <p className={styles.account_amount}>$10,928.42</p>
          <p className={styles.account_amount_description}>Available Balance</p>
        </div>
        <div className={`${styles.account_content_wrapper} ${styles.cta}`}>
          <button className={styles.transaction_button} type="button">
            View transactions
          </button>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.account_content_wrapper}>
          <h3 className={styles.account_title}>Argent Bank Credit Card (x8349)</h3>
          <p className={styles.account_amount}>$184.30</p>
          <p className={styles.account_amount_description}>Current Balance</p>
        </div>
        <div className={`${styles.account_content_wrapper} ${styles.cta}`}>
          <button className={styles.transaction_button} type="button">
            View transactions
          </button>
        </div>
      </section>
    </main>
  )
}

export default User
