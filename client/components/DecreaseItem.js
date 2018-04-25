import React, { Component } from 'react';

class DecreaseItem extends Component {
    render() {
        return (
            <div>
            <button onClick={this.props.deleteProductFromCart}>
            Decrease Quantity
            </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps )=> {
    return {
      deleteProductFromCart () {
        console.log('will')
        dispatch(deleteProductFromCart(ownProps.item.id));
      }
    };
  };

export default DecreaseItem;