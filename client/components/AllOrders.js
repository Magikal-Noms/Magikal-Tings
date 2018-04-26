import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import  Sidebar  from "./Sidebar";
import Navbar from "./Navbar"

class AllOrders extends Component {
  render() {
    let orders = this.props.orders;
    return (
      <div>
      <Navbar/>
        <Sidebar categories={this.props.categories} />
        {orders ? orders.map(order => {
            return (
              <div key={order.id}>
                   <Link to={`/orders/${order.id}`}><h1>Order #{order.id} created {order.createdAt.match(/^[\d, -]+/)}</h1></Link>
              </div>
            );
          })
          :
          <h1> You have no prior orders </h1>
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

