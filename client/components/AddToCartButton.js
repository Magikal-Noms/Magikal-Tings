import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addProductToCart } from "../store/cartReducer";
import {connect} from 'react-redux';

class AddToCartButton extends Component {
  render() {
    return (
      <div>
        <button onClick={addProductToCart(this.props.product.id)}>
          <Link to='/cart'>
            Add To Cart
          </Link>
        </button>
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
