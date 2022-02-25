import { createAction, createReducer } from '@reduxjs/toolkit'

// Action
export const yesClick = createAction(true)

export default createReducer(false, (builder) => {
  return builder.addCase(yesClick, (state) => {
    return state === false ? true : false
  })
})
