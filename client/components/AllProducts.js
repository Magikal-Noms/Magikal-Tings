import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import  Sidebar  from "./Sidebar";
import  Navbar  from "./Navbar";
import ProductCard from './ProductCard';

class AllProducts extends Component {
  render() {
    let products = this.props.products;
    let categories = this.props.categories
    return (
      <div className='allProducts'>
        <Navbar/>
        <div className='sidebar'><Sidebar categories={this.props.categories} /></div>
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

