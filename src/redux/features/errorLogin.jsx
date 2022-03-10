import { createAction, createReducer } from '@reduxjs/toolkit'

// Le state initial
const initialState = {
  data: false
}

// Action
export const errorLoginAction = createAction('errorLoginAction')

// Reducer
export default createReducer(initialState, (builder) => {
  builder.addCase(errorLoginAction, (draft, action) => {
    draft.data = action.payload
  })
})
