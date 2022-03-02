import React, { useState } from 'react'
import styles from '../styles/profil.module.css'
import '../styles/index.css'
import { useSelector } from 'react-redux'
import { dataProfilSelector } from '../utils/selector'
import Account from './Account'

function ProfilContent() {
  const user = useSelector(dataProfilSelector)
  console.log(user)
  const [displayFormNames, setDisplayFormNames] = useState(false)

  function OpenFormNames() {
    setDisplayFormNames(true)
  }
  function CloseFormNames() {
    setDisplayFormNames(false)
  }
  return (
    <main className="main bg-dark">
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {user.data.firstName} {user.data.lastName} !
        </h1>
        <button className={styles.edit_button} type="button" onClick={OpenFormNames}>
          Edit Name
        </button>
        {displayFormNames === true ? (
          <form className={styles.updateForm}>
            <p>
              <label htmlFor="firstName">FirstName</label>
              <input type="text" id="firstName" name="firstName" defaultValue={user.data.firstName} />

              <label htmlFor="lastName">LastName</label>
              <input type="text" id="lastName" name="lastName" defaultValue={user.data.lastName} />
            </p>
            <button>Save</button>
            <button onClick={CloseFormNames}>Cancel</button>
          </form>
        ) : (
          ''
        )}
      </div>
      <h2 className={styles.srOnly}>Accounts</h2>
      <Account />
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

export default ProfilContent
