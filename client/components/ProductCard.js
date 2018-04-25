import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import AddToCartButton from './AddToCartButton'

class ProductCard extends Component {
  render() {
    const product = this.props.product
    return (
      <div key={product.id} className='singleCard'>
        <h3 className="product-title"> {product.name} </h3>
        <Link to={`/products/${product.id}`}><img className="media-object" src={product.picture} /></Link>
        <h3 className="product-price"> Price: {product.price} </h3>
        <AddToCartButton product={this.props.product} />
      </div>
    );
  }
}

export default ProductCard;
