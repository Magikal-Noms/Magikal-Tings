import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import  Sidebar  from "./Sidebar";

class Order extends Component {
  render() {
    const order = this.props.order;
    console.log("Order is", order)
    return (
      <div>
        <Sidebar categories={this.props.categories} />
        {order && (
          <div key={order.id}>
            <h1> Order: {order.id} </h1>
            <h2> Shipping Address: {order.shippingAddress} </h2>
            <h2> Billing Address: {order.billingAddress} </h2>
            {order["line-items"].map(item => {
              return (
                <div key={item.id}>
                  <Link to={`/products/${item.productId}`}><h3>Product #{item.productId}</h3></Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.orders.find(ele => {
      return ele.id === +ownProps.match.params.orderId;
    }),
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Order);
