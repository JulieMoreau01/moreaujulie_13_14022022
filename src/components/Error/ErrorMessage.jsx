import React from 'react'
import styles from '../../styles/error.module.css'

/**
 * ERROR MESSAGE COMPONENT
 * @returns {JSX}
 */
function ErrorMessage() {
  return <p className={styles.errorMessage}> 404 Page d'erreur</p>
}

export default ErrorMessage
