import React, { Component } from "react";
import { Link } from 'react-router-dom';
import  {connect} from 'react-redux';
import  { deleteProductFromCart } from '../store/cartReducer';

class CartItem extends Component {

  render() {
    const item = this.props.item
    return (
      <div>
        <p>Product: {item.product.name}</p>
        <p>Price: {item.product.price}</p>

        <p>Quantity: {item.quantity}</p>
        <Link to={'/cart'} > <button onClick={this.props.deleteProductFromCart(item.id)}> DELETE </button> </Link>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteProductFromCart: lineItemId => {
      dispatch(deleteProductFromCart(lineItemId));
    }
  };
};
export default connect(null, mapDispatchToProps)(CartItem);