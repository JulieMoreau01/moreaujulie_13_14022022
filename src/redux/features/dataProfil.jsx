import { createAction, createReducer } from '@reduxjs/toolkit'

// Le state initial
const initialState = {
  data: null
}

export const dataProfilResolved = createAction('dataProfilResolved')

export default createReducer(initialState, (builder) =>
  builder.addCase(dataProfilResolved, (draft, action) => {
    draft.data = action.payload
    return
  })
)
