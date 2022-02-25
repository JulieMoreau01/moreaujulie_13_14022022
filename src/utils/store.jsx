import { configureStore } from '@reduxjs/toolkit'
import yesClickReducer from '../features/yesClickReducer'
import formReducer from '../features/formReducer'

const store = configureStore({
  reducer: {
    yesClick: yesClickReducer,
    form: formReducer
  }
})

export default store
