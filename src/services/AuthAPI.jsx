// export default async function getUser() {
//   try {
//     const response = await fetch('http://localhost:3001/api/v1/user/login')
//     const { userdata } = await response.json()
//     console.log(userdata)
//     return userdata
//   } catch (err) {
//     console.log(err)
//     return err
//   } finally {
//     console.log('finally')
//   }
// }

// export default async function connect(username, password) {
//   const headers = new Headers()
//   headers.append('Content-Type', 'application/json')

//   const options = {
//     method: 'POST',
//     mode: 'cors',
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//     headers,
//   }

//   const response = await fetch('http://localhost:3001/api/v1/user/login', options)
//   return response.json()
// }

// const tokens = await connect(username, password)
// localStorage.setItem('tokens', JSON.stringify(tokens))
