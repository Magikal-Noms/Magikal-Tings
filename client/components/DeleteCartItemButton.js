import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProductFromCart } from "../store/cartReducer";
import {connect} from 'react-redux';

class DeleteCartItemButton extends Component {
  render() {
    return (
      <div>
        <button onClick={deleteProductFromCart(this.props.item.id)}>
          <Link to={'/cart'}>
            DELETE
          </Link>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProductFromCart: item => {
      dispatch(deleteProductFromCart(item));
    }
  };
};

export default connect(null, mapDispatchToProps)(DeleteCartItemButton);
