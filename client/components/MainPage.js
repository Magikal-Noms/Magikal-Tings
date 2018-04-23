import React, { Component } from 'react';
import Navbar from './Navbar';


class MainPage extends Component {
    render() {
        return (
            <div>
            <div>
      <Navbar/>
      </div>
      <fieldset>
      <div>
         <p> Welcome to the place where all the magical things live. Each ting is full of magical possibility, so, be careful of what you wish for.... they're listening</p>
      </div>
      </fieldset>
      </div>
        );
    }
}

export default MainPage;
