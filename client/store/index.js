import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user' 
import products from './productsReducer'
import orders from './ordersReducer' 
import categories from './categoriesReducer'

const reducer = combineReducers({user, products, categories, orders})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './productsReducer'
export * from './categoriesReducer'
export * from './ordersReducer'
