import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Sidebar} from './Sidebar'

class AllProducts extends Component {

    render() {
        return (

            <div>
              <Sidebar products={this.props.products}/>
               {this.props.products.map(product => {
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
    console.log('state', state)
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(AllProducts)
