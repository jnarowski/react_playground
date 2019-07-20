import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'

// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger'

import reducer from "./reducers/index"

const middleware = [...getDefaultMiddleware(), logger]

const initialState = {
}

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were automatically composed together
const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  initialState
})

const dispatch = store.dispatch

export { dispatch }

export default store
