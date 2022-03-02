import React from 'react'
import { useSelector } from 'react-redux'

import '../styles/index.css'

import { isLogSelector } from '../utils/selector'
import User from '../components/User'
import Form from '../components/Form'

function Login() {
  const isLog = useSelector(isLogSelector)

  if (isLog) {
    return <User />
  } else {
    return <Form />
  }
}

export default Login
