export async function profil() {
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
      return id
    })
}

export default async function login(email, password) {
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
      profil()
      return token
    })
}
