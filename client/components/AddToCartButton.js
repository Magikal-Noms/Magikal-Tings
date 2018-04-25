import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { addProductToCart } from "../store/cartReducer";
import { connect } from 'react-redux';

class AddToCartButton extends Component {
  render() {
    return (
      <div>
          <button onClick={this.props.addProductToCart}>
            Add To Cart
          </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addProductToCart () {
      dispatch(addProductToCart(ownProps.product.id, ownProps.history));
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(AddToCartButton));
