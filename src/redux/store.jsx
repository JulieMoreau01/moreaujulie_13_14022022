import { configureStore } from '@reduxjs/toolkit'
import isLogReducer from './features/isLog'
import errorLoginReducer from './features/errorLogin'
import dataProfilReducer from './features/dataProfil'

const store = configureStore({
  reducer: {
    isLog: isLogReducer,
    errorLogin: errorLoginReducer,
    dataProfil: dataProfilReducer
  }
})

export default store
