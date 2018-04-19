import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchProduct } from '../store/fetchSingleProduct';

class Product extends Component {
   
    render() {
      const product = this.props.product
        return (
            <div>
                {product &&
                  <div>
                    <h1> {product.name} </h1>
                    <img className='media-object' src={product.picture}/>
                    <h2> Metaphysical Properties </h2>
                    <p> {product.properties} </p>
                  </div>}
            </div>
        );
    }
 }


const mapStateToProps = (state, ownProps) => {
    return {
        product: state.products.find((ele) => {
            return ele.id === +ownProps.match.params.productId
        })
    }
}


export default connect(mapStateToProps)(Product)

