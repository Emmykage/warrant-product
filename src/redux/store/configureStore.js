import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import { AuthReducer, ProductReducer } from '..'

const rootReducer = combineReducers({
  auth: AuthReducer,
  products: ProductReducer,
})

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk, logger))
export default store
