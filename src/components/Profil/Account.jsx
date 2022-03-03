import React from 'react'
import styles from '../../styles/profil.module.css'

function Account(props) {
  const title = props.title
  const amount = props.amount
  const description = props.description
  return (
    <section className={styles.account}>
      <div className={styles.account_content_wrapper}>
        <h3 className={styles.account_title}>Argent Bank Checking {title}</h3>
        <p className={styles.account_amount}>{amount}</p>
        <p className={styles.account_amount_description}>{description}</p>
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