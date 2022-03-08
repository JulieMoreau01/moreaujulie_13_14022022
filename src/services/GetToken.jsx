import { getProfil } from './GetProfil'
import { store } from '../redux/store'
import { errorLoginAction } from '../redux/features/errorLogin'

/**
 * Get Token
 * @param {string} email
 * @param {string} password
 * @returns {token} // in localStorage
 */
export default async function getToken(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }

  return fetch('http://localhost:3001/api/v1/user/login', requestOptions)
    .then((res) => res.json())
    .then((response) => {
      const { token } = response.body
      localStorage.setItem('token', token)
      getProfil(store)
      store.dispatch(errorLoginAction())
    })
    .catch(() => {
      console.log('Erreur ApiToken')
      store.dispatch(errorLoginAction())
    })
}
