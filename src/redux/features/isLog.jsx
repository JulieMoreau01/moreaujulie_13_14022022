import { createAction, createReducer } from '@reduxjs/toolkit'

// Action
export const isLogAction = createAction('isLogAction')

// Reducer
export default createReducer(false, (builder) => {
  return builder.addCase(isLogAction, (state) => {
    return state === false ? true : false
  })
})
