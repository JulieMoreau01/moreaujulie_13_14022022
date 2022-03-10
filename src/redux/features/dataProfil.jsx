import { createAction, createReducer } from '@reduxjs/toolkit'

// Le state initial
const initialState = {
  data: null
}

// Action
export const dataProfilAction = createAction('dataProfilAction')

export default createReducer(initialState, (builder) => {
  builder.addCase(dataProfilAction, (state, action) => {
    state.data = action.payload
  })
})
