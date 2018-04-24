import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

class ProductCard extends Component {
  render() {
    const product = this.props.product
    return (
      <div key={product.id} className='singleCard'>
        <h3 className="product-title"> {product.name} </h3>
        <img className="media-object" src={product.picture} />
        <h3 className="product-price"> Price: {product.price} </h3>
        <Link to={`/products/${product.id}`}>
          {" "}
          <button> See Details </button>
        </Link>
      </div>
    );
  }
}

export default ProductCard;
