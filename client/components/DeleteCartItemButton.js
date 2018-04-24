import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProductFromCart } from "../store/cartReducer";
import {connect} from 'react-redux';

class DeleteCartItemButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.deleteProductFromCart}>
            DELETE
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps)=> {
  return {
    deleteProductFromCart () {
      dispatch(deleteProductFromCart(ownProps.item.id));
    }
  };
};

export default connect(null, mapDispatchToProps)(DeleteCartItemButton);
