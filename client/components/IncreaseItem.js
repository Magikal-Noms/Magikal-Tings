import React, { Component } from 'react';
import {updatedProduct} from '../store/cartReducer';
import {connect} from 'react-redux';

class IncreaseItem extends Component {
    render() {
        return (
            <div>
            <button onClick={this.props.updatedProduct}>
            Increase Quantity
            </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps )=> {
    return {
      updatedProduct () {
        console.log('working update')
        dispatch(updatedProduct(ownProps.item.id, ownProps.item.quantity+1));
      }
    };
  };

export default connect(null, mapDispatchToProps)(IncreaseItem);
