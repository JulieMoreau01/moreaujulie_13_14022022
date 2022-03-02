import { dataProfilResolved } from '../features/dataProfil'
import { isLogAction } from '../features/isLog'

export async function getProfil(store) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }
  }
  return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
    .then((res) => res.json())
    .then((response) => {
      const { id, firstName, lastName } = response.body
      console.log(id)
      console.log(firstName)
      console.log(lastName)
      store.dispatch(dataProfilResolved({ firstName: response.body.firstName, lastName: response.body.lastName }))
      store.dispatch(isLogAction())
      console.log(response)
    })
    .catch((error) => {
      console.log('erreur dans ApiProfil')
    })
}
