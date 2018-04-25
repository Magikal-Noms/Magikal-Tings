import React, { Component } from "react";
import { Link } from 'react-router-dom';
import  {connect} from 'react-redux';
import  Navbar  from "./Navbar";


export default class ConfirmationPage extends Component {

  render() {
    
    return (
      <div>
      <Navbar/>
        <p> Your order is now complete. Magikal tings are soaring to your door. Dream well tonight know what is coming your way.....</p>
      
       
      </div>
    );
  }
}
