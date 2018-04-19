import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

//we need to change from iterating over the products table to iterating over the
//categories table (which now exists)
//this may require a think to get all the categories
export class Sidebar extends Component {
  //onCLick of that component will take teh handleClick

  render() {
    console.log("PROPS", this.props);
    console.log("lodash", _);
    const categories = _.uniq(
      this.props.products.map(product => product.category)
    );
    return (
      <div>
        <ul>
          {categories.map(item => {
            return (
              <li key={item} onClick={this.props.handleClick}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: ownProps.products
  };
};

export default connect(mapStateToProps)(Sidebar);
