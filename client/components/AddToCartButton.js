import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addProductToCart } from "../store/cartReducer";
import {connect} from 'react-redux';

class AddToCartButton extends Component {
  render() {
    return (
      <div>
        <Link to='/cart'>
          <button onClick={this.props.addProductToCart}>
            Add To Cart
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addProductToCart () {
      dispatch(addProductToCart(ownProps.product.id));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddToCartButton);
