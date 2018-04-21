import React, { Component } from "react";

// import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import CartItem from './CartItem';

class Cart extends Component {
  render() {
    console.log("cart", this.props.cart)
    console.log("isLoggedIn", this.props.isLoggedIn)
    // console.log("line items", this.props.cart[0]["line-items"][0].product)
    const items = this.props.cart.length ? this.props.cart[0]["line-items"] : null
    console.log(" items!!!", items)
    return (
      <div>
        {items ? items.map(item => {
          return (
            <div key={item.id}>
              <CartItem item={item}/>
            </div>
            )
        }) : <p>Your cart is empty. </p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {cart: state.cart,
    isLoggedIn: state.isLoggedIn}
}

export default connect(mapStateToProps)(Cart)

//connect(mapStateToProps)(Cart);
