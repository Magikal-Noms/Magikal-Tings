import React, { Component } from "react";
import { connect } from "react-redux";

export class Sidebar extends Component {
  //onCLick of that component will take teh handleClick

  render() {
    const categories = this.props.categories
    return (
      <div>
        <ul>
                {categories.map(cat => {
          return (
            <div key={cat.id}>
              <li className="product-title"> {cat.name} </li>
            </div>
          );
        })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: ownProps.products,
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Sidebar);
