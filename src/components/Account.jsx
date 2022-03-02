import React from 'react'
import styles from '../styles/profil.module.css'

function Account() {
  return (
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
  )
}

export default Account
