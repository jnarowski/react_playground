// README
//
// WHY DUCKS?
// https://medium.com/swlh/the-good-the-bad-of-react-redux-and-why-ducks-might-be-the-solution-1567d5bdc698
//
// WHY CREATE REDUCER?
// https://medium.com/@jeremy_7548/making-the-case-for-redux-without-switch-statements-92635f1813b9
//
// WHY ELIMINATE SWITCH
// https://github.com/reduxjs/redux/issues/1167

// ---------------------------------------------------
// Constants
// ---------------------------------------------------

const INCREASE = 'my-app/widgets/INCREASE';
const DECREASE = 'my-app/widgets/DECREASE';

// ---------------------------------------------------
// Reducer
// ---------------------------------------------------

// default state is exported so it can be used in tests
export const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

const actionHandlers = {
  [INCREASE](state) {
    return {
      ...state,
      count: state.count + 1
    }
  },
  [DECREASE](state) {
    return {
      ...state,
      count: state.count - 1
    }
  }
}

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action
  const actionHandler = actionHandlers[type]
  if (actionHandler) {
    return actionHandler(state, payload)
  }
  return state
}

// ---------------------------------------------------
// Action Creators
// ---------------------------------------------------

export function incrementWidget(widget) {
  return { type: INCREASE, widget }
}

export function decrementWidget(widget) {
  return { type: DECREASE, widget }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
