import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import  Sidebar  from "./Sidebar";
import ProductCard from './ProductCard';

class AllOrders extends Component {
  render() {
    let orders = this.props.orders;
    return (
      <div>
        <Sidebar categories={this.props.categories} />
        {orders.map(order => {
          return (
            <div key={order.id}>
                 <Link to={`/orders/${order.id}`}><h1>{order.createdAt}</h1></Link> 
            </div>
          );
        })}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders, 
    products: state.products, 
    categories: state.categories 
  };
};

export default connect(mapStateToProps)(AllOrders);
