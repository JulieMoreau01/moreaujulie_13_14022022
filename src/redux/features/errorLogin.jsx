import { createAction, createReducer } from '@reduxjs/toolkit'

// Action
export const errorLoginAction = createAction('errorLoginAction')

// Reducer
export default createReducer(false, (builder) => {
  return builder.addCase(errorLoginAction, (state) => {
    return state === false ? true : false
  })
})
