import { getProfil } from './GetProfil'
import { store } from '../utils/store'
import { errorLoginAction } from '../features/errorLogin'

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
    })
    .catch((error) => {
      console.log('erreur ApiToken')
      store.dispatch(errorLoginAction())
    })
}
