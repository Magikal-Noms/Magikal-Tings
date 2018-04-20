import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import  Sidebar  from "./Sidebar";
import ProductCard from './ProductCard';

class AllProducts extends Component {
  render() {
    let products = this.props.products;
    let categories = this.props.categories
    return (
      <div>
        <Sidebar categories={this.props.categories} />
        {products.map(product => {
          return (
            <div key={product.id}>
              <ProductCard product={product}/>
            </div>
          );
        })}




      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories
  };
};

export default connect(mapStateToProps)(AllProducts);

