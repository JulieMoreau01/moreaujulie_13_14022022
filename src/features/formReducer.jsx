import { createAction, createReducer } from '@reduxjs/toolkit'
import selectData from '../utils/selector'

const initialState = {
  status: 'void',
  data: null,
  error: null
}

export const freelancesFetching = createAction('form/fetching')

export const freelanceResolved = createAction('freelance/resolved', (freelanceId, data) => ({
  payload: { freelanceId, data }
}))

export const freelancesRejected = createAction('freelance/rejected', (freelanceId, error) => ({
  payload: { freelanceId, error }
}))

export async function fetchOrUpdateFreelances(store) {
  console.log('machin')
  const status = selectData(store.getState()).status
  if (status === 'pending' || status === 'updating') {
    return
  }
  store.dispatch(freelancesFetching())
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile')
    const data = await response.json()
    store.dispatch(freelancesResolved(data))
  } catch (error) {
    store.dispatch(freelancesRejected(error))
  }
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(freelancesFetching, (state) => {
      if (draft.status === 'void') {
        draft.status = 'pending'
        return
      }
      if (draft.status === 'rejected') {
        draft.error = null
        draft.status = 'pending'
        return
      }
      if (draft.status === 'resolved') {
        draft.status = 'updating'
        return
      }
      return
    })
    .addCase(freelanceResolved, (state) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.data = action.payload
        draft.status = 'resolved'
        return
      }
      return
    })
    .addCase(freelancesRejected, (state) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.error = action.payload
        draft.data = null
        draft.status = 'rejected'
        return
      }
      return
    })
)
