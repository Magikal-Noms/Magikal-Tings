import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import  Sidebar  from "./Sidebar";

class AllOrders extends Component {
  render() {
    let orders = this.props.orders;
    return (
      <div>
        <Sidebar categories={this.props.categories} />
        {orders ? orders.map(order => {
            return (
              <div key={order.id}>
                   <Link to={`/orders/${order.id}`}><h1>Order #{order.id} created {order.createdAt.match(/^[\d, -]+/)}</h1></Link>
              </div>
            );
          })
          : 
          <h1> You are not logged in </h1>
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
    categories: state.categories
  };
};

export default connect(mapStateToProps)(AllOrders);

