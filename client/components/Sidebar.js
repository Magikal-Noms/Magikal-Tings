import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

export class Sidebar extends Component {
  //onCLick of that component will take teh handleClick

  render() {
    const categories = this.props.categories
    return (
      <div>
        <ul>
                {categories.map(cat => {
          return (
            <div className='category' key={cat.id}>
              <Link to={`/categories/${cat.name}`}>
              <li className="product-title"> {cat.name} </li>
              </Link>
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
