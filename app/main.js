import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import MainPage from './components/Root'
import store from './store'


// require('./style.scss');

render (
  <Provider store={store}>
  <MainPage />
      
  </Provider>,
  document.getElementById('main')
)