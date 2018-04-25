import React, { Component } from "react";

// import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import CartItem from './CartItem';
import {fetchCart} from '../store'
import {Link} from 'react-router-dom'
import Checkout from './Checkout';


import Navbar from './Navbar';

class Cart extends Component {
  componentDidMount(){
    this.props.fetchCart();
  }

  render() {
    // let amount;
    const items = this.props.cart && this.props.cart["line-items"].length ? this.props.cart["line-items"] : null
    const amount = items ? items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity * Math.floor(+currentValue.product.price.slice(1));

}, 0) : 0

    return (
      <div>
        <Navbar />
        {this.props.cart && items ? items.map(item => {
          return (
            <div key={item.id}>
              <CartItem item={item}/>
            </div>
            )
        }) : <p>Your cart is empty. </p>}

        { this.props.cart && items ? (<div><div><h3>Total Amount: {amount}</h3></div>
        <Link to='/cart'><Checkout amount={amount} OrderId={this.props.cart.id}/></Link></div>) : null}



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
