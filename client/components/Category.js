import React, { Component } from "react";
import { connect } from "react-redux";
import  Sidebar  from "./Sidebar";
import  ProductCard  from "./ProductCard";

class Category extends Component {
  render() {
    const categories = this.props.categories;
    const cat = categories.find(cat => cat.name === this.props.match.params.category)
    const products = this.props.products.filter(product => product.categoryId === cat.id);

    console.log("PRODUCTS", products)

    return (
      <div>
        <Sidebar categories={this.props.categories} />
        {products.map(product => {
          return (
            <div>
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
