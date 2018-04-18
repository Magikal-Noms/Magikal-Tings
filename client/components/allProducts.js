import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {SideBar} from './SideBar'

class AllProducts extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: this.props.products
    //     };
    //     console.log("string", this.props.products)
    // }

    handleChange (event) {
    }

    render() {
      console.log('PROPS IN ALLPRODUCTS', this.props.products)
        return (

            <div>
              <SideBar products={this.props.products}/>
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
