import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addProductToCart } from "../store/cartReducer";
import {connect} from 'react-redux';

class AddToCartButton extends Component {
  render() {
    return (
      <div>
        <Link to='/cart'>
          <button onClick={addProductToCart(this.props.product.id)}>
            Add To Cart
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: product => {
      dispatch(addProductToCart(product));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddToCartButton);
