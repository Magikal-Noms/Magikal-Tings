import React, { Component } from "react";
import { connect } from "react-redux";
import  Sidebar  from "./Sidebar";
import  ProductCard  from "./ProductCard";

class Category extends Component {
  render() {
    let categories = this.props.categories;
    let cat = categories.find(cat => cat.name === this.props.match.params.category)
    let products = this.props.products.filter(product => product.categoryId === cat.id);

    return (
      <div>
        <Sidebar categories={this.props.categories} />
        {products.map(product => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Category);
