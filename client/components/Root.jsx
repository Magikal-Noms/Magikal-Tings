import {
    BrowserRouter, Route, Link, Redirect, Switch

  } from 'react-router-dom';

  import AllProducts from './allProducts';
  import { Product } from './Product';
  import store from '../store'
  import { fetchProducts } from '../store/product'

  import React, { Component } from 'react';

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
                    <Route path='/products' component={AllProducts} />
                  </Switch>
              </div>
              </BrowserRouter>
          );
      }
  }

  export default MainPage;
