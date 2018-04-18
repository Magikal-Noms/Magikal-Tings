import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addProduct } from '../store/createProduct';
class AddProduct extends Component {
    constructor() {
        super();
        this.state ={
            name: '',
            price: 0,
            properties: '',
            category: '',
            picture: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        console.log('these', name)
    
        this.setState({
          [name]: value
        });
        console.log('this', this.state)
      }

    
    
    handleSubmit() {
        this.props.addProduct(this.state)

    }
    render() {
        console.log('here', this.props)
        return (
            <div>
            <div className="form-group">
            <h1> Add a New Magikal Ting </h1>
            <label className="col-xs-2 control-label"> Magikal Name </label>
            <div className="col-xs-10">
                <input
                className="form-control"
                type="text"
                name="name"
                onChange = {this.handleInputChange}
                
                />
                </div>
                </div>
            <div className="form-group">
            <label className="col-xs-2 control-label"> Magikal Price </label>
            <div className="col-xs-10">
                <input
                className="form-control"
                type="text"
                name="price"
                onChange = {this.handleInputChange}
                
                />
                </div>
                </div>
            <div className="form-group">
            <label className="col-xs-2 control-label"> Magikal Properties </label>
            <div className="col-xs-10">
                <input
                className="form-control"
                type="text"
                name="properties"
                onChange = {this.handleInputChange}
                
                />
                </div>
                </div>
            <div className="form-group">
            <label className="col-xs-2 control-label"> Category </label>
            <div className="col-xs-10">
                <input
                className="form-control"
                type="text"
                name="category"
                onChange = {this.handleInputChange}
                
                />
                </div>
                </div>
            <div className="form-group">
            <label className="col-xs-2 control-label"> Picture It! </label>
            <div className="col-xs-10">
                <input
                className="form-control"
                type="text"
                name="picture"
                onChange = {this.handleInputChange}
                
                />
                </div>
                </div>
                <button 
                     onClick={this.handleSubmit} > 
                       It's Magik
                        </button> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: this.state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('return', ownProps)
    return {
        addProduct: () => { dispatch(addProduct(ownProps))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
