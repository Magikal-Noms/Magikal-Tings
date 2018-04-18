import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../store/createProduct'; //or wherever the thunk is going to be coming from 

class NewProductForm extends Component { 
   constructor() {
      super(); 
      this.state = {
          productName: '', 
          price: '', 
          properties: '', 
          category: '', 
          picture: ''
      }; 

      this.handleSubmit = this.handleSubmit.bind(this); 
   }

   handleSubmit (evt) {
       evt.preventDefault();
       const newProduct = this.state; 
       console.log('current state~', newProduct); 
       this.props.addProduct(newProduct); 

       //reset values 
       this.setState({ 
           productName: '', 
           price: '', 
           properties: '', 
           category: '', 
           picture: ''
       })
   }

   render() {
       console.log('OWNPROPS', this); 
    return (
        <div> 
            <form onSubmit={this.handleSubmit} > 

                <h1>Add a Product</h1> 

                <div> 
                <input
                    name="productName"
                    type="text"
                    value={this.state.productName}
                    placeholder="Enter a product name"
                    onChange={evt => this.setState( { productName : evt.target.value })} 
                /> 
                </div> 

                <div> 
                <input
                    name="price" 
                    type="number"
                    value={this.state.price}
                    placeholder="Enter a price as an integer"
                    onChange={evt => this.setState( { price : evt.target.value })} 
                /> 
                </div> 

                <div> 
                <input
                    name="properties" 
                    type="text"
                    value={this.state.properties}
                    placeholder="Enter properties"
                    onChange={evt => this.setState( { properties : evt.target.value })} 
                /> 
                </div> 

                <div> 
                <input 
                    name= "category"
                    type="text"
                    value={this.state.category}
                    placeholder="Enter a category name"
                    onChange={evt => this.setState( { category : evt.target.value })} 
                /> 
                </div> 

                <div> 
                <input 
                    name="picture"
                    type="text"
                    value={this.state.picture}
                    placeholder="Enter an image URL"
                    onChange={ evt => this.setState( { picture : evt.target.value })}
                /> 
                </div> 
                <button type="submit">Submit</button> 
                </form> 

                <Link to="/products">Return to All Products</Link>  
            </div> 
    )
   }
}

const mapStateToProps = state => {
    return { 
        products: state.products 
    }
}

const mapDispatchToProps = { addProduct }

const newProductContainer = connect(mapStateToProps, mapDispatchToProps)(NewProductForm); 
export default newProductContainer; 