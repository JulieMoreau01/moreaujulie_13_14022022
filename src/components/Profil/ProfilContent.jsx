import React, { useState } from 'react'
import styles from '../../styles/profil.module.css'
import '../../styles/index.css'
import { useSelector } from 'react-redux'
import { dataProfilSelector } from '../../redux/selector'
import Account from './Account'
import putProfil from '../../services/PutProfil'

/**
 * PROFIL CONTENT COMPONENT
 * @returns {JSX}
 */
function ProfilContent() {
  // Get User FirstName and LastName
  const user = useSelector(dataProfilSelector)
  // State for Display FORM for change Name
  const [displayFormNames, setDisplayFormNames] = useState(false)
  // State for New FirstName and LastName
  const [changeName, setChangeName] = useState({ firstName: '', lastName: '' })

  function OpenFormNames() {
    setDisplayFormNames(true)
  }
  function CloseFormNames() {
    setDisplayFormNames(false)
  }

  // Get new FirstName and LastName from Input
  const inputForm = (e) => {
    e.persist()
    const { name, value } = e.target
    setChangeName((state) => ({
      ...state,
      [name]: value
    }))
  }

  // Send the new FirstName and Last to the API
  const submitForm = (e) => {
    e.preventDefault()
    putProfil(changeName.firstName, changeName.lastName)
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
          <form className={styles.updateForm} onSubmit={submitForm}>
            <p>
              <label htmlFor="firstName">FirstName</label>
              <input type="text" id="firstName" name="firstName" required placeholder={user.data.firstName} value={changeName.firstName} onChange={inputForm} />

              <label htmlFor="lastName">LastName</label>
              <input type="text" id="lastName" name="lastName" required placeholder={user.data.lastName} value={changeName.lastName} onChange={inputForm} />
            </p>
            <button type="submit">Save</button>
            <button onClick={CloseFormNames}>Cancel</button>
          </form>
        ) : (
          ''
        )}
      </div>
      <h2 className={styles.srOnly}>Accounts</h2>
      <Account title="(x8349)" amount="$2,082.79" description="Available Balance" />
      <Account title="(x6712)" amount="$10,928.42" description="Available Balance" />
      <Account title="(x8349)" amount="$184.30" description="Current Balanc" />
    </main>
  )
}

export default ProfilContent
