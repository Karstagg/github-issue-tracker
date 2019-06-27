import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware, logger]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)
  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  return store
}
