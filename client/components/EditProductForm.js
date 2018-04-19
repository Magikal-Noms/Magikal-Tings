import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProduct } from '../store/productsReducer'; 

class EditProductForm extends Component { 
   constructor(props) {
      super(props); 
      this.state = {
          id: '',
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
       const id = +evt.target.id.value; 

       const newProduct = {
            name: evt.target.productName.value, 
            price: evt.target.price.value, 
            properties: evt.target.properties.value, 
            category: evt.target.category.value, 
            picture: evt.target.picture.value 
        };

       this.props.editProduct(id, newProduct); 

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
       
    return (
        <div> 
            <form onSubmit={this.handleSubmit} > 

                <h1>Edit a Product</h1> 

                <div> 
                <input
                    name="productName"
                    type="text"
                    placeholder="Enter a product name"
                /> 
                <input 
                    name="id"
                    type="number"
                    placeholder="Enter an id"
                /> 
                </div> 

                <div> 
                <input
                    name="price" 
                    type="number"
                    placeholder="Enter a price as an integer"
                /> 
                </div> 

                <div> 
                <input
                    name="properties" 
                    type="text"
                    placeholder="Enter properties"
                /> 
                </div> 

                <div> 
                <input 
                    name= "category"
                    type="text"
                    placeholder="Enter a category name"
                /> 
                </div> 

                <div> 
                <input 
                    name="picture"
                    type="text"
                    placeholder="Enter an image URL"
                /> 
                </div> 
                <button type="submit">Submit</button> 
                </form> 
                <Link to="/products">Return to All Products</Link>  
            </div> 
    )
   }
}

const mapDispatchToProps = { updateProduct }

export default connect(null, mapDispatchToProps)(EditProductForm); 