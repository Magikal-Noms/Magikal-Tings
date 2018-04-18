import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchProducts} from '../store/fetchProducts'
import _ from 'lodash';

export class SideBar extends Component {
  // componentDidMount(){
  //   this.props.fetchProducts();
  // }
  render() {
    console.log("PROPS", this.props)
    console.log("lodash", _)
    const categories =  _.uniq(this.props.products.map(product => product.category))

    return (
      <div>
      <ul>
        {
         categories.map(item => {
            return (
              <li key={item}>{item}</li>
              )
          })
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: ownProps.products
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProducts: () => { dispatch(fetchProducts())}
//   }
// }


export default connect(mapStateToProps)(SideBar);
