import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import store from "../store";
import AllProducts from "./AllProducts";
import Product from "./Product"; //Single Product
import AddProduct from "./NewProductForm";
import { fetchProducts } from "../store/fetchProducts";

class MainPage extends Component {

  componentDidMount() {
    //ask what this is doing-- specifically why aren't we connecting to the store/why do we do store.dispatch?
    const productsThunk = fetchProducts();
    store.dispatch(productsThunk);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/products/addProduct" component={AddProduct} />
            <Route exact path="/products/:productId" component={Product} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainPage;
