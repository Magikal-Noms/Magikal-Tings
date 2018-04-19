import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProduct } from "../store/fetchSingleProduct";

class Product extends Component {
  componentDidMount() {
    this.props.fetchProduct();
  }

  render() {
    // console.log('prop', this.props)
    const product = this.props.product;
    return (
      <div>
        {product && (
          <div>
            <h1> {product.name} </h1>
            <img class="media-object" src={product.picture} />
            <h2> Metaphysical Properties </h2>
            <p> {product.properties} </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: () => {
      dispatch(fetchProduct(+ownProps.match.params.productId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
