import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: store.getState().product
        }
    }
    render() {
        const product = this.state.product
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
    }b
}

export default Product;
