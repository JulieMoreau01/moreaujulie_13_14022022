import { createStore } from 'redux'

// Initialisation des states
const initialState = {
  clickOrNot: null
}

// Action
export const yesClick = () => ({ type: 'yesClick' })

// le reducer est une fonction
function reducer(state, action) {
  // si l'action est de type playPause...
  if (action.type === 'yesClick') {
    // ... il faut inverser la propriété playing du state
    return {
      ...state,
      clickOrNot: !state.clickOrNot
    }
  }
  // sinon on retourne le state sans le changer
  return state
}

export const store = createStore(reducer, initialState)
