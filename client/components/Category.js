import React, { Component } from "react";
import { connect } from "react-redux";
import  Sidebar  from "./Sidebar";
import  ProductCard  from "./ProductCard";

class Category extends Component {
  render() {
    let categories = this.props.categories;
    let cat = categories.find(cat => cat.name === this.props.match.params.category)
    console.log('cat', cat)
    let products = this.props.products.filter(product => product.categoryId === cat.id);

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
  console.log("ownprops", state)
  return {
    products: state.products,
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Category);
