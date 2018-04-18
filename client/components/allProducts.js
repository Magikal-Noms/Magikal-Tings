import store from '../store'
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllProducts extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }

    handleChange (event) {
    }

    render() {

        console.log('props', this.props.products)
        return (

            <div>
               {
                    this.props.products.map(product => {
                        return (
                            <div key = {product.id}>
                            <h1 className='product-title'> {product.name} </h1>
                            <img className='media-object' src={product.picture}/>
                            <h2 className='product-price'> Price: {product.price} </h2>
                            <Link to={`/products/${product.id}`}> <button> {product.name} </button>
                            </Link>
                            </div>
                        )
                    })
               }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchProduct
//     }
// }
export default connect(mapStateToProps)(AllProducts)
// export default AllProducts;
