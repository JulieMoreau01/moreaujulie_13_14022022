// import { dataProfilResolved } from '../features/dataProfil'
// import { isLogAction } from '../features/isLog'

export default async function getProfil(firstName, lastName) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify({ firstName, lastName })
  }
  return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
    .then((res) => res.json())
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('erreur dans ApiProfil')
    })
}
