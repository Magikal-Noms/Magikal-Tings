import React, { Component } from "react";
import { Link } from 'react-router-dom';
import  {connect} from 'react-redux';
import  { deleteProductFromCart } from '../store/cartReducer';
import DeleteCartItemButton from './DeleteCartItemButton';

export default class CartItem extends Component {

  render() {
    const item = this.props.item
    return (
      <div className='checkout'>
        <Link to={`/products/${item.product.id}`}><img className='checkout-pic' src={item.product.picture} alt=""/></Link>
        <p>Product: {item.product.name}</p>
        <p>Price: {item.product.price}</p>
        <p>Quantity: {item.quantity}</p>
        <DeleteCartItemButton item={item}/>
      </div>
    );
  }
}

