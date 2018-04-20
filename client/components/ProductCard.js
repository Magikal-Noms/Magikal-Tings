import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

class ProductCard extends Component {
  render() {
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
  }
}

export default ProductCard;
