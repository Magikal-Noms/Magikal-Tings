import {
    BrowserRouter, Route, Link, Redirect, Switch
  } from 'react-router-dom';
import React, { Component } from 'react';
import store from '../store'
import AllProducts from './allProducts';
import Product from './Product';
import AddProduct from './productForm';
import { fetchProducts } from '../store/fetchProducts';
import { fetchProduct } from '../store/fetchSingleProduct';

  class MainPage extends Component {
      componentDidMount () {

          const productsThunk = fetchProducts();

          store.dispatch(productsThunk) // you use react-redux in other files, so ??? -- KHSG

      }
      render() {
          return (
              <BrowserRouter>
              <div>
                  <Switch>
                    <Route exact path='/products' component={AllProducts} />
                    <Route exact path='/products/addProduct' component={AddProduct} />
                    <Route exact path='/products/:productId' component={Product} />
                  </Switch>
              </div>
              </BrowserRouter>
          );
      }
  }

  export default MainPage;
