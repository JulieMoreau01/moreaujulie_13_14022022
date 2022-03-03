import React from 'react'
import ErrorMessage from '../components/Error/ErrorMessage'
/**
 * ERROR PAGE
 * @returns {JSX}
 */
function Error() {
  return (
    <main className="main bg-dark">
      <section>
        <ErrorMessage />
      </section>
    </main>
  )
}

export default Error
