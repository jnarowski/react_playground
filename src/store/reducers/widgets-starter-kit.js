// README
// https://redux-starter-kit.js.org/
// https://medium.com/@jeromefranco/reducing-boilerplate-in-redux-with-redux-starter-kit-c5bd9115e75b
// ASYNC
// https://github.com/reduxjs/redux-starter-kit/issues/76
import { createAction, createReducer } from 'redux-starter-kit'

// ---------------------------------------------------
// ACTIONS
// ---------------------------------------------------

export const incrementWidget = createAction('widgets-starter-kit/INCREASE')
export const decrementWidget = createAction('widgets-starter-kit/DECREASE')

// ---------------------------------------------------
// Reducer
// ---------------------------------------------------

// default state is exported so it can be used in tests
export const initialState = {
  count: 0,
}

const widgetsStarterKitReducer = createReducer(initialState, {
  [incrementWidget.type]: (state, action) => {
    return {
      ...state,
      count: state.count + 1
    }
  },
  [decrementWidget.type]: (state, action) => {
    return {
      ...state,
      count: state.count - 1
    }
  }
})

export default widgetsStarterKitReducer
