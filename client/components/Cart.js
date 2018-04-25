import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from './CartItem';
import {fetchCart} from '../store'
import Navbar from './Navbar';
class Cart extends Component {
  componentDidMount(){
    this.props.fetchCart();
  }

  render() {

    const items = this.props.cart ? this.props.cart["line-items"] : null
    return (
      <div>
        <Navbar />
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

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => {
      dispatch(fetchCart());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
