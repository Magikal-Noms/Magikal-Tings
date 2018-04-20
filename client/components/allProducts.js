import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Sidebar } from "./Sidebar";
import {ProductCard} from './ProductCard'

class AllProducts extends Component {
  render() {
    let products = this.props.products;
    let categories = this.props.categories;
    return (
      <div>
        <Sidebar product={this.props.product} />
        {products.map(product => {
          return (<ProductCard product={product}/>);
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    product: state.products.find(ele => {
      return ele.id === +ownProps.match.params.productId;
    }),
    categories: state.categories
  };
};

export default connect(mapStateToProps)(AllProducts);
