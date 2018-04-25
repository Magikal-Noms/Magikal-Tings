import React, { Component } from "react";
import { Link } from 'react-router-dom';
import  {connect} from 'react-redux';
import  { deleteProductFromCart } from '../store/cartReducer';
import DeleteCartItemButton from './DeleteCartItemButton';
import IncreaseItem from './IncreaseItem';
import DecreaseItem from './DecreaseItem';

export default class CartItem extends Component {

  render() {
    const item = this.props.item
    return (
      <div>
        <p>Product: {item.product.name}</p>
        <p>Price: {item.product.price}</p>
        <p>Quantity: {item.quantity}</p>
        <div className ='cart-item'>
        <IncreaseItem item={item} />
        <DecreaseItem item={item} /> 
        <DeleteCartItemButton item={item}/>
        </div>
      </div>
    );
  }
}

