import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
      const product = this.props.product
        return (
            <div>
                {
                    product &&
                        <div key={product.id}>
                        <h1> {product.name} </h1>
                        <img class='media-object' src={product.picture}/>
                        <h2> Metaphysical Properties </h2>
                        <p> {product.properties} </p>

                        </div>
                }
            </div>
        );
    }
 }


const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}

export default Product;
