// README
// https://redux-starter-kit.js.org/

import { createAction, createReducer } from 'redux-starter-kit'

// ---------------------------------------------------
// Constants
// ---------------------------------------------------

const INCREASE = 'widgets-starter-kit/INCREASE'
const DECREASE = 'widgets-starter-kit/DECREASE'

// ---------------------------------------------------
// ACTIONS
// ---------------------------------------------------

export const incrementWidget = createAction(INCREASE)
export const decrementWidget = createAction(DECREASE)

// ---------------------------------------------------
// Reducer
// ---------------------------------------------------

// default state is exported so it can be used in tests
export const initialState = {
  count: 0,
}

const widgetsStarterKitReducer = createReducer(initialState, {
  [incrementWidget]: (state, action) => {
    return {
      ...state,
      count: state.count + 1
    }
  },
  [decrementWidget]: (state, action) => {
    return {
      ...state,
      count: state.count - 1
    }
  }
})

export default widgetsStarterKitReducer
