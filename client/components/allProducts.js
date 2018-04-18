import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {SideBar} from './SideBar'

class AllProducts extends Component {
    // constructor(props) { // remove -- KHSG
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
                            <Link to={`/products/${product.id}`}>
                                <div key = {product.id}>
                                    <h1 className='product-title'> {product.name} </h1>
                                    <img className='media-object' src={product.picture}/>
                                    <h2 className='product-price'> Price: {product.price} </h2>
                                    <button> {product.name} </button>
                                </div>
                            </Link>
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

// const mapStateToProps = ({products}) => ({products}) // alternate to the above -- KHSG
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchProduct
//     }
// }
export default connect(mapStateToProps)(AllProducts)
// export default AllProducts;
