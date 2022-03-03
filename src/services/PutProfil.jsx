import { dataProfilResolved } from '../redux/features/dataProfil'
import { store } from '../redux/store'

/**
 * Get Token
 * @param {string} firstName
 * @param {string} lastName
 * @returns {firstName, lastName} // New One
 */
export default async function putProfil(firstName, lastName) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify({ firstName, lastName })
  }
  return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
    .then((res) => res.json())
    .then((response) => {
      console.log(response)
      const { firstName, lastName } = response.body
      store.dispatch(dataProfilResolved({ firstName: firstName, lastName: lastName }))
    })
    .catch(() => {
      console.log('Erreur dans PutProfil')
    })
}
