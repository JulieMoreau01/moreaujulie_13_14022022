import { createAction, createReducer } from '@reduxjs/toolkit'

// Le state initial
const initialState = {
  data: null
}

// Action
export const dataProfilAction = createAction('dataProfilResolved')

// Reducer
export default createReducer(initialState, (builder) =>
  builder.addCase(dataProfilAction, (draft, action) => {
    draft.data = action.payload
    return
  })
)

