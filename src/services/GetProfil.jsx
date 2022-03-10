import { dataProfilAction } from '../redux/features/dataProfil'
import { isLogAction } from '../redux/features/isLog'
import { store } from '../redux/store'

/**
 * Get Profil Information
 * @returns {firstName, lastName}
 */
export async function getProfil() {
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${localStorage.getItem('token')}` 
    }
  }
  return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
    .then((res) => res.json())
    .then((response) => {
      console.log(response)
      const { firstName, lastName } = response.body
      store.dispatch(dataProfilAction({ firstName: firstName, lastName: lastName }))
      store.dispatch(isLogAction())
    })
    .catch((error) => {
      console.log('Erreur dans getProfil')
    })
}

