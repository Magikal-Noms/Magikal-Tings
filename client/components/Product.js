import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import AddToCartButton from './AddToCartButton';


class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div>
        {product && (
          <div key={product.id}>
            <h1> {product.name} </h1>
            <img className="media-object" src={product.picture} />
            <h2> Metaphysical Properties </h2>
            <p> {product.properties} </p>
            <AddToCartButton product={this.props.product} />
          </div>
        )}
      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.find(ele => {
      return ele.id === +ownProps.match.params.productId;
    })
  };
};


export default connect(mapStateToProps)(Product);
