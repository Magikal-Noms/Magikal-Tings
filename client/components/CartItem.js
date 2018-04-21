import React, { Component } from "react";


class CartItem extends Component {

  render() {
    const item = this.props.item
    return (
      <div>
        <p>Product: {item.product.name}</p>
        <p>Price: {item.product.price}</p>

        <p>Quantity: {item.quantity}</p>
      </div>
    );
  }
}

export default CartItem;
