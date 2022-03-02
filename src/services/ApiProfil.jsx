import { dataProfilResolved } from '../features/dataProfil'

// export default async function profil() {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }
//   }
//   return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
//     .then((res) => res.json())
//     .then((response) => {
//       const { id, firstName, lastName } = response.body
//       console.log(id)
//       console.log(firstName)
//       console.log(lastName)
//       return firstName
//     })
// }

// export default async function profil(store) {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }
//   }
//   console.log(store)
//   const status = selectDataForm(store.getState()).status
//   console.log(status)
//   // si la requête est déjà en cours
//   if (status === 'pending' || status === 'updating') {
//     // on stop la fonction pour éviter de récupérer plusieurs fois la même donnée
//     return
//   }
//   // On peut modifier le state en envoyant des actions avec store.dispatch()
//   // ici on indique que la requête est en cours
//   console.log(status)
//   store.dispatch(userFetching())
//   console.log(status)
//   try {
//     console.log(status)
//     // on utilise fetch pour faire la requête
//     const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
//     const data = await response.json()
//     console.log(data)
//     // si la requête fonctionne, on envoie les données à redux avec l'action resolved
//     store.dispatch(userResolved(data))
//   } catch (error) {
//     // en cas d'erreur on infirme le store avec l'action rejected
//     store.dispatch(userRejected(error))
//   }
// }

// export async function profil(store) {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }
//   }
//   try {
//     const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
//     const data = await response.json()
//     console.log(data.body.firstName)
//     console.log(data.body.lastName)
//     store.dispatch(firstNameAction(data.body.firstName, data.body.lastName))
//     // , lastNameData: data.body.lastName
//     //store.dispatch(firstNameAction(data.body.firstName, data.body.lastName))
//     //dispatch(lastNameAction(data.body.lastName))
//   } catch (error) {
//     console.log('error ici')
//   }
// }

export async function profil(store) {
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
      console.log(response)
    })
    .catch((error) => {
      console.log('erreur dans ApiProfil')
    })
}
