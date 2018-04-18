import {
    BrowserRouter, Route, Link, Redirect, Switch
  } from 'react-router-dom';
  import React, { Component } from 'react';
import store from '../store'

import AllProducts from './allProducts';
import Product from './Product';

import { fetchProducts } from '../store/productReducer';
import { fetchProduct } from '../store/singleProduct';
  
  class MainPage extends Component {
      componentDidMount () {

          const productsThunk = fetchProducts();


          store.dispatch(productsThunk)
          
      }
      render() {
          return (
              <BrowserRouter>
              <div>
                  <Switch>
                    <Route exact path='/products' component={AllProducts} />
                    <Route exact path='/products/:productId' component={Product} />
                  </Switch>
              </div>
              </BrowserRouter>
          );
      }
  }
  
  export default MainPage;