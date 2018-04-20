import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Sidebar } from "./Sidebar";

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
              <h1 className="product-title"> {product.name} </h1>
              <img className="media-object" src={product.picture} />
              <h2 className="product-price"> Price: {product.price} </h2>
              <Link to={`/products/${product.id}`}>
                {" "}
                <button> {product.name} </button>
              </Link>
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

