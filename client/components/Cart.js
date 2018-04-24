import React, { Component } from "react";

// import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import CartItem from './CartItem';
import {fetchCart} from '../store'
import Checkout from './Checkout';

class Cart extends Component {
  componentDidMount(){
    this.props.fetchCart();
  }

  render() {

    const items = this.props.cart.length ? this.props.cart[0]["line-items"] : null
    const amount = items.reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});
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
        <Checkout cart={this.props.cart} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {cart: state.cart,
    isLoggedIn: state.isLoggedIn}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => {
      dispatch(fetchCart());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

//connect(mapStateToProps)(Cart);
