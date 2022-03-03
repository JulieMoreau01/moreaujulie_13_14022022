import React from 'react'
import styles from '../styles/footer.module.css'

/**
 * FOOTER COMPONENT
 * @returns {JSX}
 */
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_text}>Copyright 2020 Argent Bank</p>
    </footer>
  )
}

export default Footer
