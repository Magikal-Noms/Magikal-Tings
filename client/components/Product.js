import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchProduct} from '../store/singleProduct'

class Product extends Component {
    render() {
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


const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      // keys are now on connected components props
      // addProductFromStore needs to be imported
        fetchProduct: (id) => { dispatch(fetchProduct(id)) }
    }
}

export default connect(mapStateToProps)(Product)

