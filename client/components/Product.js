import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { fetchProduct } from '../store/products';


class Product extends Component {
  
    render() {
        console.log('prop', this.props)
      const product = this.props.product
        return (
            <div>
                {product &&
                  <div>
                    <h1> {product.name} </h1>
                    <img class='media-object' src={product.picture}/>
                    <h2> Metaphysical Properties </h2>
                    <p> {product.properties} </p>
                  </div>}
            </div>
        );
    }
 }


const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        fetchSingleProduct: function() {
            const productId = ownProps.match.params.id;
            dispatch()
        }
    }
}

export default connect(null)(Product)

