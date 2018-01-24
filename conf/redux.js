import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import { keaReducer } from 'kea'

const rootReducer = combineReducers({
  kea: keaReducer('kea')
})

export const initStore = (initialState = {}) => {
  return createStore(rootReducer, initialState,
    composeWithDevTools(applyMiddleware()))
}

export const reduxPage = (comp) => withRedux(initStore)(comp)
