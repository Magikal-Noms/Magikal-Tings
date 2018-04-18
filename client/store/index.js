import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'

import products from './fetchProducts'
import product from './fetchSingleProduct'
import createProduct from './createProduct'
import updateProduct from './updateProduct'

const reducer = combineReducers({user, products, product, createProduct, updateProduct})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './fetchProducts'
export * from './fetchSingleProduct'
export * from './createProduct'
export * from './updateProduct'
